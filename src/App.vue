<template>
  <AppHeader />
  <GameCatalog />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import GameCatalog from './components/GameCatalog.vue'

export default {
  components: {
    AppHeader,
    GameCatalog
  }
}
</script>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1f1f2f, #3a3a50);
  color: white;
}

