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
  owner_name: string;
  phone_number: string;
  contract_status: "active" | "inactive"; // Trạng thái hợp đồng
  approval_status: "confirmed" | "pending"; // Trạng thái xác nhận nhà trọ
  contract_start: string;
  contract_end: string;
  price: string;
  services:[service];
  image: string;
}
