<script lang="ts">
  import type { ResolvedCalendarData } from '$lib/types/resolved-data';
  import PageTitle from '$lib/components/page-title.svelte';
  import MoviePoster from '$lib/components/movie-poster.svelte';
  import { onMount } from 'svelte';
  import type { TMDBMovie } from '$lib/types/tmdb-movie';
  import SiteIntro from '$lib/components/site-intro.svelte';

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
  <div id="intro-container">
    <SiteIntro />
  </div>
</div>

<style lang="scss">
  @use 'src/app' as globals;

  $col-width: 200px;

  #calendar-list {
    display: grid;
      grid-template-columns: repeat(2, $col-width);
    gap: 1rem;
    margin: 4rem auto 0 auto;
    width: fit-content;

    @media screen and (min-width: 620px) {
      grid-template-columns: repeat(3, $col-width);
    }

    @media screen and (min-width: 1025px) {
      grid-template-columns: repeat(4, $col-width);
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(7, 1fr);
    }
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

  #intro-container {
    min-width: 20em;
    max-width: 40em;
    margin: 2rem auto 0 auto;
  }
</style>
