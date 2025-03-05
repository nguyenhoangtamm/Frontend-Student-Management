import { z } from "zod";

export const LoginBody = z
    .object({
        username: z.string().min(1),
        password: z.string().min(6).max(100),
    })
    .strict();
export type LoginBodyType = z.TypeOf<typeof LoginBody>;
