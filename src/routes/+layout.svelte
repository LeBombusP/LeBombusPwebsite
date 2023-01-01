<script lang="ts">
  import '../app.css';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FaMoon from "svelte-icons-pack/fa/FaMoon";
  import FaSun from "svelte-icons-pack/fa/FaSun";
  import FaSolidGripHorizontal from "svelte-icons-pack/fa/FaSolidGripHorizontal";
  import { fade } from 'svelte/transition';


  const darkMode = () => {
    console.log("dsa")
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark').toString());
  }
</script>

<svelte:head>
  <title>LeBombusP</title>
  <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta name="robots" content="noindex" />
</svelte:head>

<nav class="m-0 overflow-hidden" in:fade="{{ duration: 300 }}">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={darkMode} class="m-2 p-2 float-left">
    <Icon src={FaMoon} size="32" className="moon" />
    <Icon src={FaSun} size="32" color="white" className="sun" />
  </div>

  <a href="/dashboard" class="float-right"><div class="m-2 p-2">
    <Icon src={FaSolidGripHorizontal} size="32" className="user" />
  </div></a>
</nav>

<main in:fade="{{ duration: 300 }}">
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
