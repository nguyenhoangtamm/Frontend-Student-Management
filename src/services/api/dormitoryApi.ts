import {
  detailDormitory,
  EditDormitoryType,
} from './../../schemaValidations/dormitory.schema';
import {
  CreateDormitoryType,
  DormitoriesName,
  DormitoriesPaginationSchema,
  Dormitory,
  DormitoryReviews,
} from '@/schemaValidations/dormitory.schema';
import apiClient from './apiClient';

export const fetchDormitory = async () => {
  const response = await apiClient.get('/domainaries');
  const data = response.data.data;
  const result = DormitoriesPaginationSchema.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};

export const fetchDormitoryBySlug = async (slug: string) => {
  const response = await apiClient.get(`/dormitories/get-by-slug/${slug}`);
  const data = response.data.data;
  const result = Dormitory.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }

  return result.data;
};
export const fetchListDormitories = async () => {
  const response = await apiClient.get('/dormitories/get-all');
  const data = response.data.data;

  const result = DormitoriesName.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};
export const fetchDormitoriesPaging = async ({
  page,
  perPage,
  keyword,
  provinceId,
  districtId,
  wardId,
  rating,
  price,
  sortBy,
  sortOrder,
}: {
  page: number;
  perPage: number;
  keyword?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  rating?: number;
  price?: number;
  sortBy?: string;
  sortOrder?: string;
}) => {
  const params = new URLSearchParams({
    pageNumber: page.toString(),
    pageSize: perPage.toString(),
    ...(keyword && { keyword }),
    ...(provinceId && { provinceId }),
    ...(districtId && { districtId }),
    ...(wardId && { wardId }),
    ...(rating !== undefined && { rating: rating.toString() }),
    ...(price !== undefined && { price: price.toString() }),
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
  });

  const response = await apiClient.get(
    `/dormitories/pagination?${params.toString()}`,
  );
  const data = response.data.data;
  const result = DormitoriesPaginationSchema.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};

export const fetchReviewsOfDormitory = async (dormitoryId: number) => {
  const response = await apiClient.get(`/dormitories/${dormitoryId}/reviews`);
  const data = response.data.data;
  const result = DormitoryReviews.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data ?? [];
};

export const createDormitoryApi = async (data: CreateDormitoryType) => {
  const response = await apiClient.post('/dormitories/create', data);
  const result = response.data.data;
  return result;
};
export const editDormitoryApi = async (id: number, data: EditDormitoryType) => {
  const response = await apiClient.post(`/dormitories/edit/${id}`, data);
  const result = response.data.data;
  return result;
};
export const deleteDormitoryApi = async (id: number) => {
  const response = await apiClient.post(`/dormitories/delete/${id}`);
  const result = response.data.data;
  return result;
};
export const getDormitoryById = async (id: number) => {
  const response = await apiClient.get(`/dormitories/get-by-id/${id}`);
  const data = response.data.data;
  const result = detailDormitory.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};
export const fetchAllDormitory = async () => {
  const response = await apiClient.get('/dormitories/get-all');
  const data = response.data.data;
  const result = DormitoriesName.safeParse(data);
  if (!result.success) {
    console.error('Lỗi validate dữ liệu:', result.error.format());
    throw new Error('Dữ liệu không hợp lệ');
  }
  return result.data;
};
