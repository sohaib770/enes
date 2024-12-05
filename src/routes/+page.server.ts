import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { formSchema } from './schema';

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
