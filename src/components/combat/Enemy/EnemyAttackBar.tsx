import React, { useState, useRef, useEffect } from "react";
import "styles/combat/Enemy/EnemyAttackBar.css";
import { IAttackBarProps } from "types/EnemyTypes";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerHealth } from "gameState/playerSlice";
import { RootState } from "gameState/store";
import {
  setAttackBar,
  getNextAttack,
  setIsInterrupted,
} from "gameState/EnemySlice";

const EnemyAttackBar: React.FC<IAttackBarProps> = (props: IAttackBarProps) => {
  // Reference to the game state
  const playerHP = useSelector((state: RootState) => state.player.health);
  const enemy = useSelector((state: RootState) => state.enemy);
  const dispatch = useDispatch();

  // This is used as the timer for the attack.
  const timePerBarIncrease = props.attackTime * 10;

  // DOM reference to the bar
  const barElement = useRef<HTMLParagraphElement>(null);

  useEffect((): void => {
    setTimeout((): void => {
      if (enemy.attackBar.current < enemy.attackBar.max) {
        dispatch(setAttackBar(enemy.attackBar.current + 1));
        barElement.current!.style.width = `${enemy.attackBar.current + 1}%`;
      } else {
        // Attack is done.
        dispatch(setPlayerHealth(playerHP.current - props.attackDamage));
        dispatch(setAttackBar(0));
        dispatch(getNextAttack());
      }

      // Check if the enemy is interrupted.
      // Restart the attack bar if the enemy is interrupted.
      if (enemy.isInterrupted) {
        dispatch(setIsInterrupted(false));
        dispatch(setAttackBar(0));
        dispatch(getNextAttack());
      }
    }, timePerBarIncrease);
  }, [enemy.attackBar.current]);

  return (
    <div className="attackBar">
      <p className="innerBar" ref={barElement}></p>
    </div>
  );
};

export default EnemyAttackBar;
