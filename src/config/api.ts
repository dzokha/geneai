// src/config/api.ts
import axios from 'axios';

// Lấy URL cơ sở API từ biến môi trường
// import.meta.env.VITE_API_BASE_URL sẽ được thay thế bằng giá trị thực tế
// trong quá trình build của Vite (từ .env.development hoặc Cloudflare Pages envs).
const API_BASE_URL: string | undefined = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  console.error("VITE_API_BASE_URL is not defined! Please check your .env files or Cloudflare Pages environment variables.");
  // Tùy chọn: ném lỗi hoặc đặt một giá trị mặc định để tránh lỗi runtime
  // throw new Error("API base URL is missing. Cannot initialize API client.");
}

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // Timeout 15 giây
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm Interceptor để tự động đính kèm JWT Token
api.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage hoặc nơi bạn lưu trữ token (cookie, Redux store, Context)
    const token = localStorage.getItem('jwt_token');

    if (token) {
      // Đính kèm token vào header Authorization
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Thêm Interceptor để xử lý lỗi phản hồi (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ví dụ: nếu backend trả về 401 Unauthorized, chuyển hướng về trang đăng nhập
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized API call. Redirecting to login...");
      // Lựa chọn: xóa token cũ, chuyển hướng người dùng
      localStorage.removeItem('jwt_token');
      // window.location.href = '/login'; // Hoặc dùng navigate của React Router
    }
    return Promise.reject(error);
  }
);

export default api;