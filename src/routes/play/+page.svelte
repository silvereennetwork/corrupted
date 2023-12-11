<script>
  import Layout from "../../components/layout.svelte";
  import Footer from "../../components/footer.svelte";
  import Alerts from "../../components/alerts.svelte";
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let games = [];
  let search = "";
  let isLoading = true;

  onMount(async () => {
    const response = await fetch("/games.json");
    games = await response.json();
    isLoading = false;
  });

  /**
   * @param {{ title: string; }} game
   */
  $: visibleGames = games.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));
</script>
<style>
  .xpand {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out;
  }
  .xpand:hover {
    transform: scale(1.05);
  }
</style>
<Layout />
<Alerts />
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<div id="searchBox" class="mt-20 mb-5">
  <input bind:value="{search}" placeholder="Search games..." class="w-11/12 mx-auto block bg-gray-800 text-white shadow-md rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400" />
</div>

{#if isLoading}
  <div class="flex flex-col items-center justify-center pt-40">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-48 w-48"></div>
    <p class="text-white text-3xl mt-4">Loading...</p>
  </div>
  <style>
    .loader {
      border-top-color: rgb(67 56 202);
      animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
{:else}
<!-- TODO: add tags at some point -->
<div class="game-card-container p-5 m-5 flex flex-wrap justify-center">
  {#each visibleGames as game (game.id)}
  <a href={`/play/${game.id}`} title="link" class="m-3 flex flex-col xpand">
    <div class="game-card mx-auto bg-gray-800 text-white rounded-xl shadow-md overflow-hidden flex flex-col items-center w-64">
      <div class="pt-1">
        <h2 class="tracking-wide text-2xl text-indigo-300 font-semibold">{game.title}</h2>
      </div>
      <div class="my-0">
        <img class="h-48 w-48 rounded-md object-cover m-2" src="{game.image}" alt="{game.title}" />
      </div>
      <div class="p-2">
        <p class="text-gray-300">{game.description}</p>
      </div>
    </div>
  </a>
  {/each}
</div>
{/if}

<Footer />
