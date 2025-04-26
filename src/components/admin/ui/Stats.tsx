"use client";

import { StatProps } from "@/interface/statProps";
import PieChart from "./charts/PieChart";

interface IProps {
  stats: StatProps[];
}

export default function StatsCards({ stats }: any) {
  const conunt = stats.length;
  if (conunt === 0) return null;
  return (
    <>
      <div className="flex flex-wrap justify-around gap-4 p-6 bg-gray-100 ">
        {stats.map((stat, index) => {
            const size = stats.length >= 3 ? 200 : 400;
            return (
            <PieChart
              key={index}
              name={stat.name}
              label={stat.label}
              labelNote="Total"
              dataChart={stat.dataChart}
              backgroundColor={stat.backgroundColor}
              borderColor={stat.borderColor}
              borderWidth={1}
              position={stat.position}
              size={size}
            />
            );
        })}
      </div>
    </>
  );
}
