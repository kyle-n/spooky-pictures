<script lang="ts">
  import { base } from '$app/paths';
  import type { TMDBMovie } from '$lib/types/tmdb-movie';
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';

  let { movie }: { movie: TMDBMovie | TMDBMovieDetails } = $props();

  const src = $derived(
    'https://image.tmdb.org/t/p/w342' + movie.poster_path
  );
  const href = $derived(base + '/movies/' + movie.id);
</script>

<a {href}>
  <img {src} alt="{movie.title} poster" loading="lazy" />
</a>

<style lang="scss">
  img {
    height: 30rem;
  }
</style>
