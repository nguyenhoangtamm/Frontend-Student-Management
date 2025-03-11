"use client";
import UserInfoComponent from "@/components/layout/UserInfo/UserInfoComponent";
import EventList from "@/components/userDashboard/EventList";
import DormitoryInfo from "@/components/userDashboard/DormitoryInfo";
import Notifications from "@/components/userDashboard/Notifications";
import RegulationsComponent from "@/components/userDashboard/RegulationsComponent";
import { useStudent } from "@/services/hooks/useStudent";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DashBoardSkeleton from "@/components/skeletons/DashBoardSkeleton";
export default function HomePage() {
    const { data: dataSend, isLoading, error } = useStudent();
    const unreadNotifications = dataSend
        ? Number(dataSend.unreadNotifications)
        : 0;
    if (isLoading) return (
     <DashBoardSkeleton />
   
    );
    if (error) return <p>Lỗi: {error.message}</p>;
    const notifications = dataSend?.notifications;

    return (
        <div className="flex flex-wrap p-5 font-sans">
            <div className="flex-1 min-w-[300px] md:flex-[1_1_70%]">
                <div className="flex flex-col md:flex-row justify-between flex-wrap">
                    <DormitoryInfo data={dataSend.offCampusInfo} className="w-full md:w-auto mb-4 md:mb-0" />
                    <Notifications notifications={unreadNotifications} className="w-full md:w-auto" />
                </div>
                <EventList events={notifications} />
                <RegulationsComponent />
            </div>
            <UserInfoComponent
                data={dataSend}
                className="w-full md:w-1/5 mb-4 md:mb-0"
            />
        </div>
    );
}
