/**
 * Formats a date string into a more readable format.
 * e.g., formatDate("2025-06-29T17:00:00.000Z") => "June 29, 2025"
 */
export const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}
