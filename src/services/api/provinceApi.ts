
import { ProvinceSchemas } from '@/schemaValidations/province.schema';
import apiClient from './apiClient';

export const fetchProvinces = async () => {
  const response = await apiClient.get('/provinces');
  const data = response.data.data;
  console.log('data', data);
  const result = ProvinceSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
