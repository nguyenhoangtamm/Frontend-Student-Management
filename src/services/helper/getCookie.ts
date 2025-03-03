'use server'
import { cookies } from 'next/headers'

export async function getCookieValue(cookieName: string): Promise<string | undefined> {
    const cookieStore = await cookies()
    const cookie = cookieStore.get(cookieName)
    return cookie?.value
}