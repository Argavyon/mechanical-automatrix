import { createSlice } from "@reduxjs/toolkit";

const initialPlayerState = {
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
      const { weaponIndex, ammo } = action.payload;
      const weapon = state.weapons[weaponIndex];
      // weapon.ammoCurrent = ammo;
      console.log(weapon);
    },
  },
});

export const { setPlayerHealth, fireWeapon } = playerSlice.actions;

export default playerSlice.reducer;
