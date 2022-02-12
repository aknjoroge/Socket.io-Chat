import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  name: "@",
  id: "",
};
let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loaduser(state, action) {
      state.name = `@${action.payload}`;
    },
    empty(state, payload) {},
  },
});

export let userAction = userSlice.actions;
let userReducers = userSlice.reducer;

export default userReducers;
