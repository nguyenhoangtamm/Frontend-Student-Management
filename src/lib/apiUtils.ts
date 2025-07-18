import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { UseFormSetError } from 'react-hook-form';
import { EntityError } from './http';
import { toast } from 'sonner';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path;
};

const isBrowser = typeof window !== 'undefined';

export const getAccessTokenFromLocalStorage = () =>
  isBrowser ? localStorage.getItem('accessToken') : null;

export const getRefreshTokenFromLocalStorage = () =>
  isBrowser ? localStorage.getItem('refreshToken') : null;
export const setAccessTokenToLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('accessToken', value);

export const setRefreshTokenToLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('refreshToken', value);
export const removeTokensFromLocalStorage = () => {
  isBrowser && localStorage.removeItem('accessToken');
  isBrowser && localStorage.removeItem('refreshToken');
};

export const handleErrorApi = ({
  error,
  setError,
  duration,
}: {
  error: any;
  setError?: UseFormSetError<any>;
  duration?: number;
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
      setError(item.field.toLowerCase(), {
        type: 'server',
        message: item.message,
      });
    });
  } else {
    toast(error?.payload?.message ?? 'Lỗi không xác định', {
      duration: duration ?? 5000,
    });
  }
};

export const getDisplayedRowCount = (
  pageIndex: number,
  pageSize: number,
  currentPageRowCount: number,
  totalCount: number,
): number => {
  if (pageIndex === 0) {
    return currentPageRowCount;
  }
  return totalCount > 0 ? pageIndex * pageSize + currentPageRowCount : 0;
};

export const buildUrlWithParams = (
  baseUrl: string,
  params: Record<string, any>,
) => {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

export const getCurrentDateString = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0 nên cần +1
  const year = today.getFullYear();

  return `${day}${month}${year}`;
};
