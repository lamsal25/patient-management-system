"use server"

import { cookies } from "next/headers"

export default async function getSession() {
    const CookieStore = cookies()
    const sessionId = (await CookieStore).get('sessionid')?.value
    return sessionId
}