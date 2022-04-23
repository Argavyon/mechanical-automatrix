import React, { useContext } from "react";
import "styles/combat/Player/PlayerWeapons.css";
import PlayerWeapon from "./PlayerWeapon";
import { useSelector } from "react-redux";
import { RootState } from "gameState/store";
import { IPlayerWeapon } from "types/Weapon";

const PlayerWeapons: React.FC = () => {
  // Reference to the game state
  const playerWeapons: IPlayerWeapon[] = useSelector(
    (state: RootState) => state.player.weapons
  );

  return (
    <div className="weaponsContainer">
      {playerWeapons.map((weapon: IPlayerWeapon, index: number) => {
        return (
          <PlayerWeapon
            key={index}
            weaponIndex={index}
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
