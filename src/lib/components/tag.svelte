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
</script>

<div>
  {tagNames[tag]}
</div>

<style lang="scss">
  div {
    background-color: yellowgreen;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
</style>
