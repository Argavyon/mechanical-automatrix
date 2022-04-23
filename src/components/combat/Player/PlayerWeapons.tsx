import React, { useContext } from "react";
import "styles/combat/Player/PlayerWeapons.css";
import PlayerWeapon from "./PlayerWeapon";
import { IPlayerWeaponProps } from "types/Weapon";
import { useSelector } from "react-redux";

const PlayerWeapons: React.FC = () => {
  // Reference to the game state
  const playerWeapons = useSelector((state: any) => state.player.weapons);
  return (
    <div className="weaponsContainer">
      {playerWeapons.map((weapon: IPlayerWeaponProps, index: number) => {
        return (
          <PlayerWeapon
            name={weapon.name}
            ammoCurrent={weapon.ammoCurrent}
            ammoMax={weapon.ammoMax}
          />
        );
      })}
    </div>
  );
};

export default PlayerWeapons;
