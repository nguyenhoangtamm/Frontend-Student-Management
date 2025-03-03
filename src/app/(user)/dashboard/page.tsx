"use client";
import UserInfoComponent from "@/components/layout/UserInfo/UserInfoComponent";
import EventList from "@/components/userDashboard/EventList";
import HostelInfo from "@/components/userDashboard/HostelInfo";
import Notifications from "@/components/userDashboard/Notifications";
import RegulationsComponent from "@/components/userDashboard/RegulationsComponent";
import { useStudent } from "@/services/hooks/useStudent";

export default function HomePage() {
  // const dataSend = {
  //   student_code: "123456",
  //   full_name: "John Doe",
  //   gender: "Male",
  //   email: "johndoe@example.com",
  //   date_of_birth: "2000-01-01",
  //   birthplace: "New York",
  //   department: "Computer Science",
  // };
  const { data: dataSend, isLoading, error } = useStudent();
  // Handler function to receive filtered content from FilterComponent

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;

  return (
    <div className="flex flex-wrap p-5 font-sans">
      <div className="flex-1 min-w-[300px] md:flex-[1_1_70%]">
        <div className="flex justify-between flex-wrap">
          <HostelInfo />
          <Notifications />
        </div>
        <EventList />
        <RegulationsComponent />
      </div>
      <UserInfoComponent
        data={dataSend}
        className="w-full md:w-1/5 mb-4 md:mb-0"
      />
    </div>
  );
}
