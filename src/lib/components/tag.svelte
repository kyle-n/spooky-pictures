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
    [MovieTag.Family]: 'Family Scares',
    [MovieTag.International]: 'International',
    [MovieTag.Vampire]: 'Vampire',
    [MovieTag.ZeroScares]: 'Zero Scares',
    [MovieTag.Political]: 'Thoughts About Politics',
    [MovieTag.PoC]: 'Starring People of Color',
    [MovieTag.Musical]: 'Musical',
    [MovieTag.Cosmic]: 'Cosmic Horror'
  };

  const tagColors: Record<MovieTag, string> = {
    [MovieTag.Comedy]: 'yellow',
    [MovieTag.Slasher]: 'red',
    [MovieTag.PG13]: 'blue',
    [MovieTag.Zombie]: 'green',
    [MovieTag.Romance]: 'pink',
    [MovieTag.Women]: 'purple',
    [MovieTag.Gory]: 'black',
    [MovieTag.Queer]: 'rainbow',
    [MovieTag.Scifi]: 'silver',
    [MovieTag.Classic]: 'gold',
    [MovieTag.Monster]: 'brown',
    [MovieTag.ExtraScary]: 'darkred',
    [MovieTag.SillyScary]: 'orange',
    [MovieTag.Trauma]: 'darkgrey',
    [MovieTag.Kids]: 'lightblue',
    [MovieTag.Artsy]: 'lightgrey',
    [MovieTag.Family]: 'lightgreen',
    [MovieTag.International]: 'lightyellow',
    [MovieTag.Vampire]: 'darkpurple',
    [MovieTag.ZeroScares]: 'white',
    [MovieTag.Political]: 'darkblue',
    [MovieTag.PoC]: 'darkgreen',
    [MovieTag.Musical]: 'darkpink',
    [MovieTag.Cosmic]: 'darkgold'
  };

  let textColor = 'white';
  if (
    [
      MovieTag.Comedy,
      MovieTag.Romance,
      MovieTag.Scifi,
      MovieTag.Artsy
    ].includes(tag)
  ) {
    textColor = 'black';
  }
</script>

<div style="--backgroundColor: {tagColors[tag]}; --textColor: {textColor}">
  {tagNames[tag]}
</div>

<style lang="scss">
  div {
    background-color: var(--backgroundColor);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    color: var(--textColor);
    mix-blend-mode: difference;
  }
</style>
