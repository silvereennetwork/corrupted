<script>
  import Layout from "../components/layout.svelte";
  import Footer from "../components/footer.svelte";
  import Alerts from "../components/alerts.svelte";
  import partners from "../partners.json";
  import { onMount } from "svelte";

  let games = [];
  let randomGames = [];

  onMount(async () => {
    const response = await fetch('/games.json');
    games = await response.json();

    // Shuffle the games and take the first three
    shuffle(games);
    randomGames = games.slice(0, 3);

    document.title = "Corrupted";
  });

  // https://stackoverflow.com/a/2450976
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
</script>

<style>
  .logo:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  .logo {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
  .xpand {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out;
  }
  .xpand:hover {
    transform: scale(1.05);
  }
  .carousel {
    display: flex;
    overflow: auto;
    animation: scroll 30s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
<Layout />

<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3 z-10">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-full sm:w-1/2 pt-20 mx-auto logo" />
  <a href="/play"><button class="mx-auto w-44 h-16 text-2xl cursor-pointer bg-white text-black rounded-lg duration-150 hover:opacity-75">Let's Play!</button></a>
</div>

<div class="p-16">
  <video src="/example.mp4" class="w-full sm:float-right sm:w-1/2 inline-block rounded-lg m-4" autoplay loop muted></video>
  <div class="xpand overflow-hidden rounded-lg">
    <div class="text-section sm:mr-4">
      <h1 class="text-left text-4xl p-2">What is Corrupted?</h1>
      <p class="text-left text-xl">
        Corrupted is a website where you can play many retro-style games and flash games. We have the ultimate game library for retro-style games and games you can not play anywhere else online. Let's get playing!
      </p>
    </div>
  </div>
  <div class="image-section grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 h-40">
    {#each randomGames as game}
      <a href={game.link}>
        <img src={game.image} class="rounded-lg cursor-pointer duration-150 hover:opacity-75 h-40 w-40" alt={game.title} />
      </a>
    {/each}
  </div>
</div>

<h1 class="text-left text-4xl p-2">Partners</h1>

<div class="carousel p-4 rounded-lg">
  {#each partners as partner}
    <div class="partner flex flex-col items-center m-2 p-2 bg-gray-800 rounded-lg shadow-lg max-w-64">
      <img class="w-24 h-24 object-cover rounded-lg mb-2" src={partner.icon} alt={partner.name} />
      <h2 class="text-xl font-bold mb-1">{partner.name}</h2>
      <p class="text-sm text-indigo-300 mb-2">{partner.description}</p>
      <a class="text-blue-500 hover:text-blue-700 underline" href={partner.url}>Learn More</a>
    </div>
  {/each}
</div>

<Alerts />
<Footer />