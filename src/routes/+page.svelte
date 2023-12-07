<script>
  import Layout from "../components/layout.svelte";
  import Description from "../components/description.svelte";
</script>
<Layout />
<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-1/3 mx-auto" />
  <a href="/play"><button class="mx-auto w-44 h-16 text-2xl cursor-pointer bg-white opacity-25 text-black rounded-md duration-150 hover:opacity-75">Let's Play!</button></a>
</div>
<div class="w-1/3 h-48"></div>
<Description />