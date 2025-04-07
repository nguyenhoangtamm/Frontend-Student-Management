import { Student } from '@/interface/studentInterface';

export interface StudentField {
  key: keyof Student | 'index';
  label: string;
  option: boolean;
}


export const studentFiels: StudentField[] = [
    { key: 'code', label: 'MSSV', option: false },
    { key: 'gender', label: 'Giới tính', option: true },
    { key: 'dateOfBirth', label: 'Ngày sinh', option: false },
    { key: 'fullName', label: 'Họ và tên', option: false },
    { key: 'email', label: 'Email', option: false },
    { key: 'phone', label: 'Số điện thoại', option: false },
    { key: 'provinceId', label: 'Tỉnh', option: true },
    { key: 'districtId', label: 'Huyện', option: true },
    { key: 'wardId', label: 'Xã', option: true },
    { key: 'classId', label: 'Lớp', option: true },
    { key: 'majorId', label: 'Mã ngành', option: false },
    {
      key: 'residenceStatus',
      label: 'Trạng thái',
      option: true
    },
    { key: 'academicYear', label: 'Năm học', option: false },
  ];
  export type StudentFieldKey = StudentField['key'];
