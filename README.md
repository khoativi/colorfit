# ColorFit — Trợ Lý Phối Màu Trang Phục Khi Mua Sắm

**ColorFit** là ứng dụng web tối giản, ưu tiên trải nghiệm di động (*mobile-first*), giúp bạn tra cứu nhanh các bảng phối màu trang phục ngay khi đang mua sắm. Chỉ cần nhập tên món đồ hoặc màu sắc (ví dụ: `áo sơ mi màu be`, `quần kaki xanh navy`, `xanh rêu`, `đỏ burgundy`...), ColorFit sẽ giữ màu bạn chọn làm màu trung tâm và gợi ý các dãy màu phối hài hòa theo lý thuyết màu sắc và ứng dụng thời trang thực tế.

---

## Tính năng chính

* **Tìm kiếm tự nhiên & thông minh:** Hỗ trợ tiếng Việt có dấu / không dấu, tên tiếng Anh, tên gọi thay thế (*aliases*) và tự động nhận diện ngữ cảnh món đồ (VD: *áo sơ mi, quần kaki, chân váy...*) kèm danh sách gợi ý trực tiếp.
* **Thư viện 86 sắc màu thuộc 12 họ màu:** Chuyển đổi nhanh giữa các sắc độ sáng – vừa – đậm trong cùng một họ màu chỉ bằng 1 chạm.
* **646 bảng phối màu được kiểm chứng:** Mỗi bảng màu gồm 5–6 sắc màu xoay quanh màu gốc, phân tách rõ **màu theo công thức lý thuyết** (*Đơn sắc, Tương đồng, Bổ túc, Bổ túc xen kẽ, Tam giác*), **màu hỗ trợ trung tính** và **màu nhấn có kiểm soát**.
* **Bộ lọc phân loại rõ ràng:** Lọc nhanh theo *Tất cả*, *Lý thuyết màu*, *Ứng dụng thời trang* và *Sắc thái màu* với số liệu đồng nhất.
* **Chi tiết bảng màu & Thử tỷ lệ phối trực quan:** Xem lý do các màu hợp nhau, hoàn cảnh ứng dụng và chạm thử bất kỳ màu nào trong dãy trên thanh tỷ lệ `55% – 32% – 13%`.
* **Lưu bảng màu yêu thích:** Lưu nhanh các bảng màu ưng ý vào trình duyệt (`localStorage`) để xem lại bất cứ lúc nào.
* **Không cần ảnh, siêu nhẹ & hỗ trợ PWA:** Tải tức thì, hỗ trợ đồng bộ URL (`?color=...&palette=...`) và cài đặt lên màn hình chính điện thoại.

---

## Cấu trúc dự án

```text
colorfit/
├── index.html            # Giao diện đơn trang (Tailwind CSS + Material Symbols + Vanilla JS)
├── color-library.js      # Nguồn dữ liệu màu chuẩn (12 họ màu, 86 sắc màu, 11 nhóm phối màu)
├── palettes-data.js      # Bộ 646 bảng màu đã kiểm chứng tham chiếu theo colorId
├── colorfit-service.js   # Tầng xử lý nghiệp vụ: validate dữ liệu, tìm kiếm, truy vấn & đổi màu gốc
├── site.webmanifest      # Cấu hình PWA
├── favicon.ico           # Biểu tượng trình duyệt
└── assets/               # Bộ icon favicon & PWA (SVG/PNG)
```

### Nguyên tắc dữ liệu
* **Single Source of Truth:** Toàn bộ tên màu, thuộc tính nhiệt độ/sắc độ và mã màu chỉ định nghĩa duy nhất tại `color-library.js`.
* **Kiểm tra toàn vẹn tự động:** `colorfit-service.js` tự động kiểm tra tham chiếu `colorId`, `groupId`, `anchorColorId` và vai trò (`anchor`, `supporting`, `accent`) khi khởi chạy.

---

## Cách chạy & Triển khai

Ứng dụng là trang tĩnh thuần HTML/CSS/JS, **không cần cài đặt dependencies hay bước build**.

### Chạy trên máy cá nhân (Local)
Mở trực tiếp file `index.html` bằng trình duyệt hoặc chạy static server:

```bash
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

### Deploy lên GitHub Pages
Dự án đã có sẵn `.nojekyll` và cấu hình tương thích GitHub Pages:
1. Push repository lên GitHub.
2. Vào **Settings → Pages → Build and deployment**.
3. Chọn branch `main` (thư mục `/ (root)`) và lưu lại.

---

## Lưu ý về màu sắc

* Mỗi bảng màu là dãy màu tuyển chọn gợi ý; không bắt buộc tất cả các màu trong dãy phải xuất hiện cùng lúc trong một bộ trang phục (nên chọn 2–3 màu yêu thích).
* Màu hiển thị trên màn hình mang tính tham chiếu; màu vải thực tế có thể khác nhau tùy chất liệu, kỹ thuật nhuộm và ánh sáng môi trường.
