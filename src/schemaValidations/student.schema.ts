import { z } from 'zod';
import { paginationSchema } from './pagination';

const studentPage = z.object({
    id: z.number(),
    code: z.string(),
    fullName: z.string(),
    gender: z.number(),
    dateOfBirth: z.string().nullable(),
    email: z.string().email().nullable(),
    phone: z.string().nullable(),
    provinceId: z.number().nullable(),
    districtId: z.number().nullable(),
    wardId: z.number().nullable(),
    classId: z.number().nullable(),
    majorId: z.number().nullable(),
    residenceStatus: z.number().nullable(),
    academicYear: z.string().nullable(),
});

const studentsPagingSchema = z.object({
    data: z.array(studentPage),
    pagination: paginationSchema
}); 

export { studentPage, studentsPagingSchema };
export type Student = z.infer<typeof studentPage>;
export type StudentsPaging = z.infer<typeof studentsPagingSchema>;
