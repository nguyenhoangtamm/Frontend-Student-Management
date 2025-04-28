import { z } from 'zod';

export const MajorSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
});

export const MajorSchemas =z.array(MajorSchema);
