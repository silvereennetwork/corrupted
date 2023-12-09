<script>
  import Layout from "../components/layout.svelte";
</script>
<Layout />
<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-1/3 mx-auto" />
  <a href="/play"><button class="mx-auto w-44 h-16 text-2xl cursor-pointer bg-white opacity-25 text-black rounded-md duration-150 hover:opacity-75">Let's Play!</button></a>
</div>
<div class="w-1/3 h-48"></div>
<div class="ml-4">
  <video src="/example.mp4" class="float-right w-1/2 inline-block" autoplay loop muted></video>
  <h1 class="text-left text-4xl inline-block">What is Corrupted?</h1>
  <br />
  <p class="text-left w-1/2 text-xl inline-block">
    Corrupted is a amazing website where you can play many games from retro-style games to flash games. We have the ultamate game library for retro-style games and games you can not play anywhere else online. Lets get playing!
  </p>
  <div class="w-1/3 h-10"></div>
  <img src="/games/slope.jpg" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
  <img src="/games/2048.png" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
  <img src="/games/tunnel-rush.jpg" class="w-48 h-48 inline-block ml-10 rounded-md cursor-pointer hover:opacity-75" alt="slope" />
</div>