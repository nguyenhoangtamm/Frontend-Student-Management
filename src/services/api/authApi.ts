import apiClient from "./apiClient";

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post("/login", { 'code':username,'password': password }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/logout", { withCredentials: true });
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
