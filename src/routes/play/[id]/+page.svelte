<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Layout from "../../../components/layout.svelte";
  export let data;

  let id;

  onMount(async () => {
    const { params } = $page;
    id = params.id;
    const response = await fetch("/games.json");
    const games = await response.json();
    id = games.find(g => g.id === id);
  });
</script>
<Layout />

{#if game}
<div class="game-details">
  <h1>{game.title}</h1>
  <p>{game.description}</p>
  <iframe title="Game Frame" src="{game.link}" width="100%" height="600px"></iframe>
</div>
{:else}
<p>Loading...</p>
{/if}