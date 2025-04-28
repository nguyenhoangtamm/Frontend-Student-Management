export const dormitoryColumns: { key: keyof Dormito | "index"; label: string }[] = [
  { key: 'index', label: 'STT' }, // Dynamically generated index
  { key: 'code', label: 'MSSV' },
  { key: 'fullName', label: 'Họ và tên' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'provinceId', label: 'Tỉnh' },
  { key: 'districtId', label: 'Huyện' },
  { key: 'wardId', label: 'Xã' },
  { key: 'classId', label: 'Lớp' },
  { key: 'majorId', label: 'Mã ngành' },
  { key: 'residenceStatus', label: 'Trạng thái' },
  { key: 'academicYear', label: 'Năm học' },
];
