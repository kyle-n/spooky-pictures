<script lang="ts">
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';

  let {
    details,
    dtddLink
  }: { details: TMDBMovieDetails; dtddLink: string | undefined } = $props();

  const encodedTitle = $derived(
    encodeURIComponent(details.title.toLowerCase())
  );

  const referenceLinks = $derived.by(() => {
    const links = [
      {
        name: 'Metacritic',
        href: `https://www.metacritic.com/search/${encodedTitle}?page=1&category=2`
      },
      {
        name: 'IMDB',
        href: `https://www.imdb.com/title/${details.imdb_id}`
      },
      {
        name: 'Letterboxd',
        href: `https://letterboxd.com/tmdb/${details.id}/`
      }
    ];
    if (dtddLink !== undefined) {
      links.push({
        name: 'Content Warnings',
        href: dtddLink
      });
    }
    return links;
  });
</script>

<div id="reference-link-container">
  {#each referenceLinks as { name, href }}
    <a {href} class="reference-link" target="_blank">{name}</a>
  {/each}
</div>

<style lang="scss">
  .reference-link {
    padding: 0 1rem;
    border-right: 1px solid white;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
  }

  #reference-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
