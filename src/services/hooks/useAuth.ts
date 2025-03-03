import { useState } from "react";
import { login, logout } from "../api/authApi";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await login(username, password);
    } catch (err: any) {
      setError("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logout();
    } catch (err: any) {
      setError("Đăng xuất thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return { login: handleLogin, logout: handleLogout, loading, error };
};
