<template>
  <div>
    <div class="controls" v-if="!selectedGame">
      <input v-model="search" placeholder="Поиск игры" />
      <select v-model="genre">
        <option value="">Все жанры</option>
        <option>RPG</option>
        <option>Action</option>
        <option>Strategy</option>
        <option>Sandbox</option>
        <option>Simulation</option>
      </select>
    </div>

    <div v-if="selectedGame" class="details">
      <button @click="selectedGame = null">← Назад</button>
      <h2>{{ selectedGame.title }}</h2>
      <img :src="selectedGame.image" alt="" class="details-image"/>
      <p><strong>Жанр:</strong> {{ selectedGame.genre }}</p>
      <p><strong>Год:</strong> {{ selectedGame.year }}</p>
      <p>{{ selectedGame.description }}</p>
    </div>

    <div class="catalog" v-else>
      <GameCard
        v-for="game in filteredGames"
        :key="game.id"
        :game="game"
        @select="selectedGame = $event"
      />
    </div>
  </div>
</template>

<script>
import GameCard from './GameCard.vue'
import games from '../data/games.js'

export default {
  components: { GameCard },
  data() {
    return {
      search: '',
      genre: '',
      games,
      selectedGame: null
    }
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => {
        const byName = game.title.toLowerCase().includes(this.search.toLowerCase())
        const byGenre = this.genre === '' || game.genre === this.genre
        return byName && byGenre
      })
    }
  }
}
</script>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

/* Горизонтальный ряд карточек с переносом на новую строку */
.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

/* Страница детали игры */
.details {
  background: #2a2a3f;
  padding: 20px;
  border-radius: 15px;
  color: white;
}
.details img.details-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}
.details button {
  margin-bottom: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background: #444;
  color: white;
  cursor: pointer;
}
.details button:hover {
  background: #666;
}

/* Адаптив для мобильных — карточки автоматически подстраиваются */
@media (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}
</style>
