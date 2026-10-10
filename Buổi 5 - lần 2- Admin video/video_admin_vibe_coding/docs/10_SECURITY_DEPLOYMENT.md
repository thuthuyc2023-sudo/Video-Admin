# Security, Deployment, Upgrade Path

## Quan trọng: đây là mô hình học tập
- CSV `users.csv` chứa password demo dạng plaintext; người truy cập hosting static có thể đọc được file này.
- Không có backend, mọi logic role/CRUD/session đều chạy trên thiết bị người dùng nên có thể bị bypass.
- `localStorage` không đồng bộ dữ liệu giữa thiết bị; có thể bị xóa khi browser clear data; kích thước quota giới hạn.
- Browser không thể cập nhật trực tiếp file CSV ở server; phải Export CSV rồi chủ động thay thế file nguồn / Import ở máy khác.
- `file_size_bytes` chỉ là metadata, không phản ánh dung lượng cloud thực tế; view events chỉ là dữ liệu nhập/mô phỏng, không có tracking server-side.

## Demo deploy
Có thể dùng Live Server, GitHub Pages hoặc Cloudflare Pages để phục vụ file tĩnh. **Tuyệt đối không công bố tài khoản thật, mật khẩu thật, dữ liệu nội bộ hay CSV nhân sự** trên hosting public. Đối với bản demo public, tốt nhất dùng dữ liệu giả lập và gắn banner "DEMO — dữ liệu lưu trên trình duyệt".

## Nâng cấp khi muốn vận hành thật
Cần backend/API hoặc dịch vụ xác thực tin cậy; password hash salted (argon2id/bcrypt ở server), reset email qua token có hạn, RBAC thực thi ở server, database nhiều người dùng (Postgres/Supabase hoặc tương đương), object storage, event analytics backend, audit log, backup. Khi đó không còn thỏa ràng buộc “HTML/CSS/JS + CSV và không backend”.

## Mục tiêu demo bản đầu
Ưu tiên xây dựng được flow thật và học cách chia modules, validate, nhập xuất dữ liệu, triển khai website tĩnh. Không đánh đồng demo frontend với một hệ thống quản trị online nhiều người dùng.
