import { defineStore } from "pinia"

export type Player = "X" | "O"
export type Cell = Player | ""
export type GameStatus = "ongoing" | "win" | "draw"

function getInitialBoard(): Cell[] {
  return Array(9).fill("")
}

function checkWin(board: Cell[]): { winner: Player | null; winningCells: number[] } {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const line of lines) {
    const [a, b, c] = line as [number, number, number]
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, winningCells: line }
    }
  }
  return { winner: null, winningCells: [] }
}

export const useTicTacToeStore = defineStore("tictactoe", {
  state: () => ({
    board: getInitialBoard(),
    currentPlayer: "X" as Player,
    status: "ongoing" as GameStatus,
    winner: "" as Player | "",
    winningCells: [] as number[],
  }),
  actions: {
    makeMove(index: number) {
      if (this.status !== "ongoing" || this.board[index] !== "") return
      this.board[index] = this.currentPlayer
      const { winner, winningCells } = checkWin(this.board)
      if (winner) {
        this.status = "win"
        this.winner = winner
        this.winningCells = winningCells
      } else if (this.board.every((cell) => cell !== "")) {
        this.status = "draw"
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"
      }
    },
    resetGame() {
      this.board.splice(0, this.board.length, ...getInitialBoard())
      this.currentPlayer = "X"
      this.status = "ongoing"
      this.winner = ""
      this.winningCells = []
    },
  },
})
