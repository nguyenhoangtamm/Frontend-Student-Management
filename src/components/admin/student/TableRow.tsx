import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import Image from "next/image";

interface StudentRowProps {
  student: {
    status: "Active" | "Down" | "Pending";
    name: string;
    id: string;
    class: string;
    avatar: string;
  };
}

const TableRow: React.FC<StudentRowProps> = ({ student }) => {
  return (
    <tr className="border-b">
      <td><input type="checkbox" /></td>
      <td><StatusBadge status={student.status} /></td>
      <td className="flex items-center">
        {/* <Image src={student.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" /> */}
        {student.name}
      </td>
      <td>{student.id}</td>
      <td>{student.class}</td>
      <td><ActionMenu /></td>
    </tr>
  );
};

export default TableRow;
