import AddNotification from "@/components/admin/notification/modals/AddModal";
import NotificationTable from "@/components/admin/notification/NotificationTable";
import SearchBar from "@/components/admin/notification/SearchBar";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Dormitorys</h1>
      <div className="flex justify-between items-center">
        <AddNotification />

        <SearchBar />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <NotificationTable />
      </div>
    </div>
  );
}
