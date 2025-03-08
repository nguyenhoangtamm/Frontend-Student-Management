import { z } from "zod";

export const DashboardBody = z.object({
    code: z.string(),
    full_name: z.string(),
    gender: z.string(),
    date_of_birth: z.string(),
    birthplace: z.string(),
    faculty: z.string(),
    email: z.string().email(),
    avatar: z.string().url(),
    unreadNotifications: z.number(),
    offCampusInfo: z.object({
        name: z.string(),
        room: z.string(),
        status: z.string(),
        updated_at: z.string(),
        address: z.string(), 
    }),
    notifications: z.array(
        z.object({
            title: z.string(),
            slug: z.string(),
            content: z.string(),
            date: z.string(),
            type: z.string(),
        })
    ),
});
export type DashboardBodyType = z.TypeOf<typeof DashboardBody>;

export const LayoutBody = z.object({
    full_name: z.string(),
    avatar: z.string().url(),
    notifications: z.array(
        z.object({
            title: z.string(),
            slug: z.string(),
        })
    ),
});

export type LayoutBodyType = z.TypeOf<typeof LayoutBody>;
