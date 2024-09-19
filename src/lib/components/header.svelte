<script>
  import Nav from './nav.svelte';

</script>
<header>
  <div></div>
  <div>
    <a href="/">
      <h1>
        <span id="spooky">Spooky</span>.<span id="pictures">pictures</span>
      </h1>
    </a>
    <p>A scary movie every day in October!</p>
  </div>
  <Nav />
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    background-image: url('/img/curtains.jpg');
    background-repeat: no-repeat;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a {
      color: white;
    }
  }

  #spooky {
    font-weight: bold;
  }

  #pictures {
    font-weight: normal;
    font-style: italic;
  }
</style>
