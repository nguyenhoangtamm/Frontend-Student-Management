"use client";
import HeaderComponent from "@/components/admin/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@/components/admin/layout/Sidebar";


export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-6 w-3/5">{children}</main>
      </div>
    </>
  );
}
