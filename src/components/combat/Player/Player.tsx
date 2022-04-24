import React from "react";
import PlayerHealth from "./PlayerHealth";
import PlayerWeapons from "./PlayerWeapons";
import "styles/combat/Player/Player.css";

const Player: React.FC = () => {
  return (
    <div className="playerContainer">
      <PlayerHealth />
      <PlayerWeapons />
    </div>
  );
};

export default Player;
