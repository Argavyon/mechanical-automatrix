import React, { useState } from "react";
import "styles/combat/Player/PlayerWeapon.css";

const PlayerWeapon = (props) => {
  const [ammoCurrent, setAmmoCurrent] = useState(props.weaponAmmoCurrent);

  const useWeapon = () => {
    if (ammoCurrent > 0 || props.weaponAmmoMax === "Infinite") {
      console.log("Fire weapon");
      setAmmoCurrent(ammoCurrent - 1);
    }
  };

  if (props.weaponAmmoMax === "Infinite") {
    return (
      <div className="weaponContainer" onClick={useWeapon}>
        <p className="weaponText">{props.weaponName}</p>
        <p className="weaponText">
          {/* {ammoCurrent} / {props.weaponAmmoMax} */}
        </p>
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
