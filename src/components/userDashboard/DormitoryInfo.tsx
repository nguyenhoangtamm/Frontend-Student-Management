"use client";
import React from "react";
import mapsearch from "@images/dashboard/housing.jpg";
import Image from "next/image";
import Link from "next/link";

interface Dormitory {
    name: string;
    room: string;
    status: string;
    updated_at: string;
    image: string;
}
interface DormitoryInfoProps {
    data: Dormitory;
}
export default function DormitoryInfo({ data }: DormitoryInfoProps) {
  console.log(data);  
  return (
        <div className="card m-1" style={{ flex: 1, padding: "10px" }}>
            <div className="card-body">
                <h3 className="card-title">
                    Thông tin nhà trọ:{" "}
                    <span className="font-weight-normal">{data.name}</span>
                </h3>
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="card-text">
                            Phòng: <strong>{data.room}</strong>
                        </p>
                        <p className="card-text">
                            Trạng thái:
                            <strong className="text-success">
                                {data.status}
                            </strong>
                        </p>
                        <p className="card-text">
                            Cập nhật lần cuối:{" "}
                            <strong>{new Date(data.updated_at).toLocaleDateString("vi-VN")}</strong>
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Image
                            src={mapsearch}
                            alt="Map Search"
                            width={100}
                            height={100}
                        />
                        <Link href="#">Chi tiết</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
