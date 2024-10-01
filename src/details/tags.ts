export enum MovieTag {
  Comedy,
  Slasher,
  PG13,
  Zombie,
  Romance,
  Women,
  Gory,
  Queer,
  Scifi,
  Classic,
  Monster,
  ExtraScary,
  SillyScary,
  Trauma,
  Kids,
  Artsy,
  Family,
  International,
  Vampire,
  ZeroScares,
  Political,
  PoC,
  Musical,
  Cosmic
}

export const tags: Record<number, MovieTag[]> = {
  747: [MovieTag.Comedy, MovieTag.Zombie, MovieTag.Romance],
  9003: [MovieTag.Women, MovieTag.Gory, MovieTag.Queer],
  539: [MovieTag.Classic, MovieTag.Slasher, MovieTag.Women, MovieTag.Family],
  270303: [MovieTag.Women, MovieTag.ExtraScary, MovieTag.Artsy],
  348: [
    MovieTag.Classic,
    MovieTag.Scifi,
    MovieTag.Women,
    MovieTag.Gory,
    MovieTag.Monster
  ],
  798286: [
    MovieTag.SillyScary,
    MovieTag.Trauma,
    MovieTag.Family,
    MovieTag.Artsy
  ],
  83899: [
    MovieTag.Slasher,
    MovieTag.Women,
    MovieTag.Gory,
    MovieTag.SillyScary,
    MovieTag.Family,
    MovieTag.Political
  ]
};
