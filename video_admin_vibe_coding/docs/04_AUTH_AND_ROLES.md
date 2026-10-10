# Auth Demo & Role-based UI

## Tài khoản cố định thử nghiệm
- `admin1` / `admin1@gmail.com` / `123456` / `ADMIN`
- `user1` / `user1@gmail.com` / `123456` / `USER`

## Cảnh báo
Không có backend thì người dùng có thể sửa localStorage/CSV, đọc password trong CSV, và bypass guard JS. **Đây chỉ là demo để học Vibe Coding, không có security boundary thật.** Không đặt dữ liệu nhạy cảm hoặc công khai website sử dụng thông tin đăng nhập thử nghiệm.

## Login
- Trường `identifier` chấp nhận username hoặc email, trim/case-insensitive; password so khớp demo; user phải `ACTIVE`.
- Khi thành công, ghi session object `{userId, loginAt}` (không lưu plaintext password vào session), chọn `sessionStorage` mặc định; nếu chọn remember me thì `localStorage`.
- Guard route ngay lúc trang khởi động; nếu chưa login đưa về login kèm `?next=` (chỉ cho phép internal relative URL tránh open redirect).
- Logout xóa session ở cả hai storage và điều hướng về login.

## Register
- Validate username 3–30 ký tự, email chuẩn cơ bản, password >=6 ký tự, confirm khớp, unique.
- Role luôn `USER`, status `ACTIVE`, id do ứng dụng cấp, lưu vào localStorage.
- Thông báo tạo tài khoản thành công rồi đưa đến trang đăng nhập hoặc tự đăng nhập nếu chủ định.

## Forgot password
- Vì không có email server, nhập email chỉ tạo trạng thái UI mô phỏng, không gửi mail.
- Có thể bổ sung nút **"Demo reset"** rõ là demo: đặt password mới ngay trong localStorage sau xác nhận email tồn tại, nhưng phải giải thích không an toàn và không gọi là "gửi link" thật.
- Khi email không tồn tại, có thể hiển thị thông báo trung tính để tránh lộ tài khoản (định hướng production).

## Ma trận quyền
| Chức năng | ADMIN | USER | Guest |
|---|---|---|---|
| Login/Register/Forgot | Có | Có | Có |
| Xem Dashboard / Videos | Có | Có | Không |
| Add/Edit/Delete videos | Có | Không | Không |
| Quản lý category | Có | Không | Không |
| Quản lý user | Có | Không | Không |
| Import/Export CSV tất cả bảng | Có | Không | Không |
| Logout | Có | Có | Không |

`requireAuth()` và `requireRole('ADMIN')` phải áp dụng trước khi gắn event handlers; ẩn control không đủ để bảo mật, nhưng giúp đúng UX bản demo. Nếu USER mở trực tiếp URL admin, hiển thị 403/redirect.
