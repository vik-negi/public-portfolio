// src/features/aiResponseSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createPortfolioData: null, // This will store your JSON response
  skillsData: null,
  loading: false,
  error: null,
};

const aiResponseSlice = createSlice({
  name: "aiResponse",
  initialState,
  reducers: {
    setResponseData: (state, action) => {
      state.createPortfolioData = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setResponseData, setSkillsData, setLoading, setError } =
  aiResponseSlice.actions;

export default aiResponseSlice.reducer;
