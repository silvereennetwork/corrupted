<script>
  import "../app.css";
  export let pagetitle = "";
</script>
<svelte:head>
  <title>Corrupted - {pagetitle}</title>
  <meta content="Corrupted - {pagetitle}" property="og:title" />
  <meta content="Feel the nostalgia by playing all the retros in one place." property="og:description" />
  <meta content="https://corruptedgaming.online/" property="og:url" />
  <meta content="https://corruptedgaming.online/corrupted-logo.png" property="og:image" />
  <meta content="#1f2937" data-react-helmet="true" name="theme-color" />
</svelte:head>

<slot />
<div class="bg"></div>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

  /*:global(body) {
    background: #111111;
    margin: 0;
    overflow-x: hidden;
    color: white;
    font-family: "Fira Sans", sans-serif;
    background-size: cover;
  }

  .bg {
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url("/img/noise-transparent.png") repeat 0 0;
    background-repeat: repeat;
    animation: bg-animation 0.2s infinite;
    opacity: 0.9;
    visibility: visible;
    z-index: -1;
  }

  @keyframes bg-animation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 0);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(5%, 0);
    }
  }
*/

  :global(body) {
    margin: 0;
    overflow-x: hidden;
    color: white;
    font-family: "Fira Sans", sans-serif;
    background: repeating-radial-gradient(#000 0 0.0001%, #1a1a1a 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%, #1a1a1a 0 0.0002%) 60% 60%/2500px 2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
  }

  @keyframes b {
    100% {
      background-position: 50% 0, 60% 50%;
    }
  }
</style>