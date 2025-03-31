import { Student } from '@/schemaValidations/student.schema';
export interface StudentField {
  key: keyof Student | 'index';
  label: string;
  option?:string[];
}
export const studentFiels: StudentField[] = [
  { key: 'code', label: 'MSSV' },
  { key: 'gender', label: 'Giới tính' , option:['Nam','Nữ','Khác']},
  { key: 'dateOfBirth', label: 'Ngày sinh' },
  { key: 'fullName', label: 'Họ và tên' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'provinceId', label: 'Tỉnh' },
  { key: 'districtId', label: 'Huyện' },
  { key: 'wardId', label: 'Xã' },
  { key: 'classId', label: 'Lớp' },
  { key: 'majorId', label: 'Mã ngành' },
  { key: 'residenceStatus', label: 'Trạng thái', option:['Ngoại trú', 'Nội trú', 'Ở nhà', 'Khác'] },
  { key: 'academicYear', label: 'Năm học' },
];
export type StudentFieldKey = StudentField['key'];
