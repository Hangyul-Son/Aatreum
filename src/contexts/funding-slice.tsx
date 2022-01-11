import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/funding-projects.json";

type Funding = {
  id: number;
  title: string;
  count: number;
  author: string;
  imageSrc: string;
};

type SlideState = {
  fundingProjects: Array<Funding>;
};

const initialState: SlideState = {
  fundingProjects: [...data],
};

export const fundingSlice = createSlice({
  name: "fundings",
  initialState,
  reducers: {
    addFunding: (state, { payload }: PayloadAction<Funding>) => {
      state.fundingProjects = [...state.fundingProjects, payload];
    },
  },
});

export const { addFunding } = fundingSlice.actions;

export default fundingSlice.reducer;
