import type { ResolvedCalendarData } from '$lib/types/resolved-data';
import TMDBConnector from '$lib/tmdb-connector';

export async function load(): Promise<ResolvedCalendarData> {
  const listId = 8311264;
  const list = await TMDBConnector.getList(listId);
  return { list };
}
