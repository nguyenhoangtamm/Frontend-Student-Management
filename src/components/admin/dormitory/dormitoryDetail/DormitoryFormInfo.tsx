"use client";
import { Save } from "lucide-react";
import React from "react";
import { MdEdit } from "react-icons/md";
interface InfoItem {
  label: string;
  value: string;
  link?: string; // Nếu có link, giá trị sẽ được bọc trong thẻ <a>
}

interface EducationInfoProps {
  title: string;
  info: InfoItem[];
}
export default function DormitoryFormInfo({ title, info }: EducationInfoProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const handleEdit = () => {
    if (isEditing) {
      // Save data
    }
    setIsEditing(!isEditing);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold border-b pb-2">{title}</h2>
        {isEditing ? (
          <Save
            className="text-gray-500 cursor-pointer"
            size={30}
            onClick={handleEdit}
          />
        ) : (
          <MdEdit
            className="text-gray-500 cursor-pointer"
            size={30}
            onClick={handleEdit}
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-y-3">
        {info.map((item, index) => (
          <p key={index}>
            <span className="font-semibold">{item.label}:</span>{" "}
            {item.link ? (
              <a href={item.link} className="text-blue-600 underline">
                {item.value}
              </a>
            ) : isEditing ? (
              <input
                type="text"
                defaultValue={item.value}
                className="border rounded-md p-1"
              />
            ) : (
              <span className="text-gray-700">{item.value}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
