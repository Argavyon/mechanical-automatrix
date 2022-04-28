export interface IResource {
  name: string;
  costPerItem: IResourceCost;
  timeToMake: number;
  timeToMakeCostToImprove: IResourceCost;
  amountCurrent: number;
  amountMax: number;
  amountMaxCostToImprove: IResourceCost;
  improvementCostExponent: number;
  isUnlocked: boolean;
}

interface IResourceCost {
  // Should probably be an enum
  resource: string;
  amount: number;
}
