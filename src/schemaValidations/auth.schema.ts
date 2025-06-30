import { z } from 'zod';

export const LoginBody = z
  .object({
    username: z.string().min(1),
    password: z.string().min(6).max(100),
  })
  .strict();
export type LoginBodyType = z.TypeOf<typeof LoginBody>;

export const LoginRes = z.object({
  data: z.object({
    accessToken: z.string({
      required_error: 'Access token không được để trống',
      invalid_type_error: 'Access token phải là chuỗi',
    }),
    refreshToken: z.string({
      required_error: 'Refresh token không được để trống',
      invalid_type_error: 'Refresh token phải là chuỗi',
    }),
    user: z.object({
      userName: z.string({
        required_error: 'Tên người dùng không được để trống',
        invalid_type_error: 'Tên người dùng phải là chuỗi',
      }),
      fullName: z.string({
        required_error: 'Họ và tên không được để trống',
        invalid_type_error: 'Họ và tên phải là chuỗi',
      }),
      isAdmin: z.boolean({
        required_error: 'Trạng thái quản trị không được để trống',
        invalid_type_error: 'Trạng thái quản trị phải là boolean',
      }),
    }),
  }),
  message: z.string({
    required_error: 'Thông báo không được để trống',
    invalid_type_error: 'Thông báo phải là chuỗi',
  }),
});

export type LoginResType = z.TypeOf<typeof LoginRes>;
