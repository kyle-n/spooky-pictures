import TMDBConnector from '$lib/tmdb-connector';
import type {
  HomepageMovieList,
  HomepagePersonList
} from '$lib/types/homepage-list';
import type {
  OscarCategory,
  PeopleCategory,
  ResolvedOscarCategoryList
} from '$lib/types/resolved-data';
import { removeYearFromListName } from '$lib/utils';
import { homepageLists } from '../../details/lists';

export async function load(): Promise<ResolvedOscarCategoryList> {
  const categories: Array<OscarCategory | PeopleCategory> = [];
  for await (const list of homepageLists) {
    if ((list as HomepageMovieList).tmdbId !== undefined) {
      categories.push(await getOscarCategory(list as HomepageMovieList));
    }
    if ((list as HomepagePersonList).tmdbIds !== undefined) {
      categories.push(await getPeopleCategory(list as HomepagePersonList));
    }
  }

  return { categories };
}

async function getOscarCategory(
  list: HomepageMovieList
): Promise<OscarCategory> {
  const tmdbList = await TMDBConnector.getList(list.tmdbId);
  return {
    name: removeYearFromListName(tmdbList.name),
    description: tmdbList.description,
    movies: tmdbList.items
  };
}

async function getPeopleCategory(
  list: HomepagePersonList
): Promise<PeopleCategory> {
  const peopleCategory: PeopleCategory = {
    name: list.name,
    people: []
  };
  for await (const personId of list.tmdbIds) {
    peopleCategory.people.push(await TMDBConnector.getPersonDetails(personId));
  }
  return peopleCategory;
}
