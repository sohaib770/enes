import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

const formSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	street: z.string().min(1, 'Street is required'),
	postalCode: z
		.string()
		.regex(/^\d{5}$/, 'Postal code must be 5 digits')
		.min(1, 'Postal code is required'),
	city: z.string().min(1, 'City is required')
});

export const load = async () => {
	const form = await superValidate(zod(formSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(formSchema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}
		return message(form, 'Form posted successfully!');
	}
};
