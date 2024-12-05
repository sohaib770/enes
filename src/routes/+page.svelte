<script lang="ts">
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { formSchema, type FormSchema } from './schema';

	export let data: SuperValidated<Infer<FormSchema>>;
	const form = superForm(data, {
		dataType: 'json',
		validators: zodClient(formSchema)
	});
	const { form: formData, message, enhance } = form;
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="w-1/2 rounded-md border border-gray-200 bg-white p-6 shadow-md lg:w-1/3 2xl:w-1/4">
		{#if $message}
			<h3 class="mb-4 text-lg font-medium text-green-600">{$message}</h3>
		{/if}

		<form method="POST" class="space-y-4" use:enhance>
			<Form.Field {form} name="firstName">
				<Form.Control let:attrs>
					<Form.Label>First name</Form.Label>
					<Input {...attrs} bind:value={$formData.firstName} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="lastName">
				<Form.Control let:attrs>
					<Form.Label>Last name</Form.Label>
					<Input {...attrs} bind:value={$formData.lastName} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="street">
				<Form.Control let:attrs>
					<Form.Label>Street</Form.Label>
					<Input {...attrs} bind:value={$formData.street} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="postalCode">
				<Form.Control let:attrs>
					<Form.Label>Postal code</Form.Label>
					<Input {...attrs} bind:value={$formData.postalCode} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="city">
				<Form.Control let:attrs>
					<Form.Label>City</Form.Label>
					<Input {...attrs} bind:value={$formData.city} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>

			<div>
				<button
					type="submit"
					class="w-full rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500 focus:ring focus:ring-blue-500"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</div>
