import React, { useState } from "react";
import "styles/combat/Player/PlayerWeapon.css";
import { IPlayerWeaponProps } from "types/Weapon";

const PlayerWeapon: React.FC<IPlayerWeaponProps> = (
  props: IPlayerWeaponProps
) => {
  const [ammoCurrent, setAmmoCurrent] = useState(props.ammoCurrent);

  const useWeapon = () => {
    // If the max ammo is infinite, then the weapon is always usable.
    if (ammoCurrent > 0 || props.ammoMax === Infinity) {
      console.log("Fire weapon");
      setAmmoCurrent(ammoCurrent - 1);
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
