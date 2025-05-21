# UI2TOOL

Thư viện tiện ích UI đơn giản, mở rộng cho extension và web app. Cung cấp Tooltip, Toast, Alert (modal) không cần cấu hình.

> **English**: A simple, extensible UI utility library for browser extensions and web apps. Provides Tooltip, Toast, and Alert (modal) with zero setup.

- Phiên bản: 1.1.1
- Fix : Sửa lỗi cleanId bị cục bộ gây lỗi Alert()
- Cập nhật: 21/05/2025
- Tác giả: [github.com/nguyenhiep19891](https://github.com/nguyenhiep19891) (2TOOL member)

> **English**: Version 1.1 • Updated: May 21, 2025 • Author: github.com/nguyenhiep19891 (2TOOL member)

## Tính năng

> **English**: Features

- 🔹 **Tooltip** - Hiển thị gợi ý khi di chuột qua phần tử
- 🔹 **Toast** - Hiển thị thông báo tạm thời, có thể tùy chỉnh kiểu và vị trí
- 🔹 **Alert** - Hiển thị hộp thoại modal với nội dung và nút tùy chỉnh

> **English**: Tooltips for any element, Toast notifications with various positions, and Alert dialogs with customizable content and buttons.

## Cài đặt

> **English**: Installation

Chỉ cần nhúng script UI2TOOL vào HTML của bạn:

```html
<script src="UI2TOOL.js"></script>
```

> **English**: Simply include the UI2TOOL script in your HTML.

## Cách sử dụng

> **English**: Usage

### Cú pháp đơn giản

```javascript
// Tooltip
UI2TOOL.Tooltip(element, "Nội dung tooltip", "top");

// Toast
UI2TOOL.Toast("Đây là thông báo toast");  // Cú pháp rút gọn
UI2TOOL.Toast("Thông báo thành công", { type: "success" });
UI2TOOL.Toast("Thông báo ở góc trên bên phải", { position: "top-right" });

// Alert
UI2TOOL.Alert("Nội dung thông báo");
UI2TOOL.Alert.Show("Nội dung thông báo", "Tiêu đề");
```

> **English**: Simple syntax for basic usage.

### Sử dụng instance riêng biệt

```javascript
// Khởi tạo instances riêng biệt
const UI_Left = new UI2TOOL('ui-left');
const UI_Right = new UI2TOOL('ui-right');

// Sử dụng instance
UI_Left.Toast("Toast hiển thị ở vị trí mặc định bên trái");
UI_Right.Toast("Toast hiển thị ở bên phải");
```

> **English**: Use multiple instances for different parts of your application.

## Tài liệu đầy đủ

> **English**: Full Documentation

Để xem tài liệu đầy đủ và các ví dụ, vui lòng truy cập trang tài liệu chính thức:

- [docs.html](https://nguyenhiep19891.github.io/UI2TOOL/docs.html) - Tài liệu chi tiết và demos
- [GitHub Repository](https://github.com/nguyenhiep19891/UI2TOOL) - Mã nguồn và tài nguyên

> **English**: For complete documentation and examples, please visit the official documentation page.

## License

Copyright (c) 2024 - MIT License
