import { useQuery } from '@tanstack/react-query';
import { fetchProvinces } from '../api/provinceApi';
export const useProvinces = () => {
  return useQuery({
    queryKey: ['Province'],
    queryFn: async () => fetchProvinces(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
  