import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string({ message: 'A valid email is required' }),
  password: z.string().min(1, { message: 'Password cannot be empty' }),
})
export type LoginCredentials = z.infer<typeof loginSchema>
