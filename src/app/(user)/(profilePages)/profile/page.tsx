'use client'
import StudentProfile from "@/components/profile/StudentProfile";
import { useProfile } from "@/services/hooks/useStudent";
import React from "react";

export default function Profile() {
  const { data: studentData, isLoading, error } = useProfile();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  return (
    <div>
      <StudentProfile data={studentData} />
    </div>
  );
}
