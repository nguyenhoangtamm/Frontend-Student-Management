import { z } from 'zod';
import { paginationSchema } from './pagination';

const studentPage = z.object({
  id: z.number(),
  code: z.string(),
  fullName: z.string(),
  gender: z.number(),
  dateOfBirth: z.string().nullable(),
  email: z.string().email().nullable(),
  phoneNumber: z.string().nullable(),
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
  code: z.string().max(255).nonempty('Mã sinh viên là bắt buộc'),
  fullName: z.string().max(255).nonempty('Họ và tên là bắt buộc'),
  gender: z
    .number()
    .min(0, 'Giới tính phải lớn hơn hoặc bằng 0')
    .max(2, 'Giới tính phải nhỏ hơn hoặc bằng 2'),
  dateOfBirth: z.string().nonempty('Ngày sinh là bắt buộc'),
  phoneNumber: z.string().max(15).nonempty('Số điện thoại là bắt buộc'),
  email: z
    .string()
    .email('Định dạng email không hợp lệ')
    .max(255)
    .nonempty('Email là bắt buộc'),
  classId: z.number().nonnegative('ID lớp phải là số không âm'),
  majorId: z.number().optional(),
  academicYear: z.string().min(1).optional(),
  provinceId: z.number().nonnegative('ID tỉnh phải là số không âm'),
});
export type CreateStudentType = z.infer<typeof createStudentSchema>;

export const editStudentSchema = z.object({
  id: z.number(),
  code: z.string().max(255).nonempty('Mã sinh viên là bắt buộc'),
  fullName: z.string().max(255).nonempty('Họ và tên là bắt buộc'),
  gender: z
    .number()
    .min(0, 'Giới tính phải lớn hơn hoặc bằng 0')
    .max(2, 'Giới tính phải nhỏ hơn hoặc bằng 2'),
  dateOfBirth: z.string().nonempty('Ngày sinh là bắt buộc'),
  phoneNumber: z.string().max(15).nonempty('Số điện thoại là bắt buộc'),
  email: z
    .string()
    .email('Định dạng email không hợp lệ')
    .max(255)
    .nonempty('Email là bắt buộc'),
  classId: z.number().nonnegative('ID lớp phải là số không âm'),
  majorId: z.number().optional(),
  academicYear: z.string().min(1).optional(),
  provinceId: z.number().nonnegative('ID tỉnh phải là số không âm'),
});

export type EditStudentType = z.infer<typeof editStudentSchema>;

export const detailStudent = z.object({
  id: z.number(),
  code: z.string(),
  fullName: z.string(),
  gender: z.number(),
  dateOfBirth: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  classId: z.number(),
  majorId: z.number().optional(),
  academicYear: z.string().optional(),
  provinceId: z.number().optional().nullable(),
  districtId: z.number().optional().nullable(),
  wardId: z.number().nullable(),
  residenceStatus: z.number(),
  fullAddress: z.string().optional().nullable(),
});
