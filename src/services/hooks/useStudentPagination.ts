import { useQuery } from '@tanstack/react-query';
import { fetchStudentsPaging } from '../api/studentsGetPaging';

export const useStudentsPaging = ({
  page,
  perPage,
  keyword,
  provinceId,
  districtId,
  wardId,
}: {
  page: number;
  perPage: number;
  keyword?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
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
    ],
    queryFn: async () =>
      fetchStudentsPaging({
        page,
        perPage,
        keyword,
        provinceId,
        districtId,
        wardId,
      }),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
