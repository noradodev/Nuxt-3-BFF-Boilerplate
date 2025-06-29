import type { H3Event } from 'h3';

/**
 * Extracts the auth token from the 'auth_token' cookie.
 * @param event The H3 event object.
 * @returns The token string or undefined if not found.
 */
export function extractToken(event: H3Event): string | undefined {
  return getCookie(event, 'auth_token');
}