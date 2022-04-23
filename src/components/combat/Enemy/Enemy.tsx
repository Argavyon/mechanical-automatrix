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

  return (
    <div className="enemyContainer">
      <p className="text">{enemy.name}</p>
      <EnemyHealth />
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
