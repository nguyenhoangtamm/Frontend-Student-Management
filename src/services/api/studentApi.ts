import { DashboardBody, LayoutBody } from "@/schemaValidations/dashboard.schema";
import apiClient from "./apiClient";
import { StudentProfileBody } from "@/schemaValidations/profile.schema";
import { ContractSchema } from "@/schemaValidations/contract.schema";

export async function fetchDashboard() {
    const response = await apiClient.get(`/student/dashboard`);
    const data = response.data.data;
    const result = DashboardBody.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    if(result.data){
        return result.data;
    }

    }
export const fetchHeader = async () => {
    const response = await apiClient.get(`/student/header-info`);
    const data = response.data.data;
    const result = LayoutBody.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    if (result.data) {
        return result.data;
    }
}
export const fetchProfile = async () => {
    const response = await apiClient.get(`/student/profile`);
    const data = response.data.data;
    const result = StudentProfileBody.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data;
};
export const fetchContract = async () => {
    const response = await apiClient.get(`/student/contract`);
    const data = response.data.data;
    const result = ContractSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data;
};
