import { z } from 'zod';

export const StudentClassSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
});

export const StudentClassSchemas =z.array(StudentClassSchema);
