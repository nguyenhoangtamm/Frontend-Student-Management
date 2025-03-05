import apiClient from "./apiClient";

export async function fetchDashboard ()  {
    const response = await apiClient.get(`/student/dashboard`);
    const data = response.data.data;
    return data;
};
export const fetchHeader = async () => {
    const response = await apiClient.get(`/student/header-info`);
    const data = response.data;
    return data;
};
export const fetchProfile = async () => {
    const response = await apiClient.get(`/student/profile`);
    const data = response.data.data;
    return data;
};
