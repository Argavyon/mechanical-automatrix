import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import enemyReducer from "./EnemySlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    enemy: enemyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
