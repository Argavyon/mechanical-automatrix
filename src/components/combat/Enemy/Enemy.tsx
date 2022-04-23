import React from "react";
import EnemyAttackBar from "./EnemyAttackBar";
import "styles/combat/Enemy/Enemy.css";
import EnemyHealth from "./EnemyHealth";
import { useSelector } from "react-redux";
import { RootState } from "gameState/store";

type EnemyProps = { name: string };

const Enemy: React.FC<EnemyProps> = (props: EnemyProps) => {
  const enemy = useSelector((state: RootState) => state.enemy);

  return (
    <div className="enemyContainer">
      <p className="text">{enemy.name}</p>
      <EnemyHealth />
      <EnemyAttackBar attackTime={3} attackDamage={3} />
    </div>
  );
};

export default Enemy;
