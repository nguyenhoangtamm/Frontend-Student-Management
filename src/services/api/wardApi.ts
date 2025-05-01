import { WardSchemas } from '@/schemaValidations/ward.chema';
import apiClient from './apiClient';

export const fetchWards = async (districtId: number) => {
  const response = await apiClient.get(`/wards/get-all-by-district/${districtId}`);
  const data = response.data.data;
  const result = WardSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};

export const fetchWardById = async (id: string) => {
  const response = await apiClient.get(`/wards/get-by-id/${id}`);
  const data = response.data.data;
  const result = WardSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};
