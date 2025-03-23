import { studentsPagingSchema } from '@/schemaValidations/student.schema';
import apiClient from './apiClient';

export const fetchStudentsPaging = async ({
  page,
  perPage,
  keyword,
  provinceId,
  districtId,
  wardId,
  residenceStatus,
}: {
  page: number;
  perPage: number;
  keyword?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  residenceStatus?: number;
}) => {
  const params = new URLSearchParams({
    page: page.toString(),
    perPage: perPage.toString(),
    ...(keyword && { keyword }),
    ...(provinceId && { provinceId: provinceId }),
    ...(districtId && { districtId: districtId }),
    ...(wardId && { wardId: wardId }),
    ...(residenceStatus !== undefined && { residenceStatus: residenceStatus.toString() }),
  });

  const response = await apiClient.get(
    `/students/get-paging?${params.toString()}`,
  );
  const data = response.data;
  const result = studentsPagingSchema.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
