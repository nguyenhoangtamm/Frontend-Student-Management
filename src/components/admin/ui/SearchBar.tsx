'use client'
import { FaSearch } from "react-icons/fa";
import FilterNotification from "./Filter";
import { IdCard, User, School, CheckCircle, BookOpen } from "lucide-react";
interface Props {
  name: string;
}
const filters = [
  { id: "dormitory_id", label: "Mã nhà trọ", icon: IdCard },
  { id: "name", label: "Tên nhà trọ", icon: User },
  { id: "location", label: "Địa chỉ", icon: School },
  { id: "type", label: "Loại phòng", icon: BookOpen },
  { id: "status", label: "Trạng thái", icon: CheckCircle },
];
export default function SearchBar({ name }: Props) {
  return (
    <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
      
      <FilterNotification filter={filters} />
      <input
        type="text"
        placeholder={`Search ${name}...`}
        className="w-full outline-none"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
}
