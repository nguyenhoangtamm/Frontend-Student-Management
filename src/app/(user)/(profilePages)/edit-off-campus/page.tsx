'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditOffCampus = () => {
  const router = useRouter();
  
  // State chứa dữ liệu chỉnh sửa
  const [formData, setFormData] = useState({
    address: "123 Đường Nguyễn Văn A",
    district: "Phường 3",
    city: "TP. Cao Lãnh",
    landlord: "Nguyễn Văn B",
    landlordPhone: "0912345678",
    room: "234",
    status: "Đã xác nhận",
    contractStart: "01/01/2023",
    contractEnd: "31/12/2023",
    lastUpdate: "1/2/123",
    offCampusFee: "1.500.000 VNĐ/tháng",
    electricityPrice: "3.000 VNĐ/kWh",
    serviceFee: "200.000 VNĐ/tháng",
    waterPrice: "15.000 VNĐ/m³",
    wifiFee: "100.000 VNĐ/tháng",
  });

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Giả lập lưu dữ liệu
  const handleSave = () => {
    console.log("Dữ liệu đã lưu:", formData);
    router.push("/student-profile"); // Điều hướng về trang chính
  };

  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h5 className="fw-bold">Chỉnh sửa thông tin ngoại trú</h5>
        <hr />
        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Quận/Huyện</label>
            <input type="text" className="form-control" name="district" value={formData.district} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Thành phố</label>
            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Chủ trọ</label>
            <input type="text" className="form-control" name="landlord" value={formData.landlord} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Số điện thoại</label>
            <input type="text" className="form-control" name="landlordPhone" value={formData.landlordPhone} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phòng</label>
            <input type="text" className="form-control" name="room" value={formData.room} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Trạng thái</label>
            <input type="text" className="form-control" name="status" value={formData.status} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Ngày bắt đầu hợp đồng</label>
            <input type="text" className="form-control" name="contractStart" value={formData.contractStart} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày kết thúc hợp đồng</label>
            <input type="text" className="form-control" name="contractEnd" value={formData.contractEnd} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí ngoại trú</label>
            <input type="text" className="form-control" name="offCampusFee" value={formData.offCampusFee} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá điện</label>
            <input type="text" className="form-control" name="electricityPrice" value={formData.electricityPrice} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí dịch vụ</label>
            <input type="text" className="form-control" name="serviceFee" value={formData.serviceFee} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá nước</label>
            <input type="text" className="form-control" name="waterPrice" value={formData.waterPrice} onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Wifi</label>
            <input type="text" className="form-control" name="wifiFee" value={formData.wifiFee} onChange={handleChange} />
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="btn btn-secondary me-2" onClick={() => router.back()}>
            Hủy
          </button>
          <button className="btn btn-success" onClick={handleSave}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOffCampus;