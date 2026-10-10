# Acceptance Tests (manual + agent)

| ID | Test | Expected |
|---|---|---|
| AUTH-01 | Login admin1@gmail.com / 123456 | Vào Dashboard, role ADMIN |
| AUTH-02 | Login user1 / 123456 | Vào Dashboard, role USER |
| AUTH-03 | Sai password | Lỗi rõ ràng, không login |
| AUTH-04 | Register email/username trùng | Chặn, không tạo bản ghi |
| AUTH-05 | Register tài khoản mới | Role USER bất biến |
| AUTH-06 | USER mở users.html trực tiếp | Không được truy cập (403/redirect) |
| AUTH-07 | Logout, back browser | Trang protected guard lại |
| AUTH-08 | Forgot password | Hiện thông báo demo, không tuyên bố gửi email |
| DATA-01 | First visit | Nạp chính xác CSV seed |
| DATA-02 | Video title có dấu phẩy/quote | CSV import/export không lỗi |
| DATA-03 | Add/Edit video rồi refresh | Thay đổi còn trong localStorage |
| DATA-04 | Import CSV thiếu cột required | Thông báo lỗi, không overwrite |
| DATA-05 | Delete video | Confirm và xóa record/video_views |
| DATA-06 | Delete category đang có video | Chặn và nêu lý do |
| DATA-07 | Xóa/khóa ADMIN cuối cùng | Bị chặn |
| DATA-08 | CSV export rồi import | Tái tạo được bản ghi/dấu tiếng Việt |
| DASH-01 | Total videos | Khớp số active (không ARCHIVED) |
| DASH-02 | Total views | Khớp tổng `videos.views` lọc tương ứng |
| DASH-03 | Storage | Khớp tổng file_size_bytes, format hợp lý |
| DASH-04 | Top 10 | Đúng 10 bản ghi views cao nhất |
| DASH-05 | Line chart 7d/30d/12m | Nhóm sự kiện view đúng và lấp 0 |
| DASH-06 | Chart không có data | Empty state, không lỗi JS |
| UX-01 | Màn hình 360px | Không tràn layout theo chiều ngang trang |
| UX-02 | Thumbnail URL hỏng | Placeholder hiện thay |
| UX-03 | Search/filter/sort/pagination | Hoạt động cùng lúc, số kết quả đúng |
| UX-04 | Keyboard/labels | Điều hướng Tab, focus hiển thị |
| SEC-01 | Chuỗi `<script>` trong title CSV | Hiển thị text, không chạy script |
| SEC-02 | File URL/CSV chưa tải được | Thông báo lỗi và retry hợp lý |
