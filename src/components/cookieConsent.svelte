<script>
  let consent = localStorage.getItem('cookie-consent');

  function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    consent = 'accepted';
  }
</script>

{#if consent !== 'accepted'}
  <div class="fixed bottom-0 left-0 right-0 z-50 w-11/12 mx-auto h-18 bg-indigo-700 text-center nav flex flex-col justify-around items-center py-3 rounded-lg shadow-lg my-3">
    <p class="text-2xl">
      We use cookies to improve your experience. By using our site, you agree to our use of cookies.
    </p>
    <button class="text-lg duration-150 hover:opacity-25 bg-indigo-400 rounded-lg p-2" on:click={acceptCookies}>
      Accept Cookies
    </button>
  </div>
{/if}