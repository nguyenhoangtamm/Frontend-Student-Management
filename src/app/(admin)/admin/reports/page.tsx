"use client"; // Cần thiết nếu dùng Next.js (App Router)

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Nam", "Nữ", "Khác"],
    datasets: [
      {
        label: "Số lượng sinh viên ngoại trú",
        data: [120, 80, 15], // Số lượng từng nhóm
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Màu đỏ
          "rgba(54, 162, 235, 0.6)", // Màu xanh dương
          "rgba(255, 206, 86, 0.6)", // Màu vàng
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const, // Vị trí chú thích (top, bottom, left, right)
      },
      title: {
        display: true,
        text: "Phân bố giới tính sinh viên ngoại trú",
      },
    },
  };

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
