import { useState } from "react";
import { login } from "../api/authApi";

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

  return { login: handleLogin, loading, error };
};
