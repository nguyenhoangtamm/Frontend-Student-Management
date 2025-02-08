"use client";

import { offCampus } from "@/interface/offCampusInterface";
import { useRouter } from "next/navigation";

export default function OffCampusInfo({
  offCampus,
}: {
  offCampus: offCampus | undefined;
}) {
  const router = useRouter();

  const handleEdit = () => {
      router.push(`/edit-off-campus?`);
    
  };

  return (
    <div className="mt-4 row">
      <h5 className="fw-bold">Thông tin ngoại trú</h5>
      <hr />
      {offCampus ? (
        <>
          <div className="m-1 col-md-3" style={{ padding: "10px" }}>
            <h3 className="fw-bold">
              <span className="font-weight-normal">{offCampus.name}</span>
            </h3>
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  Phòng: <strong>{offCampus.room}</strong>
                </p>
                <p>
                  Trạng thái:{" "}
                  <strong
                    className={
                      offCampus?.status === "confirmed"
                        ? "text-success"
                        : "text-warning"
                    }
                  >
                    {offCampus?.status === "confirmed"
                      ? "Đã xác nhận"
                      : "Chờ duyệt"}
                  </strong>
                </p>
                <p>
                  Hợp đồng:{" "}
                  <span className="small">
                    {offCampus?.contractStart} - {offCampus?.contractEnd}
                  </span>
                </p>
                <p>
                  Cập nhật lần cuối: <strong>{offCampus?.lastUpdated}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="m-1 col-md-9" style={{ flex: 2, padding: "10px" }}>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Địa chỉ:</strong>{" "}
                  <span className="text-primary">{offCampus?.address}</span>
                </p>
                <p>
                  <strong>Quận/Huyện:</strong> {offCampus?.district}
                </p>
                <p>
                  <strong>Thành phố:</strong> {offCampus?.city}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Chủ trọ:</strong>{" "}
                  <span className="text-primary">{offCampus?.landlord}</span>
                </p>
                <p>
                  <strong>Số điện thoại:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.landlordPhone}
                  </span>
                </p>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Phí ngoại trú:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.price} VNĐ/tháng
                  </span>
                </p>
                <p>
                  <strong>Giá điện:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.electricityPrice} VNĐ/kWh
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Phí dịch vụ:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.serviceFee} VNĐ/tháng
                  </span>
                </p>
                <p>
                  <strong>Giá nước:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.waterPrice} VNĐ/m³
                  </span>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Wifi:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.wifiFee} VNĐ/tháng
                  </span>
                </p>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Ngày bắt đầu hợp đồng:</strong>{" "}
                  <span className="text-primary">
                    {offCampus?.contractStart}
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Ngày kết thúc hợp đồng:</strong>{" "}
                  <span className="text-primary">{offCampus?.contractEnd}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Chưa khai báo thông tin ngoại trú</div>
      )}
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleEdit}>
          {offCampus ? "Chỉnh sửa" : "Khai báo nhà trọ mới"}
        </button>
      </div>
    </div>
  );
}
