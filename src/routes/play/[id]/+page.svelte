<script lang="ts">
  // Import necessary modules
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  // Import Svelte components
  import Layout from "../../../components/layout.svelte";
  import Footer from "../../../components/footer.svelte";

  export const data: any = null;
  let game = {};
  let windowDefined = typeof window !== "undefined";
  let isEmbed = false;

  if (windowDefined) {
    console.log("window is defined");
    isEmbed = window.location.search.includes("embed");
  }

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

  // are we embedded?
  if (isEmbed) {
    console.log('we are embedded');
    // TODO focus on the game frame
    // hide pretty much everything else
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
  } else {
    console.log('we are not embedded');
  }

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
  function share() {
    let link = window.location.href;
    let embedCodeDiv = document.getElementById('embedCode');
    let sharePopup = document.getElementById('sharePopup');
    let embedCode = `<iframe src="${link}?embed" width="100%" height="600px" allowfullscreen></iframe>`;
    if (embedCodeDiv) embedCodeDiv.value = embedCode;
    if (sharePopup) sharePopup.style.display = 'block';
  }
  function copyLink() {
    const copyLink = document.getElementById('copyLink');
    navigator.clipboard.writeText(window.location.href);
    if (copyLink) copyLink.innerHTML = 'Copied!';
    setTimeout(() => {
      if (copyLink) copyLink.innerHTML = 'Copy Link';
    }, 2000);
  }
</script>
<Layout pagetitle={game.title} />

<!-- Share popup -->
<div id="sharePopup" class="fixed z-40 inset-0 overflow-y-auto" style="display: none" aria-labelledby="sharePopupLabel" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="relative inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-indigo-700 px-4 py-5 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 sm:mx-0 sm:h-10 sm:w-10">
            <i class="fas fa-share text-white text-2xl"></i>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-white" id="sharePopupLabel">Share Game</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-200">Share this game with a link or embed it on a site</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 sm:px-6 sm:flex sm:flex-row items-stretch space-x-4">
        <span class="text-lg flex items-center">Embed code: </span>
        <input id="embedCode" type="text" readonly class="text-lg w-full bg-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 sm:w-1/2 sm:text-right">
        <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => navigator.clipboard.writeText(document.getElementById('embedCode').value)}>
          <div class="text-lg"><i class="fas fa-copy"></i></div>
        </button>
      </div>
      <button type="button" id="copyLink" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"on:click={copyLink}>Copy Game Link</button>
      <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm mx-auto mt-auto mb-4" onclick="document.getElementById('sharePopup').style.display = 'none';">
        Close
      </button>
    </div>
  </div>
</div>

<!-- Font Awesome stylesheet -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
{#if !isEmbed}
  <!-- Navigation bar -->
  <div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav  flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
    <a class="duration-150 hover:opacity-25 flex items-center" href="/">
      <span>Home</span>
    </a>
    <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
      <span>Games</span>
    </a>
  </div>
{/if}
<!-- Main content area -->
<div class="flex justify-center items-center h-screen">
  <div class="w-4/5 mx-auto pt-[70px]">
    {#if game.title}
    <div class={isEmbed ? 'flex flex-col h-screen' : ''}>
    <!-- Display the game frame if a game is found -->
      <div class={`game-frame border border-black overflow-hidden mb-2 rounded-lg ${isEmbed ? 'flex-grow' : ''}`}>
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
          <i class="fas fa-external-link-alt text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={() => window.open(game.link)} on:keydown={() => {}} title="Open in new tab"></i>
          <i class="fas fa-expand text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={() => document.querySelector('.game-frame iframe')?.requestFullscreen()} on:keydown={() => {}} title="Fullscreen"></i>
          <i class="fas fa-sync-alt text-white text-lg cursor-pointer" role="button" tabindex="0" on:click={refreshGame} on:keydown={() => {}} title="Reload"></i>
        </div>
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
{#if !isEmbed}
  <Footer />
{/if}