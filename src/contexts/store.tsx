import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import fundingReducer from "./funding-slice";

const store = configureStore({
  reducer: {
    funding: fundingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
