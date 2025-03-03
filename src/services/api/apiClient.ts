import axios from "axios";
import { getCookieValue } from "../helper/getCookie";


const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,  // Cho phép gửi cookies nếu backend yêu cầu
    headers: {
        "Content-Type": "application/json",
    },
});

// Thêm interceptor để tự động gửi Bearer Token
apiClient.interceptors.request.use(async (config) => {
    const token = await getCookieValue("auth_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient; 