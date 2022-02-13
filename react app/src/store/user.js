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
      let name = action.payload.name;
      let id = action.payload.id;

      state.name = `@${name}`;
      if (id) {
        state.id = action.payload.id;
      }
      // for (const key in action.payload) {
      //   if (String(state[key]) == "name") {
      //     state[key] = `@${action.payload[key]}`;
      //   } else {
      //     state[key] = action.payload[key];
      //   }
      // }
    },
    empty(state, action) {
      state.name = "@";
      state.id = "";
    },
  },
});

export let userAction = userSlice.actions;
let userReducers = userSlice.reducer;

export default userReducers;
