"use client";

import { useState } from "react";
import {
  Filter,
  IdCard,
  User,
  School,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { Button } from "antd";

const filters = [
  { id: "dormitory_id", label: "Mã nhà trọ", icon: IdCard },
  { id: "name", label: "Tên nhà trọ", icon: User },
  { id: "location", label: "Địa chỉ", icon: School },
  { id: "type", label: "Loại phòng", icon: BookOpen },
  { id: "status", label: "Trạng thái", icon: CheckCircle },
];

export default function FilterDormitory() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>("date");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Nút mở bộ lọc */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2  text-gray-700 rounded-lg hover:bg-gray-300"
        style={{ border: "none" }}
      >
        <Filter size={18} />
      </Button>

      {/* Bộ lọc */}
      {isOpen && (
        <div className="absolute mt-2 w-80 bg-white shadow-lg rounded-xl p-4 z-10">
          <h3 className="text-gray-700 font-semibold mb-3">Add Filter</h3>
          <div className="grid grid-cols-2 gap-3">
            {filters.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedFilter(id)}
                className={`
                  flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 transition-all
                  ${
                    selectedFilter === id
                      ? "bg-purple-100 border-purple-500 text-purple-600"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }
                `}
              >
                <Icon size={20} />
                <span className="mt-1 text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
