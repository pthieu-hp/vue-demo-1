/// <reference types="vitest" />

import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import { useTicTacToeStore } from "@/stores/tictactoe"
import TicTacToeCell from "../TicTacToeCell.vue"

describe("TicTacToeCell", () => {
  it("renders cell value", () => {
    const wrapper = mount(TicTacToeCell, {
      props: { value: "X", index: 0 },
      global: { plugins: [createTestingPinia()] },
    })
    expect(wrapper.text()).toContain("X")
  })

  it("calls makeMove on click if enabled", async () => {
    const pinia = createTestingPinia({ stubActions: false }) // <-- allow real actions
    const store = useTicTacToeStore(pinia)
    store.board = ["", "", "", "", "", "", "", "", ""]
    store.status = "ongoing"
    const wrapper = mount(TicTacToeCell, {
      props: { value: "", index: 0 },
      global: { plugins: [pinia] },
    })
    await wrapper.trigger("click")
    expect(store.board[0]).not.toBe("")
  })
})
