import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import journeyReducer, { addNew, deleteExisting, updateExisting } from "./features/journeySlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    journeys: journeyReducer,
  },
});

// // store.dispatch(addNew({
  //   jid: 4,
  //   fromPlace: "Bangalore",
  //   toPlace: "Mumbai",
  //   fromdate: "15-06-2022",
  //   todate: "18-06-2022",
  //   cost: 30000,
  // }))
  // store.dispatch(updateExisting({
  //   jid: 2,
  //   fromPlace: "Bangalore",
  //   toPlace: "Mumbai",
  //   fromdate: "15-06-2022",
  //   todate: "18-06-2022",
  //   cost: 3,
  // }))
  // store.dispatch(deleteExisting({
  //   jid: 2,
  //   fromPlace: "Bangalore",
  //   toPlace: "Mumbai",
  //   fromdate: "15-06-2022",
  //   todate: "18-06-2022",
  //   cost: 3,
  // }))

export default store;
