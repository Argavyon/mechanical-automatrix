import { createSlice } from "@reduxjs/toolkit";
import { IResource, IResourcesState } from "types/ResourceTypes";
import { getNewValues, canAffordCost } from "../utils/resourceImprovements";

export const BASE_MODIFIER = 1.025;

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
    improvementCostExponent: 1.5,
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
    improveTimeToMake: (state, action) => {
      const index: keyof IResourcesState = action.payload;
      const resourceNeeded = state[index].timeToMakeCostToImprove.resource;
      const amountNeeded =
        state[resourceNeeded as keyof IResourcesState].amountCurrent;

      if (
        canAffordCost(state[index].timeToMakeCostToImprove, amountNeeded) ===
        false
      ) {
        return;
      }

      const { newParameterValue, newCost } = getNewValues(
        state,
        index,
        state[index].timeToMake,
        state[index].timeToMakeCostToImprove.amount
      );

      state[resourceNeeded as keyof IResourcesState].amountCurrent -=
        amountNeeded;
      state[index].timeToMake = newParameterValue;
      state[index].timeToMakeCostToImprove.amount = newCost;
    },

    improveAmountMax: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].amountMax =
        state[index].amountMax * state[index].improvementCostExponent;
    },

    setIsUnlocked: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].isUnlocked = action.payload;
    },
  },
});

export const {
  makeResource,
  improveTimeToMake,
  improveAmountMax,
  setIsUnlocked,
} = resourceSlice.actions;

export default resourceSlice.reducer;
