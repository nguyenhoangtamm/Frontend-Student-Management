
import { ProvinceSchemas } from '@/schemaValidations/province.schema';
import apiClient from './apiClient';

export const fetchProvinces = async () => {
  const response = await apiClient.get('/provinces/get-all');
  const data = response.data.data;
  const result = ProvinceSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
export const fetchProvinceById = async (id: string) => {
  const response = await apiClient.get(`/provinces/get/${id}`);
  const data = response.data.data;
  const result = ProvinceSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};
