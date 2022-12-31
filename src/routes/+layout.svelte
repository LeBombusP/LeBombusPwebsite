<script lang="ts">
  import '../app.css'

  const darkMode = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark').toString());
  }

</script>

<svelte:head>
  <title>LeBombusP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta name="robots" content="noindex" />
</svelte:head>

<nav>
  <button on:click={darkMode}>DarkMode</button>
	<a class="no-underline" href="/">Home</a>
	<a class="no-underline" href="/login">Login</a>
	<a class="no-underline" href="/dashboard">Dashboard</a>
</nav>

<main>
	<slot />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    background-color: hsl(208, 95%, 100%);
    transition: all 0.25s;
  }
  :global(body.dark) {
		background-color: hsl(240, 15%, 15%);
		color: hsl(220, 10%, 75%);
	}
</style>
