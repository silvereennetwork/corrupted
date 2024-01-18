<script>
  // Testing area dont worry about it trust me
  import Layout from "../../components/layout.svelte";
  import Footer from "../../components/footer.svelte";
  import Alerts from "../../components/alerts.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    document.title = "Corrupted";
  });
</script>

<Layout />

<Alerts />
<Footer />