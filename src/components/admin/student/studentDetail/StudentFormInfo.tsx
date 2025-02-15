import React from "react";
interface InfoItem {
  label: string;
  value: string;
  link?: string; // Nếu có link, giá trị sẽ được bọc trong thẻ <a>
}

interface EducationInfoProps {
  title: string;
  info: InfoItem[];
}
export default function StudentFormInfo({ title, info }: EducationInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-y-3">
        {info.map((item, index) => (
          <p key={index}>
            <span className="font-semibold">{item.label}:</span>{" "}
            {item.link ? (
              <a href={item.link} className="text-blue-600 underline">
                {item.value}
              </a>
            ) : (
              <span className="text-gray-700">{item.value}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
