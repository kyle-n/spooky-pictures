<script lang="ts">
  import MoviePoster from '$lib/components/movie-poster.svelte';
import Tag from '$lib/components/tag.svelte';
  import type { ResolvedTagPageData } from '$lib/types/resolved-data';

  type Props = { data: ResolvedTagPageData };
  let { data }: Props = $props();
</script>

<div>
  <Tag tag={data.tag} />
  {#each data.movies as movie}
    <MoviePoster movie={movie} />
  {/each}
</div>
