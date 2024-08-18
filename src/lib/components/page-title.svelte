<script lang="ts">
  import { SITE_NAME } from '$lib/site-metadata';

  export let content: string;


</script>

<svelte:head>
  <title>{content} | {SITE_NAME}</title>
  <meta property="og:title" {content} />
  <meta property="twitter:title" {content} />
</svelte:head>
