import { action, createStore } from "easy-peasy";

export const store = createStore({
    interactive: true,
    addInteractive: action((state, payload) => {
      state.interactive = !state.interactive
    }),
    score: 0,
    setScore: action((state, payload) => {
     state.score = state.score + payload
    }),
    resetScore: action((state, payload) => {
      state.score = 0
     }),
  });


