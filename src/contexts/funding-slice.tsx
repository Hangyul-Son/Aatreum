import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/funding-projects.json";
import data2 from "../data/bgw-portfolio.json";

export type Funding = {
  id: number;
  title: string;
  count: number;
  author: string;
  imageSrc: string;
};

export type Project = {
  id: number;
  author: string;
  category: string;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
};

type SliceState = {
  fundingProjects: Array<Funding>;
  previousProjects: Array<Project>;
};

const initialState: SliceState = {
  fundingProjects: [...data],
  previousProjects: [...data2],
};

export const fundingSlice = createSlice({
  name: "fundings",
  initialState,
  reducers: {
    addFunding: (state, { payload }: PayloadAction<Funding>) => {
      state.fundingProjects = [...state.fundingProjects, payload];
    },
    addProject: (state, { payload }: PayloadAction<Project>) => {
      state.previousProjects = [...state.previousProjects, payload];
    },
  },
});

export const { addFunding, addProject } = fundingSlice.actions;

export default fundingSlice.reducer;
