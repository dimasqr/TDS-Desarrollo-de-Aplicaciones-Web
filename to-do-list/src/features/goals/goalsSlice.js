import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.items.push(action.payload);
    },
    removeGoal: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
