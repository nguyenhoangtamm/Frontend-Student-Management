import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token"); // Hoặc sử dụng cookies
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // Xử lý khi token hết hạn
// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem("token"); // Xóa token khi hết hạn
//             window.location.href = "/login"; // Chuyển hướng về trang đăng nhập
//         }
//         return Promise.reject(error);
//     }
// );

export default apiClient;
