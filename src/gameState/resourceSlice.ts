import { createSlice } from "@reduxjs/toolkit";
import { IResource, IResourceCost, IResourcesState } from "types/ResourceTypes";
import { getNewValues, canAffordCost } from "../utils/resourceImprovements";

export const BASE_MODIFIER = 1.2;

const initialResourceState: IResourcesState = {
  Heat: {
    name: "Heat",
    costPerItem: { resource: "Heat", amount: 0 },
    timeToMake: 5,
    timeToMakeCostToImprove: { resource: "Heat", amount: 5 },
    timeToMakeLevel: 1,
    amountCurrent: 0,
    amountMax: 10,
    amountMaxCostToImprove: { resource: "Tanks", amount: 5 },
    amountMaxLevel: 1,
    improvementCostExponent: 2.5,
    isUnlocked: true,
  },
  Tanks: {
    name: "Tanks",
    costPerItem: { resource: "Heat", amount: 3 },
    timeToMake: 5,
    timeToMakeCostToImprove: { resource: "Heat", amount: 5 },
    timeToMakeLevel: 1,
    amountCurrent: 0,
    amountMax: 10,
    amountMaxCostToImprove: { resource: "Tanks", amount: 7 },
    amountMaxLevel: 1,
    improvementCostExponent: 2,
    isUnlocked: true,
  },
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState: initialResourceState,
  reducers: {
    makeResource: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      if (state[index].amountCurrent < state[index].amountMax) {
        state[index].amountCurrent++;
      }
    },
    improveParameter: (state, action) => {
      const name: keyof IResourcesState = action.payload.name;
      const parameter: keyof IResource = action.payload.parameter;
      const cost: keyof IResource = action.payload.cost;

      const parameterValue: number = state[name][parameter] as number;
      const costObject: IResourceCost = state[name][cost] as IResourceCost;

      const resourceNeeded = costObject.resource as keyof IResourcesState;
      const amountAvailable = state[resourceNeeded].amountCurrent;

      if (canAffordCost(costObject, amountAvailable) === false) {
        return;
      }

      const { newParameterValue, newCost } = getNewValues(
        state,
        name,
        parameterValue,
        costObject.amount,
        action.payload.action
      );

      state[resourceNeeded].amountCurrent -= costObject.amount;

      (state[name][parameter as keyof IResource] as number) = newParameterValue;
      (state[name][cost as keyof IResource] as IResourceCost).amount = newCost;
      console.log(state[name][parameter]);
    },

    setIsUnlocked: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].isUnlocked = action.payload;
    },
  },
});

export const { makeResource, improveParameter, setIsUnlocked } =
  resourceSlice.actions;

export default resourceSlice.reducer;
