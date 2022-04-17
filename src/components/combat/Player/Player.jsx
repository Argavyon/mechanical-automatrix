import React from "react";
import PlayerHealth from "./PlayerHealth";
import PlayerWeapons from "./PlayerWeapons";
import "styles/combat/Player/Player.css";

function Player() {
  return (
    <div className="playerContainer">
      <PlayerHealth />
      <PlayerWeapons />
    </div>
  );
}

export default Player;
