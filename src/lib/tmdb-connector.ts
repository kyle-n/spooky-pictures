import type { TMDBList } from './types/tmdb-list';
import type { TMDBMovieDetails } from './types/tmdb-movie-details';
import type { TMDBMovieCredits } from './types/tmdb-movie-credits';
import type { TMDBWatchProvidersResponse } from './types/tmdb-watch-provider';
import type { TMDBVideo } from './types/tmdb-video';

class TMDBConnector {
  private readToken: string;
  constructor() {
    this.readToken = import.meta.env.VITE_TMDB_API_READ_TOKEN as string;
    if (!this.readToken) {
      throw new Error('VITE_TMDB_API_READ_TOKEN is not defined');
    }
  }

  async getList(tmdbListId: number): Promise<TMDBList> {
    const url = `https://api.themoviedb.org/3/list/${tmdbListId}`;
    const response: TMDBList = await this.getData(url);
    if (response.page < response.total_pages) {
      const nextPage = response.page + 1;
      const nextResponse = await this.getData(url, nextPage);
      response.items.push(...nextResponse.items);
    }
    return response;
  }

  async getMovieDetails(tmdbMovieId: number): Promise<TMDBMovieDetails> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}`;
    return this.getData(url);
  }

  async getMovieCredits(tmdbMovieId: number): Promise<TMDBMovieCredits> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/credits`;
    return this.getData(url);
  }

  async getMovieWatchProviders(
    tmdbMovieId: number
  ): Promise<TMDBWatchProvidersResponse> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/watch/providers`;
    return this.getData(url);
  }

  async getMovieVideos(tmdbMovieId: number): Promise<TMDBVideo[]> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/videos`;
    const response = await this.getData(url);
    return response.results;
  }

  async getPersonDetails(tmdbPersonId: number): Promise<TMDBPersonDetails> {
    const url = `https://api.themoviedb.org/3/person/${tmdbPersonId}`;
    return this.getData(url);
  }

  async getPersonCredits(
    tmdbPersonId: number
  ): Promise<TMDBPersonCreditsResponse> {
    const url = `https://api.themoviedb.org/3/person/${tmdbPersonId}/combined_credits`;
    return this.getData(url);
  }

  private async getData(url: string, page?: number): Promise<any> {
    const headers = {
      Authorization: `Bearer ${this.readToken}`
    };
    const urlParams = new URLSearchParams();
    if (page) {
      urlParams.set('page', page.toString());
    }
    const urlWithParams = `${url}?${urlParams.toString()}`;
    const response = await fetch(urlWithParams, { headers });
    return await response.json();
  }
}

const singleton = new TMDBConnector();
export default singleton;
