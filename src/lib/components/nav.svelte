<script lang="ts">
  import { base } from '$app/paths';
  import CalloutBox from './callout-box.svelte';

  const links = [
    {
      name: 'Calendar',
      href: `${base}/`
    },
    {
      name: 'Library',
      href: `${base}/library`
    }
  ];
</script>

<nav>
  <CalloutBox>
    <ul>
      {#each links as { name, href }, i}
        <li>
          <a {href}>{name}</a>
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
</style>
