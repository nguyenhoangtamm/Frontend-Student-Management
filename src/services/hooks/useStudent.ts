import { useQuery } from "@tanstack/react-query";
import { fetchStudent } from "../api/studentApi";

export const useStudent = () => {
    return useQuery({
        queryKey: ["student"],
        queryFn: async () => fetchStudent(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
};
