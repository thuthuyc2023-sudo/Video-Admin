# MASTER PROMPT — COPY FROM HERE

Bạn là Senior Frontend Engineer kiêm UI/UX Designer. Hãy **xây dựng mã nguồn website Video Admin hoàn chỉnh có thể chạy trên Live Server/Cloudflare Pages**, không chỉ thiết kế mockup.

## 1. Tài liệu tham chiếu
Đọc kỹ **tất cả** file Markdown trong thư mục `docs/` theo thứ tự số và dùng `data/*.csv` làm dữ liệu seed. Khi có mâu thuẫn, ưu tiên yêu cầu ở `01_PRODUCT_REQUIREMENTS.md`, sau đó `03_DATA_MODEL_CSV.md`, `04_AUTH_AND_ROLES.md`.

## 2. Stack không được thay đổi
**Chỉ HTML5, CSS3, Vanilla JavaScript ES Modules và CSV.** Không React/Vue/Angular, TypeScript, Node/Express, PHP, Python backend, database service, Firebase, Supabase, SQL, API hoặc build tool. Không chart libraries: dùng SVG/Canvas thuần. Giao diện tiếng Việt, **light mode, white background**, chuyên nghiệp, responsive.

## 3. Features
- Dashboard: KPI Tổng số video, Tổng lượt xem, Dung lượng storage; bar chart Top 10 videos theo views; line chart daily/monthly views từ `video_views.csv`, lọc ngày/tháng.
- Videos: table ID, title, thumbnail, views, Edit/Delete (ADMIN), category/status/search/filter/sort/pagination, Add/Edit form.
- Auth: login, register, forgot password demo.
- ADMIN Users CRUD, video_categories CRUD, CSV Import/Export, logout.
- Role USER: xem Dashboard + Videos, không có quyền thao tác quản trị.
- Tài khoản demo: admin1@gmail.com / 123456 (ADMIN), user1@gmail.com / 123456 (USER).

## 4. Quy định đặc biệt về CSV & Security
- File CSV **không thể ghi trực tiếp** từ client vào hosting static. Phải implement `fetch CSV seed → localStorage CRUD → Export/Import CSV` và mô tả rõ giới hạn đồng bộ.
- Không gọi đây là authentication an toàn. Demo dùng credentials rõ ràng trong dữ liệu, tuyệt đối không đưa production secrets.
- Forgot password chỉ là mô phỏng; không tuyên bố đã gửi email thật.
- CSV parser xử lý quoted comma, escaped quotes, BOM, multiline. Escaping export chống formula injection.

## 5. Tiêu chuẩn code và nghiệm thu
- Code rõ ràng có module, responsive 360px, loading/empty/error states, toast, confirm modal, keyboard support.
- Không phát sinh lỗi Console; không `innerHTML` cho nội dung nhập từ CSV.
- Dữ liệu sample được seed và xuất/nhập đầy đủ. Cần mô tả cách chạy Live Server, username/password thử nghiệm, deploy static và giới hạn demo trong README.
- Làm lần lượt theo `07_IMPLEMENTATION_PLAN.md`, đối chiếu `09_TEST_CASES.md` trước khi báo hoàn thành.
- Trả về toàn bộ file HTML/CSS/JS cần thiết, không trả lời bằng pseudocode. Nếu thiếu dữ liệu có thể chọn mặc định hợp lý và **tiếp tục build**.
