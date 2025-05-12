import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createDormitoryApi,
  deleteDormitoryApi,
  editDormitoryApi,
  fetchAllDormitory,
  fetchDormitoriesPaging,
  fetchDormitoryBySlug,
  fetchListDormitories,
  fetchReviewsOfDormitory,
  getDormitoryById,
} from '../api/dormitoryApi';
import {
  CreateDormitoryType,
  EditDormitoryType,
} from '@/schemaValidations/dormitory.schema';

export const useDormitory = (slug: string) => {
  return useQuery({
    queryKey: ['Dormitory', slug],
    queryFn: async () => fetchDormitoryBySlug(slug),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useListDormitoriesName = () => {
  return useQuery({
    queryKey: ['Dormitories'],
    queryFn: async () => fetchListDormitories(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
export const useDormitoriesPaging = ({
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
  return useQuery({
    queryKey: [
      'DormitoriesPaging',
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
    ],
    queryFn: async () =>
      fetchDormitoriesPaging({
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
      }),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
export const useReviewsOfDormitory = (id: number) => {
  return useQuery({
    queryKey: ['ReviewsOfDormitory', id],
    queryFn: async () => fetchReviewsOfDormitory(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
export const useCreateDormitoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dormitoryData: CreateDormitoryType) =>
      createDormitoryApi(dormitoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Dormitories'],
      });
    },
  });
};
export const useEditDormitoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dormitoryData: EditDormitoryType) =>
      editDormitoryApi(dormitoryData.id, dormitoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Dormitories'],
      });
    },
  });
};

export const useDeleteDormitoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => deleteDormitoryApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Dormitories'],
      });
    },
  });
};

export const useDormitoryById = ({
  id,
  enabled,
}: {
  id: number;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ['DormitoryById', id],
    queryFn: async () => getDormitoryById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
    enabled,
  });
};

export const useGetAllDormitory = () => {
  return useQuery({
    queryKey: ['Dormitories'],
    queryFn: async () => fetchAllDormitory(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
  