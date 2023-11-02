import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import hostReducer from "./Host";
import carReducer from "./CarsStore";
const ApplicationStore = configureStore({
  reducer: {
    auth: authReducer,
    host: hostReducer,
    cars: carReducer,
  },
});
export default ApplicationStore;
