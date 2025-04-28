import { createStudent } from './../services/api/studentApi';
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
  pagination: paginationSchema,
});

export { studentPage, studentsPagingSchema };
export type Student = z.infer<typeof studentPage>;
export type StudentsPaging = z.infer<typeof studentsPagingSchema>;

export const StudentCreateBody = z.object({
  code: z.string().max(255),
  password: z.string().min(8).optional(),
  full_name: z.string().max(255),
  gender: z.number().min(0).max(2),
  date_of_birth: z.string(),
  phone_number: z.string().max(15),
  email: z.string().email().max(255),
  class_id: z.number(),
  major_id: z.number().optional(),
  education_level: z.string().max(255).optional(),
  academic_year: z.string().min(1).optional(),
  birthplace: z.string().max(255).optional(),
  residence_status: z.number().max(255),
  current_address: z.string().max(255).optional(),
  status: z.string().max(50).optional(),
  isadmin: z.boolean().optional(),
  avatar: z.string().max(255).optional().nullable(),
  faculty: z.string().max(255).optional(),
  dormitory_id: z.number().optional().nullable(),
});

export type StudentCreateBody = z.infer<typeof StudentCreateBody>;

export const createStudentSchema = z.object({
  data: StudentCreateBody,
});
export type CreateStudentResponse = z.infer<typeof createStudentSchema>;
