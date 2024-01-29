<script lang="ts">
  // Import necessary modules
  import { onMount } from "svelte";
  import html2canvas from 'html2canvas';
  import { page } from "$app/stores";
  
  // Import Svelte components
  import Layout from "../../../components/layout.svelte";
  import Footer from "../../../components/footer.svelte";

  export const data: any = null;
  let game = {};

  onMount(async () => {
    try {
      // get the game id from the url
      const { params } = $page;
      const id = Number(params.id);

      // fetch the games data
      const response = await fetch("/games.json");
      
      // response check
      if (!response.ok) {
        console.error("Failed to fetch games.json:", response.status, response.statusText);
        game = { title: 'Failed to fetch games', description: '', link: '' };
        return;
      }

      // parse data
      const games = await response.json();

      // find the game with the given id
      game = games.find(g => g.id === id);
      document.title = "Corrupted - " + game.title;
      let tags = game.tags || []; // fetch tags
      //console.debug(game); //turn off for prod

      // game not found
      if (!game) {
        console.error("No game found with id:", id);
        game = { title: 'Game not found', description: '', link: '' };
      }
    } catch (error) {
      console.error("Error in onMount:", error);
      game = { title: 'Error loading game', description: '', link: '' };
    }
  });

  // refresh the game
  function refreshGame() {
    if (confirm("WARNING: \n By clicking continue, you will reload the game and may lose game progress or game data.") == true) {
      let originalLink = game.link;
      game.link = '';
      setTimeout(() => {
        game.link = originalLink;
      }, 50);
    }
  }

  // screenshot
  // TODO: fix screenshot it broken :L
  async function takeScreenshot() {
    const canvas = await html2canvas(document.body);
    const img = canvas.toDataURL("image/png");

    // Do something with the image data, like download it
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = img;
    link.click();
  }
</script>

<!-- Font Awesome stylesheet -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
<Layout />

<!-- Navigation bar -->
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav  flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<!-- Main content area -->
<div class="flex justify-center items-center h-screen">
  <div class="w-4/5 mx-auto pt-[70px]">
    {#if game.title}
    <!-- Display the game frame if a game is found -->
    <div class="game-frame border border-black overflow-hidden mb-2 rounded-lg">
      <iframe title="Game Frame" class="z-10" src="{game.link}" width="100%" height="600px"></iframe>
    </div>

    <!-- Game information and menu bar -->
    <div class="menu-bar bg-indigo-700 flex justify-between rounded-lg items-center px-4 py-2">
      <div class="game-info flex gap-4">
        <span class="game-title text-white text-lg">{game.title}</span>
        <span class="game-creator text-gray-300 text-lg">By {game.author}</span>
      </div>
      <div class="game-info flex gap-4">
        <div class="tags">
          {#each game.tags as tag}
          <span class="text-white text-sm mr-1 bg-indigo-500 rounded-lg px-2 py-1">{tag}</span>
          {/each}
        </div>
      </div>
      <div class="icons flex gap-4">
        <!-- Buttons for taking a screenshot, opening in a new tab, going fullscreen, and reloading the game -->
        <i class="fas fa-camera text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={takeScreenshot} on:keydown={() => {}} title="Screenshot"></i>
        <i class="fas fa-external-link-alt text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={() => window.open(game.link)} on:keydown={() => {}} title="Open in new tab"></i>
        <i class="fas fa-expand text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={() => document.querySelector('.game-frame iframe')?.requestFullscreen()} on:keydown={() => {}} title="Fullscreen"></i>
        <i class="fas fa-sync-alt text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={refreshGame} on:keydown={() => {}} title="Reload"></i>
      </div>
    </div>
    {:else}
    <!-- Display a loader -->
    <div class="flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      <p class="text-white text-3xl mt-4">Loading...</p>
    </div>
    <style>
      /* loader animation */
      .loader {
        border-top-color: #3498db;
        animation: spin 0.7s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
    {/if}
  </div>
</div>
<Footer />