export interface IPlayerWeapon {
  name: string;
  ammoMax: number;
  ammoCurrent: number;
  damageMin: number;
  damageMax: number;
  attackTime: number;
  attackCooldownTime: number;
  price?: number;
  amountPerPurchase?: number;
}
export interface IPlayerWeaponProps {
  name: string;
  weaponIndex: number;
  ammoCurrent: number;
  ammoMax: number;
}
