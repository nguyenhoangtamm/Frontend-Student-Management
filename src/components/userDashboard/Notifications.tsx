import Link from "next/link";
import React from "react";

const Notifications: React.FC = () => {
  return (
    <div className="card text-center m-1" style={{ flex: 0.5, padding: "10px" }}>
      <div className="card-body">
        <h3 className="card-title">Thông báo mới chưa xem</h3>
        <h1 className="card-text text-danger" style={{ margin: "10px 0" }}>4</h1>
        <Link href="#" className="btn btn-link">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
