'use client'
import { useDetailStudent } from '@/services/hooks/useStudent';
import React from 'react'
import { FaUser } from 'react-icons/fa6';

export default function StudentInfo({ id }: { id: number }) {
    //get student
    const { data } = useDetailStudent(

        {
            studentId: Number(id),
            enabled: Boolean(id),
        }
    );
    return (

        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold">Student Management: Student</h1>
            <div className="flex flex-col  bg-gray-100">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-2xl shadow-lg w-80">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                            {/* <Image src={imageUrl} alt={name} width={96} height={96} /> */}
                            <FaUser className="w-24 h-24 text-gray-500" />
                        </div>

                        {/* Name & Email */}
                        <h2 className="mt-4 text-xl font-bold text-gray-800">{data?.fullName}</h2>
                        <p className="text-gray-500">{data?.email}</p>


                    </div>
                </div>
                <br />
                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold border-b pb-2">Thông tin cá nhân</h2>

                    </div>
                    <div className="grid grid-cols-2 gap-y-3">

                        <div>
                            <span className="font-medium">Mã sinh viên:</span> {data?.code || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Họ và tên:</span> {data?.fullName || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Giới tính:</span> {data?.gender === 1 ? "Nam" : "Nữ"}
                        </div>
                        <div>
                            <span className="font-medium">Ngày sinh:</span> {data?.dateOfBirth || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Email:</span> {data?.email || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Số điện thoại:</span> {data?.phoneNumber || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Tỉnh/Thành phố:</span> {data?.provinceId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Quận/Huyện:</span> {data?.districtId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Phường/Xã:</span> {data?.wardId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Lớp:</span> {data?.classId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Ngành học:</span> {data?.majorId || "N/A"}
                        </div>
                        <div>
                            <span className="font-medium">Tình trạng cư trú:</span> {data?.residenceStatus === 0 ? "Tạm trú" : "Thường trú"}
                        </div>
                        <div>
                            <span className="font-medium">Niên khóa:</span> {data?.academicYear || "N/A"}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
