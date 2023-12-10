<script>
  import Layout from "../components/layout.svelte";
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
</style>
<Layout />

<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-1/2 pt-20 mx-auto logo" />
  <a href="/play"><button class="mx-auto w-44 h-16 text-2xl cursor-pointer bg-white text-black rounded-md duration-150 hover:opacity-75">Let's Play!</button></a>
</div>

<div class="ml-4 p-24">
  <video src="/example.mp4" class="float-right w-1/2 inline-block rounded-md" autoplay loop muted></video>
  <div class="xpand overflow-hidden rounded-md">
    <h1 class="text-left text-4xl inline-block">What is Corrupted?</h1>
    <br />
    <p class="text-left w-1/2 text-xl inline-block">
      Corrupted is a website where you can play many games from retro-style games to flash games. We have the ultamate game library for retro-style games and games you can not play anywhere else online. Lets get playing!
    </p>
    <div class="w-1/3 h-10"></div>
    <img src="/games/slope.jpg" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
    <img src="/games/2048.png" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
    <img src="/games/tunnel-rush.jpg" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
  </div>
</div>