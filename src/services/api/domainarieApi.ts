import { DormitoriesName, DormitoriesPaginationSchema, Dormitory } from "@/schemaValidations/dormitory.schema";
import { HousingApi } from "../interface/housingInterface";
import apiClient from "./apiClient";
import exp from "constants";

const renameLongitudeField = (data: HousingApi) => {
    if (Array.isArray(data)) {
        return data.map((item) => {
            const { longitude, latitude, ...rest } = item;
            return {
                ...rest,
                long: longitude,
                lat: latitude,
            };
        });
    } else {
        const { longitude, latitude, ...rest } = data;
        return {
            ...rest,
            long: longitude,
            lat: latitude,
        };
    }
};

export const fetchDomainarie = async () => {
    const response = await apiClient.get("/domainaries");
    const data = renameLongitudeField(response.data);

    return data ?? [];
};

export const fetchDormitoryById = async (id: number) => {
    const response = await apiClient.get(`/dormitory/${id}`);
    const data = response.data.data;
    const result = Dormitory.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }

    return result.data;
};
export const fetchListDormitories = async () => {
    const response = await apiClient.get("/dormitory/list-name");
    const data = response.data.data;

    const result = DormitoriesName.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
};
export const fetchDormitoriesPaging = async ({ page, perPage }: { page: number; perPage: number }) => {
    const response = await apiClient.get(`/dormitories/paging?page=${page}&per_page=${perPage}`);
    const data = response.data.data;
    const result = DormitoriesPaginationSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
}
