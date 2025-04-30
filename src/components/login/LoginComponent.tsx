'use client';
// components/LoginComponent.tsx
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import Image from 'next/image';
import defaultbg from '@bg/defaultbg.png';
import { Button } from '../ui/button';
import { useAuth } from '@/services/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { routes } from '@/configs/routes';
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema';

export default function LoginComponent() {
  const { login, loading, error } = useAuth();
  const router = useRouter();

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function handleLogin(values: LoginBodyType) {
    const isAdmin = await login(values);
    if (!error) {
      toast.success('Đăng nhập thành công!');

      if (isAdmin) {

        router.push(routes.admin.owerview);
      } else {
        router.push(routes.user.dashboard);
      }
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
          <Button type='submit' className='btn btn-primary w-full'>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
          {error && <p className='text-red-500 mt-2'>Đăng nhập thất bại!</p>}
        </form>
      </div>
    </div>
  );
}
