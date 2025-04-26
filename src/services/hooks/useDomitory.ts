import { useQuery } from '@tanstack/react-query';
import {
  fetchDormitoriesPaging,
  fetchDormitoryBySlug,
  fetchListDormitories,
  fetchReviewsOfDormitory,
} from '../api/dormitoryApi';

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
