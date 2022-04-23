import { createSlice } from "@reduxjs/toolkit";

const initialPlayerState = {
  health: {
    max: 100,
    current: 100,
  },
  weapons: [
    {
      name: "Fists",
      attackDamage: 1,
      attackTime: 0,
      attackCooldown: 0,
      ammoMax: Infinity,
      ammoCurrent: Infinity,
    },
  ],
};

export const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    setPlayerHealth: (state, action) => {
      state.health.current = action.payload;
    },
  },
});

export const { setPlayerHealth } = playerSlice.actions;

export default playerSlice.reducer;
