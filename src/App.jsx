import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNewJourney from "./components/AddNewJourney";
import PastJourneyList from "./components/PastJourneyList";
import UpdateJourney from "./components/UpdateJourney";

function App() {
  const user = useSelector((state) => state.users.entities[1].name);
  const [isUpdating, setIsUpdating] = useState({is:false,journey:null});
  const journey=isUpdating.journey;
  console.log('isUpdating', isUpdating)
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold underline m-4">Journey Details of {user}</h1>
      <div className="flex min-h-screen gap-8">
        <div className="w-4/12">          
          {isUpdating.is ? <UpdateJourney f={journey} f1={setIsUpdating}/> : <AddNewJourney />}
        </div>
        <div className="w-8/12">
          <h2 className="text-center text-lg font-bold underline m-4">Past Journeys</h2>
          <PastJourneyList f={journey} f1={setIsUpdating}/>
        </div>
      </div>
    </div>
  );
}

export default App;
