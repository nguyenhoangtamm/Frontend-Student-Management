export interface offCampus {
  id?: string; // ID nhà trọ (nếu có)
  name: string; // Tên nhà trọ
  room?: string; // Phòng
  address: string;
  owner: string;
  phone: string;
  contract_status: "active" | "inactive"; // Trạng thái hợp đồng
  approval_status: "confirmed" | "pending"; // Trạng thái xác nhận nhà trọ
  contractStart: string;
  contractEnd: string;
  price: string;
  electricityPrice: string;
  waterPrice: string;
  serviceFee: string;
  wifiFee: string;
  image: string;
}
