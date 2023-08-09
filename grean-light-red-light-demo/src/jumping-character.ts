import { createMachine } from "xstate";
interface Context {
  currentSpeed: 1;
}
export const jumpingCharacter = createMachine<Context>({
  id: "Task Lifecycle",
  initial: "standing",
  context: {
    currentSpeed: 1,
  },
  states: {
    standing: {
      on: {
        Jump: "jumping",
        Walk: "walking.moving",
      },
    },
    walking: {
      initial: "moving",
      states: {
        landing: {
          on: {
            CheckPace: "checkingPace",
          },
        },
        checkingPace: {
          on: {
            ChangePace: "changingPace",
            KeepPace: "moving",
          },
        },
        changingPace: {
          on: {
            ChangeMovingPace: "moving",
          },
        },
        moving: {
          on: {
            CheckPace: "checkingPace",
          },
        },
      },
      on: {
        StandStill: "standing",
        Jump: "jumping",
      },
    },
    jumping: {
      on: {
        Land: "standing",
      },
    },
  },
});
