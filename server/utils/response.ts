import { H3Event, sendError, setResponseStatus } from 'h3';
import { isAxiosError } from 'axios';

/**
 * Sends a standardized success response.
 * @param event The H3 event object.
 * @param data The data payload to send.
 */
export function sendSuccess(event: H3Event, data: any) {
  setResponseStatus(event, 200);
  return {
    success: true,
    data,
  };
}

/**
 * Sends a standardized error response, safely handling Axios errors.
 * @param event The H3 event object.
 * @param error The error object.
 */
export function sendErrorResponse(event: H3Event, error: any) {
  console.error('[BFF Error Response]:', error);

  if (isAxiosError(error)) {
    const statusCode = error.response?.status || 500;
    const message = error.response?.data?.message || 'An external API error occurred.';
    return sendError(event, createError({ statusCode, statusMessage: message }));
  }

  const statusCode = error.statusCode || 500;
  const message = error.statusMessage || 'An internal server error occurred.';
  return sendError(event, createError({ statusCode, statusMessage: message }));
}