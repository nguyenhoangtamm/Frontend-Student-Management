import { useQuery } from "@tanstack/react-query";
import { fetchDashboard, fetchHeader, fetchProfile } from "../api/studentApi";

export function useHeader() {
    return useQuery({
        queryKey: ["header"],
        queryFn: fetchHeader,
        staleTime: 1000 * 60 * 5, // Dữ liệu cũ hơn 5 phút mới fetch lại
        refetchOnWindowFocus: false, // Không refetch khi chuyển tab
    });
}

export const useStudent = () => {
    return useQuery({
        queryKey: ["student"],
        queryFn: async () => fetchDashboard(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
};

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => fetchProfile(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
};
