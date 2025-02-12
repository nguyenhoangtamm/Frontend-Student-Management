import React from "react";

const TopDormitory = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white relative">
      <h2 className="text-xl font-bold">Top nhà trọ</h2>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
            🏆
          </div>
          <span className="mt-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white py-1 px-3 rounded-full text-sm font-bold">
            Top 1
          </span>
          <h3 className="text-lg font-bold mt-2">Đồng Tháp</h3>
          <p>Số lượng sinh viên hiện tại: 45</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mt-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white py-1 px-3 rounded-full text-sm font-bold">
            Top 2
          </span>
          <h3 className="text-lg font-bold mt-2">Đồng Đồng</h3>
          <p>Số lượng sinh viên hiện tại: 25</p>
        </div>
      </div>
      <button className="absolute top-4 right-4 bg-white text-pink-500 font-bold py-2 px-4 rounded-full shadow-lg">
        Chi tiết &gt;&gt;
      </button>
    </div>
  );
};

export default TopDormitory;
