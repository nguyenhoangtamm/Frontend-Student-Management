"use client";
import { offCampus } from "@/interface/offCampusInterface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputSelector from "./InputSelector";
import { useDomainarie } from "@/services/hooks/useDomainarie";
import { Button, InputGroup } from "react-bootstrap";
import { DatePicker, Select, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
type RangePickerProps = React.ComponentProps<typeof RangePicker>;

const disabledDate: RangePickerProps["disabledDate"] = (
  current: dayjs.Dayjs
) => {
  // Can not select days before today and today
  return current && current < dayjs().startOf("day");
};

const dateFormat = "DD-MM-YYYY";

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
const EmptyData = {
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
    router.push("/profile"); // Điều hướng về trang chính
  };
  const handleSelect = (selected: string) => {
    // const { data: house, isLoading, error } = useDomainarie(Number(selected));
    setFormData(XData);
  };
  const handleCustomInput = () => {
    setShowInput(!showInput);
    setIsReadonly(!isReadonly);
    setFormData(EmptyData);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h5 className="fw-bold text-primary">Chỉnh sửa thông tin ngoại trú</h5>
        <hr />
        <div className="row mt-3">
          <InputSelector onChange={handleSelect} />
          <div className="col-md-12 mt-3">
            <InputGroup>
              <Button
                variant="outline-primary"
                onClick={() => handleCustomInput()}
              >
                Khác
              </Button>
              {showInput && (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập thông tin khác"
                />
              )}
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
              placeholder="Nhập tên chủ trọ"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Số điện thoại</label>
            <input
              readOnly={isReadonly}
              type="tel"
              className="form-control"
              name="landlordPhone"
              value={formData.landlordPhone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Địa chỉ</label>
          <input
            readOnly={isReadonly}
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
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
              placeholder="Nhập quận/huyện"
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
              placeholder="Nhập thành phố"
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phòng</label>
            <input
              type="text"
              className="form-control"
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="Nhập số phòng"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Trạng Thái</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Trạng thái"
            />
          </div>
        </div>
        {/* <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Ngày bắt đầu hợp đồng</label>
            <input
              type="date"
              className="form-control"
              name="contractStart"
              value={formData.contractStart}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày kết thúc hợp đồng</label>
            <input
              type="date"
              className="form-control"
              name="contractEnd"
              value={formData.contractEnd}
              onChange={handleChange}
            />
          </div>
        </div> */}

        <div className="row mt-3">
          <Space direction="vertical" size={12} style={{ width: "100%" }}>
            <label className="form-label">Chọn thời hạn hợp đồng</label>
            <RangePicker
              // disabledDate={disabledDate}
              placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
              format={dateFormat}
              value={
                formData.contractStart && formData.contractEnd
                  ? [
                      dayjs(formData.contractStart, dateFormat),
                      dayjs(formData.contractEnd, dateFormat),
                    ]
                  : undefined
              }
              onChange={(dates, dateStrings) => {
                setFormData({
                  ...formData,
                  contractStart: dateStrings[0],
                  contractEnd: dateStrings[1],
                });
              }}
            />
          </Space>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí ngoại trú</label>
            <input
              type="number"
              className="form-control"
              name="offCampusFee"
              value={formData.price}
              onChange={handleChange}
              placeholder="Nhập phí ngoại trú"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá điện</label>
            <input
              type="number"
              className="form-control"
              name="electricityPrice"
              value={formData.electricityPrice}
              onChange={handleChange}
              placeholder="Nhập giá điện"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Phí dịch vụ</label>
            <input
              type="number"
              className="form-control"
              name="serviceFee"
              value={formData.serviceFee}
              onChange={handleChange}
              placeholder="Nhập phí dịch vụ"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá nước</label>
            <input
              type="number"
              className="form-control"
              name="waterPrice"
              value={formData.waterPrice}
              onChange={handleChange}
              placeholder="Nhập giá nước"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Wifi</label>
            <input
              type="number"
              className="form-control"
              name="wifiFee"
              value={formData.wifiFee}
              onChange={handleChange}
              placeholder="Nhập phí wifi"
            />
          </div>
        </div>
        <div className="text-end mt-4">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => router.back()}
          >
            Hủy
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
