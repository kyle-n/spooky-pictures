import { MovieTag } from '../../details/tags';
import type { TMDBList } from './tmdb-list';
import type { TMDBMovie } from './tmdb-movie';
import type { TMDBMovieCredits } from './tmdb-movie-credits';
import type { TMDBMovieDetails } from './tmdb-movie-details';
import type { TMDBVideo } from './tmdb-video';
import type { TMDBWatchProvidersResponse } from './tmdb-watch-provider';

export type OscarCategory = {
  name: string;
  description: string;
  movies: TMDBMovie[];
};

export type PeopleCategory = {
  name: string;
  people: TMDBPersonDetails[];
};

export type ResolvedOscarCategoryList = {
  categories: Array<OscarCategory | PeopleCategory>;
};

export type ResolvedMovieDetails = {
  details: TMDBMovieDetails;
  credits: TMDBMovieCredits;
  watchProviders: TMDBWatchProvidersResponse;
  reviewHtml: string;
  videos: TMDBVideo[];
  dtddLink: string | undefined;
};

export type ResolvedPersonDetails = {
  details: TMDBPersonDetails;
  credits: TMDBPersonCreditsResponse;
  reviewHtml: string;
};

export type ResolvedVideoDetails = {
  youtubeVideoId: string;
  movieDetails?: TMDBMovieDetails;
};

export type ResolvedSiteCredits = {
  creditHtml: string;
};

export type ResolvedCalendarData = {
  list: TMDBList;
};

export type ResolvedTagPageData = {
  tag: MovieTag;
  movies: TMDBMovieDetails[];
};
