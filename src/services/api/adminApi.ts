import { adminStatusSchema, studentsStatisticsSchema } from "@/schemaValidations/admin.schema";
import apiClient from "./apiClient";

export const fetchAdminStatus = async () => {
    const response = await apiClient.get(`/admin/get-status`);
    const data = response.data.data;
    const result = adminStatusSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data;
};

export const fetchStudentsStatistics = async () => {
    const response = await apiClient.get(`/admin/students/get-statistics`);
    const data = response.data.data;
    const result = studentsStatisticsSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data;
};

