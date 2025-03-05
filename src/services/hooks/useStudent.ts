import { useQuery } from "@tanstack/react-query";
import { fetchDashboard, fetchHeader } from "../api/studentApi";

export const useHeader = () => {
    return useQuery({
        queryKey: ["header"],
        queryFn: async () => fetchHeader(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
}

export const useStudent = () => {
    return useQuery({
        queryKey: ["student"],
        queryFn: async () => fetchDashboard(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
};