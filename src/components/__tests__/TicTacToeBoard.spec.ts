/// <reference types="vitest" />

import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import { useTicTacToeStore } from "@/stores/tictactoe"
import TicTacToeBoard from "../TicTacToeBoard.vue"

describe("TicTacToeBoard", () => {
  it("renders 9 cells", () => {
    const wrapper = mount(TicTacToeBoard, {
      global: { plugins: [createTestingPinia()] },
    })
    expect(wrapper.findAll(".board-cell")).toHaveLength(9)
  })

  it("highlights winning cells", async () => {
    const pinia = createTestingPinia()
    const store = useTicTacToeStore()
    store.board = ["X", "X", "X", "", "", "", "", "", ""]
    store.status = "win"
    store.winningCells = [0, 1, 2]
    const wrapper = mount(TicTacToeBoard, {
      global: { plugins: [pinia] },
    })
    const winningCells = wrapper.findAll(".winning-cell")
    expect(winningCells).toHaveLength(3)
  })
})
