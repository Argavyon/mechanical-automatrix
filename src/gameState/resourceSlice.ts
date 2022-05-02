import { createSlice } from "@reduxjs/toolkit";
import { IResource } from "types/ResourceTypes";

const initialResourceState: IResource = {
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
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState: initialResourceState,
  reducers: {
    setTimeToMake: (state) => {
      state.timeToMake = state.timeToMake * state.improvementCostExponent;
    },
    setTimeToMakeCostToImprove: (state) => {
      state.timeToMakeCostToImprove.amount =
        state.timeToMakeCostToImprove.amount * state.improvementCostExponent;
    },
    setAmountMax: (state) => {
      state.amountMax = state.amountMax * state.improvementCostExponent;
    },
    setAmountMaxCostToImprove: (state) => {
      state.amountMaxCostToImprove.amount =
        state.amountMaxCostToImprove.amount * state.improvementCostExponent;
    },
    setImprovementCostExponent: (state, action) => {
      state.improvementCostExponent = action.payload;
    },
    setIsUnlocked: (state, action) => {
      state.isUnlocked = action.payload;
    },
  },
});

export const {
  setTimeToMake,
  setTimeToMakeCostToImprove,
  setAmountMax,
  setAmountMaxCostToImprove,
  setImprovementCostExponent,
  setIsUnlocked,
} = resourceSlice.actions;

export default resourceSlice.reducer;
