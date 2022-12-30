<script lang="ts">
	import { goto } from '$app/navigation';

	const logout = () => {
		document.cookie = 'token=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;';
		goto('/');
	};
	// console.log(cookie);
</script>

<h1>Dash</h1>
<button on:click={logout}>log out</button>
