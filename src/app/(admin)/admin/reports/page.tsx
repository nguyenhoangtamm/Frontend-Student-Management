import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const SampleTable = () => {
  const columns = [
    "ID", "Tên", "Email", "Số điện thoại", "Địa chỉ", "Công ty", "Chức vụ", "Lương",
    "Ngày sinh", "Giới tính", "Quốc tịch", "Tình trạng hôn nhân", "Số CMND", "Ngày cấp", "Nơi cấp", "Trình độ học vấn", "Chuyên ngành", "Năm kinh nghiệm"
  ];
  const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Người dùng ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `0123 456 789`,
    address: `Địa chỉ ${i + 1}`,
    company: `Công ty ${i + 1}`,
    position: `Chức vụ ${i + 1}`,
    salary: `${(i + 1) * 1000}$`,
    birthdate: `01/01/199${i}`,
    gender: i % 2 === 0 ? "Nam" : "Nữ",
    nationality: `Quốc tịch ${i + 1}`,
    maritalStatus: i % 2 === 0 ? "Độc thân" : "Đã kết hôn",
    idNumber: `123456789${i}`,
    issueDate: `01/01/200${i}`,
    issuePlace: `Nơi cấp ${i + 1}`,
    education: `Trình độ ${i + 1}`,
    major: `Chuyên ngành ${i + 1}`,
    experience: `${i} năm`
  }));

  return (
    <div className="w-full container  overflow-x-auto  mx-auto">
      <Table className="w-full  border-collapse">
        <TableHeader>
          <TableRow className="bg-gray-200 text-gray-600">
            {columns.map((col, index) => (
              <TableHead key={index} className="p-3 text-center min-w-[150px]">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="border-t">
              <TableCell className="p-3 text-center">{row.id}</TableCell>
              <TableCell className="p-3 text-center">{row.name}</TableCell>
              <TableCell className="p-3 text-center">{row.email}</TableCell>
              <TableCell className="p-3 text-center">{row.phone}</TableCell>
              <TableCell className="p-3 text-center">{row.address}</TableCell>
              <TableCell className="p-3 text-center">{row.company}</TableCell>
              <TableCell className="p-3 text-center">{row.position}</TableCell>
              <TableCell className="p-3 text-center">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SampleTable;
