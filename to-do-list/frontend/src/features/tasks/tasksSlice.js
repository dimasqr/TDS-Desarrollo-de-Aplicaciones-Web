import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(`${API_URL}/tasks/getTasks`, {
    headers: { Authorization: "123" },
  });
  return res.data;
});

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (task) => {
    await axios.post(`${API_URL}/tasks/addTask`, task, {
      headers: { Authorization: "123" },
    });
    return task;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTaskAsync",
  async (id) => {
    await axios.delete(`${API_URL}/tasks/deleteTask/${id}`, {
      headers: { Authorization: "123" },
    });
    return id;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
