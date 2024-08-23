import type { HomepageList } from '$lib/types/homepage-list';

export const homepageLists: HomepageList[] = [
  { tmdbId: 8310773, internalLabel: 'light' },
  {
    name: 'Great directors',
    tmdbIds: [11770, 7623, 54025, 291263, 5140, 2127, 551463]
  },
  { tmdbId: 8310775, internalLabel: 'comedies' },
  { tmdbId: 8310776, internalLabel: 'classics' },
  { name: 'Final girls', tmdbIds: [10205] },
  { tmdbId: 8310777, internalLabel: 'scary-silly' },
  { tmdbId: 8310778, internalLabel: 'political' }
];
