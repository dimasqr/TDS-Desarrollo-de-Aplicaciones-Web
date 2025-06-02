import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Cambia esto si tu backend está en otro puerto
const API_URL = "http://localhost:3000";

export const fetchGoals = createAsyncThunk("goals/fetchGoals", async () => {
  const res = await axios.get(`${API_URL}/goals/getGoals`, {
    headers: { Authorization: "123" },
  });
  return res.data;
});

export const addGoalAsync = createAsyncThunk(
  "goals/addGoalAsync",
  async (goal) => {
    await axios.post(`${API_URL}/goals/addGoal`, goal, {
      headers: { Authorization: "123" },
    });
    return goal;
  }
);

export const deleteGoalAsync = createAsyncThunk(
  "goals/deleteGoalAsync",
  async (id) => {
    await axios.delete(`${API_URL}/goals/deleteGoal/${id}`, {
      headers: { Authorization: "123" },
    });
    return id;
  }
);

const goalsSlice = createSlice({
  name: "goals",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addGoalAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteGoalAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((goal) => goal.id !== action.payload);
      });
  },
});

export default goalsSlice.reducer;
