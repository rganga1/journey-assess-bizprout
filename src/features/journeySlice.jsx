import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  entities: [
    {
      jid: 1,
      fromPlace: "Bangalore",
      toPlace: "Chennai",
      fromdate: "11-02-2023",
      todate: "17-02-2023",
      cost: 20000,
    },
    {
      jid: 2,
      fromPlace: "Bangalore",
      toPlace: "Hyderabad",
      fromdate: "21-12-2022",
      todate: "22-12-2022",
      cost: 20000,
    },
    {
      jid: 3,
      fromPlace: "Bangalore",
      toPlace: "Mumbai",
      fromdate: "15-06-2022",
      todate: "18-06-2022",
      cost: 30000,
    },
  ],
};

const journeySlice = createSlice({
  name: "journeys",
  initialState,
  reducers: {
    addNew: (state, action) => {
      console.log("action.payload", action.payload);
      state.entities.push({
        ...action.payload,
        jid: nanoid(),
        fromdate: action.payload.fromdate.split("-").reverse().join("-"),
        todate: action.payload.todate.split("-").reverse().join("-"),
      });
      console.log("state.entities", state.entities);
    },
    updateExisting: (state, action) => {
      const index = state.entities.findIndex(
        ({ jid }) => jid == action.payload.jid
      );
      // journey={...journey,...action.payload}
      state.entities[index] = {
        ...state.entities[index],
        ...action.payload,
      };
    },
    deleteExisting: (state, action) => {
      const index = state.entities.findIndex(
        ({ jid }) => jid == action.payload
      );
      state.entities.splice(index, 1);
    },
  },
});

export const { addNew, updateExisting, deleteExisting } = journeySlice.actions;
export default journeySlice.reducer;
