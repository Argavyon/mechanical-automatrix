import { createSlice } from "@reduxjs/toolkit";
import { IEnemy } from "types/Enemy";

const initialEnemyState: IEnemy = {
  name: "Slime",
  health: {
    max: 100,
    current: 100,
  },
  attackList: [
    {
      name: "Attack",
      attackTime: 3,
      damageMin: 1,
      damageMax: 5,
      isInterruptable: true,
    },
    {
      name: "Attack",
      attackTime: 10,
      damageMin: 10,
      damageMax: 50,
      isInterruptable: true,
    },
  ],
  currentAttackIndex: 0,
  attackBar: {
    current: 0,
    max: 100,
  },
};

const enemySlice = createSlice({
  name: "enemy",
  initialState: initialEnemyState,
  reducers: {
    setEnemyHealth: (state, action) => {
      state.health.current = action.payload;
    },
    setAttackBar: (state, action) => {
      state.attackBar.current = action.payload;
    },
    getNextAttack: (state) => {
      state.currentAttackIndex =
        state.currentAttackIndex === state.attackList.length - 1
          ? 0
          : state.currentAttackIndex + 1;
    },
  },
});

export const { setEnemyHealth, setAttackBar, getNextAttack } =
  enemySlice.actions;

export default enemySlice.reducer;
