import React from "react";
import { useSelector } from "react-redux";
import AddNewJourney from "./components/AddNewJourney";
import PastJourneyList from "./components/PastJourneyList";

function App() {
  const user = useSelector((state) => state.users.entities[1].name);
  // console.log("user", user);
  // const journeys = useSelector((state) => state.journeys.entities[1]);
  // console.log("journeys", journeys);
  return (
    <div className="">
      <h1>Journey Details of {user}</h1>
      <div className="flex min-h-screen">
        <div className="w-4/12">
          <h2 className="">Add New Journey</h2>
          <AddNewJourney/>
        </div>
        <div className="w-8/12">
          <h2 className="">Past Journeys</h2>
          <PastJourneyList/>
        </div>
      </div>
    </div>
  );
}

export default App;
