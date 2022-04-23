import { createSlice } from "@reduxjs/toolkit";
import IPlayer from "types/PlayerTypes";

const initialPlayerState: IPlayer = {
  health: {
    max: 100,
    current: 100,
  },
  weapons: [
    {
      name: "Fists",
      damageMin: 1,
      damageMax: 1,
      attackTime: 0,
      attackCooldownTime: 0,
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
    fireWeapon: (state, action) => {
      const { weapon, index } = action.payload;
      console.log(weapon, index);
      state.weapons[index].ammoCurrent--;
    },
  },
});

export const { setPlayerHealth, fireWeapon } = playerSlice.actions;

export default playerSlice.reducer;
