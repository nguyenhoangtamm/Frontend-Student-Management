import { redirect } from 'next/navigation'
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import https from 'https';
import envConfig from '@/config';
import { normalizePath } from './apiUtils';
import { LoginResType } from '@/schemaValidations/auth.schema';

type CustomOptions = AxiosRequestConfig & {
    baseUrl?: string | undefined
}

const agent = new https.Agent({ rejectUnauthorized: false });
const ENTITY_ERROR_STATUS = 500
const ENTITY_ERROR_NOT_FOUNT_STATUS = 400
const AUTHENTICATION_ERROR_STATUS = 401

type EntityErrorPayload = {
    message: string
    errors: {
        field: string
        message: string
    }[]
}

export class HttpError extends Error {
    status: number
    payload: {
        message: string
        [key: string]: any
    }

    constructor({ status, payload, message = 'Lỗi hãy kiểm tra lại' }: { status: number; payload: any; message?: string }) {
        super(message)
        this.status = status
        this.payload = payload
    }
}

export class EntityError extends HttpError {
    status: 422
    payload: EntityErrorPayload

    constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
        super({ status, payload, message: payload.message })
        this.status = status
        this.payload = payload
    }
}

let clientLogoutRequest: null | Promise<any> = null
const isClient = () => typeof window !== 'undefined'

const axiosInstance = axios.create({
    timeout: 600000,
})

const request = async <Response>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: CustomOptions | undefined
) => {
    const baseUrl = options?.baseURL === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseURL
    const fullUrl = `${baseUrl}/${normalizePath(url)}`
    const baseHeaders: { [key: string]: string } = {
        'Content-Type': options?.data instanceof FormData ? 'multipart/form-data' : 'application/json'
    }

    if (isClient()) {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            baseHeaders.Authorization = `Bearer ${accessToken}`
        }
        const profileCode = localStorage.getItem('x-profile-code')
        if (profileCode) {
            baseHeaders['x-profile-code'] = profileCode
        }
    }

    try {
        const response: AxiosResponse<Response> = await axiosInstance({
            method,
            url: fullUrl,
            data: options?.data,
            headers: {
                ...baseHeaders,
                ...options?.headers
            },
            ...options,
            httpsAgent: agent
        })

        if (isClient()) {
            const normalizeUrl = normalizePath(url)
            if (normalizeUrl === 'api/auth/login') {
                const { data: { accessToken, refreshToken } } = response.data as LoginResType
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
            } else if (normalizeUrl === 'api/auth/logout') {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('x-profile-code')
            }
        }
        return response.data
    } catch (error) {
        const axiosError = error as AxiosError<{ message: string; errors?: any }>
        const data = {
            status: axiosError.response?.status || 500,
            payload: axiosError.response?.data || { message: 'Lỗi không xác định' }
        }

        if (!axiosError.response) {
            throw new HttpError({
                status: 500,
                payload: { message: 'Network Error' }
            })
        }

        if (axiosError.response.status === ENTITY_ERROR_STATUS) {
            throw new EntityError({
                status: 422,
                payload: data.payload as EntityErrorPayload
            })

        } else  if (axiosError.response.status === ENTITY_ERROR_NOT_FOUNT_STATUS) {
            const mappedErrors: EntityErrorPayload = {
                message: data.payload.message,
                errors: Object.keys(data.payload.errors).flatMap(field =>
                    data.payload.errors[field].map((msg: any) => ({
                        field: field || "unknownField",
                        message: msg
                    }))
                )
            };
            throw new EntityError({
                status: 422,
                payload: mappedErrors
            })
        }
        else if (axiosError.response.status === AUTHENTICATION_ERROR_STATUS) {
            if (isClient()) {
                if (!clientLogoutRequest) {
                    clientLogoutRequest = axiosInstance.post('/api/auth/logout', null, {
                        headers: baseHeaders
                    })
                    try {
                        await clientLogoutRequest
                    } catch (error) {
                    } finally {
                        localStorage.removeItem('accessToken')
                        clientLogoutRequest = null
                        location.href = '/login'
                    }
                }
            } else {
                const accessToken = (options?.headers as any)?.Authorization?.split('Bearer ')[1]
                redirect(`/logout?accessToken=${accessToken}`)
            }
        } else {
            throw new HttpError(data)
        }
    }
}

const http = {
    get<Response>(url: string, options?: Omit<CustomOptions, 'data'>) {
        return request<Response>('GET', url, options)
    },
    post<Response>(url: string, data: any, options?: Omit<CustomOptions, 'data'>) {
        return request<Response>('POST', url, { ...options, data })
    },
    put<Response>(url: string, data: any, options?: Omit<CustomOptions, 'data'>) {
        return request<Response>('PUT', url, { ...options, data })
    },
    delete<Response>(url: string, options?: Omit<CustomOptions, 'data'>) {
        return request<Response>('DELETE', url, options)
    }
}

export default http
