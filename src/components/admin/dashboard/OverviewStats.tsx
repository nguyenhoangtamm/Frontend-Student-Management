import { CalendarIcon } from "lucide-react";

type OverviewStatsProps = {
  totalStudents: number;
  totalHostels: number;
};

const OverviewStats: React.FC<OverviewStatsProps> = ({ totalStudents, totalHostels }) => {
  return (
    <div className="bg-pink-50 p-6 rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-gray-700 font-semibold text-lg">Overview</h2>
        <p className="text-gray-700 font-semibold text-md mt-2">
          Tổng số sinh viên ngoại trú: <span className="font-bold">{totalStudents}</span>
        </p>
      </div>
      <div>
        <p className="text-gray-700 font-semibold text-md">
          Tổng số Nhà trọ: <span className="font-bold">{totalHostels}</span>
        </p>
      </div>
      <div>
        <CalendarIcon className="h-6 w-6 text-pink-500" />
      </div>
    </div>
  );
};

export default OverviewStats;
