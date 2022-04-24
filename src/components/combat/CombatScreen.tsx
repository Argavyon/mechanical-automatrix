import React from "react";
import Enemy from "./Enemy/Enemy";
import Player from "./Player/Player";
import Loot from "./Loot";
import "styles/combat/CombatScreen.css";

const CombatScreen: React.FC = () => {
  return (
    <div className="combatScreen">
      <Loot />
      <Enemy name="Enemy name" />
      <Player />
    </div>
  );
};

export default CombatScreen;
