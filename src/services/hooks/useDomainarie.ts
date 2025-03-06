import { useQuery } from "@tanstack/react-query";
import {

  fetchDormitoryById,
  fetchListDormitories,
  
} from "../api/domainarieApi";

export const useDormitory = (id: number) => {
  return useQuery({
    queryKey: ["Dormitory", id],
    queryFn: async () => fetchDormitoryById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useListDormitoriesName = () => {
  return useQuery({
    queryKey: ["Dormitories"],
    queryFn: async () => fetchListDormitories(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
