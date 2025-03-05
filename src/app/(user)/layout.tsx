"use client";
import "@/app/globals.css";
import HeaderComponent from "@/components/layout/header/HeaderComponent";
import SidebarComponent from "@/components/layout/sidebar/SideBarComponent";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>

            <HeaderComponent />
            <Provider store={storeRef.current}>
                <main className="mt-4 flex flex-col md:flex-row">
                    <SidebarComponent />
                    <div className="container w-full md:w-10/12">
                        <div className="container">{children}</div>
                    </div>
                </main>
            </Provider>
        </QueryClientProvider>
    );
}
