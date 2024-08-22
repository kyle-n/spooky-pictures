<script lang="ts">
  import type {
    TMDBLocaleWatchProviders,
    TMDBWatchProvidersResponse
  } from '$lib/types/tmdb-watch-provider';

  let { response } = $props<{
    response: TMDBWatchProvidersResponse;
  }>();
  let selectedLocale = $state('US');

  let watchProvidersForSelectedLocale: TMDBLocaleWatchProviders | undefined =
    $derived(response.results[selectedLocale]);
  const streaming = $derived(watchProvidersForSelectedLocale?.flatrate ?? []);
  const buying = $derived(watchProvidersForSelectedLocale?.buy ?? []);
  const renting = $derived(watchProvidersForSelectedLocale?.rent ?? []);

  const providerCategories = $derived(
    [
      { name: 'Streaming', providers: streaming },
      { name: 'Buy', providers: buying },
      { name: 'Rent', providers: renting }
    ].filter(category => category.providers.length > 0)
  );

  const englishRegionNames = new Intl.DisplayNames(['en'], { type: 'region' });
</script>

<h3>Streaming options</h3>
<select bind:value={selectedLocale}>
  {#each Object.keys(response.results) as locale}
    <option value={locale}>{englishRegionNames.of(locale)}</option>
  {/each}
</select>
<div id="providers-list">
  {#if !watchProvidersForSelectedLocale}
    <p>No streaming options available.</p>
  {:else}
    <a
      href={watchProvidersForSelectedLocale.link}
      target="_blank"
      referrerpolicy="no-referrer"
    >
      {#each providerCategories as providerCategory}
        <h4>{providerCategory.name}</h4>
        <div class="provider-category">
          {#each providerCategory.providers as provider}
            <div class="provider">
              <img
                src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                alt={provider.provider_name}
              />
            </div>
          {/each}
        </div>
      {/each}
    </a>
  {/if}
</div>

<style lang="scss">
  #providers-list {
    h4 {
      margin: 0.5rem;
    }
    .provider-category {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 1rem;

      div {
        margin: 0.5rem;
        img {
          height: 50px;
        }
      }
    }
  }
</style>
