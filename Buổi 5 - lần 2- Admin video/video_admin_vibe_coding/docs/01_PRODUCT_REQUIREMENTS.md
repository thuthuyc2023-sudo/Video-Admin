# Product Requirements Document (PRD)

## 1. Mục tiêu
Website quản lý thư viện video cho nhân sự quản trị, giao diện sáng, thao tác dễ dàng. Chỉ sử dụng HTML/CSS/JavaScript thuần; nguồn dữ liệu CSV; không backend.

## 2. Sitemap và quyền truy cập
- Public: `/login.html`, `/register.html`, `/forgot-password.html`.
- Sau khi đăng nhập: `/index.html` (Dashboard), `/videos.html` (List Video), `/video-form.html?id=...` (Add/Edit), `/categories.html`, `/users.html` (ADMIN), `/settings.html` (Import/Export, profile), `/403.html`, `/404.html`.
- USER được xem Dashboard và danh sách video, xem chi tiết, sửa profile cá nhân; **không** được sửa/xóa video, category, user, hoặc nhập/xuất dữ liệu admin.
- ADMIN được toàn quyền CRUD video, categories, users trong phạm vi demo, Import/Export CSV.

## 3. Dashboard
- KPI: Tổng số video (không tính đã xóa mềm, nếu có), tổng lượt xem, tổng dung lượng storage (tổng `file_size_bytes` của video active), tổng người dùng (tùy chọn).
- Bar chart: Top 10 video nhiều lượt xem nhất; hiển thị title rút gọn + lượt xem thực.
- Line chart: Views theo ngày hoặc theo tháng; dropdown chuyển `7 ngày / 30 ngày / 12 tháng`; tổng hợp từ `video_views.csv`, **không** suy diễn lịch sử từ trường `views` nếu thiếu sự kiện.
- Bộ lọc category và khoảng thời gian ảnh hưởng tới chart; phải chỉ rõ KPI nào là tổng mọi thời gian và KPI nào là theo kỳ.

## 4. List Video
- Cột: thumbnail, ID, title, category, views, dung lượng, status, ngày đăng, action (Edit, Delete).
- Search theo ID/title, filter category/status, sort theo views/created_at/title, phân trang client-side 10/20/50 dòng.
- Click row/thumbnail mở chi tiết video (metadata; player chỉ hiển thị nếu có URL media hợp lệ).
- ADMIN: Add Video, Edit, Delete có dialog xác nhận; validation; thông báo thành công/thất bại; USER không thấy nút sửa/xóa.
- Thumbnail lỗi hiển thị placeholder, không làm vỡ layout.

## 5. Users
- Bảng: id, username, email, role, status, created_at, actions.
- ADMIN: tạo/sửa user, khóa/mở user, reset mật khẩu demo, xóa user với xác nhận.
- Không được tự xóa/khóa tài khoản ADMIN cuối cùng; email và username phải duy nhất, so sánh không phân biệt hoa thường.
- USER chỉ thay đổi tên hiển thị/profile cá nhân nếu chức năng profile được triển khai.

## 6. Categories
- Bảng: id, name, slug, description, status, created_at.
- ADMIN CRUD, unique slug. Khi category đang được video tham chiếu: **chặn xóa** và hiển thị số video liên quan; gợi ý chuyển video sang category khác trước.

## 7. Authentication
- Login: username/email + password, show/hide password, remember session, logout.
- Register: username, email, password, confirm; role mặc định USER và không có trường chọn ADMIN.
- Forgot Password: UI xác nhận yêu cầu và giả lập reset trong trình duyệt; không gửi email thật khi không có backend.
- Có màn hình 403 khi không đủ quyền, redirect login khi chưa đăng nhập.

## 8. UX phi chức năng
- Responsive từ 360 px đến desktop; có loading state, empty state, error state; keyboard-friendly, label đầy đủ.
- Không inline event handlers (`onclick` trong HTML); JS ES Modules, tránh HTML injection (`textContent` cho dữ liệu người dùng).
- Format số bằng `Intl.NumberFormat('vi-VN')`, bytes thành MB/GB theo hệ 1024, giờ theo `Asia/Ho_Chi_Minh`.
- Không làm phát sinh lỗi Console và các lỗi fetch bị bỏ qua.

## 9. Ngoài phạm vi
- Streaming, transcoding, upload file video lên storage thực, thống kê lượt xem server-side, multi-user realtime, phân quyền bảo mật production, email reset thật, API, cơ sở dữ liệu SQL.
