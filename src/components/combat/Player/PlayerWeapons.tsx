import React, { useContext } from "react";
import "styles/combat/Player/PlayerWeapons.css";
import PlayerWeapon from "./PlayerWeapon";
import gameContext from "gameState/gameContext";

const PlayerWeapons: React.FC = () => {
  // Reference to the game state
  const gameState = useContext(gameContext);
  const playerWeapons = gameState.playerState.weapons;

  return (
    <div className="weaponsContainer">
      {playerWeapons.map((weapon, index) => {
        return (
          <PlayerWeapon
            weaponName={weapon.name}
            weaponAmmoCurrent={weapon.ammoCurrent}
            weaponAmmoMax={weapon.ammoMax}
          />
        );
      })}
    </div>
  );
};

export default PlayerWeapons;
