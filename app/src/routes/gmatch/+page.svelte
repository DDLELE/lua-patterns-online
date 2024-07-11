<script lang="ts">
  import { app } from "$lib/settings";
  import { onMount } from "svelte";

  let lua: Record<string, any> = {
    gmatch: undefined,
  };
  onMount(async () => {
    // @ts-ignore
    lua.gmatch = Module.cwrap("gmatch", "string", ["string", "string"]);
  });
  let string = "from=world, to=Lua";
  let pattern = "(%w+)=(%w+)";
  let result = "";
  let resultObj: string[][]
  function call() {
    if (lua.gmatch) {
      result = lua.gmatch(string, pattern);
      resultObj = JSON.parse(result)
    }
  }
</script>


<h2>gmatch</h2>
<p>(max 10 "capture groups")</p>
input <input type="text" bind:value={string} />
pattern <input type="text" bind:value={pattern} />
<button on:click={call}>run</button>
{#if resultObj}
<h1>{resultObj.length} matches</h1>
  {#each resultObj as item}
    <li>{JSON.stringify(item)}</li>
  {:else}
     <!-- empty list -->
  {/each}
{/if}
