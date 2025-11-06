<template>
  <div class="tic-tac-toe-status" role="status" aria-live="assertive">
    <span v-if="status === 'ongoing'">
      Player Turn: <strong>{{ currentPlayer }}</strong>
    </span>
    <span v-else-if="status === 'win'">
      Winner: <strong>{{ winner }}</strong>
    </span>
    <span v-else>
      <strong>Draw!</strong>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useTicTacToeStore } from "@/stores/tictactoe";

export default defineComponent({
	name: "TicTacToeStatus",
	setup() {
		const store = useTicTacToeStore();
		const status = computed(() => store.status);
		const currentPlayer = computed(() => store.currentPlayer);
		const winner = computed(() => store.winner);
		return { status, currentPlayer, winner };
	},
});
</script>

<style scoped>
.tic-tac-toe-status {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
