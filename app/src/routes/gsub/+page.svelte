<script lang="ts">
  import { onMount } from "svelte";

  let lua: Record<string, any> = {
    'gsub': undefined,
  };
  onMount(async () => {
    // @ts-ignore
    lua.gsub = Module.cwrap("gsub", "string", ["string", "string", "string"]);
  });
  let string = "hello";
  let pattern = "(%w+)";
  let replacement = "%1 %1";
  let result = "";

  function call() {
    if (lua.gsub) {
      result = lua.gsub(string, pattern, replacement);
    }
  }
</script>


<h2>
  gsub
</h2>
input <input type="text" bind:value={string} />
pattern <input type="text" bind:value={pattern} />
replacement <input type="text" bind:value={replacement} />
<button on:click={call}>run</button>
result: {result}
