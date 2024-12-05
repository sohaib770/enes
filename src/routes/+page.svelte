<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data; // `data` prop is passed from server (`+page.server.ts`)
	const { form, errors, constraints, message } = superForm(data.form);
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="w-1/2 rounded-md border border-gray-200 bg-white p-6 shadow-md lg:w-1/3 2xl:w-1/4">
		{#if $message}
			<h3 class="mb-4 text-lg font-medium text-green-600">{$message}</h3>
		{/if}

		<form method="POST" class="space-y-4">
			<div>
				<label for="firstName" class="block text-sm font-medium text-gray-700"> First Name </label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					aria-invalid={$errors.firstName ? 'true' : undefined}
					bind:value={$form.firstName}
					{...$constraints.firstName}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
				{#if $errors.firstName}
					<span class="text-sm text-red-600">{$errors.firstName}</span>
				{/if}
			</div>

			<div>
				<label for="lastName" class="block text-sm font-medium text-gray-700"> Last Name </label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					aria-invalid={$errors.lastName ? 'true' : undefined}
					bind:value={$form.lastName}
					{...$constraints.lastName}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
				{#if $errors.lastName}
					<span class="text-sm text-red-600">{$errors.lastName}</span>
				{/if}
			</div>

			<div>
				<label for="street" class="block text-sm font-medium text-gray-700"> Street </label>
				<input
					type="text"
					name="street"
					id="street"
					aria-invalid={$errors.street ? 'true' : undefined}
					bind:value={$form.street}
					{...$constraints.street}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
				{#if $errors.street}
					<span class="text-sm text-red-600">{$errors.street}</span>
				{/if}
			</div>

			<div>
				<label for="postalCode" class="block text-sm font-medium text-gray-700">
					Postal Code
				</label>
				<input
					type="text"
					name="postalCode"
					id="postalCode"
					aria-invalid={$errors.postalCode ? 'true' : undefined}
					bind:value={$form.postalCode}
					{...$constraints.postalCode}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
				{#if $errors.postalCode}
					<span class="text-sm text-red-600">{$errors.postalCode}</span>
				{/if}
			</div>

			<div>
				<label for="city" class="block text-sm font-medium text-gray-700"> City </label>
				<input
					type="text"
					name="city"
					id="city"
					aria-invalid={$errors.city ? 'true' : undefined}
					bind:value={$form.city}
					{...$constraints.city}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
				{#if $errors.city}
					<span class="text-sm text-red-600">{$errors.city}</span>
				{/if}
			</div>

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

<style>
	.invalid {
		color: red;
	}
</style>
