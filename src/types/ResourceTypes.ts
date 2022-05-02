export interface IResourcesState {
  // Resource names should be lowercase
  heat: IResource;
}

export interface IResource {
  name: string;
  costPerItem: IResourceCost;
  timeToMake: number;
  timeToMakeCostToImprove: IResourceCost;
  timeToMakeLevel: number;
  amountCurrent: number;
  amountMax: number;
  amountMaxCostToImprove: IResourceCost;
  amountMaxLevel: number;
  improvementCostExponent: number;
  isUnlocked: boolean;
}

export interface IResourceCost {
  // Resource should probably be an enum
  resource: string;
  amount: number;
}
