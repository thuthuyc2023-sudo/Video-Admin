# Video Admin — Vibe Coding Blueprint

## Mục đích
Xây dựng website quản trị video theo mô hình **frontend-only** bằng **HTML5, CSS3, JavaScript thuần (ES Modules)** và các file **CSV** làm nguồn dữ liệu. Thiết kế **light mode**, nền trắng, giao diện tiếng Việt, responsive.

> **Giới hạn kiến trúc bắt buộc:** Browser không thể ghi trực tiếp ngược vào file CSV trên máy chủ tĩnh. Trong demo, đọc CSV ban đầu bằng `fetch`, sau đó thao tác CRUD trên `localStorage`, và cung cấp **Import/Export CSV** để người quản trị lưu / phục hồi dữ liệu. Dữ liệu lưu trong trình duyệt, không tự đồng bộ giữa nhiều máy. Authentication chỉ là mô phỏng phía client, tuyệt đối không coi là hệ thống bảo mật production.

## Tài liệu theo thứ tự
1. `docs/01_PRODUCT_REQUIREMENTS.md` — phạm vi, tính năng, quy tắc nghiệp vụ.
2. `docs/02_UI_UX_DESIGN.md` — thiết kế và trang giao diện.
3. `docs/03_DATA_MODEL_CSV.md` — các bảng CSV, quan hệ và quy tắc nhập xuất.
4. `docs/04_AUTH_AND_ROLES.md` — login, register, forgot password, phân quyền demo.
5. `docs/05_DASHBOARD_ANALYTICS.md` — KPI và thuật toán biểu đồ.
6. `docs/06_PROJECT_STRUCTURE.md` — cấu trúc mã nguồn và giải pháp kỹ thuật.
7. `docs/07_IMPLEMENTATION_PLAN.md` — hướng dẫn chia phase, tiêu chí nghiệm thu.
8. `docs/08_MASTER_PROMPT.md` — prompt copy/paste cho Antigravity hoặc IDE AI.
9. `docs/09_TEST_CASES.md` — checklist kiểm thử.
10. `docs/10_SECURITY_DEPLOYMENT.md` — hạn chế và hướng triển khai.

## Tài khoản thử nghiệm (KHÔNG sử dụng cho hệ thống thật)
- ADMIN: `admin1@gmail.com` / `123456`
- USER: `user1@gmail.com` / `123456`
- Có thể đăng nhập bằng username tương ứng `admin1`, `user1`.

## Khởi chạy bản demo
1. Giải nén ZIP và mở thư mục này trong IDE sử dụng AI (Antigravity / VS Code).
2. Sao chép toàn bộ `docs/08_MASTER_PROMPT.md` vào tác nhân coding. Yêu cầu agent đọc tất cả file `docs/*.md` và tạo website trong thư mục `src/` (có thể dùng root output thay vì src nếu cần).
3. Chạy bằng Live Server/localhost, **không** mở trực tiếp HTML bằng `file://` do `fetch` CSV thường bị chặn.
4. Tài khoản mẫu được đọc từ CSV lần đầu; kiểm tra các trang và tính năng Import/Export.
5. Không tải site demo kèm mật khẩu mẫu hoặc dữ liệu thật lên môi trường public.

## Quy ước bàn giao của agent
- Sinh mã nguồn hoàn chỉnh, không chỉ mockup.
- Không backend, không framework, không Supabase, Firebase, Node server hay SQL.
- Không dùng thư viện chart nếu có thể vẽ bằng SVG/Canvas + JS thuần.
- Ảnh thumbnail dùng URL ảnh giả lập hoặc CSS placeholder có fallback, không upload nội dung video thực tế trong demo.
