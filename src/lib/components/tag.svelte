<script lang="ts">
  import { MovieTag } from '../../details/tags';

  let { tag } = $props<{ tag: MovieTag }>();

  function getNameForTag(tag: MovieTag) {
    switch (tag) {
      case MovieTag.Comedy:
        return 'Comedy';
      case MovieTag.Slasher:
        return 'Slasher';
      case MovieTag.PG13:
        return 'PG-13';
      case MovieTag.Zombie:
        return 'Zombie';
      case MovieTag.Romance:
        return 'Romance';
      case MovieTag.Women:
        return 'Starring Women';
      case MovieTag.Gory:
        return 'Gory';
      case MovieTag.Queer:
        return 'Queer Horror';
      case MovieTag.Scifi:
        return 'Sci-Fi';
      case MovieTag.Classic:
        return 'Classic';
      case MovieTag.Monster:
        return 'Monster';
      case MovieTag.ExtraScary:
        return 'Extra Scary';
      case MovieTag.SillyScary:
        return 'Silly and Scary';
      case MovieTag.Trauma:
        return "It's About Trauma ™️";
      case MovieTag.Kids:
        return 'For Kids';
      case MovieTag.Artsy:
        return 'Artsy';
      case MovieTag.Family:
        return 'Family Scares';
      case MovieTag.International:
        return 'International';
      case MovieTag.Vampire:
        return 'Vampire';
      case MovieTag.ZeroScares:
        return 'Zero Scares';
      case MovieTag.Political:
        return 'Thoughts About Politics';
      case MovieTag.PoC:
        return 'Starring People of Color';
      case MovieTag.Musical:
        return 'Musical';
      case MovieTag.Cosmic:
        return 'Cosmic Horror';
    }
  }
</script>

<div class="tag">
  {getNameForTag(tag)}
</div>

<style lang="scss">
  .tag {
    background-color: yellowgreen;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
</style>
