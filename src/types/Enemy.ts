export interface IEnemy {
  name: string;
  healthMax: number;
  healthCurrent: number;
  attacks: IEnemyAttack[];
}

interface IEnemyAttack {
  name: string;
  attackTime: number;
  damageMin: number;
  damageMax: number;
}

export interface IEnemyAttackBarProps {
  attackTime: number;
  attackDamage: number;
}
