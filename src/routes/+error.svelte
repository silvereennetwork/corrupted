<script>
  import Layout from "../components/layout.svelte";
  import Footer from "../components/footer.svelte";
  import Alerts from "../components/alerts.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    document.title = "404 - Page Not Found";
  });
</script>

<style>
  /* styles override */
</style>

<Layout pagetitle="404 Error" />

<div class="flex flex-col h-screen justify-between">
  <div class="flex flex-col h-screen justify-between">
    <div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3 z-10">
      <a class="duration-150 hover:opacity-25 flex items-center" href="/">
        <span>Home</span>
      </a>
      <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
        <span>Games</span>
      </a>
    </div>

    <div class="flex flex-col items-center justify-center h-full py-20 space-y-10">
      <img src="https://cdn.3kh0.net/undraw_page_not_found_re_e9o6.svg" alt="Not Found" class="h-80" />
      <h1 class="text-4xl">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">Return to Home</a>
    </div>
  </div>

  <Footer />
</div>

<Alerts />