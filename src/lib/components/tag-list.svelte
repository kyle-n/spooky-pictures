<script lang="ts">
  import { tags } from '../../details/tags';
  import Tag from './tag.svelte';

  let { tmdbMovieId } = $props<{ tmdbMovieId: number }>();
  const movieTags = tags[tmdbMovieId] ?? [];
  const sortedTags = movieTags.sort((a, b) => a - b);
</script>

<div class="tag-list">
  {#each sortedTags as tag}
    <Tag {tag}></Tag>
  {/each}
</div>

<style lang="scss">
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
