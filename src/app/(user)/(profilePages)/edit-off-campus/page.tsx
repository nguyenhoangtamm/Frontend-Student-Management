"use client";

import ProfileEdit from "@/components/profile/edit/ProfileEdit";
import { useContract } from "@/services/hooks/useStudent";

export default function EditOffCampus() {
  
    const { data: formData, isLoading, error } = useContract();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Lỗi: {error.message}</p>;

  return <ProfileEdit data={formData} />;
}
