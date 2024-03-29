import { createSlice } from "@reduxjs/toolkit";
import { IEnemy } from "types/EnemyTypes";

const initialEnemyState: IEnemy = {
  name: "Slime",
  health: {
    max: 100,
    current: 100,
  },
  attackList: [
    {
      name: "Attack",
      attackTime: 1,
      damageMin: 1,
      damageMax: 5,
      isInterruptable: true,
    },
    {
      name: "Attack 2",
      attackTime: 1,
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
  isInterrupted: false,
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
    setIsInterrupted: (state, action) => {
      state.isInterrupted = action.payload;
    },
  },
});

export const { setEnemyHealth, setAttackBar, getNextAttack, setIsInterrupted } =
  enemySlice.actions;

export default enemySlice.reducer;
