<script>
  import { fade, slide } from 'svelte/transition';

  let toasts = [];

  export function showToast(message) {
    const id = new Date().getTime();
    toasts = [...toasts, { id, message }];

    setTimeout(() => {
      toasts = toasts.filter(toast => toast.id !== id);
    }, 5000);
  }
</script>

<button on:click={() => showToast('This is an info message that is kinda long but is cool!')}>Show Info Toast</button>

<div class="fixed bottom-0 right-0 p-6 space-y-4">
  {#each toasts as toast (toast.id)}
    <div in:slide="{{delay: 0, duration: 500}}" out:fade="{{delay: 0, duration: 500}}" class={`relative block p-4 text-base leading-5 text-black bg-white rounded-lg opacity-100 font-regular`} role="alert">
      <span>{toast.message}</span>
    </div>
  {/each}
</div>