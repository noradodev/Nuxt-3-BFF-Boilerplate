// server/services/auth.service.ts
import type { H3Event } from 'h3'
import { api } from '~/server/lib/api'
import { extractToken } from '../utils/token'
import { LoginCredentials } from '~/zod/auth.schema'

export const authService = {
  /**
   * Logs a user in by calling the API.
   * On success, sets a secure HttpOnly cookie with the auth token.
   */
  async login(event: H3Event, credentials: LoginCredentials) {
    try {
      const response = await api.post<{ token: string; user: any }>('/auth/login', credentials)

      setCookie(event, 'auth_token', response.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  },

  /**
   * Logs the user out by deleting the auth cookie.
   */
  async logout(event: H3Event) {
    const token = extractToken(event)
    if (token) {
      await api.post('/auth/logout', {}, { headers: { Authorization: `Bearer ${token}` } })
    }

    deleteCookie(event, 'auth_token')
    return { message: 'Logged out successfully' }
  },
}
