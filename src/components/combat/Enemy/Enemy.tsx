import React from "react";
import EnemyAttackBar from "./EnemyAttackBar";
import "styles/combat/Enemy/Enemy.css";
import EnemyHealth from "./EnemyHealth";

type EnemyProps = { name: string };

const Enemy: React.FC<EnemyProps> = (props: EnemyProps) => {
  return (
    <div className="enemyContainer">
      <p className="text">{props.name}</p>
      <EnemyHealth />
      <EnemyAttackBar attackTime={3} attackDamage={3} />
    </div>
  );
};

export default Enemy;
