# UI / UX Design System

## Phong cách
Light mode cao cấp và tối giản: nền app `#F7F9FC`, bề mặt card `#FFFFFF`, text chính `#111827`, text phụ `#667085`, border `#E6EAF0`, primary `#2563EB`, hover `#1D4ED8`, success `#16A34A`, danger `#DC2626`, warning `#D97706`. Không dùng dark mode.

## Typography & spacing
- Font ưu tiên `Inter, system-ui, Arial, sans-serif` (fallback local; không phụ thuộc Google Fonts).
- Heading page 28px/700, card title 16px/600, body 14px/400, label 13px/500.
- Layout grid 8px; card radius 12–16px, shadow nhẹ `0 1px 3px rgba(16,24,40,.07)`.
- Container max width ~1440px, sidebar 240px, header cao 68px. Mobile sidebar dạng drawer.

## Khung admin
- Sidebar: logo "VideoHub Admin", Dashboard, Videos, Categories, Users (chỉ ADMIN), Settings, Logout.
- Topbar: breadcrumb, tìm kiếm (nếu có), avatar + username + role.
- Dashboard: hàng KPI cards (desktop 3–4 cột, tablet 2, mobile 1); khối Top 10 và Line chart với khoảng trắng hợp lý.
- Videos: header + Add Video (ADMIN), toolbar tìm/filter, data table có sticky header tùy viewport, pagination dưới cùng.
- Categories/Users: cùng pattern table, modal/form rõ validation.
- Auth: layout chia đôi trên desktop (brand/story bên trái, form bên phải); mobile chỉ form giữa trang.

## Component bắt buộc
- Button primary/secondary/destructive, input/select/textarea, badge role/status, toast, dialog confirm, empty state, skeleton/loading, responsive table, pagination, tooltip.
- Error text dưới field; xác nhận xoá phải nói rõ tên bản ghi.
- Icon dùng inline SVG đơn giản hoặc Unicode có kiểm soát; không yêu cầu icon package.

## Accessibility
- Contrast AA; focus ring rõ ràng; tab order; `aria-label` cho nút chỉ có icon; dialogs hỗ trợ Escape, focus trap nếu làm modal; charts có mô tả/text table fallback.

## Bố cục gợi ý
```text
┌──────── Sidebar ───────┬──────────── Header / Profile ─────────────┐
│ Dashboard              │ Dashboard                                  │
│ Videos                 ├──────── KPI 1 ─ KPI 2 ─ KPI 3 ────────────┤
│ Categories             │                                            │
│ Users (ADMIN)          │   Top 10 views     | Views over time       │
│ Settings               │                                            │
│ Logout                 │                                            │
└────────────────────────┴────────────────────────────────────────────┘
```
