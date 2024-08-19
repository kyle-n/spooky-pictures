<script lang="ts">
  import showdown from 'showdown';
  const converter = new showdown.Converter({
    openLinksInNewWindow: true,
    splitAdjacentBlockquotes: true
  });
  let introHtml = $state('');
  const files = import.meta.glob('../../details/*.md', { as: 'raw' });
  files[`../../details/site-intro.md`]().then(markdown => {
    introHtml = converter.makeHtml(markdown);
  });
</script>

<p>{@html introHtml}</p>
