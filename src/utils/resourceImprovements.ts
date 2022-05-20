import { IResourceCost, IResourcesState } from "types/ResourceTypes";
import { BASE_MODIFIER } from "../gameState/resourceSlice";

const getNewValues = (
  state: IResourcesState,
  index: keyof IResourcesState,
  parameter: number,
  parameterCost: number
): { newParameterValue: number; newCost: number } => {
  // New time =  old time / (BASE_MODIFIER ** improvementCostExponent)
  const newParameterValue =
    parameter / BASE_MODIFIER ** state[index].improvementCostExponent;

  // toFixed converts the number to String, so we convert it back to number.
  const newCost = Number(
    (
      parameterCost *
      BASE_MODIFIER ** state[index].improvementCostExponent
    ).toFixed(2)
  );
  return { newParameterValue, newCost };
};

const canAffordCost = (cost: IResourceCost, amountAvailable: number) => {
  if (cost.amount > amountAvailable) {
    console.log("Cannot afford");
    return false;
  }

  return true;
};

export { getNewValues, canAffordCost };
