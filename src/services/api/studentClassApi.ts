import { StudentClassSchemas } from '@/schemaValidations/studentClass.schema';
import apiClient from './apiClient';

export const fetchStudentClass = async () => {
  const response = await apiClient.get('/studentClasses/get-all');
  const data = response.data.data;
  const result = StudentClassSchemas.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
