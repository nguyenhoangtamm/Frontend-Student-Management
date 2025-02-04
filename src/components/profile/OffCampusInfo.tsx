"use client";

import { useRouter } from "next/navigation";

interface OffCampusInfoProps {
  offCampus: {
    address: string;
    district: string;
    city: string;
    landlord: string;
    landlordPhone: string;
  };
}

const OffCampusInfo: React.FC<OffCampusInfoProps> = ({ offCampus }) => {
  const router = useRouter();

  return (
    <div className="mt-4 row">
      <h5 className="fw-bold">Thông tin ngoại trú</h5>
      <hr />
      <div className="m-1  col-md-3" style={{ padding: "10px" }}>
        <div className=" ">
          <h3 className="fw-bold">
            <span className="font-weight-normal">Trọ nhà</span>
          </h3>
          <div className="d-flex justify-content-between">
            <div>
              <p className="">
                Phòng: <strong>234</strong>
              </p>
              <p className="">
                Trạng thái:{" "}
                <strong className="text-success">Đã xác nhận</strong>
              </p>
              <p>
                Hợp đồng: <span className="small">01/01/2023 - 02/02/2024</span>
              </p>
              <p className="">
                Cập nhật lần cuối: <strong>1/2/123</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-1 col-md-9" style={{ flex: 2, padding: "10px" }}>
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Địa chỉ:</strong>{" "}
              <span className="text-primary">{offCampus.address}</span>
            </p>
            <p>
              <strong>Quận/Huyện:</strong> {offCampus.district}
            </p>
            <p>
              <strong>Thành phố:</strong> {offCampus.city}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Chủ trọ:</strong>{" "}
              <span className="text-primary">{offCampus.landlord}</span>
            </p>
            <p>
              <strong>Số điện thoại:</strong>{" "}
              <span className="text-primary">{offCampus.landlordPhone}</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Phí ngoại trú:</strong>{" "}
              <span className="text-primary">1.500.000 VNĐ/tháng</span>
            </p>
            <p>
              <strong>Giá điện:</strong>{" "}
              <span className="text-primary">3.000 VNĐ/kWh</span>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Phí dịch vụ:</strong>{" "}
              <span className="text-primary">200.000 VNĐ/tháng</span>
            </p>
            <p>
              <strong>Giá nước:</strong>{" "}
              <span className="text-primary">15.000 VNĐ/m³</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Wifi:</strong>{" "}
              <span className="text-primary">100.000 VNĐ/tháng</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Ngày bắt đầu hợp đồng:</strong>{" "}
              <span className="text-primary">01/01/2023</span>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Ngày kết thúc hợp đồng:</strong>{" "}
              <span className="text-primary">31/12/2023</span>
            </p>
          </div>
        </div>

        <div className="text-end mt-3">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/edit-off-campus")}
          >
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffCampusInfo;
