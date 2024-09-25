<script lang="ts">
  import { base } from '$app/paths';
  import type { TMDBMovie } from '$lib/types/tmdb-movie';
  import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details';

  let {
    movie,
    bordered = false
  }: { movie: TMDBMovie | TMDBMovieDetails; bordered?: boolean } = $props();

  const src = $derived('https://image.tmdb.org/t/p/w342' + movie.poster_path);
  const href = $derived(base + '/movies/' + movie.id);
</script>

<a {href}>
  <img
    {src}
    alt="{movie.title} poster"
    loading="lazy"
    style="--border-width: {bordered ? '1px' : 0}"
  />
</a>

<style lang="scss">
  @use 'src/app' as globals;

  img {
    height: globals.$mobile-poster-height;
    border: solid white;
    border-width: var(--border-width);

    @media screen and (min-width: globals.$mobile) {
      height: globals.$desktop-poster-height;
    }
  }
</style>
