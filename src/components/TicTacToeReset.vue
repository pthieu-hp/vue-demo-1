<template>
  <button class="tic-tac-toe-reset" @click="resetGame" aria-label="Reset game">
    Reset Game
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTicTacToeStore } from '@/stores/tictactoe';

export default defineComponent({
  name: 'TicTacToeReset',
  setup() {
    const store = useTicTacToeStore();
    function resetGame() {
      store.resetGame();
    }
    return { resetGame };
  },
});
</script>

<style scoped>
.tic-tac-toe-reset {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
}
.tic-tac-toe-reset:hover {
  background: #555;
}
</style>
