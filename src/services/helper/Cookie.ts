'use server'
import { cookies } from 'next/headers'

export async function getCookieValue(cookieName: string): Promise<string | undefined> {
    const cookieStore = await cookies()
    const cookie = cookieStore.get(cookieName)
    return cookie?.value
}
export async function deleteCookie(cookieName: string): Promise<void> {
    const cookieStore = await cookies()
    cookieStore.delete(cookieName)
}