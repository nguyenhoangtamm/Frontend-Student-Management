import { useQuery } from '@tanstack/react-query';
import { fetchStudentClass } from '../api/studentClassApi';
export const useStudentClass = () => {
  return useQuery({
    queryKey: ['StudentClass'],
    queryFn: async () => fetchStudentClass(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
  