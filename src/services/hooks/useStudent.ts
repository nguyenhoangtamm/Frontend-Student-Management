import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createStudent,
  fetchContract,
  fetchDashboard,
  fetchHeader,
  fetchProfile,
} from '../api/studentApi';
import { CreateStudentType } from '@/schemaValidations/student.schema';

export function useHeader() {
  return useQuery({
    queryKey: ['header'],
    queryFn: fetchHeader,
    staleTime: 1000 * 60 * 5, // Dữ liệu cũ hơn 5 phút mới fetch lại
    refetchOnWindowFocus: false, // Không refetch khi chuyển tab
  });
}

export const useDashboard = () => {
  return useQuery({
    queryKey: ['student'],
    queryFn: async () => fetchDashboard(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
export const useNotifications = () => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: async () => fetchDashboard(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => fetchProfile(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
export const useContract = () => {
  return useQuery({
    queryKey: ['contract'],
    queryFn: async () => fetchContract(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};
// export const useCreateStudent = () => {
//   return useMutation({
//     mutationFn: async (studentData: StudentCreateBody) =>
//       createStudent(studentData),
//   });
// };

export const useCreateStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (studentData: CreateStudentType) =>
      createStudent(studentData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
    },
  });
};
