<script lang="ts">
	import { goto } from '$app/navigation';

	let username: string = '';
	let password: string = '';
	let errorMessage: string = '';
	let className: string = '';

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

		const msg = await response.json();

		if (response.ok) {
			console.log('|routes/login| => ' + msg);
			const date = new Date();
			date.setTime(date.getTime() + msg.expiresIn * 1000);
			let expires = date.toUTCString();
			document.cookie = `token=${msg.jwt}; expires=${expires} path=/login;`;
			className = 'bg-[#22c55e] opacity-80';
			setTimeout(() => {
				return goto('/dashboard');
			}, 1000);
		}

		errorMessage = msg.message;
		className = 'bg-[#e11d48] opacity-80';
		setTimeout(() => {
			errorMessage = '';
			className = '';
		}, 3000);
	};
</script>

<h1 class="text-center text-6xl font-bold py-12 pt-20 mt-0">Login</h1>
<div class="flex justify-center">
	<form on:submit={handleSubmit}>
		{#if errorMessage}
			<p class="text-center">{errorMessage}</p>
		{/if}
		<input class="rounded bg-gray-900 border-[1px] m-4 p-2 block" type="text" id="username" placeholder="username" bind:value={username} required />
		<input class="rounded bg-gray-900 border-[1px] m-4 p-2 block" type="password" id="password" placeholder="password" bind:value={password} required />
		<button class="rounded m-4 py-2 px-4 border-[1px] block ml-auto mr-auto {className}" type="submit">Login</button>
	</form>
</div>
