<template>
  <div class="tic-tac-toe-board" role="grid" aria-label="Tic-Tac-Toe Board">
    <div
      v-for="(cell, idx) in board"
      :key="idx"
      :class="['board-cell', isWinningCell(idx) ? 'winning-cell' : '']"
      role="gridcell"
      :aria-label="`Cell ${idx + 1}`"
    >
      <TicTacToeCell :value="cell" :index="idx" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTicTacToeStore } from '@/stores/tictactoe';
import TicTacToeCell from './TicTacToeCell.vue';

export default defineComponent({
  name: 'TicTacToeBoard',
  components: { TicTacToeCell },
  setup() {
    const store = useTicTacToeStore();
    function isWinningCell(idx: number) {
      return store.status === 'win' && store.winningCells.includes(idx);
    }
    return {
      board: store.board,
      isWinningCell,
    };
  },
});
</script>

<style scoped>
.tic-tac-toe-board {
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(3, 4rem);
  gap: 0.5rem;
}
.board-cell {
  width: 4rem;
  height: 4rem;
}
.winning-cell {
  background: #ffe066;
  border: 2px solid #f7b801;
}
</style>
