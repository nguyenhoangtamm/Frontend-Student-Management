import React from "react";

const HostelInfo: React.FC = () => {
  return (
    <div className="card" style={{ flex: 1, padding: "10px" }}>
      <div className="card-body">
        <h3 className="card-title">
          Thông tin nhà trọ: <span className="font-weight-normal">AAA</span>
        </h3>
        <p className="card-text">
          Phòng: <strong>234</strong>
        </p>
        <p className="card-text">
          Trạng thái: <strong className="text-success">Đã xác nhận</strong>
        </p>
        <p className="card-text">
          Cập nhật lần cuối: <strong>1/2/123</strong>
        </p>
      </div>
    </div>
  );
};

export default HostelInfo;
