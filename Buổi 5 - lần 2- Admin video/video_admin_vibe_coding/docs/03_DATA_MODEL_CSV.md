# Data Model — CSV as Seed + Import/Export

## Luồng dữ liệu
Dữ liệu mẫu đặt tại `/data/*.csv`. `fetch()` lấy CSV ban đầu khi `localStorage` chưa có snapshot; sau đó CRUD thao tác trên localStorage. Trang Settings có nút **Import CSV** từng bảng hoặc bộ CSV và **Export CSV** từng bảng hoặc toàn bộ bảng. Import validate schema, khoá ngoại, unique keys; có bước xác nhận sẽ thay dữ liệu hiện tại. Export dùng Blob và URL.createObjectURL.

## Các bảng

### `users.csv`
| Cột | Kiểu/ý nghĩa |
|---|---|
| id | string, duy nhất, ví dụ U001 |
| username | string, unique, required |
| email | string, unique, email hợp lệ |
| password | string, **chỉ là demo cleartext, không production** |
| role | ENUM `ADMIN`/`USER` |
| status | ENUM `ACTIVE`/`INACTIVE` |
| created_at | ISO date-time |

### `videos.csv`
| Cột | Kiểu/ý nghĩa |
|---|---|
| id | string unique, ví dụ V001 |
| title | string required, 3–150 ký tự |
| description | string có thể rỗng |
| thumbnail_url | URL hoặc đường dẫn ảnh |
| video_url | URL hoặc rỗng; không tự upload |
| category_id | khóa ngoại categories.id |
| views | integer không âm, **tổng lượt xem lifetime** |
| file_size_bytes | integer không âm, dùng tính dung lượng storage ước tính |
| duration_seconds | integer không âm |
| status | `PUBLISHED` / `DRAFT` / `ARCHIVED` |
| created_at | ISO date-time |
| updated_at | ISO date-time |
| created_by | khóa ngoại users.id |

### `video_categories.csv`
`id,name,slug,description,status,created_at`; status `ACTIVE`/`INACTIVE`; slug unique.

### `video_views.csv`
`id,video_id,view_date,views` — mỗi row là **số lượt xem tăng thêm** của video trong một ngày (`YYYY-MM-DD`), không phải số lũy kế. Unique logical key `(video_id,view_date)`; gom trùng khi import hoặc từ chối. Dùng để dựng line chart. Dữ liệu seed phải đảm bảo `sum(video_views.views)` theo video **bằng** `videos.views`, hoặc cảnh báo không khớp.

### `activity_logs.csv`
`id,user_id,action,entity_type,entity_id,created_at,details` — nhật ký hành động demo trên localStorage (không đáng tin để audit chính thức).

## Quan hệ
- users (1) → (n) videos qua created_by.
- video_categories (1) → (n) videos qua category_id.
- videos (1) → (n) video_views qua video_id.
- users (1) → (n) activity_logs qua user_id.

## CSV parser
- **Bắt buộc** xử lý quote theo RFC 4180: dấu phẩy trong chuỗi, `""` escape quote, newline trong quoted field, CRLF/LF, UTF-8 BOM; không dùng `.split(',')` một cách ngây thơ.
- Nếu không dùng thư viện, viết parser state-machine trong `csv.js` và viết unit tests.
- CSV import xuất từ Excel nên có UTF-8 BOM (tuỳ chọn) để hiện tiếng Việt tốt.
- Chặn CSV formula injection khi export giá trị bắt đầu `=`, `+`, `-`, `@` (ví dụ escape bằng `'`), đồng thời xác định cách đọc lại dữ liệu.

## Quy tắc storage
- `storage` KPI = tổng `file_size_bytes` của video trong bảng active (trạng thái `PUBLISHED`/`DRAFT` theo định nghĩa của sản phẩm; mặc định **không tính ARCHIVED**).
- Phải gắn nhãn **"Dung lượng khai báo"**, không quảng bá là dung lượng file thực tế được đo từ cloud.
- Xóa video là hard delete trong demo và xóa cùng các dòng `video_views`; phải hiển thị xác nhận rõ ràng.
