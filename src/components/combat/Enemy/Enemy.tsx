import React from "react";
import EnemyAttackBar from "./EnemyAttackBar";
import "styles/combat/Enemy/Enemy.css";
import EnemyHealth from "./EnemyHealth";
import { useSelector } from "react-redux";
import { RootState } from "gameState/store";
import random from "utils/random";

type EnemyProps = { name: string };

const Enemy: React.FC<EnemyProps> = (props: EnemyProps) => {
  const enemy = useSelector((state: RootState) => state.enemy);
  const { attackList, currentAttackIndex } = enemy;

  if (enemy.health.current <= 0) {
    // Enemy is dead
    return (
      <div className="enemyContainer">
        <p className="text next">NEXT</p>
        <p className="text">{enemy.name}</p>
        <EnemyHealth />
      </div>
    );
  }

  return (
    <div className="enemyContainer">
      <p className="text">{enemy.name}</p>
      <EnemyHealth />
      <p className="text">{attackList[currentAttackIndex].name}</p>
      <EnemyAttackBar
        attackTime={attackList[currentAttackIndex].attackTime}
        attackDamage={random(
          attackList[currentAttackIndex].damageMin,
          attackList[currentAttackIndex].damageMax
        )}
      />
    </div>
  );
};

export default Enemy;
