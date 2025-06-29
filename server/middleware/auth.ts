import { extractToken } from '~/server/utils/token';

export default defineEventHandler((event) => {
  const protectedRoutes = [
    '/api/auth/user',
    // e.g., '/api/dashboard', '/api/settings'
  ];

  const isProtected = protectedRoutes.some(route => getRequestURL(event).pathname.startsWith(route));

  if (isProtected) {
    const token = extractToken(event);
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized!',
      });
    }
  }
});