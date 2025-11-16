import z from 'zod';

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10}$/.test(val), 'Phone number must be exactly 10 digits'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
