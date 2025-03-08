interface service{
  name: string;
  price: string;
  unit: string;
}
export interface offCampus {
  id?: string; // ID nhà trọ (nếu có)
  name: string; // Tên nhà trọ
  room?: string; // Phòng
  address: string;
  ownerName: string;
  phoneNumber: string;
  contractStatus: "active" | "inactive"; // Trạng thái hợp đồng
  approvalStatus: "confirmed" | "pending"; // Trạng thái xác nhận nhà trọ
  contractStart: string;
  contractEnd: string;
  price: string;
  services:[service];
  image: string;
}
