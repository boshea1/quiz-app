import { action, createStore } from "easy-peasy";

export const store = createStore({
    interactive: true,
    addInteractive: action((state, payload) => {
      state.interactive = !state.interactive
    }),
  });


