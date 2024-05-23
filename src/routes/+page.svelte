<script>
    export let data;
  const homedata = data.homepage;
  
</script>
<a href="/CREATIVES">CREATIVES</a>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{homedata.homepageTitle}
{@html homedata.homepageNews}
{@html homedata.homepageForm}