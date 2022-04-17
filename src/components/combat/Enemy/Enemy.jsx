import React from "react";
import EnemyAttackBar from "./EnemyAttackBar";
import "styles/combat/Enemy/Enemy.css";

function Enemy(props) {
  return (
    <div className="enemyContainer">
      <p className="text">{props.name}</p>
      <EnemyAttackBar attackTime={3} attackDamage={3} />
    </div>
  );
}

export default Enemy;
