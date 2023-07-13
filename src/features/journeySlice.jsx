import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    1: {
      jid: 1,
      fromPlace: "Bangalore",
      toPlace: "Chennai",
      fromdate: "11-02-2023",
      todate: "17-01-2023",
      cost: 20000,
    },
    2: {
      jid: 2,
      fromPlace: "Bangalore",
      toPlace: "Hyderabad",
      fromdate: "21-12-2022",
      todate: "22-12-2022",
      cost: 20000,
    },
    3: {
      jid: 3,
      fromPlace: "Bangalore",
      toPlace: "Mumbai",
      fromdate: "15-06-2022",
      todate: "18-06-2022",
      cost: 30000,
    },
  },
};

const journeySlice = createSlice({
  name: "journeys",
  initialState,
  reducers: {},
});

// export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default journeySlice.reducer;
