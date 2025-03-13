import { useQuery } from '@tanstack/react-query';
import { fetchNotification } from '../api/notificationApi';
export const useNotification = (slug:string) => {
    return useQuery({
        queryKey: ['Notification', slug],
        queryFn: async () => fetchNotification(slug),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
    }
  