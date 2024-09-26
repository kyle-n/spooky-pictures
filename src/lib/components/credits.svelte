<script lang="ts">
  import type { TMDBMovieCredits } from '$lib/types/tmdb-movie-credits';
  import CastList from './cast-list.svelte';
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';
  import MovieMetadataTable from './movie-metadata-table.svelte';
  import MovieLinkList from './movie-link-list.svelte';

  let {
    details,
    credits,
    dtddLink
  }: {
    details: TMDBMovieDetails;
    credits: TMDBMovieCredits;
    dtddLink: string | undefined;
  } = $props();
  const directors = $derived(
    credits.crew
      .filter(person => person.job?.toLowerCase() === 'director')
      .map(person => person.name)
      .join(', ')
  );
</script>

<div id="metadata" class="rounded">
  <p>Directed by <strong>{directors}</strong></p>
  <p><em>{details.tagline}</em></p>
  <MovieMetadataTable {details} />
  <p>{details.overview}</p>
  <div id="cast-list-container">
    <CastList cast={credits.cast} />
  </div>
  <MovieLinkList {details} {dtddLink} />
</div>

<style lang="scss">
  #metadata {
    max-width: 45rem;
  }

  #cast-list-container {
    margin-bottom: 2.5rem;
  }

  .rounded {
    border-radius: 1rem;
  }
</style>
