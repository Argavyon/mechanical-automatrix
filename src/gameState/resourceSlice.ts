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

    setTimeToMake: (state, payload) => {
      console.log(payload.payload);

      const index: keyof IResourcesState = payload.payload;

      // FIXME: This is increasing the time to make, but it should be decreasing it.
      // Fix the math.
      state[index].timeToMake =
        state[index].timeToMake * state[index].improvementCostExponent;
    },
    // setTimeToMakeCostToImprove: (state) => {
    //   state.timeToMakeCostToImprove.amount =
    //     state.timeToMakeCostToImprove.amount * state.improvementCostExponent;
    // },
    // setAmountMax: (state) => {
    //   state.amountMax = state.amountMax * state.improvementCostExponent;
    // },
    // setAmountMaxCostToImprove: (state) => {
    //   state.amountMaxCostToImprove.amount =
    //     state.amountMaxCostToImprove.amount * state.improvementCostExponent;
    // },
    // setImprovementCostExponent: (state, action) => {
    //   state.improvementCostExponent = action.payload;
    // },
    // setIsUnlocked: (state, action) => {
    //   state.isUnlocked = action.payload;
    // },
  },
});

export const {
  setTimeToMake,
  // setTimeToMakeCostToImprove,
  // setAmountMax,
  // setAmountMaxCostToImprove,
  // setImprovementCostExponent,
  // setIsUnlocked,
} = resourceSlice.actions;

export default resourceSlice.reducer;
