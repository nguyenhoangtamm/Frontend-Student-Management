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
  const [userid, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.userid);
    });
  }, [params]);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    userid ? `http://localhost:8000/api/students/${userid}` : null,
    fetcher
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  console.log("data");
  const formData = data.data;
  console.log(formData);
  const dataSend = {
    student_code: formData.student_code,
    full_name: formData.full_name,
    gender: formData.gender,
    email: formData.email,
    date_of_birth: formData.date_of_birth,
    birthplace: formData.birthplace,
    department: formData.department

  }
  console.log("dataSend");
  console.log(dataSend);

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <HostelInfo />
          <Notifications />
        </div>
        <EventList />
        <RegulationsComponent />
      </div>
      <UserInfoComponent
        data={dataSend}
        
      />

    </>
  );
}
