"use client";
import "@/app/globals.css";
import SideBarComponent from "@/components/admin/layout/SideBarComponent";
import HeaderComponent from "@/components/layout/header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <main className="mt-4 d-flex flex-column flex-md-row">
        <SideBarComponent />
        <div className="container col-12 col-md-10">
          <div className="container">{children}</div>
        </div>
      </main>
    </>
  );
}
