import { authService } from '~/server/services/auth.services';
import { sendSuccess, sendErrorResponse } from '~/server/utils/response';
import { loginSchema } from '~/zod/auth.schema'; 

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const validation = loginSchema.safeParse(body);

    
    if (!validation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid input.',
        data: validation.error.errors, 
      });
    }

    const user = await authService.login(event, validation.data);

    return sendSuccess(event, { user });

  } catch (error) {
    return sendErrorResponse(event, error);
  }
});