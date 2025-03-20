import { z } from 'zod';

const adminStatusSchema = z.object({
  students: z.number(),
  dormitories: z.number(),
  confirmedStudents: z.number(),
  unconfirmedStudents: z.number(),
});

export default adminStatusSchema;
