import { useQuery } from "@tanstack/react-query";
import {

  fetchDormitoriesPaging,
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
export const useDormitoriesPaging = ({ page, perPage }: { page: number; perPage: number }) => {
  return useQuery({
    queryKey: ["DormitoriesPaging", page, perPage],
    queryFn: async () => fetchDormitoriesPaging({page, perPage}),
      // Assuming the API supports pagination, otherwise you need to handle it manually
 
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
