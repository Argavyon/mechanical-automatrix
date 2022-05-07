import { createSlice } from "@reduxjs/toolkit";
import { IResource, IResourcesState } from "types/ResourceTypes";

const initialResourceState: IResourcesState = {
  heat: {
    name: "Heat",
    costPerItem: { resource: "Heat", amount: 0 },
    timeToMake: 5,
    timeToMakeCostToImprove: { resource: "Heat", amount: 5 },
    timeToMakeLevel: 1,
    amountCurrent: 0,
    amountMax: 10,
    amountMaxCostToImprove: { resource: "Heat", amount: 0 },
    amountMaxLevel: 10,
    improvementCostExponent: 1.5,
    isUnlocked: true,
  },
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState: initialResourceState,
  reducers: {
    // TODO: Rename the reducer to something else.
    // setTimeToMake can imply a change with a specified value, when it is
    // actually calculated based on the current value and the improvement cost exponent.

    improveTimeToMake: (state, action) => {
      console.log(action.payload);

      const index: keyof IResourcesState = action.payload;

      // FIXME: This is increasing the time to make, but it should be decreasing it.
      // Fix the math.
      // New time =  old time / (1.025 ** improvementCostExponent)
      state[index].timeToMake =
        state[index].timeToMake / 1.025 ** state[index].improvementCostExponent;
    },
    setTimeToMakeCostToImprove: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].timeToMakeCostToImprove.amount =
        state[index].timeToMakeCostToImprove.amount *
        state[index].improvementCostExponent;
    },
    setAmountMax: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].amountMax =
        state[index].amountMax * state[index].improvementCostExponent;
    },
    setAmountMaxCostToImprove: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].amountMaxCostToImprove.amount =
        state[index].amountMaxCostToImprove.amount *
        state[index].improvementCostExponent;
    },

    setIsUnlocked: (state, action) => {
      const index: keyof IResourcesState = action.payload;

      state[index].isUnlocked = action.payload;
    },
  },
});

export const {
  improveTimeToMake,
  setTimeToMakeCostToImprove,
  setAmountMax,
  setAmountMaxCostToImprove,
  setIsUnlocked,
} = resourceSlice.actions;

export default resourceSlice.reducer;
