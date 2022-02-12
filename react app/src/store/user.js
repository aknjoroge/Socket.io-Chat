import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  name: "@",
  id: "xxxxxxxxxxxx",
};
let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loaduser(state, action) {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
    empty(state, action) {
      state.name = "";
      state.id = "";
    },
  },
});

export let userAction = userSlice.actions;
let userReducers = userSlice.reducer;

export default userReducers;
