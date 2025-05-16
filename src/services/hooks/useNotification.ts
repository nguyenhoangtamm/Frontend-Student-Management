import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createNotificationApi,
  deleteNotificationApi,
  editNotificationApi,
  fetchListNotifications,
  getNotificationById,
  getNotificationByPagination,
  readNotificationApi,
  sendNotificationApi,
} from '../api/notificationApi';
import {
  CreateNotificationType,
  EditNotificationType,
} from '@/schemaValidations/notification.schema';

export const useNotificationById = ({
  id,
  enabled,
}: {
  id: number;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ['NotificationById', id],
    queryFn: async () => getNotificationById(id),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
    enabled,
  });
};

export const useListNotifications = () => {
  return useQuery({
    queryKey: ['Notifications'],
    queryFn: async () => fetchListNotifications(),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useNotificationsPaging = ({
  page,
  perPage,
  keyword,
  sortBy,
  sortOrder,
}: {
  page: number;
  perPage: number;
  keyword?: string;
  sortBy?: string;
  sortOrder?: string;
}) => {
  return useQuery({
    queryKey: [
      'NotificationsPaging',
      page,
      perPage,
      keyword,
      sortBy,
      sortOrder,
    ],
    queryFn: async () =>
      getNotificationByPagination({
        page,
        perPage,
        keyword,
      }),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });
};

export const useCreateNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (notificationData: CreateNotificationType) =>
      createNotificationApi(notificationData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Notifications'],
      });
    },
  });
};

export const useEditNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (notificationData: EditNotificationType) =>
      editNotificationApi(notificationData.id, notificationData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Notifications'],
      });
    },
  });
};

export const useDeleteNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => deleteNotificationApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Notifications'],
      });
    },
  });
};



export const useSendNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => sendNotificationApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Notifications'],
      });
    },
  });
};
// read
export const useReadNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => readNotificationApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Notifications'],
      });
    },
  });
};
