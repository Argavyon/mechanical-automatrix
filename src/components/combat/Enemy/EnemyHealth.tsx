import { RootState } from "gameState/store";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "styles/combat/Enemy/EnemyHealth.css";
import calculatePercentage from "utils/calculatePercentage";

const EnemyHealth: React.FC = () => {
  const enemyHP = useSelector((state: RootState) => state.enemy.health);
  const healthBar = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let healthBarWidth = calculatePercentage(enemyHP.current, enemyHP.max);

    if (enemyHP.current <= 0) {
      healthBarWidth = 0;
    }
    healthBar.current!.style.width = `${healthBarWidth}%`;
  }, [enemyHP]);

  return (
    <div className="enemyHealthContainer">
      <p className="innerHealthBar" ref={healthBar}>
        HealthBar
      </p>
    </div>
  );
};

export default EnemyHealth;
