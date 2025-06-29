// server/services/user.service.ts
import type { H3Event } from 'h3';
import { api } from '~/server/lib/api';
import { extractToken } from '~/server/utils/token';

export const userService = {
  /**
   * Fetches the authenticated user's data from API.
   * Requires the H3Event to extract the token for the request.
   */
  async getAuthenticatedUser(event: H3Event) {
    const token = extractToken(event);

    if (!token) {
      throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }
    try {
      const response = await api.get<any>('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};