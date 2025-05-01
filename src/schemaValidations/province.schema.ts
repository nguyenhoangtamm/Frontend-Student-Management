import { z } from 'zod';

export const ProvinceSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.number(),
});

export const ProvinceSchemas =z.array(ProvinceSchema);
