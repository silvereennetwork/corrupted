<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Layout from "../../../components/layout.svelte";
  export const data: any = null;

  let game = {};

  onMount(async () => {
    console.debug("onMount");
    try {
      const { params } = $page;
      console.debug("params:", params);
      const id = Number(params.id);
      const response = await fetch("/games.json");
      if (!response.ok) {
        console.error("Failed to fetch games.json:", response.status, response.statusText);
        game = { title: 'Failed to fetch games', description: '', link: '' };
        return;
      }
      const games = await response.json();
      console.debug("games:", games);
      game = games.find(g => g.id === id);
      if (!game) {
        console.error("No game found with id:", id);
        game = { title: 'Game not found', description: '', link: '' };
      }
    } catch (error) {
      console.error("Error in onMount:", error);
      game = { title: 'Error loading game', description: '', link: '' };
    }
  });

  function refreshGame() {
    if (confirm("WARNING: \n By clicking continue, you will reload the game and may loose game progress or game data.") == true) {
    let originalLink = game.link;
    game.link = '';
    setTimeout(() => {
      game.link = originalLink;
    }, 50);
    }
  }
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
<Layout />

<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<div class="flex justify-center items-center h-screen bg-gray-800">
  <div class="w-4/5 mx-auto">
    {#if game.title}
    <div class="game-frame border border-black overflow-hidden mb-2 rounded-md">
      <iframe title="Game Frame" src="{game.link}" width="100%" height="600px"></iframe>
    </div>
    <div class="menu-bar bg-indigo-700 flex justify-between rounded-md items-center px-4 py-2">
      <div class="game-info flex gap-4">
        <span class="game-title text-white text-lg">{game.title}</span>
        <span class="game-creator text-gray-300 text-lg">By {game.author}</span>
      </div>
      <div class="icons flex gap-4">
        <i class="fas fa-camera text-white text-lg cursor-pointer" on:click={() => console.log('Screenshot button clicked')} on:keydown={() => {}}></i>
        <i class="fas fa-external-link-alt text-white text-lg cursor-pointer" on:click={() => window.open(game.link)} on:keydown={() => {}}></i>
        <i class="fas fa-expand text-white text-lg cursor-pointer" on:click={() => document.querySelector('.game-frame iframe')?.requestFullscreen()} on:keydown={() => {}}></i>
        <i class="fas fa-sync-alt text-white text-lg cursor-pointer" on:click={refreshGame} on:keydown={() => {}}></i>
      </div>
    </div>
    {:else}
    <div class="flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      <p class="text-white text-3xl mt-4">Loading...</p>
    </div>
    <style>
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
