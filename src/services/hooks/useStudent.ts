import { useQuery } from "@tanstack/react-query";
import { fetchStudentById } from "../api/studentApi";

export const useStudent= (id: number) => {
  return useQuery({
    queryKey: ["student", id],
    queryFn: async () => fetchStudentById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

