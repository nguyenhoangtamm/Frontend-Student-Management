import { useQuery } from '@tanstack/react-query';
import { fetchDistricts, fetchDistrictById } from '../api/districtApi';

export const useDistricts = ({provinceId, enabled}:{provinceId: number, enabled:boolean}) => {
  return useQuery({
    queryKey: ['Districts', provinceId],
    queryFn: async () => fetchDistricts(provinceId),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
    enabled: enabled,
  });
};

export const useDistrictById = (id: string) => {
  return useQuery({
    queryKey: ['District', id],
    queryFn: async () => fetchDistrictById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};