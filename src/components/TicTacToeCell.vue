<template>
  <button
    class="tic-tac-toe-cell"
    :aria-label="ariaLabel"
    :disabled="isDisabled"
    @click="handleClick"
    @keydown.enter.space="handleClick"
    role="gridcell"
    :tabindex="isDisabled ? -1 : 0"
  >
    <span>{{ value }}</span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useTicTacToeStore } from "@/stores/tictactoe";

export default defineComponent({
	name: "TicTacToeCell",
	props: {
		value: {
			type: String,
			default: "",
		},
		index: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const store = useTicTacToeStore();
		const isDisabled = computed(
			() => store.board[props.index] !== "" || store.status !== "ongoing",
		);
		const ariaLabel = computed(
			() => `Cell ${props.index + 1}, ${props.value || "empty"}`,
		);
		function handleClick() {
			if (!isDisabled.value) {
				store.makeMove(props.index);
			}
		}
		return { handleClick, isDisabled, ariaLabel };
	},
});
</script>

<style scoped>
.tic-tac-toe-cell {
	width: 100%;
	height: 100%;
	font-size: 2rem;
	background: #fff;
	border: 2px solid #333;
	border-radius: 0.5rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background 0.2s;
	color: #333;
}
.tic-tac-toe-cell:disabled {
	background: #eee;
	cursor: not-allowed;
	color: #333;
}
</style>
