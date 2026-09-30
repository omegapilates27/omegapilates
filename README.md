# Omega Pilates — static landing page

Đây là source landing page tĩnh cho Omega Pilates, tối ưu cho mobile và desktop. Không cần Node.js, database hoặc backend để chạy website.

## Cách đưa lên host

Upload toàn bộ các file/thư mục trong gói này vào `public_html`, `www`, hoặc web root của hosting. Giữ nguyên cấu trúc `assets/` và thư mục `lich/` để ảnh và route hiển thị đúng.

## Lịch lớp từ Google Sheets

Trang `lich/index.html` tự đọc lịch từ Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1rCwSwyrqlW4jn-pfhaL3r1zwal2ZVFui1_0MZM4xuN0/edit?usp=sharing
```

Để cập nhật lịch hàng tuần:

1. Mở Google Sheet và sửa các ô lịch.
2. Giữ hàng `KHUNG GIỜ`, các cột ngày và định dạng ô hiện tại.
3. Tên lớp nên có một trong các cụm: `Mat Pilates`, `Reformer Pilates`, `Wallunit Pilates`.
4. Lưu Sheet; không cần sửa HTML hoặc deploy lại GitHub.
5. Khách mở lại `/lich/` sẽ thấy dữ liệu mới.

Sheet cần được chia sẻ ở mức **Anyone with the link → Viewer** để website có thể đọc CSV công khai. Người quản lý lịch vẫn có thể được cấp quyền **Editor** riêng.

Nếu Google Sheets tạm thời không truy cập được, trang sẽ hiển thị lịch dự phòng có sẵn trong HTML.

## Ba phương thức đặt lịch

Flow đặt lịch trong trang cho phép chọn một trong ba phương thức: SMS thông thường, Zalo hoặc WhatsApp. Các nút sử dụng liên kết native trên thiết bị với hotline `0888 052 727`.

## Chạy thử tại máy

```bash
python3 -m http.server 3000
```

Sau đó mở `http://localhost:3000/lich/`.
