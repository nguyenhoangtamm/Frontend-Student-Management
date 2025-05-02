'use client'
import { useDormitoryById } from '@/services/hooks/useDomitory';
import React from 'react'

export default function DormitoryInfo({ id }: { id: number }) {
    //get Dormitory
    const { data } = useDormitoryById(

        {
            id: Number(id),
            enabled: Boolean(id),
        }
    );
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold">Dormitory Management: Dormitory</h1>
            <div className="flex flex-col bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md border"></div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold border-b pb-2">Thông tin ký túc xá</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3">
                        <div>
                            <span className="font-medium">Mã ký túc xá:</span> {data?.id || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Tên ký túc xá:</span> {data?.name || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Địa chỉ:</span> {data?.address || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Phường/Xã:</span> {data?.wardId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Quận/Huyện:</span> {data?.districtId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Tỉnh/Thành phố:</span> {data?.provinceId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Chủ sở hữu:</span> {data?.ownerName || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Số điện thoại:</span> {data?.phoneNumber || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Mô tả:</span> {data?.description || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Nội dung:</span> {data?.content || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Trạng thái:</span> {data?.status === 1 ? "Hoạt động" : "Không hoạt động"}
                        </div>
                        <div>
                            <span className="font-medium">Địa chỉ đầy đủ:</span> {data?.fullAddress || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Kinh độ:</span> {data?.longitude || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Vĩ độ:</span> {data?.latitude || "N/A"}
                        </div>
                    </div>
                </div>
            </div>

    );
}
