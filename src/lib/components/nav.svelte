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
  ul {
    margin-bottom: 0;
  }

  li {
    list-style-type: none;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
