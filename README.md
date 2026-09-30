# Omega Pilates — static mobile landing page

Đây là source landing page tĩnh cho Omega Pilates, tối ưu mobile và không cần backend. Toàn bộ nội dung nằm trong `index.html`, giao diện trong `styles.css`, tương tác đặt lịch trong `script.js`, còn ảnh/QR nằm trong thư mục `assets/`.

## Cách đưa lên host

Upload toàn bộ các file/thư mục trong gói này vào `public_html`, `www`, hoặc thư mục web root của hosting. Giữ nguyên cấu trúc `assets/` để ảnh hiển thị đúng. Không cần chạy build, Node.js hay database.

## Ba phương thức đặt lịch

Flow đặt lịch trong trang cho phép chọn đúng một trong ba phương thức: SMS thông thường, Zalo hoặc WhatsApp. Các nút sử dụng liên kết native trên thiết bị với hotline `0888 052 727`.

## Chạy thử tại máy

```bash
python3 -m http.server 3000
```

Sau đó mở `http://localhost:3000`.
