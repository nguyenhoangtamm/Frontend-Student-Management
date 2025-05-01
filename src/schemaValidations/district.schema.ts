import { z } from 'zod';

export const DistrictSchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.number(),
    provinceId: z.number(),
});

export const DistrictSchemas = z.array(DistrictSchema);
