<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let username: string = '';
	let password: string = '';
	let errorMessage: string = '';

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		});

		const msg = await response.json()
		
		if (response.ok) {
			console.log("|routes/login| => " + msg);
			const date = new Date();
			date.setTime(date.getTime() + msg.expiresIn * 1000);
			let expires = date.toUTCString();
			document.cookie = `token=${msg.jwt}; expires=${expires} path=/login;`;
			goto('/dashboard');
		}

		errorMessage = msg.message;
		setTimeout(() => {
			errorMessage = '';
		}, 3000);

	};
</script>

<form on:submit={handleSubmit}>
	<input type="text" bind:value={username} />
	<input type="password" bind:value={password} />
	<button type="submit">Login</button>
	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}
</form>
