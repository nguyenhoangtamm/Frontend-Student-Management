import { useQuery } from '@tanstack/react-query';
import { fetchMajor } from '../api/majorApi';
export const useMajor = () => {
  return useQuery({
    queryKey: ['useMajor'],
    queryFn: async () => fetchMajor(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
  