<script lang="ts">
  import { tags } from '../../details/tags';
  import Tag from './tag.svelte';

  let { tmdbMovieId } = $props<{ tmdbMovieId: number }>();
  const movieTags = tags[tmdbMovieId] ?? [];
</script>

<div class="tag-list">
  {#each movieTags as tag}
    <Tag {tag}></Tag>
  {/each}
</div>
