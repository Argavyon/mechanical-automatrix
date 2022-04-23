export interface IEnemy {
  name: string;
  health: {
    max: number;
    current: number;
  };
  attackList: IEnemyAttack[];
  currentAttackIndex: number;
  attackBar: {
    current: number;
    max: number;
  };
  isInterrupted: boolean;
}

interface IEnemyAttack {
  name: string;
  attackTime: number;
  damageMin: number;
  damageMax: number;
  isInterruptable: boolean;
}

export interface IAttackBarProps {
  attackTime: number;
  attackDamage: number;
}
