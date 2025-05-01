import { DistrictSchemas } from '@/schemaValidations/district.schema';
import apiClient from './apiClient';

export const fetchDistricts = async (id: number) => {
  const response = await apiClient.get(`/districts/get-all-by-province/${id}`);

  const data = response.data.data;
  const result = DistrictSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};

export const fetchDistrictById = async (id: string) => {
  const response = await apiClient.get(`/districts/get-by-id/${id}`);
  const data = response.data.data;
  const result = DistrictSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};
