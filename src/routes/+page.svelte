<script lang="ts">
  import PageTitle from '$lib/components/page-title.svelte';
  import type { ResolvedCalendarData } from '$lib/types/resolved-data';

  let { list } = $props<{ data: ResolvedCalendarData }>();
</script>

<PageTitle content="Calendar" />

<p>yo</p>
