import React, { useState } from "react";
import "styles/combat/Player/PlayerWeapon.css";

const PlayerWeapon = (props) => {
  const [ammoCurrent, setAmmoCurrent] = useState(props.weaponAmmoCurrent);

  const useWeapon = () => {
    if (ammoCurrent > 0) {
      console.log("Fire weapon");
      setAmmoCurrent(ammoCurrent - 1);
    }
  };

  return (
    <div className="weaponContainer" onClick={useWeapon}>
      <p className="weaponText">{props.weaponName}</p>
      <p className="weaponText">
        {ammoCurrent} / {props.weaponsAmmoMax}
      </p>
    </div>
  );
};

export default PlayerWeapon;
