import { z } from "zod";

export const DashboardBody = z.object({
    code: z.string(),
    fullName: z.string(),
    gender: z.string(),
    dateOfBirth: z.string(),
    birthplace: z.string(),
    faculty: z.string(),
    email: z.string().email(),
    avatar: z.string(),
    unreadNotifications: z.number(),
    offCampusInfo: z.object({
        name: z.string(),
        room: z.string(),
        status: z.string(),
        updatedAt: z.string(),
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
    fullName: z.string(),
    avatar: z.string(),
    notifications: z.array(
        z.object({
            id: z.number(),
            title: z.string(),
            slug: z.string(),
        })
    ),
});

export type LayoutBodyType = z.TypeOf<typeof LayoutBody>;
