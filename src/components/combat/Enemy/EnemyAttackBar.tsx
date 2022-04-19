import React, { useState, useRef, useContext } from "react";
import { useInterval } from "hooks/useInterval";
import "styles/combat/Enemy/EnemyAttackBar.css";
import gameContext from "gameState/gameContext";

interface IEnemyAttackBarProps {
  attackTime: number;
  attackDamage: number;
}

const EnemyAttackBar: React.FC<IEnemyAttackBarProps> = (
  props: IEnemyAttackBarProps
) => {
  // Reference to the game state
  const gameState = useContext(gameContext);
  const playerState = gameState.playerState;

  // Set the initial state of the attack bar.
  // This is used as the timer for the attack.
  const [bar, setBar] = useState(0);
  const timePerBarIncrease = props.attackTime * 10;

  // DOM reference to the bar
  const barElement = useRef<HTMLParagraphElement>(null);

  const attackTimer = () => {
    if (bar < 100) {
      setBar(bar + 1);
      barElement.current!.style.width = `${bar + 1}%`;
    } else {
      playerState.hp.current -= props.attackDamage;
      console.log(`Player took ${props.attackDamage} damage`);
      console.log(playerState.hp.current);
      setBar(0);
    }
  };

  useInterval(attackTimer, timePerBarIncrease);

  return (
    <div className="attackBar">
      <p className="innerBar" ref={barElement}></p>
    </div>
  );
};

export default EnemyAttackBar;
