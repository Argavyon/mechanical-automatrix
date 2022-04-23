import { fireWeapon } from "gameState/playerSlice";
import { RootState } from "gameState/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "styles/combat/Player/PlayerWeapon.css";
import { IPlayerWeaponProps } from "types/Weapon";

const PlayerWeapon: React.FC<IPlayerWeaponProps> = (
  props: IPlayerWeaponProps
) => {
  // const weapons = useSelector((state: RootState) => state.player.weapons);
  const dispatch = useDispatch();
  const [ammoCurrent, setAmmoCurrent] = useState(props.ammoCurrent);

  const useWeapon = () => {
    // If the max ammo is infinite, then the weapon is always usable.
    if (ammoCurrent > 0 || props.ammoMax === Infinity) {
      dispatch(fireWeapon({ weapon: props.weaponIndex }));
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
