<script>
  import Layout from "../components/layout.svelte";
  import Footer from "../components/footer.svelte";
  import Alerts from "../components/alerts.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    document.title = "Corrupted";
  });
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
  <a href="/play"><button class="mx-auto w-44 h-16 text-2xl cursor-pointer bg-white text-black rounded-md duration-150 hover:opacity-75">Let's Play!</button></a>
</div>

<div class="p-16">
  <video src="/example.mp4" class="w-full sm:float-right sm:w-1/2 inline-block rounded-md m-4" autoplay loop muted></video>
  <div class="xpand overflow-hidden rounded-md">
    <div class="text-section sm:mr-4">
      <h1 class="text-left text-4xl p-2">What is Corrupted?</h1>
      <p class="text-left text-xl">
        Corrupted is a website where you can play many retro-style games and flash games. We have the ultimate game library for retro-style games and games you can not play anywhere else online. Let's get playing!
      </p>
    </div>
  </div>
  <div class="image-section grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
    <a href="/play/10"><img src="/games/super-mario.webp" class="w-full h-auto rounded-md cursor-pointer duration-150 hover:opacity-75" alt="slope" /></a>
    <a href="/play/11"><img src="/games/mario-kart.webp" class="w-full h-auto rounded-md cursor-pointer duration-150 hover:opacity-75" alt="slope" /></a>
    <a href="/play/3"><img src="/games/pokemon-ruby.webp" class="w-full h-auto rounded-md cursor-pointer duration-150 hover:opacity-75" alt="slope" /></a>
  </div>
</div>
<Alerts />
<Footer />