# Dashboard: KPIs, Charts, Dates

## KPI formulas
- `totalVideos = videos.filter(v => v.status !== 'ARCHIVED').length`.
- `totalViews = videos.filter(v => v.status !== 'ARCHIVED').reduce((a,v)=>a+Number(v.views||0),0)`.
- `totalStorageBytes = ...sum(Number(v.file_size_bytes||0))` trên tập tương tự.
- Hiển thị views là dữ liệu seed lifetime; các biểu đồ theo thời gian dựa trên `video_views.csv`.

## Top 10 chart
1. Lấy videos chưa ARCHIVED.
2. Nếu chọn category thì lọc trước.
3. Sort `Number(views)` giảm dần; ties theo title tăng dần.
4. Slice 10; vẽ 10 bars (nên ưu tiên thanh ngang để title dễ đọc dù business gọi là bar chart), tooltip/title đầy đủ, nhãn số lượt xem.
5. Nếu không dữ liệu, hiển thị empty state.

## Line chart Views by day/month
1. Đọc `video_views.csv`; chỉ lấy event thuộc video không ARCHIVED + category chọn.
2. Phạm vi: 7 ngày, 30 ngày theo ngày; 12 tháng theo tháng; mốc cuối cùng dựa trên **ngày hiện tại của máy** và timezone Việt Nam.
3. Nhóm `YYYY-MM-DD` hoặc `YYYY-MM` theo `view_date`; điền đầy đủ các ngày/tháng thiếu bằng 0.
4. Dùng SVG thuần (path/polyline), hiển thị trục, tooltip ngày và views; đường line rõ nét và tối ưu mobile.
5. `video_views.views` là **delta trong kỳ**; không cộng trực tiếp `videos.views` cho line chart.
6. Nếu tổng lifetime không bằng tổng events, thêm cảnh báo nhỏ "Lịch sử view chưa đầy đủ" thay vì bịa thêm sự kiện.

## Dữ liệu mẫu
Seed phải có tối thiểu 15 video, 3 categories và các event trong 30 ngày gần nhất, cộng thêm event của những tháng trước để demo được 12-month chart. Có thể lấy ngày hiện tại từ JS lúc tạo dữ liệu runtime hoặc dùng seed có ngày cố định nhưng phải cung cấp chế độ `demoTimeAnchor` khi seed đã cũ. Data CSV đính kèm tạo tháng 10/2026.

## UI responsiveness
- Desktop KPI xếp 3 cột, charts side-by-side hoặc stack tùy chiều rộng.
- Mobile charts cuộn ngang hợp lý và nhãn không chồng lên nhau; có tóm tắt dữ liệu hỗ trợ người dùng không xem chart.
