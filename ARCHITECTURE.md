# Kiến trúc Dự án My E-commerce Dashboard

Đây là tài liệu mô tả cấu trúc thư mục và các thành phần chính của dự án My E-commerce Dashboard, được xây dựng với Vite, React và TypeScript.

## 1. Cấu trúc thư mục

Dưới đây là sơ đồ cây thư mục của dự án:

.
├── .github/                      # Cấu hình GitHub Actions (CI/CD)
│   └── workflows/
│       └── main.yml              # Workflow để build và deploy lên Cloudflare Pages
├── public/                       # Các file tĩnh không qua xử lý của Vite (index.html, favicon)
│   └── index.html
├── src/
│   ├── assets/                   # Tài nguyên tĩnh của ứng dụng (hình ảnh, icons, font tùy chỉnh)
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── ui/                   # Các UI component cơ bản, thuần túy (Button, Input, Modal, Table)
│   │   ├── common/               # Các component dùng chung có logic nội bộ (Pagination, SearchBar)
│   │   └── layout/               # Các component định hình bố cục trang (Header, Sidebar, Footer)
│   ├── config/                   # Cấu hình ứng dụng
│   │   ├── api.ts                # Cấu hình Axios, baseURL từ biến môi trường
│   │   └── constants.ts          # Các hằng số không nhạy cảm (ENUMs, page size)
│   ├── hooks/                    # Custom hooks để tái sử dụng logic có stateful
│   │   ├── useAuth.ts            # Quản lý logic xác thực
│   │   ├── useForm.ts            # Xử lý form state và validation
│   │   └── useApiCall.ts         # Wrapper cho gọi API với loading/error state
│   ├── layouts/                  # Các layout chính cho các nhóm trang (MainLayout, AuthLayout)
│   │   ├── MainLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── pages/                    # Các trang ứng dụng, mỗi trang là một view hoàn chỉnh
│   │   ├── auth/                 # Trang đăng nhập, đăng ký
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── categories/           # Quản lý danh mục sản phẩm
│   │   │   ├── CategoryList.tsx
│   │   │   └── CategoryForm.tsx
│   │   ├── products/             # Quản lý sản phẩm
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductForm.tsx
│   │   ├── orders/               # Quản lý đơn hàng
│   │   │   ├── OrderList.tsx
│   │   │   └── OrderDetail.tsx
│   │   └── dashboard/            # Trang tổng quan
│   │       └── Dashboard.tsx
│   ├── services/                 # Các module gọi API và xử lý dữ liệu backend
│   │   ├── authService.ts
│   │   ├── categoryService.ts
│   │   ├── productService.ts
│   │   └── orderService.ts
│   ├── store/                    # Quản lý global state (Sử dụng Redux Toolkit)
│   │   ├── index.ts              # Cấu hình Redux store
│   │   ├── slices/               # Các Redux slices riêng biệt
│   │   │   ├── authSlice.ts
│   │   │   ├── categorySlice.ts
│   │   │   ├── productSlice.ts
│   │   │   └── orderSlice.ts
│   │   └── selectors/            # Các selector để truy cập state
│   ├── styles/                   # Các file CSS/SCSS
│   │   ├── base.css              # Reset CSS, CSS chung nhất
│   │   ├── variables.css         # Biến CSS (màu sắc, font, spacing)
│   │   └── typography.css        # Định nghĩa các kiểu chữ
│   ├── utils/                    # Các hàm tiện ích, helpers
│   │   ├── validation.ts
│   │   └── formatters.ts
│   ├── App.tsx                   # Component gốc của ứng dụng
│   ├── main.tsx                  # Entry point của ứng dụng
│   ├── router.tsx                # Định nghĩa tất cả các routes của ứng dụng
│   └── vite-env.d.ts             # Type definitions cho biến môi trường Vite
├── .env.development              # Biến môi trường cho môi trường phát triển (KHÔNG COMMIT)
├── .env.production               # Biến môi trường cho môi trường production (KHÔNG COMMIT)
├── .gitignore                    # Danh sách các file/thư mục không đưa lên Git
├── eslint.config.js              # Cấu hình ESLint
├── package.json                  # Thông tin dự án và dependencies
├── README.md                     # Tài liệu chính của dự án
├── tsconfig.app.json             # Cấu hình TypeScript cho ứng dụng
├── tsconfig.json                 # Cấu hình TypeScript tổng thể
├── tsconfig.node.json            # Cấu hình TypeScript cho môi trường Node.js
└── vite.config.ts                # Cấu hình Vite

## 2. Giải thích các thư mục chính

* **`public/`**: Chứa các tài nguyên tĩnh được phục vụ trực tiếp bởi web server (ví dụ: `index.html`, `favicon.ico`).
* **`src/`**: Mã nguồn chính của ứng dụng.
    * **`assets/`**: Hình ảnh, biểu tượng, font chữ cục bộ.
    * **`components/`**: Các thành phần UI có thể tái sử dụng.
        * `ui/`: Các thành phần nhỏ, không có logic nghiệp vụ (e.g., Button, Input).
        * `common/`: Các thành phần phức tạp hơn, có thể kết hợp nhiều `ui` components (e.g., Pagination, SearchBar).
        * `layout/`: Các thành phần tạo bố cục cho các trang (e.g., Header, Sidebar).
    * **`config/`**: Cài đặt chung của ứng dụng, như baseURL cho API, các hằng số.
    * **`hooks/`**: Custom React Hooks để trừu tượng hóa và tái sử dụng logic có state.
    * **`layouts/`**: Các bố cục trang chính, bao gồm các thành phần `layout` và chứa `Outlet` cho nội dung trang.
    * **`pages/`**: Các trang riêng lẻ của ứng dụng, mỗi trang đại diện cho một view hoàn chỉnh. Được nhóm theo tính năng (e.g., `categories`, `products`).
    * **`services/`**: Các module chứa logic để tương tác với API backend.
    * **`store/`**: Quản lý trạng thái toàn cục của ứng dụng (sử dụng Redux Toolkit).
    * **`styles/`**: Các định nghĩa CSS toàn cục, biến CSS, v.v.
    * **`utils/`**: Các hàm tiện ích không liên quan đến UI hay state.
* **`.env.*` files**: Chứa các biến môi trường, **không được commit lên Git**. Các biến này được Cloudflare Pages/Vite inject vào quá trình build.
* **`.github/`**: Cấu hình CI/CD với GitHub Actions.
* **`*.ts`, `*.json` files**: Các file cấu hình cho TypeScript, ESLint, Vite.

## 3. Quản lý biến môi trường

Các thông tin nhạy cảm (như URL API backend production) được quản lý thông qua **Cloudflare Pages Environment Variables**, và các file `.env.*` chỉ dùng cho phát triển cục bộ và không được đẩy lên GitHub.