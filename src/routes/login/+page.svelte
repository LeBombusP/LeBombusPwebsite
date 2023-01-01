<script lang="ts">
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

<!-- <form on:submit={handleSubmit}>
	<input type="text" bind:value={username} />
	<input type="password" bind:value={password} />
	<button type="submit">Login</button>
	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}
</form> -->

<h1 class='text-center text-6xl font-bold py-12 pt-20 mt-0'>Login</h1>
<div class='flex justify-center'>
	<form on:submit={handleSubmit}>
		{#if errorMessage}
			<p>{errorMessage}</p>
		{/if}
		<input class='rounded bg-gray-900 border-2 m-2 p-1' type='text' id='username' placeholder='username' bind:value={username} required />
		<input class='rounded bg-gray-900 border-2 m-2 p-1' type='password' id='password' placeholder='password' bind:value={password} required />
		<button type="submit">Login</button>
	</form>
</div>