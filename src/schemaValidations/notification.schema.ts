import { z } from 'zod';
import { paginationSchema } from './pagination';
export const NotificationSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  views: z.number(),
  type: z.number(),
  send: z.boolean(),
});
export type NotificationType = z.TypeOf<typeof NotificationSchema>;



export const createNotificationSchema = z.object({
  title: z.string().max(255).nonempty('Tiêu đề là bắt buộc'),
  content: z.string().max(255).nonempty('Nội dung là bắt buộc'),
  type: z.number().max(255).refine(value => value !== null && value !== undefined, {
    message: 'Loại thông báo là bắt buộc',
  }),

});
export type CreateNotificationType = z.infer<typeof createNotificationSchema>;

export const editNotificationSchema = z.object({
  id: z.number(),
  title: z.string().max(255).nonempty('Tiêu đề là bắt buộc'),
  content: z.string().max(255).nonempty('Nội dung là bắt buộc'),
  type: z.number().max(255).refine(value => value !== null && value !== undefined, {
    message: 'Loại thông báo là bắt buộc',
  }),
});
export type EditNotificationType = z.infer<typeof editNotificationSchema>;

export const detailNotification = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  type: z.number(),
  views: z.number(),
  send: z.boolean(),
});
export type DetailNotificationType = z.infer<typeof detailNotification>;


export const NotificationPaginationSchema = z.object({
  data: z.array(NotificationSchema),
  pagination: paginationSchema,
});
export type NotificationPaginationType = z.infer<typeof NotificationPaginationSchema>;
