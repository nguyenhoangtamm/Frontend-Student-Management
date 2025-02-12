import React from "react";

const FeedbackTable = () => {
  const feedbacks = [
    { date: "14/01/2019", id: "12345678", student: "📌", content: "Bitcoin", amount: "$100", status: "Đã xử lý", statusClass: "bg-green-500" },
    { date: "14/01/2019", id: "12345678", student: "💳", content: "Amazon", amount: "$100", status: "Chưa xử lý", statusClass: "bg-red-500" },
    { date: "14/01/2019", id: "12345678", student: "📌", content: "Bitcoin", amount: "$100", status: "Đang xử lý", statusClass: "bg-purple-500" },
    { date: "14/01/2019", id: "12345678", student: "💳", content: "Bitcoin", amount: "$100", status: "Completed", statusClass: "bg-green-500" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Phản hồi</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">📅 Ngày gửi</th>
            <th className="p-2">🔢 Mã báo cáo</th>
            <th className="p-2">🎓 Sinh viên</th>
            <th className="p-2">⚠️ Nội dung phản ánh</th>
            <th className="p-2">💰 Số tiền</th>
            <th className="p-2">📌 Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.student}</td>
              <td className="p-2">{item.content}</td>
              <td className="p-2">{item.amount}</td>
              <td className={`p-2 text-white px-3 py-1 rounded ${item.statusClass}`}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded">View More</button>
    </div>
  );
};

export default FeedbackTable;
