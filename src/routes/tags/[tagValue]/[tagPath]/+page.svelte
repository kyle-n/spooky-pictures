<script lang="ts">
  import MoviePoster from '$lib/components/movie-poster.svelte';
  import Tag from '$lib/components/tag.svelte';
  import type { ResolvedTagPageData } from '$lib/types/resolved-data';

  type Props = { data: ResolvedTagPageData };
  let { data }: Props = $props();
</script>

<div>
  <Tag tag={data.tag} />
  <div id="movie-list">
    {#each data.movies as movie}
      <MoviePoster {movie} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use 'src/app' as globals;

  div {
    padding: globals.$main-spacing;
  }

  #movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: globals.$main-spacing;
    padding: globals.$main-spacing;
  }
</style>
