import React, { useState, useRef } from "react";
import { useInterval } from "utils/useInterval";
import "styles/combat/Enemy/EnemyAttackBar.css";
import { IEnemyAttackBarProps } from "types/Enemy";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerHealth } from "gameState/playerSlice";
import { RootState } from "gameState/store";

const EnemyAttackBar: React.FC<IEnemyAttackBarProps> = (
  props: IEnemyAttackBarProps
) => {
  // Reference to the game state
  const playerHP = useSelector((state: RootState) => state.player.health);
  const dispatch = useDispatch();

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
      // Attack is done.
      dispatch(setPlayerHealth(playerHP.current - props.attackDamage));
      console.log(`Player took ${props.attackDamage} damage`);
      console.log(playerHP.current);
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
