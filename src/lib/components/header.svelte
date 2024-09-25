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
  <div id="nav-container">
  <Nav />
  </div>
</header>

<style lang="scss">
  @use 'src/app' as globals;

  header {
    background-image: url('/img/curtains.jpg');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
      align-items: center;
    padding: globals.$main-spacing;

    @media screen and (min-width: globals.$mobile) {
      flex-direction: row;
      justify-content: space-between;
    }

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

  #nav-container {
    max-width: fit-content;
  }
</style>
