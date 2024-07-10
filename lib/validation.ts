import {z} from 'zod';

export const UserFormValidation = z.object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    phone: z.string().refine((phone) => /^\+?\d{10,25}$/.test(phone), {
        message: 'Please enter a valid phone number.',
        }),
  });