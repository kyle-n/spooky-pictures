import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedTagPageData } from '$lib/types/resolved-data.js';
import { TMDBMovieDetails } from '$lib/types/tmdb-movie-details.js';
import { MovieTag, tags } from '../../../../details/tags.js';

export async function load({ params }): Promise<ResolvedTagPageData> {
  const tagValue = params.tagValue as string | undefined;
  if (tagValue === undefined) throw new Error('Tag value is undefined');
  const tag = Number(tagValue) as MovieTag;
  const tmdbMovieIds = Object.entries(tags)
    .filter(([tmdbMovieId, tags]) => tags.includes(tag))
    .map(([tmdbMovieId, tags]) => Number(tmdbMovieId));
  const movies: Array<TMDBMovieDetails> = [];
  for await (const tmdbMovieId of tmdbMovieIds) {
    movies.push(await TMDBConnector.getMovieDetails(tmdbMovieId));
  }
  return {
    tag,
    movies
  };
}
