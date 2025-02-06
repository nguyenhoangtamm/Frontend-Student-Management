"use client";

import ProfileEdit from "@/components/profile/edit/ProfileEdit";

export default function EditOffCampus() {
  // State chứa dữ liệu chỉnh sửa
  const formData = {
    id: "123",
    name: "Nhà trọ A",
    room: "234",
    address: "123 Đường Nguyễn Văn A",
    district: "Phường 3",
    city: "TP. Cao Lãnh",
    landlord: "Nguyễn Văn B",
    landlordPhone: "0912345678",
    status: "pending" as "pending" | "confirmed",
    contractStart: "01/01/2023",
    contractEnd: "31/12/2023",
    lastUpdated: "01/10/2023",
    price: "2,000,000",
    electricityPrice: "3,500",
    waterPrice: "15,000",
    serviceFee: "100,000",
    wifiFee: "200,000",
  };

  return <ProfileEdit data={formData} />;
}
