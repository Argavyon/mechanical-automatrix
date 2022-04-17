import React, { useState, useRef } from "react";
import { useInterval } from "hooks/useInterval";
import "styles/combat/Enemy/EnemyAttackBar.css";

function EnemyAttackBar(props) {
  // Set the initial state of the attack bar.
  // This is used as the timer for the attack.
  const [bar, setBar] = useState(0);
  const timePerBarIncrease = props.attackTime * 10;

  // DOM reference to the bar
  const barElement = useRef(null);

  const attackTimer = () => {
    if (bar < 100) {
      setBar(bar + 1);
      barElement.current.style.width = `${bar + 1}%`;
    } else {
      console.log(`Player took ${props.attackDamage} damage`);
      setBar(0);
    }
  };

  useInterval(attackTimer, timePerBarIncrease);

  return (
    <div className="attackBar">
      <p className="innerBar" ref={barElement}></p>
    </div>
  );
}

export default EnemyAttackBar;
