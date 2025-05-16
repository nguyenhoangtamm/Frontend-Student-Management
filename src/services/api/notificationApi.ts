// Removed duplicate import of getNotificationById
import {
    CreateNotificationType, 
    EditNotificationType, 
    NotificationPaginationSchema, 
    detailNotification 
} from "@/schemaValidations/notification.schema";
import apiClient from "./apiClient";

// Get all Notifications API
export const fetchListNotifications = async () => {
    const response = await apiClient.get('/notifications');
    const data = response.data.data;
    const result = detailNotification.safeParse(data);
    if (!result.success) {
        console.error('Validation error:', JSON.stringify(result.error.format(), null, 2));
        throw new Error(`Invalid data: ${JSON.stringify(result.error.format(), null, 2)}`);
    }
    return result.data ?? [];
}

// Create Notification API
export const createNotificationApi = async (data: CreateNotificationType) => {
    const response = await apiClient.post('/notifications/create', data);
    const result = response.data.data;
    return result;
};

// Edit Notification API
export const editNotificationApi = async (id: number, data: EditNotificationType) => {
    const response = await apiClient.post(`/notifications/edit/${id}`, data);
    const result = response.data.data;
    return result;
};

// Delete Notification API
export const deleteNotificationApi = async (id: number) => {
    const response = await apiClient.post(`/notifications/delete/${id}`);
    const result = response.data.data;
    return result;
};
export const sendNotificationApi = async (id: number) => {
    const response = await apiClient.post(`/notifications/send/${id}`);
    const result = response.data.data;
    return result;
};

// Get Notification by ID API
export const getNotificationById = async (id: number) => {
    const response = await apiClient.get(`/notifications/get-by-id/${id}`);
    const data = response.data.data;
    const result = detailNotification.safeParse(data);
    if (!result.success) {
        console.error('Validation error:', result.error.format());
        throw new Error('Invalid data');
    }
    return result.data;
};

export const getNotificationByPagination = async ({
    page,
    perPage,
    keyword,
}: {
    page: number;
    perPage: number;
    keyword?: string;
}) => {
    const params = new URLSearchParams({
        pageNumber: page.toString(),
        pageSize: perPage.toString(),
        ...(keyword && { keyword }),
    });

    const response = await apiClient.get(
        `/notifications/get-paging?${params.toString()}`,
    );
    const data = response.data.data;
    const result = NotificationPaginationSchema.safeParse(data);
    if (!result.success) {
        console.error('Validation error:', result.error.format());
        throw new Error('Invalid data');
    }
    return result.data ?? [];
}
// Read Notification API
export const readNotificationApi = async (id: number) => {
    const response = await apiClient.post(`/notifications/read/${id}`);
    const result = response.data.data;
    return result;
}