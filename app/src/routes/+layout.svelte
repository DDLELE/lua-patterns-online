<script>
    import { app } from "$lib/settings";
</script>
<svelte:head>
  <title>{app.name}</title>
</svelte:head>

<h1>{app.name}</h1>

<slot/>