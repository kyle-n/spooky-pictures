<script lang="ts">
  import { base } from '$app/paths';
  import CalloutBox from './callout-box.svelte';

  const links = [
    {
      name: 'Calendar',
      href: `${base}/`,
      iconHtml:
        '<svg style="margin-bottom: 3px" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></svg>'
    },
    {
      name: 'Library',
      href: `${base}/library`,
      iconHtml:
        '<svg style="margin-bottom: 3px" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="currentColor" d="M12 22.5q-1.8-1.7-4.125-2.6T3 19V8q2.525 0 4.85.913T12 11.55q1.825-1.725 4.15-2.637T21 8v11q-2.575 0-4.887.9T12 22.5M12 9q-1.65 0-2.825-1.175T8 5t1.175-2.825T12 1t2.825 1.175T16 5t-1.175 2.825T12 9"/></svg>'
    }
  ];
</script>

<nav>
  <CalloutBox>
    <ul>
      {#each links as { name, href, iconHtml }, i}
        <li>
          <a {href}>{@html iconHtml}&nbsp;{name}</a>
        </li>
      {/each}
    </ul>
  </CalloutBox>
</nav>

<style lang="scss">
  @use 'src/app' as globals;

  ul {
    margin-bottom: 0;
    display: flex;

    @media screen and (min-width: globals.$mobile) {
      display: block;
    }
  }

  li {
    list-style-type: none;
    margin-right: globals.$main-spacing;

    @media screen and (min-width: globals.$mobile) {
      display: block;
      margin-right: 0;
    }

    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  }

  a {
    display: flex;
    align-items: center;
  }
</style>
