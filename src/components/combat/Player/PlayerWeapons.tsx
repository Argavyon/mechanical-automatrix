import React, { useContext } from "react";
import "styles/combat/Player/PlayerWeapons.css";
import PlayerWeapon from "./PlayerWeapon";
import gameContext from "gameState/gameContext";
import { IPlayerWeaponProps } from "types/Weapon";

const PlayerWeapons: React.FC = () => {
  // Reference to the game state
  const gameState = useContext(gameContext);
  const playerWeapons = gameState.playerState.weapons;

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
