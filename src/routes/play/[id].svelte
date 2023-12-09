<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Layout from "../../components/layout.svelte";

  /**
     * @type {{ title: any; description: any; link: any; } | null}
     */
  let game = null;

  onMount(async () => {
    const { params } = $page;
    const response = await fetch("/games.json");
    const games = await response.json();
    game = games.find(g => g.id === params.id);
  });
</script>

<Layout>
  {#if game}
    <h1>{game.title}</h1>
    <p>{game.description}</p>
    <iframe title="Game Frame" src={game.link} width="100%" height="600px"></iframe>
  {:else}
    <p>Loading...</p>
  {/if}
</Layout>