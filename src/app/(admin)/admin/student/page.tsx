import AddModal from "@/components/admin/modals/AddModal";
import StudentTable from "@/components/admin/student/StudentTable";
import SearchBar from "@/components/admin/ui/SearchBar";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Students</h1>
      <div className="flex justify-between items-center">
        <AddModal />
        <SearchBar name="Student" />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <StudentTable />
      </div>
    </div>
  );
}
