import React, { useState, useRef, useEffect } from "react";
import "styles/combat/Enemy/EnemyAttackBar.css";
import { IEnemyAttackBarProps } from "types/Enemy";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerHealth } from "gameState/playerSlice";
import { RootState } from "gameState/store";
import { setAttackBar, setEnemyHealth } from "gameState/EnemySlice";

const EnemyAttackBar: React.FC<IEnemyAttackBarProps> = (
  props: IEnemyAttackBarProps
) => {
  // Reference to the game state
  const playerHP = useSelector((state: RootState) => state.player.health);
  const EnemyAttackBar = useSelector(
    (state: RootState) => state.enemy.attackBar
  );
  const dispatch = useDispatch();

  // This is used as the timer for the attack.
  const timePerBarIncrease = props.attackTime * 10;

  // DOM reference to the bar
  const barElement = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (EnemyAttackBar.current < EnemyAttackBar.max) {
        dispatch(setAttackBar(EnemyAttackBar.current + 1));
        barElement.current!.style.width = `${EnemyAttackBar.current + 1}%`;
      } else {
        // Attack is done.
        dispatch(setPlayerHealth(playerHP.current - props.attackDamage));
        dispatch(setAttackBar(0));
      }
    }, timePerBarIncrease);
  }, [EnemyAttackBar.current]);

  return (
    <div className="attackBar">
      <p className="innerBar" ref={barElement}></p>
    </div>
  );
};

export default EnemyAttackBar;
