import { LoginBodyType } from "@/schemaValidations/auth.schema";
import apiClient from "./apiClient";

export const login = async (body:LoginBodyType) => {
  try {
    const response = await apiClient.post("/auth/login", { 'code':body.username,'password': body.password }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/auth/logout", { withCredentials: true });
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
