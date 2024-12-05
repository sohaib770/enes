import { z } from 'zod';

export const formSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	street: z.string().min(1, 'Street is required'),
	postalCode: z
		.string()
		.regex(/^\d{5}$/, 'Postal code must be 5 digits')
		.min(1, 'Postal code is required'),
	city: z.string().min(1, 'City is required')
});

export type FormSchema = typeof formSchema;
