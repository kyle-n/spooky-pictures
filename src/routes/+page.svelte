<script lang="ts">
  import type { ResolvedCalendarData } from '$lib/types/resolved-data';
  import PageTitle from '$lib/components/page-title.svelte';
  import MoviePoster from '$lib/components/movie-poster.svelte';
  import { onMount } from 'svelte';
  import type { TMDBMovie } from '$lib/types/tmdb-movie';

  const { data } = $props<{ data: ResolvedCalendarData }>();
  let unlockedMovies = $state<TMDBMovie[]>([]);

  onMount(() => {
    const dayOfMonth = new Date().getDate();
    unlockedMovies = data.list.items.slice(0, dayOfMonth);
  });
</script>

<PageTitle content="Calendar" />

<div id="calendar">
  <div id="calendar-list">
    {#each unlockedMovies as movie, i}
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
  #calendar-list {
    display: grid;
    grid-template-columns: repeat(7, 200px);
    gap: 1rem;
    margin: 4rem auto 0 auto;
    width: fit-content;
  }

  .calendar-day {
    border: 1px solid white;
    margin-bottom: 3rem;
    height: 302px;
  }

  .date-number {
    display: flex;
    justify-content: center;
  }
</style>
