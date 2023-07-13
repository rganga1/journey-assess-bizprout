import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import journeyReducer from "./features/journeySlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    journeys: journeyReducer,
  },
});

export default store;
