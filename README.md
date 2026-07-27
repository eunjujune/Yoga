# 🌿 Yoga Flow Builder

A modern, intuitive web application for Yoga teachers and practitioners to sequence, customize, time, and track yoga flows. Built with a responsive frontend design system and a Node.js Express backend API with persistent storage.

---

## 🚀 Features

- **🧘 Dynamic Pose Library**: Categorized poses (Supine, Standing, Prone, Seated, Pranayama, Sun Salutations) with search and sorting (A–Z, Category, Least Recently Used).
- **⏱ Pose Timers & Total Flow Duration**: Set individual pose durations (seconds or minutes) with real-time total flow time calculation.
- **🔁 Quick Pose Repeat / Duplicate**: Duplicate any pose item instantly with the `🔁` repeat button.
- **🎨 Style Presets**: Quick-start templates for **Vinyasa**, **Hatha**, **Yin**, **Restorative**, **Power / Ashtanga**, and **Custom** flows.
- **📊 Diversity & Teaching History**: Track when flows and poses were last taught to keep classes fresh. Freshness dots (🟢/🟡/🔴) visually signal recently repeated poses.
- **🔄 Spreadsheet CSV Sync**: Sync pose metadata directly from Google Sheets CSV or upload custom CSV inventory.
- **💾 Full REST API Backend**: Node.js Express server storing data atomically in `data/db.json` with seamless offline `localStorage` fallback.
- **📦 Backup & Restore**: Export full database state to JSON and restore anytime.

---

## 🛠 Tech Stack

- **Frontend**: HTML5, Vanilla CSS (Custom Design System with CSS variables), Modern JavaScript ES6+
- **Backend**: Node.js, Express.js, CORS
- **Storage**: Atomic file-backed JSON Database (`data/db.json`) + Client-side `localStorage` Fallback

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation & Launch

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Open the web application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server health status check |
| `GET` | `/api/state` | Retrieve full database state |
| `GET` | `/api/flows` | List all saved flows |
| `POST` | `/api/flows` | Create or update a flow |
| `DELETE` | `/api/flows/:id` | Delete a flow by ID |
| `GET` | `/api/history` | Get teaching history |
| `POST` | `/api/history` | Record a teaching session |
| `GET` | `/api/styles` | Get all custom style templates |
| `POST` | `/api/styles` | Create or update a style template |
| `DELETE` | `/api/styles/:id` | Delete a style template |
| `GET` | `/api/notes` | Get pose cues & sensation notes |
| `PUT` | `/api/notes/:poseNum` | Update notes for a pose |
| `GET` | `/api/images` | Get pose photo URLs/data |
| `PUT` | `/api/images/:poseNum` | Save photo for a pose |
| `GET` | `/api/backup/export` | Download full database backup |
| `POST` | `/api/backup/import` | Import database backup |

---

## 🚢 Deployment

### Free Hosting (Vercel / Netlify / Render / Railway)

- **Render / Railway / Fly.io**: Connect your Git repository and deploy as a Node.js web service running `npm start`.
- **Vercel / Netlify**: Deploy the `public/` directory for static hosting, or deploy serverless functions.

---

## 📄 License

ISC License
