export interface IPlayerWeapon {
  name: string;
  ammoMax: number;
  ammoCurrent: number;
  damageMin: number;
  damageMax: number;
  attackTime: number;
  cooldownTime: number;
  price?: number;
  amountPerPurchase?: number;
}
export interface IPlayerWeaponProps {
  name: string;
  ammoCurrent: number;
  ammoMax: number;
}
