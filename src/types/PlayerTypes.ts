import { IPlayerWeapon } from "./WeaponTypes";

interface IPlayer {
  health: {
    max: number;
    current: number;
  };
  weapons: IPlayerWeapon[];
  isInCombat: boolean;
}

export default IPlayer;
