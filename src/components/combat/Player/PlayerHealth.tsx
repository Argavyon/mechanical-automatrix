import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "styles/combat/Player/PlayerHealth.css";

const PlayerHealth: React.FC = () => {
  const playerHealth = useSelector((state: any) => state.player.health.current);
  const healthBar = useRef<HTMLParagraphElement>(null);

  healthBar.current!.style.width = `${playerHealth}%`;

  return (
    <div className="playerHealthContainer">
      <p className="innerHealthBar" ref={healthBar}>
        {/* {playerHealth} */}
      </p>
    </div>
  );
};

export default PlayerHealth;
