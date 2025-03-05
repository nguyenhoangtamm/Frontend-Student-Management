"use client";
import UserInfoComponent from "@/components/layout/UserInfo/UserInfoComponent";
import EventList from "@/components/userDashboard/EventList";
import DormitoryInfo from "@/components/userDashboard/DormitoryInfo";
import Notifications from "@/components/userDashboard/Notifications";
import RegulationsComponent from "@/components/userDashboard/RegulationsComponent";
import { useStudent } from "@/services/hooks/useStudent";
import { useDispatch } from "react-redux";
import { setLayout } from "@/lib/slices/layoutSlice";
export default function HomePage() {
    const dispatch = useDispatch();
    const { data: dataSend, isLoading, error } = useStudent();
    const unreadNotifications = dataSend
        ? Number(dataSend.unreadNotifications)
        : 0;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Lỗi: {error.message}</p>;
    dispatch(
        setLayout({
            userImage: dataSend.avatar,
            name: dataSend.full_name,
            notifications: dataSend.notifications,
        })
    );
    const notifications = dataSend.notifications;

    return (
        <div className="flex flex-wrap p-5 font-sans">
            <div className="flex-1 min-w-[300px] md:flex-[1_1_70%]">
                <div className="flex justify-between flex-wrap">
                    <DormitoryInfo data={dataSend.dormitory} />
                    <Notifications notifications={unreadNotifications} />
                </div>
                <EventList  events={notifications}/>
                <RegulationsComponent />
            </div>
            <UserInfoComponent
                data={dataSend}
                className="w-full md:w-1/5 mb-4 md:mb-0"
            />
        </div>
    );
}
