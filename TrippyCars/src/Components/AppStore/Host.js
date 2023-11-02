import { createSlice } from "@reduxjs/toolkit";

let isHosted = {
  isHosted: false,
};

const Host = createSlice({
  name: "host",
  initialState: isHosted,
  reducers: {
    hosted(state, action) {
      state.isHosted = action.payload;
    },
  },
});
export default Host.reducer;
export const hostActions = Host.actions;
