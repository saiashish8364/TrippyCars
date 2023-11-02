import { createSlice } from "@reduxjs/toolkit";
let val = false;
if (localStorage.getItem("userLogin")) {
  val = true;
}
let isLoggedIn = {
  isAuthenticated: val,
};

const Auth = createSlice({
  name: "auth",
  initialState: isLoggedIn,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.isAuthenticated = false;
    },
  },
});
export default Auth.reducer;
export const authActions = Auth.actions;
