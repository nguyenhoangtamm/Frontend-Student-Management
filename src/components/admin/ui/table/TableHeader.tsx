import React from "react";

const DormitoryHeader = () => {
  return (
    <>
      <th className="p-3">Mã số</th>
      <th className="p-3">Tên</th>
      <th className="p-3">Chủ sở hữu</th>
      <th className="p-3">Địa chỉ</th>
      <th className="p-3">Trạng thái</th>
      <th className="p-3">Hành động</th>
    </>
  );
};
const StudentHeader = () => {
    return (
        <>
        <th className="p-3">Mã số</th>
        <th className="p-3">Tên</th>
        <th className="p-3">Chủ sở hữu</th>
        <th className="p-3">Địa chỉ</th>
        <th className="p-3">Trạng thái</th>
        <th className="p-3">Hành động</th>
        </>
    );
    };

export default function TableHeader() {
  return (
    <thead>
      <tr className="text-gray-600">
        <th className="p-3">
          {/* <input type="checkbox" onClick={handleSelectAll} /> */}
          <input type="checkbox" />
        </th>
        <th className="p-3">Mã số</th>
        <th className="p-3">Tên</th>
        <th className="p-3">Chủ sở hữu</th>
        <th className="p-3">Địa chỉ</th>
        <th className="p-3">Trạng thái</th>
        <th className="p-3">Hành động</th>
      </tr>
    </thead>
  );
}
