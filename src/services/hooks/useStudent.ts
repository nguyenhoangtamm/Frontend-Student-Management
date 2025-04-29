import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createStudent,
  deleteStudent,
  editStudent,
  fetchContract,
  fetchDashboard,
  fetchHeader,
  fetchProfile,
  fetchStudentById,
} from '../api/studentApi';
import {
  CreateStudentType,
  EditStudentType,
} from '@/schemaValidations/student.schema';

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

export const useDeleteStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (studentId: number) => deleteStudent(studentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
    },
  });
};

export const useEditStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (studentData: EditStudentType) =>
      editStudent(studentData.id, studentData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
    },
  });
};
export const useDetailStudent = ({
  studentId,
  enabled,
}: {
  studentId: number;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ['student', studentId],
    queryFn: async () => fetchStudentById(studentId),
    enabled,
  });
};
