"use client";
import UserInfoComponent from "@/components/layout/UserInfo/UserInfoComponent";
import RegulationsComponent from "@/components/userDashboard/RegulationsComponent";
import { useDashboard } from "@/services/hooks/useStudent";
import 'react-loading-skeleton/dist/skeleton.css'
import DashBoardSkeleton from "@/components/skeletons/DashBoardSkeleton";
import Link from "next/link";
import EventItem from "@/components/userDashboard/EventItem";
import { DashboardBodyType } from "@/schemaValidations/dashboard.schema";
export default function HomePage() {
    const { data: dataSend, isLoading, error } = useDashboard();

    if (isLoading) return (
        <DashBoardSkeleton />

    );
    if (error) return <p>Lỗi: {error.message}</p>;

    return (
        <div className="flex flex-wrap p-5 font-sans">
            <div className="flex-1 min-w-[300px] md:flex-[1_1_70%]">
                <div className="flex flex-col md:flex-row justify-between flex-wrap">


                    <div className='card m-1 text-center w-full md:w-auto mb-4 md:mb-0' style={{ flex: 1, padding: '10px' }}>
                        <div className='card-body'>
                            <h3 className='card-title'>Thông tin ngoại trú: </h3>
                            <div className='row card-body'>
                                <div className='col-md-6 text-left'>
                                    <p>
                                        Hình thức chỗ ở: <strong>{dataSend?.offCampusInfo.name}</strong>
                                    </p>
                                    {
                                        dataSend?.offCampusInfo.address && (
                                            <p className='card-text'>
                                                Địa chỉ: <strong>{dataSend?.offCampusInfo.address}</strong>
                                            </p>
                                        )
                                    }

                                    {dataSend?.offCampusInfo.room && (
                                        <p className='card-text'>
                                            Phòng: <strong>{dataSend?.offCampusInfo.room}</strong>
                                        </p>
                                    )}
                                </div>
                                <div className='col-md-6 text-left'>
                                    {
                                        dataSend?.offCampusInfo.status && (
                                            <p className='card-text'>
                                                Trạng thái: <strong className={dataSend?.offCampusInfo.status === 'Active' ? 'text-success' : 'text-danger'}>{dataSend?.offCampusInfo.status}</strong>
                                            </p>
                                        )
                                    }
                                    {
                                        dataSend?.offCampusInfo.updatedAt && (
                                            <p className='card-text'>
                                                Cập nhật lần cuối: <strong>{dataSend?.offCampusInfo.updatedAt ? new Date(dataSend.offCampusInfo.updatedAt).toLocaleDateString('vi-VN') : 'N/A'}</strong>
                                            </p>
                                        )
                                    }


                                    <p className='card-text'></p>
                                    <Link href='/profile' className='btn btn-link'>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='card text-center m-1 w-full md:w-auto'
                        style={{ flex: 0.5, padding: '10px' }}
                    >
                        <div className='card-body'>
                            <h3 className='card-title'>Thông báo mới chưa xem</h3>
                            <h1 className='card-text text-danger' style={{ margin: '10px 0' }}>
                                {dataSend?.unreadNotifications}
                            </h1>
                            <Link href='#' className='btn btn-link'>
                                Xem chi tiết
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 border rounded m-1">
                    <h3>Danh sách sự kiện</h3>
                    {dataSend?.notifications.map((event, index) => (
                        <EventItem key={index} event={event} />
                    ))}
                </div>
                <RegulationsComponent />
            </div>
            <UserInfoComponent
                data={dataSend ?? {} as DashboardBodyType}
                className="w-full md:w-1/5 mb-4 md:mb-0"
            />


        </div>
    );
}
