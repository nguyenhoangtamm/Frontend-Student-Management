import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";

const authApiRequest = {
    SLogin: (body: LoginBodyType) =>
        http.post<LoginResType>("/auth/login", body, {
            baseUrl: "http://localhost:8000/api",
        }),
    login: (body: LoginBodyType) =>
        http.post<LoginResType>("/api/auth/login", body, { baseURL: "" }),
    logoutFromNextServerToServer: ({
        accessToken,
        refreshToken,
    }: {
        accessToken: string;
        refreshToken: string;
    }) =>
        http.post(
            "/auth/logout",
            {
                refreshToken,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        ),
    logout: (
        body: {
            refreshToken: string;
        },
        signal?: AbortSignal | undefined
    ) =>
        http.post("/api/auth/logout", body, {
            baseURL: "",
            signal,
        }),
};

export default authApiRequest;
