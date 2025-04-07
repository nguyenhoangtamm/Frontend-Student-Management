import { z } from 'zod';

export const ProvinceSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ProvinceSchemas = z.object({
  provinces: z.array(ProvinceSchema),
});
