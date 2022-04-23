import { IPlayerWeapon } from "./Weapon";

interface IPlayer {
  health: {
    max: number;
    current: number;
  };
  weapons: IPlayerWeapon[];
}

export default IPlayer;
