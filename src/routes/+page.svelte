<script lang="ts">
  import type { ResolvedCalendarData } from '$lib/types/resolved-data';
  import PageTitle from '$lib/components/page-title.svelte';
  import MoviePoster from '$lib/components/movie-poster.svelte';

  const { data } = $props<{ data: ResolvedCalendarData }>();
</script>

<PageTitle content="Calendar" />

<div id="calendar">
  <div id="calendar-header">
    <h2>A Scary Movie Every Day in October</h2>
  </div>
  <div id="calendar-list">
    {#each data.list.items as movie, i}
    <div>
      <div class="date-number">
      <h3>{i + 1}</h3>
      </div>
      <div class="calendar-day">
        <MoviePoster {movie} />
      </div>
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
    grid-template-columns: repeat(7, 200px);
    gap: 1rem;
    margin: 0 auto;
    width: fit-content;
  }

  .calendar-day {
    border: 1px solid white;
    margin-bottom: 3rem;
  }

  .date-number {
    display: flex;
    justify-content: center;
  }
</style>
