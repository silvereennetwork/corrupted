<script>
  import Layout from "../components/layout.svelte";
  import Footer from "../components/footer.svelte";
  import Alerts from "../components/alerts.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    document.title = "Corrupted";
  });
</script>

<Layout />

<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-full sm:w-1/2 pt-20 mx-auto logo" />
  <h1 class="text-4xl p-2">Terms of Service</h1>
</div>

<div class="p-16">
  <div class="xpand overflow-hidden rounded-md">
    <div class="text-section sm:mr-4">
      <h2 class="text-left text-2xl p-2">1. Acceptance of Terms</h2>
      <p class="text-left text-xl">
        By accessing and using Corrupted, you accept and agree to be bound by the terms and provision of this agreement.
      </p>
      <h2 class="text-left text-2xl p-2">2. Provision of Services</h2>
      <p class="text-left text-xl">
        You agree and acknowledge that Corrupted is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you.
      </p>
      <!-- Add more terms as needed -->
    </div>
  </div>
</div>

<Alerts />
<Footer />