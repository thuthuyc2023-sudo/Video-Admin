# UI Overview

## Login (`login.html`)
- Simple form with username & password fields.
- On submit calls `auth.js` to validate against `data/users.csv`.
- Successful login redirects to `index.html`.

## Register (`register.html`)
- Static placeholder form (no back‑end). In a real app you would append a row to `data/users.csv`.

## Forgot Password (`forgot.html`)
- Static form that just shows an alert. It demonstrates UI flow.

## Dashboard (`index.html`)
- Shows three statistic cards (total videos, total views, storage).
- Bar chart (Chart.js) of the top‑10 most‑viewed videos.
- Line chart of daily view counts.
- Navigation links to Video and User management pages.

## Video Management (`videos.html`)
- Table with columns: **ID, Title, Thumbnail, Views, Action**.
- Action column contains **Edit** and **Delete** buttons (place‑holder alerts).
- Data loaded from `data/videos.csv` via `js/utils.js`.

## User Management (`users.html`)
- Table with columns: **ID, Username, Email, Role, Action**.
- Action column similar to video page.
- Data loaded from `data/users.csv`.

All pages share the same light‑mode stylesheet (`css/style.css`) and navigation bar.
