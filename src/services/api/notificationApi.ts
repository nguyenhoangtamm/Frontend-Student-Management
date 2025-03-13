

import { NotificationSchema } from "@/schemaValidations/notification.schema";
import apiClient from "./apiClient";



export const fetchNotification = async (slug:string) => {
    const response = await apiClient.get(`/notification/${slug}`);
    const data = response.data.data;
    const result = NotificationSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data;
}