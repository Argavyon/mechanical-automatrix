export interface IEnemy {
  name: string;
  health: {
    max: number;
    current: number;
  };
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
