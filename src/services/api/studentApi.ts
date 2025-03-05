import apiClient from "./apiClient";

export const fetchDashboard = async () => {
    const response = await apiClient.get(`/student/dashboard`);
    const data = response.data.data;
    return data;
};
export const fetchHeader = async () => {
    console.log("fetchHeader");
    const response = await apiClient.get(`/student/header-info`);
    const data = response.data;
    return data;
};
