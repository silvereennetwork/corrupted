<script lang="ts">
  // Import necessary modules
  import { onMount } from "svelte";
  import html2canvas from 'html2canvas';
  import { page } from "$app/stores";
  
  // Import Svelte components
  import Layout from "../../../components/layout.svelte";
  import Footer from "../../../components/footer.svelte";

  // Define data variable (if any)
  export const data: any = null;

  // Initialize game object
  let game = {};

  // Lifecycle hook: Runs after the component is first added to the DOM
  onMount(async () => {
    console.debug("onMount");
    try {
      // Extract parameters from the route
      const { params } = $page;
      console.debug("params:", params);
      const id = Number(params.id);

      // Fetch games data from the server
      const response = await fetch("/games.json");
      
      // Check if the response is successful
      if (!response.ok) {
        console.error("Failed to fetch games.json:", response.status, response.statusText);
        game = { title: 'Failed to fetch games', description: '', link: '' };
        return;
      }

      // Parse JSON
      const games = await response.json();

      // Find the game with the given id
      game = games.find(g => g.id === id);

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

  // Function to take a screenshot of the current page
  async function takeScreenshot() {
    const canvas = await html2canvas(document.body);
    const img = canvas.toDataURL("image/png");

    // Do something with the image data, like download it
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = img;
    link.click();
  }

  var pagetitle = "Corrupted -" + game.title;
</script>

<!-- Font Awesome stylesheet -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
<Layout />

<!-- Navigation bar -->
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<!-- Main content area -->
<div class="flex justify-center items-center h-screen">
  <div class="w-4/5 mx-auto">
    {#if game.title}
    <!-- Display the game frame if a game is found -->
    <div class="game-frame border border-black overflow-hidden mb-2 rounded-md">
      <iframe title="Game Frame" src="{game.link}" width="100%" height="600px"></iframe>
    </div>

    <!-- Game information and menu bar -->
    <div class="menu-bar bg-indigo-700 flex justify-between rounded-md items-center px-4 py-2">
      <div class="game-info flex gap-4">
        <span class="game-title text-white text-lg">{game.title}</span>
        <span class="game-creator text-gray-300 text-lg">By {game.author}</span>
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