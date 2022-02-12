import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./user";

let applicationStore = configureStore({
  reducer: {
    user: userReducers,
  },
});

export default applicationStore;
