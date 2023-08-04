import { assign, createMachine } from "xstate";

interface Context {
  color: string;
}

export const stopLight = createMachine<Context>({
  id: "Stop Light",
  initial: "red",
  context: { color: "red" },
  states: {
    red: {
      on: {
        CHANGE_COLOR: {
          target: "green",
          actions: assign({
            color: "green",
          }),
        },
      },
    },
    yellow: {
      on: {
        CHANGE_COLOR: {
          target: "red",
          actions: assign({
            color: "red",
          }),
        },
      },
    },
    green: {
      on: {
        CHANGE_COLOR: {
          target: "yellow",
          actions: assign({
            color: "yellow",
          }),
        },
      },
    },
  },
});
