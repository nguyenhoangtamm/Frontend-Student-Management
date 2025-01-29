"ues client";
import React from "react";
import mapsearch from "@images/dashboard/housing.jpg";
import Image from "next/image";
import Link from "next/link";

const HostelInfo: React.FC = () => {
  return (
    <div className="card m-1" style={{ flex: 1, padding: "10px" }}>
      <div className="card-body">
        <h3 className="card-title">
          Thông tin nhà trọ: <span className="font-weight-normal">Trọ nhà</span>
        </h3>
        <div className="d-flex justify-content-between">
          <div>
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
          <div className="d-flex flex-column align-items-center">
            <Image src={mapsearch} alt="Map Search" width={100} height={100} />
            <Link href="#">Chi tiết</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelInfo;
