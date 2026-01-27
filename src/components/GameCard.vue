<template>
  <div class="card" @click="$emit('select', game)">
    <img :src="game.image" alt="" class="card-image"/>
    <h3>{{ game.title }}</h3>
    <p class="genre">{{ game.genre }}</p>
    <p class="year">{{ game.year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    game: Object
  }
}
</script>

<style scoped>
.card {
  background: #1e1e2f;
  color: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
.card-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}
.genre {
  font-style: italic;
  opacity: 0.8;
}
.year {
  opacity: 0.7;
}
</style>
