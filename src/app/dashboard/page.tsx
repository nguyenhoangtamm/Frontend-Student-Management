"use client";
import UserInfoComponent from "@/components/layout/UserInfo/UserInfoComponent";
import EventList from "@/components/userDashboard/EventList";
import HostelInfo from "@/components/userDashboard/HostelInfo";
import Notifications from "@/components/userDashboard/Notifications";
import RegulationsComponent from "@/components/userDashboard/RegulationsComponent";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
// const HomePage: React.FC = () => {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <HostelInfo />
//         <Notifications />
//       </div>
//       <EventList />
//       <RegulationsComponent />

//     </div>
//   );
// };

// export default HomePage;

export default function HomePage({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const dataSend = {
    student_code: "123456",
    full_name: "John Doe",
    gender: "Male",
    email: "johndoe@example.com",
    date_of_birth: "2000-01-01",
    birthplace: "New York",
    department: "Computer Science",
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ flex: "1 1 70%", minWidth: "300px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <HostelInfo  />
          <Notifications  />
        </div>
        <EventList />
        <RegulationsComponent />
      </div>
      <UserInfoComponent data={dataSend} className="col-12 col-md-2 mb-4 mb-md-0" />
    </div>
  );
}
