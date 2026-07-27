/* =========================================================================
   API & LOCAL STORAGE STORAGE LAYER
   Supports live backend REST API with seamless fallback to localStorage
========================================================================= */

const LOCAL_STORE = {
  flowsKey: "yff_flows",
  historyKey: "yff_history",
  imagesKey: "yff_images",
  notesKey: "yff_notes",
  stylesKey: "yff_styles",
  posesOverrideKey: "yff_poses_override",
  lastSyncKey: "yff_last_sync",
  load(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch (e) {
      console.warn("localStorage save failed", e);
      return false;
    }
  }
};

const API = {
  baseUrl: "/api",
  useBackend: true,

  async request(endpoint, options = {}) {
    if (!this.useBackend) return null;
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: { "Content-Type": "application/json", ...(options.headers || {}) },
        ...options
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`Backend request to ${endpoint} failed, using local storage fallback:`, err.message);
      return null;
    }
  },

  // State initialization
  async fetchState() {
    const data = await this.request("/state");
    if (data) {
      // Sync local storage with backend state
      LOCAL_STORE.save(LOCAL_STORE.flowsKey, data.flows || []);
      LOCAL_STORE.save(LOCAL_STORE.historyKey, data.history || []);
      LOCAL_STORE.save(LOCAL_STORE.imagesKey, data.images || {});
      LOCAL_STORE.save(LOCAL_STORE.notesKey, data.notes || {});
      if (data.styles) LOCAL_STORE.save(LOCAL_STORE.stylesKey, data.styles);
      if (data.poseOverride) LOCAL_STORE.save(LOCAL_STORE.posesOverrideKey, data.poseOverride);
      if (data.lastSync) LOCAL_STORE.save(LOCAL_STORE.lastSyncKey, data.lastSync);
      return data;
    }
    // Fallback to localStorage
    return {
      flows: LOCAL_STORE.load(LOCAL_STORE.flowsKey, []),
      history: LOCAL_STORE.load(LOCAL_STORE.historyKey, []),
      images: LOCAL_STORE.load(LOCAL_STORE.imagesKey, {}),
      notes: LOCAL_STORE.load(LOCAL_STORE.notesKey, {}),
      styles: LOCAL_STORE.load(LOCAL_STORE.stylesKey, null),
      poseOverride: LOCAL_STORE.load(LOCAL_STORE.posesOverrideKey, null),
      lastSync: LOCAL_STORE.load(LOCAL_STORE.lastSyncKey, null)
    };
  },

  // Save Flow
  async saveFlow(flow) {
    LOCAL_STORE.save(LOCAL_STORE.flowsKey, flows);
    await this.request("/flows", {
      method: "POST",
      body: JSON.stringify(flow)
    });
  },

  // Delete Flow
  async deleteFlow(flowId) {
    LOCAL_STORE.save(LOCAL_STORE.flowsKey, flows);
    await this.request(`/flows/${flowId}`, {
      method: "DELETE"
    });
  },

  // History
  async addHistoryEntry(entry) {
    LOCAL_STORE.save(LOCAL_STORE.historyKey, history);
    await this.request("/history", {
      method: "POST",
      body: JSON.stringify(entry)
    });
  },

  // Notes
  async saveNote(poseNum, noteData) {
    LOCAL_STORE.save(LOCAL_STORE.notesKey, notes);
    await this.request(`/notes/${poseNum}`, {
      method: "PUT",
      body: JSON.stringify(noteData)
    });
  },

  // Images
  async saveImage(poseNum, imageData) {
    LOCAL_STORE.save(LOCAL_STORE.imagesKey, images);
    await this.request(`/images/${poseNum}`, {
      method: "PUT",
      body: JSON.stringify({ image: imageData })
    });
  },

  // Style Templates
  async saveStyleTemplate(styleObj) {
    LOCAL_STORE.save(LOCAL_STORE.stylesKey, STYLE_META);
    await this.request("/styles", {
      method: "POST",
      body: JSON.stringify(styleObj)
    });
  },

  async deleteStyleTemplate(styleId) {
    LOCAL_STORE.save(LOCAL_STORE.stylesKey, STYLE_META);
    await this.request(`/styles/${styleId}`, {
      method: "DELETE"
    });
  },

  // Pose Overrides
  async savePoseOverride(poseOverrideData) {
    LOCAL_STORE.save(LOCAL_STORE.posesOverrideKey, poseOverrideData);
    await this.request("/poses/override", {
      method: "PUT",
      body: JSON.stringify({ poses: poseOverrideData })
    });
  },

  // Last Sync
  async saveLastSync(syncData) {
    LOCAL_STORE.save(LOCAL_STORE.lastSyncKey, syncData);
    await this.request("/last-sync", {
      method: "PUT",
      body: JSON.stringify(syncData)
    });
  },

  // Backup Import
  async importBackup(backupPayload) {
    LOCAL_STORE.save(LOCAL_STORE.flowsKey, backupPayload.flows || []);
    LOCAL_STORE.save(LOCAL_STORE.historyKey, backupPayload.history || []);
    LOCAL_STORE.save(LOCAL_STORE.imagesKey, backupPayload.images || {});
    LOCAL_STORE.save(LOCAL_STORE.notesKey, backupPayload.notes || {});
    LOCAL_STORE.save(LOCAL_STORE.posesOverrideKey, backupPayload.poseOverride || null);
    
    await this.request("/backup/import", {
      method: "POST",
      body: JSON.stringify(backupPayload)
    });
  }
};
