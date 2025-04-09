import {
  DashboardBody,
  LayoutBody,
} from '@/schemaValidations/dashboard.schema';
import apiClient from './apiClient';
import { StudentProfileBody } from '@/schemaValidations/profile.schema';
import { ContractSchema } from '@/schemaValidations/contract.schema';
import { StudentCreateBody } from '@/schemaValidations/student.schema';

export async function fetchDashboard() {
  const response = await apiClient.get(`/students/dashboard`);
  const data = response.data.data;
  const result = DashboardBody.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error(
      `Dữ liệu không hợp lệ: ${JSON.stringify(result.error.format(), null, 2)}`,
    );
  }
  if (result.data) {
    return result.data;
  }
}
export const fetchNotifications = async () => {
  const response = await apiClient.get(`/students/notifications`);
  const data = response.data.data;
  const result = data;
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  if (result.data) {
    return result.data;
  }
};
export const fetchHeader = async () => {
  const response = await apiClient.get(`/students/header-info`);
  const data = response.data.data;
  const result = LayoutBody.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  if (result.data) {
    return result.data;
  }
};
export const fetchProfile = async () => {
  const response = await apiClient.get(`/students/profile`);
  const data = response.data.data;
  const result = StudentProfileBody.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error(
      `Dữ liệu không hợp lệ: ${JSON.stringify(result.error.format(), null, 2)}`,
    );
  }
  return result.data;
};
export const fetchContract = async () => {
  const response = await apiClient.get(`/students/contract`);
  const data = response.data.data;
  const result = ContractSchema.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};

export const createStudent = async (studentData: StudentCreateBody) => {
  const response = await apiClient.post(`/students`, studentData);
  const data = response.data.data;
  return data;
};
