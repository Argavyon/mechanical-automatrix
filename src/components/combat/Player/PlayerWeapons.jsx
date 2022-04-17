import React from "react";
import "styles/combat/Player/PlayerWeapons.css";
import PlayerWeapon from "./PlayerWeapon";

const PlayerWeapons = () => {
  return (
    <div className="weaponsContainer">
      <PlayerWeapon
        weaponName="Bang"
        weaponAmmoCurrent="30"
        weaponsAmmoMax="100"
      />
      <PlayerWeapon
        weaponName="Throwing Dagger"
        weaponAmmoCurrent="50"
        weaponsAmmoMax="100"
      />
      <PlayerWeapon
        weaponName="Bang"
        weaponAmmoCurrent="30"
        weaponsAmmoMax="100"
      />
    </div>
  );
};

export default PlayerWeapons;
