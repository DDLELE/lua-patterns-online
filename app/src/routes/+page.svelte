<script>
  const methods = [
    "gsub",
    "gmatch"
  ]
</script>


<ul>
  {#each methods as luaFunc}
  <li><a href="/{luaFunc}">
    <h2>
      {luaFunc}
    </h2></a></li>
  {/each}
</ul>