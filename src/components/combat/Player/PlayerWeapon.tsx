import React, { useState } from "react";
import "styles/combat/Player/PlayerWeapon.css";

interface IPlayerWeaponProps {
  weaponName: string;
  weaponAmmoCurrent: number;
  weaponAmmoMax: number;
}

const PlayerWeapon: React.FC<IPlayerWeaponProps> = (
  props: IPlayerWeaponProps
) => {
  const [ammoCurrent, setAmmoCurrent] = useState(props.weaponAmmoCurrent);

  const useWeapon = () => {
    // If the max ammo is infinite, then the weapon is always usable.
    if (ammoCurrent > 0 || props.weaponAmmoMax === Infinity) {
      console.log("Fire weapon");
      setAmmoCurrent(ammoCurrent - 1);
    }
  };

  if (props.weaponAmmoMax === Infinity) {
    return (
      <div className="weaponContainer" onClick={useWeapon}>
        <p className="weaponText">{props.weaponName}</p>
      </div>
    );
  } else {
    return (
      <div className="weaponContainer" onClick={useWeapon}>
        <p className="weaponText">{props.weaponName}</p>
        <p className="weaponText">
          {ammoCurrent} / {props.weaponAmmoMax}
        </p>
      </div>
    );
  }
};

export default PlayerWeapon;
