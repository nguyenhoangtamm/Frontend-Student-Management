"use client";
import { offCampus } from "@/interface/offCampusInterface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputSelector from "./InputSelector";
import { useDomainarie } from "@/services/hooks/useDomainarie";
import { Button, InputGroup } from "react-bootstrap";

const XData = {
  id: "X",
  name: "X",
  room: "X",
  address: "X",
  district: "X",
  city: "X",
  landlord: "X",
  landlordPhone: "X",
  status: "pending" as "pending" | "confirmed",
  contractStart: "X",
  contractEnd: "X",
  lastUpdated: "X",
  price: "X",
  electricityPrice: "X",
  waterPrice: "X",
  serviceFee: "X",
  wifiFee: "X",
};
const EmptyData={
  id: "",
  name: "",
  room: "",
  address: "",
  district: "",
  city: "",
  landlord: "",
  landlordPhone: "",
  status: "pending" as "pending" | "confirmed",
  contractStart: "",
  contractEnd: "",
  lastUpdated: "",
  price: "",
  electricityPrice: "",
  waterPrice: "",
  serviceFee: "",
  wifiFee: "",
};
export default function ProfileEdit({ data }: { data: offCampus }) {
  const router = useRouter();

  // State chứa dữ liệu chỉnh sửa
  const [formData, setFormData] = useState<offCampus>(data);
  const [showInput, setShowInput] = useState(false);
  const [isReadonly, setIsReadonly] = useState<boolean>(true);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Giả lập lưu dữ liệu
  const handleSave = () => {
    console.log("Dữ liệu đã lưu:", formData);
    router.push("/student-profile"); // Điều hướng về trang chính
  };
  const handleSelect = (selected: string) => {
    // const { data: house, isLoading, error } = useDomainarie(Number(selected));
    setFormData(XData);
  };
  const handleCustomInput=()=>{
    setShowInput(!showInput);
    setIsReadonly(!isReadonly);
    setFormData( EmptyData);
  }
 

  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h5 className="fw-bold">Chỉnh sửa thông tin ngoại trú</h5>
        <hr />
        <div className="row mt-3">
          {" "}
          <InputSelector onChange={handleSelect} />
            <div className="col-md-12">
            <InputGroup>
              <Button variant="primary" onClick={() => handleCustomInput()}>
              Khác
              </Button>
              {showInput && <input type="text" className="form-control" />}
            </InputGroup>
            </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Chủ trọ</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="landlord"
              value={formData.landlord}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Số điện thoại</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="landlordPhone"
              value={formData.landlordPhone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input
          readOnly
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Quận/Huyện</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Thành phố</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phòng</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="room"
              value={formData.room}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Trạng thái</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Ngày bắt đầu hợp đồng</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="contractStart"
              value={formData.contractStart}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày kết thúc hợp đồng</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="contractEnd"
              value={formData.contractEnd}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí ngoại trú</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="offCampusFee"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá điện</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="electricityPrice"
              value={formData.electricityPrice}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí dịch vụ</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="serviceFee"
              value={formData.serviceFee}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá nước</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="waterPrice"
              value={formData.waterPrice}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Wifi</label>
            <input
            readOnly={isReadonly}
              type="text"
              className="form-control"
              name="wifiFee"
              value={formData.wifiFee}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-end mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => router.back()}
          >
            Hủy
          </button>
          <button className="btn btn-success" onClick={handleSave}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
