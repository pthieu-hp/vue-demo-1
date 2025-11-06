/// <reference types="vitest" />
import { createPinia, setActivePinia } from "pinia"
import { useTicTacToeStore } from "../tictactoe"

describe("TicTacToe Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("initializes with empty board and X as first player", () => {
    const store = useTicTacToeStore()
    expect(store.board).toEqual(["", "", "", "", "", "", "", "", ""])
    expect(store.currentPlayer).toBe("X")
    expect(store.status).toBe("ongoing")
  })

  it("makes moves and switches player", () => {
    const store = useTicTacToeStore()
    store.makeMove(0)
    expect(store.board[0]).toBe("X")
    expect(store.currentPlayer).toBe("O")
  })

  it("detects win", () => {
    const store = useTicTacToeStore()
    store.board = ["X", "X", "", "", "", "", "", "", ""]
    store.makeMove(2)
    expect(store.status).toBe("win")
    expect(store.winner).toBe("X")
  })

  it("detects draw", () => {
    const store = useTicTacToeStore()
    store.board = ["X", "O", "X", "X", "O", "O", "O", "X", ""]
    store.makeMove(8)
    expect(store.status).toBe("draw")
  })

  it("prevents moves after win/draw", () => {
    const store = useTicTacToeStore()
    store.board = ["X", "X", "", "", "", "", "", "", ""]
    store.makeMove(2)
    expect(store.status).toBe("win")
    store.makeMove(3)
    expect(store.board[3]).toBe("")
  })

  it("resets game", () => {
    const store = useTicTacToeStore()
    store.board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
    store.status = "win"
    store.resetGame()
    expect(store.board).toEqual(["", "", "", "", "", "", "", "", ""])
    expect(store.status).toBe("ongoing")
    expect(store.currentPlayer).toBe("X")
  })
})
