import { z } from 'zod';
export const NotificationSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  date: z.string(),
  views: z.number(),
  type: z.string(),
});
export type NotificationType = z.TypeOf<typeof NotificationSchema>;
