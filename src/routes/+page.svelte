<script lang="ts">
  import type { ResolvedCalendarData } from '$lib/types/resolved-data';
  import PageTitle from '$lib/components/page-title.svelte';
  import MoviePoster from '$lib/components/movie-poster.svelte';

  const { data } = $props<{ data: ResolvedCalendarData }>();
</script>

<PageTitle content="Calendar" />

<div id="calendar">
  <div id="calendar-header">
    <h2>Scary Movie of the Day</h2>
  </div>
  <div id="calendar-list">
    {#each data.list.items as movie}
      <div class="calendar-day">
        <MoviePoster {movie} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  #calendar-header {
    margin-top: 2rem;
  }

  #calendar-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;
  }

  .calendar-day {
    border: 1px solid white;
  }
</style>
