# Video Admin Site

A small pure‑HTML/CSS/JS admin panel for managing videos stored in CSV files.

## Folder structure
```
admin_video_site/
│   README.md          # You are reading this
│   DATA.md            # CSV schema description
│   UI.md              # Pages & UI overview
│
├─ index.html          # Dashboard
├─ login.html
├─ register.html
├─ forgot.html
├─ videos.html
├─ users.html
│
├─ css/
│   └─ style.css
│
├─ js/
│   ├─ utils.js
│   ├─ auth.js
│   ├─ dashboard.js
│   ├─ videos.js
│   └─ users.js
│
└─ data/
    ├─ users.csv
    ├─ videos.csv
    └─ video_categories.csv
```

## How to run
1. Open a terminal in the project folder.
2. Start a simple HTTP server (Python example):
   ```bash
   python -m http.server 8000
   ```
3. Open a browser at `http://localhost:8000/login.html`.
4. Use the credentials listed in `data/users.csv`.

The site works purely client‑side – all data is read from the CSV files with `fetch()`.

---
