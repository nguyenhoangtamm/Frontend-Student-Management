import { studentsPagingSchema } from "@/schemaValidations/student.schema";
import apiClient from "./apiClient";

export const fetchStudentsPaging = async ({ page, perPage, keyword, provinceId, districtId, wardId }: { page: number; perPage: number; keyword?: string; provinceId?: string; districtId?: string; wardId?: string; }) => {
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString(),
        ...(keyword && { keyword }),
        ...(provinceId && { province_id: provinceId }),
        ...(districtId && { district_id: districtId }),
        ...(wardId && { ward_id: wardId }),
    });

    const response = await apiClient.get(`/students/get-paging?${params.toString()}`);
    const data = response.data;
    const result = studentsPagingSchema.safeParse(data);
    if (!result.success) {
        console.error("Lỗi validate dữ liệu:", result.error.format());
        throw new Error("Dữ liệu không hợp lệ");
    }
    return result.data ?? [];
}