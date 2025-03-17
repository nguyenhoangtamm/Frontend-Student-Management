import { z } from 'zod';

const studentsPagingSchema = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string().email().nullable(),
    phone: z.string().nullable(),
    provinceId: z.number().nullable(),
    districtId: z.number().nullable(),
    wardId: z.number().nullable(),
    classId: z.number().nullable(),
    majorId: z.number().nullable(),
    residenceStatus: z.string().nullable(),
    academicYear: z.string().nullable(),
});

export default studentsPagingSchema;
export type Student = z.infer<typeof studentsPagingSchema>;