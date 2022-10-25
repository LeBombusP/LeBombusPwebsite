<script>
    import {user} from "../auth.js"
</script>

{#if $user}
    <slot name="authed"></slot>
{:else}
    <slot name="not_authed"></slot>
{/if}