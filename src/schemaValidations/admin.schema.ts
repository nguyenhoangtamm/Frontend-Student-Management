import { z } from 'zod';

const adminStatusSchema = z.object({
  students: z.number(),
  dormitories: z.number(),
  confirmedStudents: z.number(),
  unconfirmedStudents: z.number(),
});

const studentsStatisticsSchema = z.object({
  confirmedStudents: z.number(),
  unconfirmedStudents: z.number(),
  atHomeStudents: z.number(),
  otherStudents: z.number(),
});

export { adminStatusSchema, studentsStatisticsSchema };
export type AdminStatus = z.infer<typeof adminStatusSchema>;
export type StudentsStatistics = z.infer<typeof studentsStatisticsSchema>;
