import { DormitoriesName, DormitoriesPaginationSchema, Dormitory, DormitoryReviews } from "@/schemaValidations/dormitory.schema";
import apiClient from "./apiClient";

export const fetchDormitory = async () => {
    const response = await apiClient.get("/domainaries");
    const data = response.data.data;
    const result = DormitoriesPaginationSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
};

export const fetchDormitoryBySlug = async (slug: string) => {
    const response = await apiClient.get(`/dormitory/${slug}`);
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
export const fetchDormitoriesPaging = async ({ page, perPage, keyword, provinceId, districtId, wardId, rating, price }: { page: number; perPage: number; keyword?: string; provinceId?: string; districtId?: string; wardId?: string; rating?: number; price?: number }) => {
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString(),
        ...(keyword && { keyword }),
        ...(provinceId && { province_id: provinceId }),
        ...(districtId && { district_id: districtId }),
        ...(wardId && { ward_id: wardId }),
        ...(rating !== undefined && { rating: rating.toString() }),
        ...(price !== undefined && { price: price.toString() }),
    });

    const response = await apiClient.get(`/dormitories/paging?${params.toString()}`);
    const data = response.data.data;
    const result = DormitoriesPaginationSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
}

export const fetchReviewsOfDormitory = async (dormitoryId: number) => {
    const response = await apiClient.get(`/dormitory/${dormitoryId}/reviews`);
    const data= response.data.data;
    console.log('data', data);
    const result = DormitoryReviews.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
}