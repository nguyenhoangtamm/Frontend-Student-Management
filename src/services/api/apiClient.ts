import axios from 'axios';
import { deleteCookie, getCookieValue } from '../helper/Cookie';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true, // Cho phép gửi cookies nếu backend yêu cầu
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để tự động gửi Bearer Token
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getCookieValue('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Thêm interceptor để xử lý lỗi 401
apiClient.interceptors.response.use(
  (response) => {
    return response; // Trả về phản hồi nếu không có lỗi
  },
  (error) => {
    if (error.response?.status === 401) {
      deleteCookie('auth_token');
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error); // Trả về lỗi để xử lý tiếp
  },
);

export default apiClient;
