import SearchBar from "@/components/admin/student/SearchBar";
import StudentTable from "@/components/admin/student/StudentTable";
import ViewMoreButton from "@/components/admin/student/ViewMoreButton";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Students</h1>
      <div className="flex justify-between items-center">
        <div></div> {/* Empty div to push SearchBar to the right */}
        <SearchBar />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <StudentTable />
      
      </div>
    </div>
  );
}
