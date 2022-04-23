import React from "react";
import "styles/combat/Player/PlayerHealth.css";

const PlayerHealth: React.FC = () => {
  return (
    <div className="playerHealthContainer">
      <p className="innerHealthBar">HealthBar</p>
    </div>
  );
};

export default PlayerHealth;
