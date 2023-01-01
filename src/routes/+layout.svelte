<script lang="ts">
	import '../app.css';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSun from 'svelte-icons-pack/fa/FaSun';
	import FaMoon from 'svelte-icons-pack/fa/FaMoon';
	import FaSolidHome from 'svelte-icons-pack/fa/FaSolidHome';
	import FaSolidSignOutAlt from 'svelte-icons-pack/fa/FaSolidSignOutAlt';
	import FaSolidGripHorizontal from 'svelte-icons-pack/fa/FaSolidGripHorizontal';

	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let ricon;
	let path;
	let dash = false;

	page.subscribe((value) => {
		console.log(value);
		if (value.url.pathname === '/dashboard') {
			ricon = FaSolidSignOutAlt;
			path = '/';
			dash = true;
		} else if (value.url.pathname === '/login') {
			ricon = FaSolidHome;
			path = '/';
			dash = false;
		} else if (value.url.pathname === '/') {
			path = '/dashboard';
			ricon = FaSolidGripHorizontal;
			dash = false;
		}
	});

	const logOut = () => {
		document.cookie = 'token=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;';
		goto('/');
	};

	const darkMode = () => {
		console.log('dsa');
		document.body.classList.toggle('dark');
		localStorage.setItem('darkMode', document.body.classList.contains('dark').toString());
	};
</script>

<svelte:head>
	<title>LeBombusP</title>
	<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<meta name="robots" content="noindex" />
</svelte:head>

<nav class="m-0 overflow-hidden" in:fade={{ duration: 300 }}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={darkMode} class="m-2 p-2 float-left">
		<Icon src={FaMoon} size="32" className="moon" />
		<Icon src={FaSun} size="32" color="white" className="sun" />
	</div>
	{#if !dash}
		<a href={path} class="float-right">
			<div class="m-2 p-2">
				<Icon src={ricon} size="32" className="user" />
			</div>
		</a>
	{:else}
		<button on:click={logOut} class="float-right">
			<div class="m-2 p-2">
				<Icon src={ricon} size="32" className="user" />
			</div>
		</button>
	{/if}
</nav>

<main in:fade={{ duration: 300 }}>
	<slot />
</main>

<style global>
	:global(body) {
		background-color: hsl(208, 95%, 100%);
		transition: all 0.25s;
		margin: 0;
	}
	:global(body.dark) {
		background-color: hsl(240, 15%, 15%);
		color: hsl(220, 10%, 75%);
	}

	:global(.sun:not(body.dark * .sun)) {
		display: none;
		padding: none;
		margin: none;
	}

	:global(body.dark * .moon) {
		display: none;
		padding: none;
		margin: none;
	}

	:global(body.dark * .user) {
		filter: invert(91%) sepia(100%) saturate(0%) hue-rotate(227deg) brightness(106%) contrast(100%);
	}
</style>
