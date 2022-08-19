import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "../reduicers/increment";

const makeStore = () => {
  return configureStore({
    reducer: {
      inc: counterSlice,
    },
  });
};
export const wrapper = createWrapper(makeStore, { debug: true });
