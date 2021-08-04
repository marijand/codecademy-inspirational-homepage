import { createSlice } from "@reduxjs/toolkit";

export const GoalsSlice = createSlice({
  name: "goals",
  initialState: {
    goals: [
      {
        id: "1",
        text: "Eat a cake",
      },
      {
        id: "2",
        text: "Water plants",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },

    removeGoal: (state, action) => {
      state.goals.fiter((goal) => goal.id !== action.payload.id);
    },
  },
});

export const selectGoals = (state) => state.goals;

export const { addGoal, removeGoal } = GoalsSlice.actions;

export const goalsSliceReducer = GoalsSlice.reducer;
