import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import goalsReducer from "../features/goals/goalsSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    goals: goalsReducer,
  },
});
