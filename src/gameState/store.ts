import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import enemyReducer from "./EnemySlice";
import resourceReducer from "./resourceSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    enemy: enemyReducer,
    resources: resourceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
