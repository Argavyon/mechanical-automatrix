import { createSlice } from "@reduxjs/toolkit";
import { IEnemy } from "types/Enemy";

const initialEnemyState: IEnemy = {
  name: "Slime",
  health: {
    max: 100,
    current: 100,
  },
  attacks: [
    {
      name: "Attack",
      attackTime: 1,
      damageMin: 10,
      damageMax: 20,
    },
  ],
};

const enemySlice = createSlice({
  name: "enemy",
  initialState: initialEnemyState,
  reducers: {
    setEnemyHealth: (state, action) => {
      state.health.current = action.payload;
    },
  },
});

export const { setEnemyHealth } = enemySlice.actions;

export default enemySlice.reducer;
