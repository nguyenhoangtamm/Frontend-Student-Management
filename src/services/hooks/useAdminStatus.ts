import { useQuery } from "@tanstack/react-query";
import { fetchAdminStatus } from "../api/adminApi";

export const useAdminStats = () => {
    return useQuery({
      queryKey: ['AdminStatus'],
      queryFn: async () => fetchAdminStatus(),
      staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
  }