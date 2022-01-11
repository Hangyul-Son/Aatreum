import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  fundingProjects: [],
};

export const profileSlice = createSlice({
  name: "fundings",
  initialState,
  reducers: {
    addFunding: (state, { payload }: PayloadAction<Funding>) => {
      state.fundingProjects = [...state.fundingProjects, payload];
    },
  },
});

export const { addFunding } = profileSlice.actions;

export default profileSlice.reducer;
