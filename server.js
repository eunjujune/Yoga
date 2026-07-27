const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Database helper functions
function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const defaultDB = { flows: [], history: [], images: {}, notes: {}, poseOverride: null, lastSync: null };
      fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultDB, null, 2), 'utf8');
      return defaultDB;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB_FILE:', err);
    return { flows: [], history: [], images: {}, notes: {}, poseOverride: null, lastSync: null };
  }
}

function writeDB(data) {
  try {
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    const tempFile = DB_FILE + '.tmp';
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, DB_FILE);
    return true;
  } catch (err) {
    console.error('Error writing DB_FILE:', err);
    return false;
  }
}

// REST API Endpoints

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Full state endpoint
app.get('/api/state', (req, res) => {
  const db = readDB();
  res.json(db);
});

// Flows
app.get('/api/flows', (req, res) => {
  const db = readDB();
  res.json(db.flows || []);
});

app.post('/api/flows', (req, res) => {
  const flow = req.body;
  if (!flow || !flow.id || !flow.name) {
    return res.status(400).json({ error: 'Flow must have an id and a name.' });
  }
  const db = readDB();
  db.flows = db.flows || [];
  const idx = db.flows.findIndex(f => f.id === flow.id);
  if (idx >= 0) {
    db.flows[idx] = flow;
  } else {
    db.flows.push(flow);
  }
  writeDB(db);
  res.json({ success: true, flow });
});

app.delete('/api/flows/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.flows = (db.flows || []).filter(f => f.id !== id);
  writeDB(db);
  res.json({ success: true, deletedId: id });
});

// Teaching History
app.get('/api/history', (req, res) => {
  const db = readDB();
  res.json(db.history || []);
});

app.post('/api/history', (req, res) => {
  const entry = req.body;
  if (!entry || !entry.id || !entry.flowId) {
    return res.status(400).json({ error: 'History entry must have an id and flowId.' });
  }
  const db = readDB();
  db.history = db.history || [];
  db.history.push(entry);
  writeDB(db);
  res.json({ success: true, entry });
});

// Notes (Key instructions & feelings)
app.get('/api/notes', (req, res) => {
  const db = readDB();
  res.json(db.notes || {});
});

app.put('/api/notes/:poseNum', (req, res) => {
  const { poseNum } = req.params;
  const noteData = req.body; // { instr, feel }
  const db = readDB();
  db.notes = db.notes || {};
  db.notes[poseNum] = { ...(db.notes[poseNum] || {}), ...noteData };
  writeDB(db);
  res.json({ success: true, poseNum, note: db.notes[poseNum] });
});

// Pose Images
app.get('/api/images', (req, res) => {
  const db = readDB();
  res.json(db.images || {});
});

app.put('/api/images/:poseNum', (req, res) => {
  const { poseNum } = req.params;
  const { image } = req.body;
  const db = readDB();
  db.images = db.images || {};
  if (image) {
    db.images[poseNum] = image;
  } else {
    delete db.images[poseNum];
  }
  writeDB(db);
  res.json({ success: true, poseNum, image: db.images[poseNum] });
});

// Pose Library Overrides (CSV sync data)
app.get('/api/poses/override', (req, res) => {
  const db = readDB();
  res.json(db.poseOverride || null);
});

app.put('/api/poses/override', (req, res) => {
  const { poses } = req.body;
  const db = readDB();
  db.poseOverride = Array.isArray(poses) ? poses : null;
  writeDB(db);
  res.json({ success: true, poseOverride: db.poseOverride });
});

// Last sync status tracking
app.get('/api/last-sync', (req, res) => {
  const db = readDB();
  res.json(db.lastSync || null);
});

app.put('/api/last-sync', (req, res) => {
  const lastSync = req.body;
  const db = readDB();
  db.lastSync = lastSync;
  writeDB(db);
  res.json({ success: true, lastSync });
});

// Backup Export & Import
app.get('/api/backup/export', (req, res) => {
  const db = readDB();
  const payload = {
    flows: db.flows || [],
    history: db.history || [],
    images: db.images || {},
    notes: db.notes || {},
    poseOverride: db.poseOverride || null,
    exportedAt: new Date().toISOString()
  };
  res.json(payload);
});

app.post('/api/backup/import', (req, res) => {
  const data = req.body;
  if (!data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Invalid backup payload' });
  }
  const db = {
    flows: Array.isArray(data.flows) ? data.flows : [],
    history: Array.isArray(data.history) ? data.history : [],
    images: typeof data.images === 'object' && data.images ? data.images : {},
    notes: typeof data.notes === 'object' && data.notes ? data.notes : {},
    poseOverride: Array.isArray(data.poseOverride) ? data.poseOverride : null,
    lastSync: data.lastSync || null
  };
  writeDB(db);
  res.json({ success: true, message: 'Database state imported successfully.', db });
});

// Style Templates
app.get('/api/styles', (req, res) => {
  const db = readDB();
  res.json(db.styles || {});
});

app.post('/api/styles', (req, res) => {
  const style = req.body;
  if (!style || !style.id || !style.label) {
    return res.status(400).json({ error: 'Style template must have an id and label.' });
  }
  const db = readDB();
  db.styles = db.styles || {};
  db.styles[style.id] = {
    id: style.id,
    label: style.label,
    blurb: style.blurb || '',
    sections: Array.isArray(style.sections) ? style.sections : ['Warm-Up', 'Main Sequence', 'Savasana']
  };
  writeDB(db);
  res.json({ success: true, style: db.styles[style.id] });
});

app.delete('/api/styles/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.styles = db.styles || {};
  delete db.styles[id];
  writeDB(db);
  res.json({ success: true, deletedId: id });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server with automatic port fallback
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`🌿 Yoga Flow Builder server running at http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${port} is in use. Retrying on http://localhost:${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
