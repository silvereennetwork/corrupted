<script>
  import { onMount } from 'svelte';
  import Layout from "../../components/layout.svelte";
  import Footer from "../../components/footer.svelte";
  import Alerts from "../../components/alerts.svelte";

  let iconUrl = '';
  let tabTitle = '';

  onMount(() => {
    iconUrl = localStorage.getItem('customIcon') || '';
    tabTitle = localStorage.getItem('customTitle') || '';
  });

  function updateIconUrl(event) {
    iconUrl = event.target.value;
    localStorage.setItem('customIcon', iconUrl);
  }

  function updateTabTitle(event) {
    tabTitle = event.target.value;
    localStorage.setItem('customTitle', tabTitle);
  }
</script>

<Layout pagetitle="Settings" />

<!-- Navigation bar -->
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3 z-10">
  <a class="text-white hover:text-indigo-300 transition-colors duration-200 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="text-white hover:text-indigo-300 transition-colors duration-200 flex items-center" href="/settings">
    <span>Settings</span>
  </a>
</div>

<div class="p-16">
  <h1 class="text-left text-4xl p-2">Settings</h1>

  <div class="bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 mt-4">
    <div class="text-section sm:mr-4">
      <h2 class="text-left text-2xl p-2">Analytics and Data</h2>
      <p class="text-left text-xl">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" />
          <span class="ml-2 text-white">Turn off Analytics</span>
        </label>
      </p>

      <h2 class="text-left text-2xl p-2">Custom Tab Icon</h2>
      <p class="text-left text-xl">
        <label class="block">
          <span class="text-white">URL:</span>
          <input type="text" bind:value={iconUrl} on:input={updateIconUrl} class="form-input mt-1 block w-full rounded-md" placeholder="Enter URL of the custom tab icon" />
        </label>
      </p>

      <h2 class="text-left text-2xl p-2">Custom Tab Title</h2>
      <p class="text-left text-xl">
        <label class="block">
          <span class="text-white">Title:</span>
          <input type="text" bind:value={tabTitle} on:input={updateTabTitle} class="form-input mt-1 block w-full rounded-md" placeholder="Enter custom tab title" />
      </p>
    </div>
  </div>
</div>

<Alerts />
<Footer />