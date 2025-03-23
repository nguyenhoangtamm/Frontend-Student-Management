import { z } from "zod";

export const paginationSchema = z.object({
    currentPage: z.number(),
    total: z.number(),
    perPage: z.number(),
    lastPage: z.number(),
});
