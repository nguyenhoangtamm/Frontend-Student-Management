"use client";
// components/LoginComponent.tsx
import React, { useState } from "react";
import Image from "next/image";
import defaultbg from "@bg/defaultbg.png";
import { Button } from "../ui/button";
import { useAuth } from "@/services/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginComponent: React.FC = () => {
    const { login, loading, error } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
        if (!error) {
            router.push("/dashboard");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <Image
                src={defaultbg}
                alt="background"
                layout="fill"
                objectFit="cover"
            />
            <div className="bg-dark text-white p-4 max-w-md opacity-90 z-10 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                    <Image
                        src="/logo.jpg"
                        alt="SPMS Logo"
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <h4>Student Performance Monitoring System 4.0</h4>
                </div>
                <form>
                    {/* Mã số sinh viên */}
                    <div className="mb-3">
                        <label
                            htmlFor="userId"
                            className="block text-sm font-medium"
                        >
                            Enter Your MSSV
                        </label>
                        <input
                            type="text"
                            id="userId"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            placeholder="1921207"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Mật khẩu */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            Enter Your Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Nút đăng nhập */}
                    <Button
                        type="submit"
                        className="btn btn-primary w-full"
                        onClick={handleLogin}
                    >
                        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>
                    {error && (
                        <p className="text-red-500 mt-2">Đăng nhập thất bại!</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
