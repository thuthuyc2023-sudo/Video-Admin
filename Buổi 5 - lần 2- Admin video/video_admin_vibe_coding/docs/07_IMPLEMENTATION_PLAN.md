# Implementation Plan for Vibe Coding Agent

## Phase 1 — Scaffolding, CSV engine, seed
- Tạo tree, base CSS light theme, assets placeholder.
- CSV reader/writer hỗ trợ quote/commas/newlines; localStorage repository; seed loader và import/export.
- Test CSV Vietnamese + quotes + missing column, syntax errors.
- **Done:** trang index có layout và đọc thành công 5 CSV.

## Phase 2 — Authentication
- Login/Register/Forgot (demo) đầy đủ validation; remember me/logout; guard auth và roles.
- **Done:** admin1 và user1 login được; USER bị chặn `/users.html`, không chọn được role ADMIN khi register.

## Phase 3 — Video CRUD + Categories
- Table search/filter/sort/pagination, details, add/edit/delete với confirm; Categories CRUD và foreign key validation.
- **Done:** CRUD persist sau refresh trong cùng trình duyệt, modal và toast chính xác.

## Phase 4 — Users & Settings
- Users CRUD + role/status, chặn vô hiệu hóa admin cuối cùng, profile tối thiểu; Import/Export CSV + reset seed.
- **Done:** export, reload import và dữ liệu khớp; invalid import không làm hỏng snapshot.

## Phase 5 — Analytics
- KPI, Top 10 chart, daily/monthly line chart, category filter, empty states.
- **Done:** compare số tính trong chart với video_views CSV, test dữ liệu thiếu.

## Phase 6 — Polish / QA
- Mobile 360/768/1440px, accessible, visual consistency, no console errors, missing asset fallback.
- **Done:** pass toàn bộ `09_TEST_CASES.md`.

## Lệnh làm việc với agent
Yêu cầu agent hoàn thành lần lượt từng phase, **tự chạy test/kiểm tra** nếu IDE có thể. Sau mỗi phase: liệt kê file được tạo, mô tả cách kiểm tra nhanh, không thay framework hay kiến trúc.
