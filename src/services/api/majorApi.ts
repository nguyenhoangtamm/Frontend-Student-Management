import { MajorSchemas } from '@/schemaValidations/major.schema';
import apiClient from './apiClient';

export const fetchMajor = async () => {
  const response = await apiClient.get('/majors/get-all');
  const data = response.data.data;
  const result = MajorSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
