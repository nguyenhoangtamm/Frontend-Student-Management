'use client';
// components/LoginComponent.tsx
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import Image from 'next/image';
import defaultbg from '@bg/defaultbg.png';
import { Button } from '../ui/button';
import { useLoginMutation } from '@/services/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { routes } from '@/configs/routes';
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema';
import { handleErrorApi } from '@/lib/apiUtils';

export default function LoginComponent() {
  const loginMutation = useLoginMutation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function handleLogin(values: LoginBodyType) {
    if (loginMutation.isPending) return;
    try {
      setIsLoading(true);
      const result = await loginMutation.mutateAsync(values);
      toast.success("Đăng nhập thành công!", {
        description: result?.message || "Chào mừng bạn quay trở lại!",
      });
      if (result?.data.user.isAdmin === true) {
        router.push(routes.admin.overview);
      } else {
        router.push(routes.user.dashboard);
      }
    } catch (error: any) {
      toast.error("Đăng nhập thất bại!", {
        description: error.message || "Vui lòng kiểm tra lại thông tin đăng nhập",
      });
      setIsLoading(false);
      handleErrorApi({
        error,
        setError: form.setError,
      });
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center relative'>
      <Image src={defaultbg} alt='background' layout='fill' objectFit='cover' />
      <div className='bg-dark text-white p-4 max-w-md opacity-90 z-10 rounded-lg shadow-lg'>
        <div className='text-center mb-4'>
          <Image
            src='/logo.jpg'
            alt='SPMS Logo'
            width={60}
            height={60}
            className='mb-3'
          />
          <h4>Student Performance Monitoring System 4.0</h4>
        </div>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          {/* Mã số sinh viên */}
          <div className='mb-3'>
            <label htmlFor='username' className='block text-sm font-medium'>
              Enter Your MSSV
            </label>
            <input
              type='text'
              id='username'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black'
              placeholder='1921207'
              {...form.register('username')}
            />
          </div>

          {/* Mật khẩu */}
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium'>
              Enter Your Password
            </label>
            <input
              type='password'
              id='password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black'
              placeholder='Enter Your Password'
              {...form.register('password')}
            />
          </div>

          {/* Nút đăng nhập */}
          <Button type='submit' className='btn btn-primary w-full'
            disabled={isLoading}

          >
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}

          </Button>
        </form>
      </div>
    </div>
  );
}
