import { z } from 'zod';

export const WardSchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.number(),
    districtId: z.number(),
});

export const WardSchemas = z.array(WardSchema);
