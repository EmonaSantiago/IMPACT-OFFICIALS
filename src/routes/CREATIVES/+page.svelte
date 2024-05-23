<script>
     export let data;
  const pageTitle = data.creativepage;
  const fashions = data?.allFashions || [];
  
</script>
<h1>CREATIVES</h1>
    {@html pageTitle.creatives}

{#each fashions as fashion}
    <img src="{fashion.image.url}" alt="persoon">
    {@html fashion.brand}
{/each}