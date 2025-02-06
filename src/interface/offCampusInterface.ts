export interface offCampus {
    id?: string; // ID nhà trọ (nếu có)
    name: string; // Tên nhà trọ
    room?: string; // Phòng
    address: string;
    district: string;
    city: string;
    landlord: string;
    landlordPhone: string;
    status: "confirmed" | "pending"; // Trạng thái xác nhận nhà trọ
    contractStart: string;
    contractEnd: string;
    lastUpdated: string;
    price: string;
    electricityPrice: string;
    waterPrice: string;
    serviceFee: string;
    wifiFee: string;
  };