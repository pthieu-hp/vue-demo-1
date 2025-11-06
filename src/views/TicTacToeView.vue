<template>
  <div class="tic-tac-toe-view">
    <h1>Tic-Tac-Toe</h1>
    <TicTacToeStatus />
    <TicTacToeBoard />
    <TicTacToeReset />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToeBoard from "@/components/TicTacToeBoard.vue";
import TicTacToeReset from "@/components/TicTacToeReset.vue";
import TicTacToeStatus from "@/components/TicTacToeStatus.vue";

export default defineComponent({
	name: "TicTacToeView",
	components: {
		TicTacToeBoard,
		TicTacToeStatus,
		TicTacToeReset,
	},
});
</script>

<style scoped>
.tic-tac-toe-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}
</style>
