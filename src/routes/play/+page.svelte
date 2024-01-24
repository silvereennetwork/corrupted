<script>
  // Import necessary Svelte components and functions
  import Layout from "../../components/layout.svelte";
  import Footer from "../../components/footer.svelte";
  import Alerts from "../../components/alerts.svelte";
  import { onMount } from "svelte";

  // Set the page title
  var pagetitle = "Corrupted - Games";

  /**
   * Define variables and their initial values
   * @type {any[]}
   */
  let games = [];
  let search = "";
  let isLoading = true;

  // Lifecycle hook: Runs after the component is first added to the DOM
  onMount(async () => {
    // Fetch games data from the server
    const response = await fetch("/games.json");

    // Parse the JSON response and update the games variable
    games = await response.json();
    
    // Set isLoading to false after data is loaded
    isLoading = false;
  });

  /**
   * Filter visible games based on the search input
   * @param {{ title: string; }} game - The game object to be filtered
   * @returns {any[]} - The filtered list of games
   */
  $: visibleGames = games.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));
</script>

<style>
  /* Styling for the card expansion effect on hover */
  .xpand {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out;
  }
  .xpand:hover {
    transform: scale(1.05);
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>

<!-- Include Svelte components -->
<Layout />
<Alerts />

<!-- Navigation bar -->
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3 z-10">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<!-- Search input box -->
<div id="searchBox" class="mt-20 mb-5">
  <input bind:value="{search}" placeholder="Search games..." class="w-11/12 mx-auto block bg-gray-800 text-white shadow-md rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400" />
</div>

{#if isLoading}
  <!-- Display loader while games are being loaded -->
  <div class="flex flex-col items-center justify-center pt-40">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-48 w-48"></div>
    <p class="text-white text-3xl mt-4">Loading...</p>
  </div>
  <style>
    /* Styling for the loader animation */
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
<!-- Display game cards when data is loaded -->
<div class="game-card-container p-5 m-5 flex flex-wrap justify-center">
  {#each visibleGames as game (game.id)}
  <!-- Game card with title, image, and description -->
  <a href={`/play/${game.id}`} title="link" class="m-3 flex flex-col xpand">
    <div class="game-card mx-auto bg-gray-800 text-white rounded-xl shadow-md overflow-hidden flex flex-col items-center w-64">
      <div class="pt-1">
        <h2 class="tracking-wide text-2xl text-indigo-300 font-semibold">{game.title}</h2>
      </div>
      <div class="my-0">
        <img class="h-48 w-48 rounded-md object-cover m-2" src="{game.image}" alt="{game.title}" />
      </div>
      <div class="p-2 overflow-x-auto scrollbar-hide" style="white-space: nowrap; overflow-x: scroll;">
        {#each game.tags as tag}
        <div class="inline-flex items-center justify-center">
          <span class="text-white text-sm mr-1 bg-indigo-600 rounded-lg px-2 py-1">{tag}</span>
        </div>
        {/each}
        <p class="text-gray-300 text-center">{game.description}</p>
      </div>
    </div>
  </a>
  {/each}
</div>
{/if}
<Footer />