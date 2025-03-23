import { useQuery } from '@tanstack/react-query';
import { fetchStudentsPaging } from '../api/studentsGetPaging';

export const useStudentsPaging = ({
  page,
  perPage,
  keyword,
  provinceId,
  districtId,
  wardId,
  residenceStatus,
}: {
  page: number;
  perPage: number;
  keyword?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  residenceStatus?: number;
}) => {
  return useQuery({
    queryKey: [
      'StudentsPaging',
      page,
      perPage,
      keyword,
      provinceId,
      districtId,
      wardId,
      residenceStatus,
    ],
    queryFn: async () =>
      fetchStudentsPaging({
        page,
        perPage,
        keyword,
        provinceId,
        districtId,
        wardId,
        residenceStatus,
      }),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
