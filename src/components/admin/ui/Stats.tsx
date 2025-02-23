"use client";

import { StatProps } from "@/interface/statProps";
import PieChart from "./charts/PieChart";


interface IProps {
    stats: StatProps[];
}

export default function StatsCards( { stats }: IProps) {
  return (
    <>
      <h4 className="text-gray-600">Students OverView</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-100">
        {stats.map((stat, index) => (
          <PieChart
            key={index}
            name={stat.name}

            label={stat.label}
            labelNote="Total"
            dataChart={stat.dataChart}
            backgroundColor={stat.backgroundColor}
            borderColor={stat.borderColor}
            borderWidth={1}
            position="bottom"
            />
        ))}
      </div>
    </>
  );
}
