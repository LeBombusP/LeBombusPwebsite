<script lang="ts">
  const darkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
</script>

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
  :global(body.dark-mode) {
		background-color: hsl(240, 15%, 15%);
		color: hsl(220, 10%, 75%);
	}
</style>
