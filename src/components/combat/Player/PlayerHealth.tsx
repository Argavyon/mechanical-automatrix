import { RootState } from "gameState/store";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "styles/combat/Player/PlayerHealth.css";

const PlayerHealth: React.FC = () => {
  const playerHealth = useSelector(
    (state: RootState) => state.player.health.current
  );
  const healthBar = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    healthBar.current!.style.width = `${playerHealth}%`;
  }, [playerHealth]);

  return (
    <div className="playerHealthContainer">
      <p className="innerHealthBar" ref={healthBar}>
        {playerHealth}
      </p>
    </div>
  );
};

export default PlayerHealth;
