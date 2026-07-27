/* =========================================================================
   YOGA FLOW BUILDER — APPLICATION LOGIC
========================================================================= */

const DEFAULT_POSES = [
  {num:1,name:"Setu bandhasan",en:"Bridge",cat:"Supine",instr:"",feel:"",pic:"",vid:"Bridge.MOV"},
  {num:2,name:"Supta badhakonasan",en:"Lying butterfly",cat:"Supine",instr:"",feel:"",pic:"",vid:"Butterfly + Wind Relieving Posture.MOV"},
  {num:3,name:"Pawan Mukta asan (half and full)",en:"Wind relieving posture",cat:"Supine",instr:"",feel:"",pic:"",vid:"Butterfly + Wind Relieving Posture.MOV"},
  {num:4,name:"Anand balasan and krida movement",en:"Happy baby",cat:"Supine",instr:"",feel:"",pic:"",vid:"Happy Baby + Rocking Happy Baby.MOV"},
  {num:5,name:"Suchir randrasan",en:"Eye of the needle 1, 2, 3",cat:"Supine",instr:"",feel:"",pic:"",vid:"Eye of the Needle.MOV"},
  {num:6,name:"Pada angusta asan",en:"Hand to toe pose 1, 2, 3",cat:"Supine",instr:"",feel:"",pic:"",vid:""},
  {num:7,name:"",en:"Knee-hip rotation",cat:"Supine",instr:"",feel:"",pic:"",vid:"Hip Mobility Circles.MOV"},
  {num:8,name:"Supta gomukasan",en:"Lying down cow face legs",cat:"Supine",instr:"",feel:"",pic:"",vid:""},
  {num:9,name:"",en:"Simple lying down twist",cat:"Supine",instr:"",feel:"",pic:"",vid:""},
  {num:10,name:"Garuda asan (legs)",en:"Eagle legs",cat:"Supine",instr:"",feel:"",pic:"",vid:""},
  {num:11,name:"Vrikshasana",en:"Tree",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Tree Posture (opening)"},
  {num:12,name:"Virabhadrasana II",en:"Warrior II",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Warrior 2"},
  {num:13,name:"Pashwakonasan",en:"Side angle pose (half & full)",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Side angle posture"},
  {num:14,name:"Trikonasana",en:"Triangle",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Triangle"},
  {num:15,name:"Ardha Chandrasana",en:"Half moon",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Half moon posture"},
  {num:16,name:"Ardha Chandra Kalasana",en:"Variation of half moon",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Half moon variation"},
  {num:17,name:"Ardha Chandra Chapasan",en:"Bow variation",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:""},
  {num:18,name:"Anjaneyasana",en:"Low lunge",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:""},
  {num:19,name:"Prishthasana",en:"Lizard",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:""},
  {num:20,name:"Malasana",en:"Asian squat",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:"Asian squat"},
  {num:21,name:"Utkata Konasana",en:"Goddess posture",cat:"Standing - Open Hip",instr:"",feel:"",pic:"",vid:""},
  {num:22,name:"Half Hanumanasana",en:"Half split",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:"Half split"},
  {num:23,name:"Virabhadrasana I",en:"Warrior I",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:24,name:"Virabhadrasana III",en:"Warrior III",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:25,name:"Parivritta Ardha Chandrasana",en:"Twisted half moon",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:26,name:"Parivritta Ardha Chandra Chapasana",en:"Bow variation twist",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:27,name:"Parivritta Trikonasana",en:"Twisted triangle",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:28,name:"Virasana (high lunge)",en:"High lunge",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:29,name:"Utkatasana",en:"Chair pose",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:30,name:"Garudasana",en:"Eagle",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:31,name:"Prasaritha padottanasana",en:"Wide legged forward bend",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:32,name:"Parivritta parsvakonasana",en:"Twisted side angle pose",cat:"Standing - Close Hip",instr:"",feel:"",pic:"",vid:""},
  {num:33,name:"Makarasana",en:"Crocodile",cat:"Prone",instr:"",feel:"",pic:"",vid:""},
  {num:34,name:"Matsya kridasana",en:"Mermaid",cat:"Prone",instr:"",feel:"",pic:"",vid:""},
  {num:35,name:"Bhujangasana",en:"Cobra",cat:"Prone",instr:"",feel:"",pic:"",vid:""},
  {num:36,name:"Salabhasana",en:"Locust",cat:"Prone",instr:"",feel:"",pic:"",vid:""},
  {num:37,name:"Dhanurasana",en:"Bow",cat:"Prone",instr:"",feel:"",pic:"",vid:""},
  {num:38,name:"Vajrasan",en:"Kneeling",cat:"Seated",instr:"",feel:"",pic:"",vid:""},
  {num:39,name:"Sukhasana",en:"Easy pose",cat:"Seated",instr:"",feel:"",pic:"",vid:""},
  {num:40,name:"Padmasana",en:"Lotus",cat:"Seated",instr:"",feel:"",pic:"",vid:"Half lotus and full lotus.MOV"},
  {num:41,name:"Ardha padmasana",en:"Half lotus",cat:"Seated",instr:"",feel:"",pic:"",vid:"Half lotus and full lotus.MOV"},
  {num:42,name:"Virasana (diamond seated)",en:"Diamond seated",cat:"Seated",instr:"",feel:"",pic:"",vid:""},
  {num:101,name:"Nadi Shodhana",en:"Alternate Nostril Breathing",cat:"Pranayama",instr:"",feel:"Heating",pic:"",vid:""},
  {num:102,name:"Bhastrika",en:"Bellows Breath",cat:"Pranayama",instr:"",feel:"Heating",pic:"",vid:""},
  {num:103,name:"Bhramari",en:"Humming Bee Breath",cat:"Pranayama",instr:"",feel:"Meditating",pic:"",vid:""},
  {num:201,name:"Surya Namaskar A",en:"Sun Salutation A",cat:"Sun Salutation",instr:"",feel:"",pic:"",vid:"Sun salutation - full routine.MOV"},
  {num:202,name:"Surya Namaskar B",en:"Sun Salutation B",cat:"Sun Salutation",instr:"",feel:"",pic:"",vid:""},
];

const CATEGORY_ORDER = ["Pranayama","Sun Salutation","Supine","Standing - Open Hip","Standing - Close Hip","Prone","Seated"];
const CATEGORY_ICON = {
  "Pranayama":"🌬️","Sun Salutation":"☀️","Supine":"🧘","Standing - Open Hip":"🧍",
  "Standing - Close Hip":"🧍‍♀️","Prone":"🐊","Seated":"🪷"
};

const DEFAULT_SECTIONS = [
  "Centering & Breath","Warm-Up","Standing Sequence","Balance & Core",
  "Floor Work","Cool-Down","Savasana"
];

let STYLE_META = {
  vinyasa: {
    label: "Vinyasa",
    blurb: "Breath-linked, flowing. Sun salutations build heat, then a standing sequence leads to a peak pose before winding down.",
    sections: ["Centering & Breath","Warm-Up (Sun Salutations)","Standing Sequence","Balance & Core","Peak Pose","Cool-Down (Floor & Supine)","Savasana"]
  },
  hatha: {
    label: "Hatha",
    blurb: "Slower-paced, static holds with clear alignment cues. Poses are worked through by body position rather than continuous flow.",
    sections: ["Centering & Breath","Gentle Warm-Up","Standing Poses","Seated Poses","Backbends","Twists","Forward Folds","Savasana"]
  },
  yin: {
    label: "Yin",
    blurb: "Long, passive holds (2–5 min) targeting connective tissue. Mostly seated/supine — minimal standing work.",
    sections: ["Centering & Breath","Gentle Warm-Up","Seated Holds (Hips & Spine)","Supine Holds","Restorative Cool-Down","Savasana"]
  },
  restorative: {
    label: "Restorative",
    blurb: "Very gentle, prop-supported poses held for long periods to activate deep rest. Few poses, minimal exertion.",
    sections: ["Centering & Breath","Supported Reclining Poses","Supported Seated Poses","Extended Savasana"]
  },
  power: {
    label: "Power / Ashtanga-style",
    blurb: "Athletic and dynamic, with a faster pace and more repetition. Bigger emphasis on standing strength and balance work.",
    sections: ["Centering & Breath","Dynamic Warm-Up (Sun Salutations)","Standing Power Sequence","Balance & Core","Peak Pose","Backbends","Cool-Down","Savasana"]
  },
  custom: {
    label: "Custom / Other",
    blurb: "No preset structure — start from a blank slate and build sections your own way.",
    sections: ["Warm-Up","Main Sequence","Savasana"]
  }
};
const DEFAULT_STYLE = "vinyasa";
const RECENT_WINDOW_DAYS = 21;
const REPEAT_WARN_DAYS = 14;
const DEFAULT_DURATION = 30;
const DEFAULT_UNIT = "sec";

const SHEET_ID = "1fsGMUi7c5vnq80mUSW5YENYNIHJeiwOWXqgiCyt7kug";
const SHEET_GID = "1671063210";
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;
const AUTO_SYNC_ON_LOAD = true;

// App Global State
let flows = [];
let history = [];
let images = {};
let notes = {};
let poseOverride = null;
let currentFlow = null;

function getPoses(){ return poseOverride && poseOverride.length ? poseOverride : DEFAULT_POSES; }
function findPose(num){ return getPoses().find(p => String(p.num) === String(num)); }
function uid(prefix){ return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

function newItem(poseNum){
  return {uid: uid("item"), poseNum: String(poseNum), duration: DEFAULT_DURATION, unit: DEFAULT_UNIT, repeat: 1};
}

function migrateFlow(flow){
  flow.sections.forEach(sec=>{
    if(!sec.items && sec.poseIds){
      sec.items = sec.poseIds.map(num => newItem(num));
      delete sec.poseIds;
    }
    if(!sec.items) sec.items = [];
    sec.items.forEach(it=>{
      if(typeof it.repeat !== "number" || it.repeat < 1) it.repeat = 1;
    });
  });
  if(typeof flow.description !== "string") flow.description = "";
  if(!flow.style) flow.style = DEFAULT_STYLE;
  return flow;
}

function newFlow(style){
  style = style && STYLE_META[style] ? style : DEFAULT_STYLE;
  currentFlow = {
    id: uid("flow"),
    name: "",
    description: "",
    style: style,
    sections: STYLE_META[style].sections.map(title => ({id: uid("sec"), title, items: []})),
    createdAt: new Date().toISOString(),
    savedYet: false
  };
  const sel = document.getElementById("styleSelect");
  if(sel) sel.value = style;
  renderStyleBlurb();
  renderDashboard();
  renderTeachBanner();
}

function loadFlowIntoEditor(flow){
  currentFlow = migrateFlow(JSON.parse(JSON.stringify(flow)));
  currentFlow.savedYet = true;
  const sel = document.getElementById("styleSelect");
  if(sel) sel.value = currentFlow.style;
  renderStyleBlurb();
  renderDashboard();
  renderTeachBanner();
  closeModal("flowsModal");
}

function daysAgo(iso){
  const d = new Date(iso), now = new Date();
  return Math.floor((now - d) / 86400000);
}
function fmtDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
}
function historyForFlow(flowId){
  return history.filter(h => h.flowId === flowId).sort((a,b)=> new Date(b.date)-new Date(a.date));
}
function recentUsageCount(poseNum, windowDays){
  const cutoff = Date.now() - windowDays*86400000;
  return history.filter(h => new Date(h.date).getTime() >= cutoff && h.poseIds.includes(String(poseNum))).length;
}
function lastTaughtDateForPose(poseNum){
  const entries = history.filter(h => h.poseIds.includes(String(poseNum)))
                          .sort((a,b)=> new Date(b.date)-new Date(a.date));
  return entries.length ? entries[0] : null;
}
function freshnessClass(poseNum){
  const c = recentUsageCount(poseNum, RECENT_WINDOW_DAYS);
  if(c >= 3) return "red";
  if(c >= 1) return "amber";
  return "";
}

/* RENDER LIBRARY */
function renderLibrary(){
  const search = document.getElementById("searchBox").value.trim().toLowerCase();
  const sortMode = document.getElementById("sortSelect").value;
  const container = document.getElementById("libraryGroups");
  container.innerHTML = "";

  let poses = getPoses().filter(p=>{
    if(!search) return true;
    return (p.en||"").toLowerCase().includes(search) || (p.name||"").toLowerCase().includes(search) || (p.cat||"").toLowerCase().includes(search);
  });

  if(sortMode === "az"){
    poses = [...poses].sort((a,b)=> (a.en||a.name).localeCompare(b.en||b.name));
    renderFlatGroup(container, "All poses (A–Z)", poses);
    return;
  }
  if(sortMode === "lru"){
    poses = [...poses].sort((a,b)=>{
      const la = lastTaughtDateForPose(a.num), lb = lastTaughtDateForPose(b.num);
      const ta = la ? new Date(la.date).getTime() : 0;
      const tb = lb ? new Date(lb.date).getTime() : 0;
      return ta - tb;
    });
    renderFlatGroup(container, "Least recently used first", poses);
    return;
  }

  CATEGORY_ORDER.forEach(cat=>{
    const list = poses.filter(p=>p.cat===cat);
    if(!list.length) return;
    renderCatGroup(container, cat, list);
  });
  const extraCats = [...new Set(poses.map(p=>p.cat).filter(c=>c && !CATEGORY_ORDER.includes(c)))];
  extraCats.forEach(cat=> renderCatGroup(container, cat, poses.filter(p=>p.cat===cat)));
}

function renderCatGroup(container, cat, list){
  const group = document.createElement("div");
  group.className = "cat-group";
  group.innerHTML = `
    <div class="cat-header">
      <span>${CATEGORY_ICON[cat]||"🧘"} ${cat} <span class="count">(${list.length})</span></span>
      <span class="chev">▾</span>
    </div>
    <div class="cat-body"></div>`;
  group.querySelector(".cat-header").addEventListener("click", ()=> group.classList.toggle("collapsed"));
  const body = group.querySelector(".cat-body");
  list.forEach(p => body.appendChild(makePoseCard(p)));
  container.appendChild(group);
}
function renderFlatGroup(container, label, list){
  const group = document.createElement("div");
  group.className = "cat-group";
  group.innerHTML = `<div class="cat-header"><span>${label} <span class="count">(${list.length})</span></span><span class="chev">▾</span></div><div class="cat-body"></div>`;
  group.querySelector(".cat-header").addEventListener("click", ()=> group.classList.toggle("collapsed"));
  const body = group.querySelector(".cat-body");
  list.forEach(p => body.appendChild(makePoseCard(p)));
  container.appendChild(group);
}

function addPoseToCurrentFlow(poseNum){
  if(!currentFlow) newFlow();
  const targetSec = currentFlow.sections[0] || { items: [] };
  targetSec.items.push(newItem(poseNum));
  renderDashboard();
}

function makePoseCard(p){
  const card = document.createElement("div");
  card.className = "pose-card";
  card.draggable = true;
  card.dataset.poseNum = p.num;
  const img = images[p.num] || p.pic;
  const fresh = freshnessClass(p.num);
  const last = lastTaughtDateForPose(p.num);
  const title = last ? `Last taught ${fmtDate(last.date)} (${daysAgo(last.date)}d ago) in "${last.flowName}"` : "Not taught yet";
  card.innerHTML = `
    <div class="pose-thumb">${img?`<img src="${img}" alt="">`:"🧘"}</div>
    <div class="pose-info">
      <div class="en">${p.en||p.name||"(unnamed)"}</div>
      <div class="sk">${p.name && p.name!==p.en ? p.name : (p.feel||"")}</div>
    </div>
    <div class="fresh-dot ${fresh}" title="${title}"></div>
    <button class="btn small add-pose-btn" title="Add to flow">+ Add</button>
  `;
  card.addEventListener("dragstart", e=>{
    e.dataTransfer.setData("text/plain", JSON.stringify({poseNum:p.num, source:"library"}));
  });
  card.querySelector(".add-pose-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    addPoseToCurrentFlow(p.num);
  });
  card.addEventListener("click", (e)=>{
    if(e.target.closest(".add-pose-btn")) return;
    openDetail(p.num);
  });
  return card;
}

/* DURATION HELPERS */
function itemSeconds(item){
  const sec = item.unit === "min" ? (Number(item.duration)||0)*60 : (Number(item.duration)||0);
  const rep = Math.max(1, Number(item.repeat)||1);
  return sec * rep;
}
function computeTotalSeconds(flow){
  return flow.sections.reduce((sum,s)=> sum + s.items.reduce((n,it)=> n + itemSeconds(it), 0), 0);
}
function formatDuration(totalSeconds){
  const m = Math.floor(totalSeconds/60), s = Math.round(totalSeconds%60);
  if(m<=0) return `${s}s`;
  if(s===0) return `${m}m`;
  return `${m}m ${s}s`;
}

/* RENDER DASHBOARD */
function renderDashboard(){
  const el = document.getElementById("dashboard");
  el.innerHTML = "";
  if(!currentFlow){ newFlow(); return; }

  const header = document.createElement("div");
  header.className = "flow-header";
  const poseCount = currentFlow.sections.reduce((n,s)=>n+s.items.length,0);
  header.innerHTML = `
    <input id="flowNameInput" class="fh-name-input" placeholder="Untitled flow name...">
    <textarea id="flowDescInput" class="fh-desc" rows="1" placeholder="Add a short description of this flow..."></textarea>
    <div class="fh-meta-row">
      <span class="fh-time">⏱ ${formatDuration(computeTotalSeconds(currentFlow))}</span>
      <span class="fh-chip">${poseCount} pose${poseCount===1?"":"s"}</span>
      <span class="fh-chip">${STYLE_META[currentFlow.style] ? STYLE_META[currentFlow.style].label : "Vinyasa"}</span>
    </div>
  `;
  const nameEl = header.querySelector("#flowNameInput");
  const descEl = header.querySelector("#flowDescInput");
  nameEl.value = currentFlow.name || "";
  descEl.value = currentFlow.description || "";
  nameEl.addEventListener("input", e=>{ currentFlow.name = e.target.value; });
  descEl.addEventListener("input", e=>{ currentFlow.description = e.target.value; });
  el.appendChild(header);

  let runningNumber = 0;
  currentFlow.sections.forEach(section=>{
    const divider = document.createElement("div");
    divider.className = "section-divider";
    divider.innerHTML = `
      <span class="dot"></span>
      <input class="section-title" value="${escapeAttr(section.title)}">
      <span class="section-count">${section.items.length} pose${section.items.length===1?"":"s"}</span>
      <button class="icon-btn" title="Remove section">✕</button>
    `;
    divider.querySelector(".section-title").addEventListener("change", e=>{ section.title = e.target.value; });
    divider.querySelector(".icon-btn").addEventListener("click", ()=>{
      if(section.items.length && !confirm(`Remove section "${section.title}" and the ${section.items.length} pose(s) in it?`)) return;
      currentFlow.sections = currentFlow.sections.filter(s=>s.id!==section.id);
      renderDashboard();
    });
    el.appendChild(divider);

    const list = document.createElement("div");
    list.className = "row-list";
    if(!section.items.length){
      list.innerHTML = `<div class="placeholder">Drag poses here from the library ←</div>`;
    } else {
      section.items.forEach((item, idx)=>{
        runningNumber++;
        list.appendChild(makeFlowRow(item, section.id, idx, runningNumber));
      });
    }
    setupDropzone(list, section.id);
    el.appendChild(list);
  });

  const addBtn = document.createElement("button");
  addBtn.className = "btn secondary";
  addBtn.id = "addSectionBtn";
  addBtn.textContent = "+ Add section";
  addBtn.addEventListener("click", ()=>{
    currentFlow.sections.push({id:uid("sec"), title:"New section", items:[]});
    renderDashboard();
  });
  el.appendChild(addBtn);
}

function makeFlowRow(item, sectionId, index, rowNumber){
  const p = findPose(item.poseNum) || {en:"(missing pose)",name:""};
  const row = document.createElement("div");
  row.className = "pose-row";
  row.draggable = true;
  const img = images[item.poseNum] || p.pic;
  const cnt = recentUsageCount(item.poseNum, REPEAT_WARN_DAYS);
  const fresh = freshnessClass(item.poseNum);
  let usedTitle = "";
  if(cnt>0){
    const last = lastTaughtDateForPose(item.poseNum);
    usedTitle = `Used ${daysAgo(last.date)}d ago (${cnt} session(s) in the last ${REPEAT_WARN_DAYS} days)`;
  }
  row.innerHTML = `
    <span class="row-check"></span>
    <span class="row-num">${rowNumber}</span>
    <div class="row-thumb">${img?`<img src="${img}" alt="">`:"🧘"}</div>
    <div class="row-info">
      <div class="en"></div>
      <div class="sub"></div>
    </div>
    <div class="row-duration">
      <input type="number" min="0" class="dur-input" value="${item.duration}">
      <select class="unit-select">
        <option value="sec">sec</option>
        <option value="min">min</option>
      </select>
    </div>
    <div class="row-repeat-cnt" title="How many times to repeat this pose (e.g. 2 for both sides)">
      <span class="repeat-icon">🔁</span>
      <input type="number" min="1" max="99" class="repeat-input" value="${item.repeat || 1}">
    </div>
    <span class="fresh-dot ${fresh}" title="${escapeAttr(usedTitle)}"></span>
    <button class="row-remove" title="Remove">✕</button>
  `;
  row.querySelector(".en").textContent = p.en || p.name || "(unnamed)";
  row.querySelector(".sub").textContent = p.cat || "";
  row.querySelector(".unit-select").value = item.unit;

  row.querySelector(".row-check").addEventListener("click", (e)=>{
    e.target.classList.toggle("checked");
  });
  row.querySelector(".dur-input").addEventListener("input", e=>{
    item.duration = Number(e.target.value) || 0;
    updateTotalTimeDisplay();
  });
  row.querySelector(".unit-select").addEventListener("change", e=>{
    item.unit = e.target.value;
    updateTotalTimeDisplay();
  });
  row.querySelector(".repeat-input").addEventListener("input", e=>{
    const val = parseInt(e.target.value, 10);
    item.repeat = isNaN(val) || val < 1 ? 1 : val;
    updateTotalTimeDisplay();
  });
  row.querySelector(".row-remove").addEventListener("click", ()=>{
    const sec = currentFlow.sections.find(s=>s.id===sectionId);
    sec.items.splice(index,1);
    renderDashboard();
  });
  row.addEventListener("click", (e)=>{
    if(e.target.closest(".row-remove,.row-repeat-cnt,.row-check,.dur-input,.unit-select,.repeat-input")) return;
    openDetail(item.poseNum);
  });
  row.addEventListener("dragstart", e=>{
    e.dataTransfer.setData("text/plain", JSON.stringify({itemUid:item.uid, poseNum:item.poseNum, source:"dashboard", fromSection:sectionId, fromIndex:index}));
  });
  return row;
}

function updateTotalTimeDisplay(){
  const el = document.querySelector(".fh-time");
  if(el) el.textContent = `⏱ ${formatDuration(computeTotalSeconds(currentFlow))}`;
}

function setupDropzone(zone, sectionId){
  zone.addEventListener("dragover", e=>{ e.preventDefault(); zone.classList.add("dragover"); });
  zone.addEventListener("dragleave", ()=> zone.classList.remove("dragover"));
  zone.addEventListener("drop", e=>{
    e.preventDefault();
    zone.classList.remove("dragover");
    let data;
    try{ data = JSON.parse(e.dataTransfer.getData("text/plain")); } catch(err){ return; }
    const targetSec = currentFlow.sections.find(s=>s.id===sectionId);
    if(data.source === "library"){
      targetSec.items.push(newItem(data.poseNum));
    } else if(data.source === "dashboard"){
      const fromSec = currentFlow.sections.find(s=>s.id===data.fromSection);
      const [moved] = fromSec.items.splice(data.fromIndex,1);
      targetSec.items.push(moved || newItem(data.poseNum));
    }
    renderDashboard();
  });
}

function escapeAttr(s){ return (s||"").replace(/"/g,"&quot;"); }

/* DETAIL PANEL */
function openDetail(poseNum){
  const p = findPose(poseNum);
  if(!p) return;
  const main = document.getElementById("main");
  main.classList.add("detail-open");
  const panel = document.getElementById("detailPanel");
  const img = images[poseNum] || p.pic;
  const note = notes[poseNum] || {};
  const last = lastTaughtDateForPose(poseNum);
  const cnt = recentUsageCount(poseNum, REPEAT_WARN_DAYS);

  panel.innerHTML = `
    <div class="dp-head">
      <button class="dp-close">✕</button>
      <div class="dp-en">${p.en||p.name}</div>
      <div class="dp-sk">${p.name && p.name!==p.en ? p.name : ""}</div>
      <span class="dp-cat">${p.cat}</span>
    </div>
    <div class="dp-body">
      <div class="dp-photo" id="dpPhoto">${img?`<img src="${img}" alt="">`:"🧘"}</div>
      <div class="photo-actions">
        <button class="btn small secondary" id="uploadPhotoBtn">Upload photo</button>
        <button class="btn small ghost" id="urlPhotoBtn" style="color:var(--sage-800);border-color:var(--sage-500)">Use URL</button>
        <input type="file" id="photoFileInput" accept="image/*" style="display:none">
      </div>
      <div class="field">
        <label>Recent teaching</label>
        <div class="freshness-note ${cnt>=1?'warn':''}">
          ${last ? `Last taught <b>${fmtDate(last.date)}</b> (${daysAgo(last.date)} days ago) in "${last.flowName}".${cnt>=1?` Used in ${cnt} session(s) in the last ${REPEAT_WARN_DAYS} days — consider swapping for variety.`:''}` : "Not yet taught — a fresh pick!"}
        </div>
      </div>
      <div class="field">
        <label>Key instructions</label>
        <textarea id="instrArea" rows="3" placeholder="Add cues/instructions...">${note.instr ?? p.instr ?? ""}</textarea>
      </div>
      <div class="field">
        <label>Where you should feel it</label>
        <textarea id="feelArea" rows="2" placeholder="Add sensation notes...">${note.feel ?? p.feel ?? ""}</textarea>
      </div>
      ${p.vid ? `<div class="field"><label>Reference video</label><div><span class="video-chip">🎬 ${p.vid}</span></div></div>` : ""}
    </div>
  `;
  panel.querySelector(".dp-close").addEventListener("click", closeDetail);
  panel.querySelector("#uploadPhotoBtn").addEventListener("click", ()=> panel.querySelector("#photoFileInput").click());
  panel.querySelector("#photoFileInput").addEventListener("change", e=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{
      images[poseNum] = reader.result;
      API.saveImage(poseNum, reader.result);
      openDetail(poseNum);
      renderLibrary();
      renderDashboard();
    };
    reader.readAsDataURL(file);
  });
  panel.querySelector("#urlPhotoBtn").addEventListener("click", ()=>{
    const url = prompt("Paste image URL:");
    if(url){
      images[poseNum] = url;
      API.saveImage(poseNum, url);
      openDetail(poseNum);
      renderLibrary();
      renderDashboard();
    }
  });
  panel.querySelector("#instrArea").addEventListener("change", e=>{
    notes[poseNum] = notes[poseNum] || {};
    notes[poseNum].instr = e.target.value;
    API.saveNote(poseNum, notes[poseNum]);
  });
  panel.querySelector("#feelArea").addEventListener("change", e=>{
    notes[poseNum] = notes[poseNum] || {};
    notes[poseNum].feel = e.target.value;
    API.saveNote(poseNum, notes[poseNum]);
  });
}
function closeDetail(){
  document.getElementById("main").classList.remove("detail-open");
}

/* TEACH BANNER */
function renderTeachBanner(){
  const banner = document.getElementById("teachBanner");
  if(!currentFlow || !currentFlow.savedYet){
    banner.classList.remove("show","recent");
    return;
  }
  const hist = historyForFlow(currentFlow.id);
  if(!hist.length){
    banner.classList.remove("show","recent");
    return;
  }
  const last = hist[0];
  const d = daysAgo(last.date);
  banner.innerHTML = `Last taught this flow: <b>${fmtDate(last.date)}</b> (${d}d ago) · taught ${hist.length}x total`;
  banner.classList.add("show");
  if(d <= REPEAT_WARN_DAYS) banner.classList.add("recent"); else banner.classList.remove("recent");
}

/* TOP BAR ACTIONS */
document.getElementById("newFlowBtn").addEventListener("click", ()=>{
  if(currentFlow && !currentFlow.savedYet && currentFlow.sections.some(s=>s.items.length)){
    if(!confirm("Discard the unsaved flow you're building?")) return;
  }
  newFlow(document.getElementById("styleSelect").value);
});

document.getElementById("saveFlowBtn").addEventListener("click", async ()=>{
  const name = document.getElementById("flowNameInput").value.trim();
  if(!name){ alert("Give your flow a name first."); return; }
  currentFlow.name = name;
  currentFlow.description = document.getElementById("flowDescInput").value;
  const idx = flows.findIndex(f=>f.id===currentFlow.id);
  const toSave = JSON.parse(JSON.stringify(currentFlow));
  delete toSave.savedYet;
  if(idx>=0) flows[idx] = toSave; else flows.push(toSave);
  
  await API.saveFlow(toSave);
  currentFlow.savedYet = true;
  renderTeachBanner();
  alert(`Saved "${name}".`);
});

document.getElementById("markTaughtBtn").addEventListener("click", async ()=>{
  if(!currentFlow || !currentFlow.savedYet){ alert("Save this flow first, then mark it as taught."); return; }
  const allPoseIds = currentFlow.sections.flatMap(s=>s.items.map(it=>it.poseNum));
  if(!allPoseIds.length){ alert("This flow has no poses yet."); return; }
  const entry = {
    id: uid("h"), flowId: currentFlow.id, flowName: currentFlow.name,
    date: new Date().toISOString(), poseIds: allPoseIds
  };
  history.push(entry);
  await API.addHistoryEntry(entry);
  renderTeachBanner();
  renderLibrary();
  renderDashboard();
  alert(`Marked "${currentFlow.name}" as taught today.`);
});

document.getElementById("myFlowsBtn").addEventListener("click", ()=>{
  renderFlowsModal();
  openModal("flowsModal");
});

function renderFlowsModal(){
  const list = document.getElementById("flowsList");
  if(!flows.length){
    list.innerHTML = `<p class="hint-text">No saved flows yet — build one and hit "Save Flow".</p>`;
    return;
  }
  list.innerHTML = "";
  [...flows].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)).forEach(f=>{
    const hist = historyForFlow(f.id);
    const poseCount = f.sections.reduce((n,s)=>n+(s.items?s.items.length:0),0);
    const row = document.createElement("div");
    row.className = "flow-row";
    row.innerHTML = `
      <div class="fr-main">
        <div class="fr-name">${f.name} <span style="font-weight:400;color:var(--sage-700);">· ${STYLE_META[f.style] ? STYLE_META[f.style].label : "Vinyasa"}</span></div>
        <div class="fr-meta">${poseCount} poses · ${f.sections.length} sections
          ${hist.length ? ` · last taught ${fmtDate(hist[0].date)} (${daysAgo(hist[0].date)}d ago) · ${hist.length}x total` : " · never taught"}
        </div>
      </div>
      <div class="fr-btns">
        <button class="btn small" data-load="${f.id}">Load</button>
        <button class="btn small secondary" data-dup="${f.id}">Duplicate</button>
        <button class="btn small danger" data-del="${f.id}">Delete</button>
      </div>
    `;
    row.querySelector("[data-load]").addEventListener("click", ()=> loadFlowIntoEditor(f));
    row.querySelector("[data-dup]").addEventListener("click", async ()=>{
      const copy = JSON.parse(JSON.stringify(f));
      copy.id = uid("flow"); copy.name = f.name + " (copy)"; copy.createdAt = new Date().toISOString();
      flows.push(copy);
      await API.saveFlow(copy);
      renderFlowsModal();
    });
    row.querySelector("[data-del]").addEventListener("click", async ()=>{
      if(!confirm(`Delete "${f.name}"? Its teach history stays on record for diversity tracking but won't be loadable.`)) return;
      flows = flows.filter(x=>x.id!==f.id);
      await API.deleteFlow(f.id);
      renderFlowsModal();
    });
    list.appendChild(row);
  });
}

/* EXPORT / IMPORT BACKUP */
document.getElementById("exportBtn").addEventListener("click", ()=>{
  const payload = {flows, history, images, notes, poseOverride, exportedAt:new Date().toISOString()};
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `yoga-flow-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
});
document.getElementById("importBtn").addEventListener("click", ()=> openModal("importModal"));
document.getElementById("importFile").addEventListener("change", e=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=> document.getElementById("importArea").value = reader.result;
  reader.readAsText(file);
});
document.getElementById("doImportBtn").addEventListener("click", async ()=>{
  let data;
  try{ data = JSON.parse(document.getElementById("importArea").value); }
  catch(e){ alert("That doesn't look like valid JSON."); return; }
  if(!confirm("This will replace your current flows, history and photos with the imported backup. Continue?")) return;
  flows = data.flows || [];
  flows.forEach(f => migrateFlow(f));
  history = data.history || [];
  images = data.images || {};
  notes = data.notes || {};
  poseOverride = data.poseOverride || null;
  
  await API.importBackup({ flows, history, images, notes, poseOverride });
  closeModal("importModal");
  newFlow();
  renderLibrary();
  alert("Backup imported.");
});

/* POSE SYNC */
function posesFromCSVRows(rows){
  const header = rows[0].map(h=>h.trim().toLowerCase());
  const catIdx = header.indexOf("asansa") >= 0 ? header.indexOf("asansa") : header.indexOf("category");
  const idx = {
    num: header.indexOf("#"), name: header.indexOf("name"), en: header.indexOf("english"),
    cat: catIdx, instr: header.indexOf("key instructions"),
    feel: header.indexOf("where you should feel"), pic: header.indexOf("picture"),
    vid: header.indexOf("videos")
  };
  const parsed = rows.slice(1).filter(r=>r.some(c=>c && c.trim())).map(r=>({
    num: idx.num>=0 ? (r[idx.num]||"").trim() : "",
    name: idx.name>=0 ? (r[idx.name]||"").trim() : "",
    en: idx.en>=0 ? (r[idx.en]||"").trim() : "",
    cat: idx.cat>=0 ? (r[idx.cat]||"").trim() : "",
    instr: idx.instr>=0 ? (r[idx.instr]||"").trim() : "",
    feel: idx.feel>=0 ? (r[idx.feel]||"").trim() : "",
    pic: idx.pic>=0 ? (r[idx.pic]||"").trim() : "",
    vid: idx.vid>=0 ? (r[idx.vid]||"").trim() : ""
  })).filter(p=>p.num);
  if(!parsed.length){
    throw new Error("Couldn't find any valid rows (need a '#' column).");
  }
  return parsed;
}

async function applyParsedPoses(parsed){
  const keepExtra = getPoses().filter(p=>p.cat==="Pranayama"||p.cat==="Sun Salutation");
  poseOverride = [...parsed, ...keepExtra];
  await API.savePoseOverride(poseOverride);
  renderLibrary();
  renderDashboard();
}

function setSyncStatus(text, isErr){
  const el = document.getElementById("syncStatus");
  el.textContent = text;
  el.classList.toggle("err", !!isErr);
}
function refreshSyncStatus(last){
  if(!last) return;
  const when = daysAgo(last.date) === 0 ? "today" : `${daysAgo(last.date)}d ago`;
  if(last.ok) setSyncStatus(`Synced ${last.count} poses · ${when}`, false);
  else setSyncStatus(`Live sync unavailable · using saved data`, true);
}

async function trySync(interactive){
  const btn = document.getElementById("syncPosesBtn");
  if(interactive){ btn.disabled = true; btn.textContent = "Syncing…"; }
  try{
    const controller = new AbortController();
    const timeout = setTimeout(()=> controller.abort(), 8000);
    const res = await fetch(SHEET_CSV_URL, {cache:"no-store", signal:controller.signal});
    clearTimeout(timeout);
    if(!res.ok) throw new Error(`Sheet responded with status ${res.status}`);
    const text = await res.text();
    const rows = parseCSV(text);
    const parsed = posesFromCSVRows(rows);
    await applyParsedPoses(parsed);
    const syncData = {date:new Date().toISOString(), count:parsed.length, ok:true};
    await API.saveLastSync(syncData);
    refreshSyncStatus(syncData);
    if(interactive) alert(`Synced ${parsed.length} poses from your spreadsheet.`);
    return true;
  }catch(err){
    const syncData = {date:new Date().toISOString(), ok:false, reason:err.message};
    await API.saveLastSync(syncData);
    refreshSyncStatus(syncData);
    if(interactive){
      document.getElementById("syncModalTitle").textContent = "Couldn't sync automatically";
      document.getElementById("syncModalHint").innerHTML =
        `Live sync failed (${escapeAttr(err.message)}). This is usually because the Google Sheet isn't shared as <b>"Anyone with the link can view."</b> Either update that setting or upload CSV below.`;
      openModal("syncModal");
    }
    return false;
  }finally{
    if(interactive){ btn.disabled = false; btn.textContent = "🔄 Sync"; }
  }
}

document.getElementById("syncPosesBtn").addEventListener("click", ()=> trySync(true));
document.getElementById("syncFile").addEventListener("change", e=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=> document.getElementById("syncArea").value = reader.result;
  reader.readAsText(file);
});
document.getElementById("doSyncBtn").addEventListener("click", async ()=>{
  const raw = document.getElementById("syncArea").value.trim();
  if(!raw){ alert("Paste or upload CSV first."); return; }
  try{
    const rows = parseCSV(raw);
    const parsed = posesFromCSVRows(rows);
    await applyParsedPoses(parsed);
    const syncData = {date:new Date().toISOString(), count:parsed.length, ok:true};
    await API.saveLastSync(syncData);
    refreshSyncStatus(syncData);
    closeModal("syncModal");
    alert(`Updated pose library: ${parsed.length} poses loaded.`);
  }catch(err){
    alert("Couldn't parse that CSV: " + err.message);
  }
});

function parseCSV(text){
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for(let i=0;i<text.length;i++){
    const c = text[i], n = text[i+1];
    if(inQuotes){
      if(c === '"' && n === '"'){ field+='"'; i++; }
      else if(c === '"'){ inQuotes = false; }
      else field += c;
    } else {
      if(c === '"'){ inQuotes = true; }
      else if(c === ','){ row.push(field); field=""; }
      else if(c === '\n'){ row.push(field); rows.push(row); row=[]; field=""; }
      else if(c === '\r'){ /* skip */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r=>r.length>1 || (r.length===1 && r[0]!==""));
}

/* MODAL HELPERS */
function openModal(id){ document.getElementById(id).classList.add("show"); }
function closeModal(id){ document.getElementById(id).classList.remove("show"); }
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click", ()=> closeModal(btn.dataset.close));
});
document.querySelectorAll(".modal-overlay").forEach(ov=>{
  ov.addEventListener("click", e=>{ if(e.target===ov) closeModal(ov.id); });
});

document.getElementById("searchBox").addEventListener("input", renderLibrary);
document.getElementById("sortSelect").addEventListener("change", renderLibrary);

/* STYLE PICKER */
function populateStyleSelect(){
  const sel = document.getElementById("styleSelect");
  sel.innerHTML = Object.keys(STYLE_META).map(key =>
    `<option value="${key}">${STYLE_META[key].label}</option>`).join("");
}
function renderStyleBlurb(){
  const style = currentFlow ? currentFlow.style : DEFAULT_STYLE;
  document.getElementById("styleBlurb").textContent = STYLE_META[style] ? STYLE_META[style].blurb : "";
}
document.getElementById("styleSelect").addEventListener("change", e=>{
  const newStyle = e.target.value;
  const hasPoses = currentFlow && currentFlow.sections.some(s=>s.items.length);
  if(hasPoses){
    const ok = confirm(`Switch to the ${STYLE_META[newStyle].label} structure? This replaces your current sections.`);
    if(!ok){ e.target.value = currentFlow.style; return; }
  }
  currentFlow.style = newStyle;
  currentFlow.sections = STYLE_META[newStyle].sections.map(title => ({id: uid("sec"), title, items: []}));
  renderStyleBlurb();
  renderDashboard();
});

/* TEMPLATE MANAGER */
let editingStyleId = null;

document.getElementById("manageStylesBtn").addEventListener("click", ()=>{
  renderTemplatesModal();
  openModal("stylesModal");
});

document.getElementById("addTemplateBtn").addEventListener("click", ()=>{
  editingStyleId = null;
  document.getElementById("editStyleTitle").textContent = "Create New Style Template";
  document.getElementById("styleLabelInput").value = "";
  document.getElementById("styleBlurbInput").value = "";
  document.getElementById("styleSectionsInput").value = "Centering & Breath, Warm-Up, Main Sequence, Cool-Down, Savasana";
  openModal("editStyleModal");
});

document.getElementById("saveTemplateBtn").addEventListener("click", async ()=>{
  const label = document.getElementById("styleLabelInput").value.trim();
  const blurb = document.getElementById("styleBlurbInput").value.trim();
  const rawSections = document.getElementById("styleSectionsInput").value.trim();
  
  if(!label){ alert("Please enter a style name."); return; }
  
  const sections = rawSections
    ? rawSections.split(",").map(s => s.trim()).filter(Boolean)
    : ["Warm-Up", "Main Sequence", "Savasana"];
  
  const id = editingStyleId || ("style_" + label.toLowerCase().replace(/[^a-z0-9]/g, "_") + "_" + Date.now().toString(36).slice(-4));
  
  const styleObj = { id, label, blurb, sections };
  STYLE_META[id] = styleObj;
  
  await API.saveStyleTemplate(styleObj);
  populateStyleSelect();
  renderStyleBlurb();
  renderTemplatesModal();
  closeModal("editStyleModal");
});

function renderTemplatesModal(){
  const list = document.getElementById("templatesList");
  list.innerHTML = "";
  
  Object.keys(STYLE_META).forEach(key => {
    const tmpl = STYLE_META[key];
    const row = document.createElement("div");
    row.className = "flow-row";
    row.innerHTML = `
      <div class="fr-main">
        <div class="fr-name">${escapeAttr(tmpl.label)}</div>
        <div class="fr-meta">${escapeAttr(tmpl.blurb || "No description")}</div>
        <div class="fr-meta" style="color:var(--sage-800);margin-top:4px;"><b>Sections:</b> ${(tmpl.sections||[]).join(" → ")}</div>
      </div>
      <div class="fr-btns">
        <button class="btn small secondary" data-edit-style="${key}">Edit</button>
        ${key !== "vinyasa" ? `<button class="btn small danger" data-del-style="${key}">Delete</button>` : ""}
      </div>
    `;
    row.querySelector("[data-edit-style]").addEventListener("click", ()=>{
      editingStyleId = key;
      document.getElementById("editStyleTitle").textContent = `Edit Template "${tmpl.label}"`;
      document.getElementById("styleLabelInput").value = tmpl.label || "";
      document.getElementById("styleBlurbInput").value = tmpl.blurb || "";
      document.getElementById("styleSectionsInput").value = (tmpl.sections || []).join(", ");
      openModal("editStyleModal");
    });
    const delBtn = row.querySelector("[data-del-style]");
    if(delBtn){
      delBtn.addEventListener("click", async ()=>{
        if(!confirm(`Delete style template "${tmpl.label}"?`)) return;
        delete STYLE_META[key];
        await API.deleteStyleTemplate(key);
        populateStyleSelect();
        renderStyleBlurb();
        renderTemplatesModal();
      });
    }
    list.appendChild(row);
  });
}

/* INIT APPLICATION */
async function initApp() {
  // Load data from backend or local storage
  const state = await API.fetchState();
  flows = state.flows || [];
  history = state.history || [];
  images = state.images || {};
  notes = state.notes || {};
  poseOverride = state.poseOverride || null;

  if (state.styles && Object.keys(state.styles).length) {
    STYLE_META = state.styles;
  }

  populateStyleSelect();
  flows.forEach(f => migrateFlow(f));

  newFlow();
  renderLibrary();
  if (state.lastSync) refreshSyncStatus(state.lastSync);
  if (AUTO_SYNC_ON_LOAD) trySync(false);
}

/* MOBILE TAB SWITCHER */
const tabLibraryBtn = document.getElementById("tabLibraryBtn");
const tabBuilderBtn = document.getElementById("tabBuilderBtn");

if (tabLibraryBtn && tabBuilderBtn) {
  tabLibraryBtn.addEventListener("click", () => {
    const main = document.getElementById("main");
    main.classList.add("mobile-view-library");
    main.classList.remove("mobile-view-builder");
    tabLibraryBtn.classList.add("active");
    tabBuilderBtn.classList.remove("active");
  });

  tabBuilderBtn.addEventListener("click", () => {
    const main = document.getElementById("main");
    main.classList.add("mobile-view-builder");
    main.classList.remove("mobile-view-library");
    tabBuilderBtn.classList.add("active");
    tabLibraryBtn.classList.remove("active");
  });
}

// Boot application when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
