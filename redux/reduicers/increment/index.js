import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload + state.counter;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
