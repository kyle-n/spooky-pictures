import type { ResolvedCalendarData } from '$lib/types/resolved-data';

export async function load(): Promise<ResolvedCalendarData> {
  return { list: {} as any };
}
