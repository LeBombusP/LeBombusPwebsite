<script>
    import {fade} from 'svelte/transition';
    let dark;
    if (localStorage.getItem('darkmode') == 'no') {
        dark = false;
        window.document.body.classList.toggle('light-mode');
    }
    else {
        dark = true;
    }

    function toggle() {
        window.document.body.classList.toggle('light-mode');
        if (dark == true) {
        dark = false;
        localStorage.setItem('darkmode', 'no');
        } 
        else {
        dark = true;
        localStorage.setItem('darkmode', 'yes');
        }
    }
</script>
<main>
    <div class="page">
    <a href="/dashboard"><div class="imgct licon">
        <i class="fa-solid fa-circle-user Icon fa-2xl"></i>
    </div></a>
    {#if dark}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="imgct ricon" on:click={() => toggle()}>
        <i in:fade="{{ duration: 700 }}" class="fa-solid fa-sun Icon fa-2xl"></i>
    </div>
    {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="imgct ricon" on:click={() => toggle()}>
        <i in:fade="{{ duration: 700 }}" class="fa-solid fa-moon Icon fa-2xl"></i>
    </div>
    {/if}

    <h1 class="lebombusp">LeBombusP</h1>
    </div>
</main>

<style>
body.light-mode  * .Icon {
    color: rgb(45 50 55);
}

.imgct {
    margin: 1%;
    margin-top: 2%;
}

.Icon {
    color: white;
    padding: auto;
    width: auto;
    height: auto;
}

.licon {
    position: absolute;
    right: 0;
}

.ricon {
    position: absolute;
    left: 0;
}

@keyframes an {
    from {
    background-position: 0% center;
    }
    to {
    background-position: -200% center;
    }
}
h1.lebombusp {
    animation: an 3s linear infinite;
    color: white;
    font-family: "Rubik", sans-serif;
    font-size: calc(10vw + 10px);
    font-weight: 500;
    padding: 20px;
    padding-top: 0;
    margin-top: 5vh;
    text-align: center;
    background: linear-gradient(
    to right,
    #8e24aa,
    #5e35b1,
    #5239ab,
    #5239ab,
    #5e35b1,
    #8e24aa,
    #8e24aa
    );
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    user-select: none;
}
.page {
    height: 100vh;
    margin: 0px;
    overflow: hidden;
    place-items: center;
}

body.light-mode * .lebombusp {
    -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
}
</style>
