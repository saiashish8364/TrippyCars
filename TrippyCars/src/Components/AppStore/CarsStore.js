import { createSlice } from "@reduxjs/toolkit";

const initialVal = {
  carsData: [],
};

const carsOnline = createSlice({
  name: "cars",
  initialState: initialVal,
  reducers: {
    updateCars(state, action) {
      state.carsData = action.payload;
    },
  },
});
export default carsOnline.reducer;
export const carActions = carsOnline.actions;
