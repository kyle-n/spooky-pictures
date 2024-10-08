<script lang="ts">
  import { MovieTag } from '../../details/tags';

  type Props = {
    tag: MovieTag;
  };

  let { tag }: Props = $props();

  const tagNames: Record<MovieTag, string> = {
    [MovieTag.Comedy]: 'Comedy',
    [MovieTag.Slasher]: 'Slasher',
    [MovieTag.PG13]: 'PG-13',
    [MovieTag.Zombie]: 'Zombie',
    [MovieTag.Romance]: 'Romance',
    [MovieTag.Women]: 'Starring Women',
    [MovieTag.Gory]: 'Gory',
    [MovieTag.Queer]: 'Queer Horror',
    [MovieTag.Scifi]: 'Sci-Fi',
    [MovieTag.Classic]: 'Classic',
    [MovieTag.Monster]: 'Monster',
    [MovieTag.ExtraScary]: 'Extra Scary',
    [MovieTag.SillyScary]: 'Silly and Scary',
    [MovieTag.Trauma]: "It's About Trauma ™️",
    [MovieTag.Kids]: 'For Kids',
    [MovieTag.Artsy]: 'Artsy',
    [MovieTag.Family]: 'Families Are Terrifying',
    [MovieTag.International]: 'International',
    [MovieTag.Vampire]: 'Vampire',
    [MovieTag.ZeroScares]: 'Zero Scares',
    [MovieTag.Political]: 'Has Thoughts About Politics',
    [MovieTag.PoC]: 'Starring People of Color',
    [MovieTag.Musical]: 'Musical',
    [MovieTag.Cosmic]: 'Cosmic Horror'
  };

  const tagColors: Record<MovieTag, string> = {
    [MovieTag.Comedy]: 'yellow',
    [MovieTag.Slasher]: 'red',
    [MovieTag.PG13]: 'blue',
    [MovieTag.Zombie]: 'green',
    [MovieTag.Romance]: 'hotpink',
    [MovieTag.Women]: 'purple',
    [MovieTag.Gory]: 'indianred',
    [MovieTag.Queer]: 'rainbow',
    [MovieTag.Scifi]: 'silver',
    [MovieTag.Classic]: 'gold',
    [MovieTag.Monster]: 'midnightblue',
    [MovieTag.ExtraScary]: 'darkred',
    [MovieTag.SillyScary]: 'orange',
    [MovieTag.Trauma]: 'darkgrey',
    [MovieTag.Kids]: 'lightblue',
    [MovieTag.Artsy]: 'aquamarine',
    [MovieTag.Family]: 'lightgreen',
    [MovieTag.International]: 'lightyellow',
    [MovieTag.Vampire]: 'darkpurple',
    [MovieTag.ZeroScares]: 'white',
    [MovieTag.Political]: 'darkblue',
    [MovieTag.PoC]: 'darkgreen',
    [MovieTag.Musical]: 'darkpink',
    [MovieTag.Cosmic]: 'darkgold'
  };

  let textColor = $derived.by(() => {
    let color = 'white';
    if (
      [
        MovieTag.Comedy,
        MovieTag.Romance,
        MovieTag.Scifi,
        MovieTag.Artsy,
        MovieTag.Queer,
        MovieTag.Family,
        MovieTag.Classic
      ].includes(tag)
    ) {
      color = 'black';
    }
    return color;
  });

  let href = $derived('tags/' + tag + '/' + tagNames[tag].toLowerCase().replace(/ /g, '-'));
</script>

<a {href}>
  <div
    style="--backgroundColor: {tagColors[tag]}; --textColor: {textColor}"
    class:rainbow={tag === MovieTag.Queer}
  >
    {tagNames[tag]}
  </div>
</a>

<style lang="scss">
  div {
    background-color: var(--backgroundColor);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: var(--textColor);
    mix-blend-mode: difference;
    width: fit-content;
  }

  .rainbow {
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
  }
</style>
