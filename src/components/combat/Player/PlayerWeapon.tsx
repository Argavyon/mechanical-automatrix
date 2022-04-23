import { fireWeapon } from "gameState/playerSlice";
import { RootState } from "gameState/store";
import React, { useState } from "react";
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
  const dispatch = useDispatch();
  const [ammoCurrent, setAmmoCurrent] = useState(props.ammoCurrent);

  const useWeapon = () => {
    // If the max ammo is infinite, then the weapon is always usable.
    if (ammoCurrent > 0 || props.ammoMax === Infinity) {
      dispatch(fireWeapon({ weapon, index: props.weaponIndex }));
      const damage = random(weapon.damageMin, weapon.damageMax);
      // console.log(weapon);
      // console.log(damage);
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
          {ammoCurrent} / {props.ammoMax}
        </p>
      </div>
    );
  }
};

export default PlayerWeapon;
