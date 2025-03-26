import { useQuery } from '@tanstack/react-query';
import { fetchAdminStatus, fetchStudentsStatistics } from '../api/adminApi';

export const useAdminStats = () => {
  return useQuery({
    queryKey: ['AdminStatus'],
    queryFn: async () => fetchAdminStatus(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useStudentsStatistics = () => {
  return useQuery({
    queryKey: ['StudentsStatistics'],
    queryFn: async () => fetchStudentsStatistics(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
