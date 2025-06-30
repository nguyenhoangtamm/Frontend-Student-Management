import { LoginBodyType } from '@/schemaValidations/auth.schema';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';
import authApiRequest from '@/services/api/authApi';
export async function POST(request: Request) {
  const res = (await request.json()) as LoginBodyType;
  const cookieStore = await cookies();
  try {
  const response = await authApiRequest.SLogin(res);
  if (!response) {
    throw new Error('Lỗi không xác định');
  } else {
    const {
      data: { accessToken, refreshToken },
    } = response;
    const decodedAccessToken = decodeJwt(accessToken);
    const decodedRefreshToken = decodeJwt(refreshToken);

    cookieStore.set('accessToken', accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(
        (decodedAccessToken.exp ?? Math.floor(Date.now() / 1000) + 3600) * 1000,
      ),
    });
    cookieStore.set('refreshToken', refreshToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(
        (decodedRefreshToken.exp ?? Math.floor(Date.now() / 1000) + 3600) *
          1000,
      ),
    });
    return Response.json(response);
  }
  } catch (error) {
    function isHttpError(
      err: unknown,
    ): err is { payload: unknown; status: number } {
      return (
        typeof err === 'object' &&
        err !== null &&
        'payload' in err &&
        'status' in err &&
        typeof (err as { status?: unknown }).status === 'number'
      );
    }

    if (isHttpError(error)) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: 'Lỗi không xác định',
        },
        {
          status: 500,
        },
      );
    }
  }
}
