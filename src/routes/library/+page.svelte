<script lang="ts">
  import MovieList from '$lib/components/movie-list.svelte';
  import PageTitle from '$lib/components/page-title.svelte';
  import PeopleList from '$lib/components/people-list.svelte';
  import SiteIntro from '$lib/components/site-intro.svelte';
  import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

  let { data } = $props<{ data: ResolvedOscarCategoryList }>();
</script>

<PageTitle content="Library" />

<div id="intro-container">
  <p>Want more than one recommendation a day? Check out these other great horror flicks.</p>
</div>
{#each data.categories as category}
  <section>
    <h2>{category.name}</h2>
    {#if category.movies}
      <p>{category.description}</p>
      <MovieList movies={category.movies} />
    {:else}
      <PeopleList peopleCategory={category} />
    {/if}
  </section>
{/each}

<style lang="scss">
  @use 'src/app' as globals;

  #intro-container {
    display: flex;
    justify-content: center;
    margin: globals.$main-spacing;
  }

  section {
    margin: globals.$main-spacing 5rem;
    margin-bottom: globals.$main-spacing * 2;

    @media screen and (max-width: globals.$mobile) {
      & {
        margin: globals.$main-spacing;
      }
    }
  }
</style>
