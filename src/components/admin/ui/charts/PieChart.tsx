"use client"; // Cần thiết nếu dùng Next.js (App Router)

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);
interface IProps {
  name: string;
  label: string[];
  labelNote: string;
  dataChart: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
  position?: "top" | "left" | "bottom" | "right" | "center" | "chartArea";
  size?:number;
}

export default function PieChart({
  name,
  label,
  labelNote,
  dataChart,
  backgroundColor,
  borderColor,
  borderWidth,
  position,
  size,
}: IProps) {
  const count = label.length;
  if (count === 0) return null;
  const generateColors = (count: number, opacity: number) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors.push(`rgba(${r}, ${g}, ${b}, ${opacity})`);
    }
    return colors;
  };

  const data = {
    labels: label,
    datasets: [
      {
        label: labelNote,
        data: dataChart, // Số lượng từng nhóm
        backgroundColor: backgroundColor
          ? backgroundColor
          : generateColors(count, 0.6),
        borderColor: borderColor ? borderColor : generateColors(count, 1),
        borderWidth: borderWidth ? borderWidth : 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: position ? position : "bottom",
      },
      title: {
        display: true,
        text: name,
      },
    },
  };

  return (
    <div style={{ width: size ? `${size}px` : "300px", height: size ? `${size}px` : "300px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}
