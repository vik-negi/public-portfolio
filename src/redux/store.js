// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import aiResponseReducer from "./admin/CreatePortfolio";

export const store = configureStore({
  reducer: {
    aiResponse: aiResponseReducer,
  },
});

export default store;
