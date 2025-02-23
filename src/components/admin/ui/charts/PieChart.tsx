"use client"; // Cần thiết nếu dùng Next.js (App Router)

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);
interface IProps {
    name: string;
    label: string[ ];
    labelNote: string;
    dataChart: number[ ];
    backgroundColor?: string[ ];
    borderColor?: string[ ];
    borderWidth?: number;
    position?: "top" | "left" | "bottom" | "right" | "center" | "chartArea";
    }

export default function PieChart({name, label, labelNote, dataChart, backgroundColor, borderColor, borderWidth,position }: IProps) {
  const data = {
    labels: label,
    datasets: [
      {
        label: labelNote,
        data: dataChart, // Số lượng từng nhóm
        backgroundColor: backgroundColor? backgroundColor : [
            "rgba(255, 99, 132, 0.6)", // Màu đỏ
            "rgba(54, 162, 235, 0.6)", // Màu xanh dương
            "rgba(255, 206, 86, 0.6)", // Màu vàng
          ],
        borderColor: borderColor? borderColor : [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            ],
        borderWidth: borderWidth? borderWidth : 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: position, // Vị trí chú thích (top, bottom, left, right)
    },
      title: {
        display: true,
        text: name,
      },
    },
  };

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}
