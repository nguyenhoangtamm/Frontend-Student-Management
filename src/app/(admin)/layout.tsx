"use client";
import HeaderComponent from "@/components/admin/layout/Navbar";

import Sidebar from "@/components/admin/layout/Sidebar";


export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <div className="flex">
        <Sidebar />
        <main className=" flex-1 p-6">{children}</main>
      </div>
    </>
  );
}
