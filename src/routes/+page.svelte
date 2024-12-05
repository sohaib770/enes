<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data; // `data` prop is passed from server (`+page.server.ts`)
	const { form, errors, constraints, message } = superForm(data.form);
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST">
	<label for="firstName">First Name</label>
	<input
		type="text"
		name="firstName"
		id="firstName"
		aria-invalid={$errors.firstName ? 'true' : undefined}
		bind:value={$form.firstName}
		{...$constraints.firstName}
	/>
	{#if $errors.firstName}<span class="invalid">{$errors.firstName}</span>{/if}

	<label for="lastName">Last Name</label>
	<input
		type="text"
		name="lastName"
		id="lastName"
		aria-invalid={$errors.lastName ? 'true' : undefined}
		bind:value={$form.lastName}
		{...$constraints.lastName}
	/>
	{#if $errors.lastName}<span class="invalid">{$errors.lastName}</span>{/if}

	<label for="street">Street</label>
	<input
		type="text"
		name="street"
		id="street"
		aria-invalid={$errors.street ? 'true' : undefined}
		bind:value={$form.street}
		{...$constraints.street}
	/>
	{#if $errors.street}<span class="invalid">{$errors.street}</span>{/if}

	<label for="postalCode">Postal Code</label>
	<input
		type="text"
		name="postalCode"
		id="postalCode"
		aria-invalid={$errors.postalCode ? 'true' : undefined}
		bind:value={$form.postalCode}
		{...$constraints.postalCode}
	/>
	{#if $errors.postalCode}<span class="invalid">{$errors.postalCode}</span>{/if}

	<label for="city">City</label>
	<input
		type="text"
		name="city"
		id="city"
		aria-invalid={$errors.city ? 'true' : undefined}
		bind:value={$form.city}
		{...$constraints.city}
	/>
	{#if $errors.city}<span class="invalid">{$errors.city}</span>{/if}

	<div><button type="submit">Submit</button></div>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
