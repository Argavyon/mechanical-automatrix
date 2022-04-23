import { fireWeapon } from "gameState/playerSlice";
import {
  getNextAttack,
  setAttackBar,
  setEnemyHealth,
} from "gameState/EnemySlice";
import { RootState } from "gameState/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "styles/combat/Player/PlayerWeapon.css";
import { IPlayerWeaponProps } from "types/Weapon";
import random from "utils/random";

const PlayerWeapon: React.FC<IPlayerWeaponProps> = ({
  ...props
}: IPlayerWeaponProps) => {
  const weapon = useSelector(
    (state: RootState) => state.player.weapons[props.weaponIndex]
  );
  const enemy = useSelector((state: RootState) => state.enemy);
  const dispatch = useDispatch();

  const useWeapon = () => {
    // If the max ammo is infinite, then the weapon is always usable.
    if (weapon.ammoCurrent > 0 || props.ammoMax === Infinity) {
      // If the weapon has ammo, then use it.
      dispatch(fireWeapon({ weapon, index: props.weaponIndex }));

      // Calculate and apply the damage.
      const damage = random(weapon.damageMin, weapon.damageMax);
      dispatch(setEnemyHealth(enemy.health.current - damage));

      // If the enemy's attack can be interrupted, then interrupt it.
      if (enemy.attackList[enemy.currentAttackIndex].isInterruptable) {
        dispatch(setAttackBar(0));
        dispatch(getNextAttack());
      }
    }
  };

  if (props.ammoMax === Infinity) {
    return (
      <div className="weaponContainer" onClick={useWeapon}>
        <p className="weaponText">{props.name}</p>
      </div>
    );
  } else {
    return (
      <div className="weaponContainer" onClick={useWeapon}>
        <p className="weaponText">{props.name}</p>
        <p className="weaponText">
          {weapon.ammoCurrent} / {props.ammoMax}
        </p>
      </div>
    );
  }
};

export default PlayerWeapon;
