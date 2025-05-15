import { Student } from '@/schemaValidations/student.schema';
export const studentColumns: { key: keyof Student | 'index'; label: string }[] =
  [
    { key: 'index', label: 'STT' }, // Dynamically generated index
    { key: 'code', label: 'MSSV' },
    { key: 'fullName', label: 'Họ và tên' },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Số điện thoại' },
    // { key: 'provinceId', label: 'Tỉnh' },
    // { key: 'districtId', label: 'Huyện' },
    // { key: 'wardId', label: 'Xã' },
    { key: 'fullAddress', label: 'Địa chỉ' },
    { key: 'classId', label: 'Lớp' },
    { key: 'majorId', label: 'Ngành' },
    { key: 'residenceStatus', label: 'Trạng thái' },
    { key: 'academicYear', label: 'Năm học' },
  ];
