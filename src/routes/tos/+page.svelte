<script>
  import Layout from "../../components/layout.svelte";
  import Footer from "../../components/footer.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    document.title = "Corrupted";
    pagetitle = "Terms of service";
  });
</script>

<Layout />

<!-- Navigation bar -->
<div class="w-11/12 mx-auto h-18 bg-indigo-700 text-4xl text-center nav fixed top-0 left-0 right-0 flex justify-around items-center py-3 rounded-lg shadow-lg mt-3">
  <a class="duration-150 hover:opacity-25 flex items-center" href="/">
    <span>Home</span>
  </a>
  <a class="duration-150 hover:opacity-25 flex items-center" href="/play">
    <span>Games</span>
  </a>
</div>

<div class="flex flex-col items-center justify-center">
  <img src="../../corrupted-text.png" alt="logo" class="w-full sm:w-1/2 pt-10 mx-auto logo" />
  <h1 class="text-4xl p-2">Terms of Service for Corrupted</h1>
  <p class="text-xl">Last Updated: January 18, 2024</p>
  <p class="text-2xl">Welcome to Corrupted! Please read these Terms of Service ("Terms") carefully before using our website and services.</p>
</div>

<div class="p-16">
  <div class="xpand overflow-hidden rounded-lg">
    <div class="text-section sm:mr-4">
      <h2 class="text-left text-xl p-2">1. Acceptance of Terms</h2>
      <p class="text-left text-md">
        By accessing or using Corrupted, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
      </p>
      <h2 class="text-left text-xl p-2">2. Limitation of Liability</h2>
      <p class="text-left text-md">
        2.1. Corrupted is not liable for any damages or losses from using our services.
      </p>
      <h2 class="text-left text-xl p-2">3. Privacy Policy</h2>
      <p class="text-left text-md">
        3.1. Our Privacy Policy governs the collection and use of user data. Please review it <a href="/privacy">here</a>.
      </p>
      <h2 class="text-left text-xl p-2">4. Changes to Terms</h2>
      <p class="text-left text-md">
        4.1. Corrupted reserves the right to update or modify these Terms anytime, with or without warning.
      </p>
      <h2 class="text-left text-xl p-2">5. Contact Information</h2>
      <p class="text-left text-md">
        If you have any questions or concerns about these Terms, please contact us at echo-the-coder@tuta.io
      </p>
      <p class="text-left text-xl">
        By using Corrupted, you acknowledge that you have read and understood these Terms of Service.
      </p>
    </div>
  </div>
</div>

<Footer />