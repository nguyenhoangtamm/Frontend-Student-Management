import { useQuery } from '@tanstack/react-query';
import { fetchWards, fetchWardById } from '../api/wardApi';

export const useWards = ({
  districtId,
  enabled,
}: {
  districtId: number;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ['Wards', districtId],
    queryFn: async () => fetchWards(districtId),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
    enabled,
  });
};

export const useWardById = (id: string) => {
  return useQuery({
    queryKey: ['Ward', id],
    queryFn: async () => fetchWardById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
