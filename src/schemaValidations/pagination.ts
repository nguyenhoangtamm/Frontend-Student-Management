import { z } from "zod";

export const paginationSchema = z.object({
    current_page: z.number(),
    total: z.number(),
    per_page: z.number(),
    last_page: z.number(),
});
