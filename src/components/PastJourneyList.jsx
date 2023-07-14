import React from "react";
import { useSelector } from "react-redux";
import SingleJourney from "./SingleJourney";

function PastJourneyList() {
  const journeysList = useSelector((state) => state.journeys.entities);
  console.log("journeys", journeysList);
  console.log("journeys", journeysList[0].jid);
  // const journey = journeysList[0];
  const content=journeysList.map((journey) => {
    console.log('journey ----', journey)
    return <li key={journey.jid}>
      <SingleJourney journey={journey}/>
    </li>
    })
  return (
    <ul className="grid xl:grid-cols-2 gap-6">
      {/* {journeysList.map((journey) => (
        // console.log('journey', journey)
        <li key={journey.jid}>
          <SingleJourney journey={journey}/>
        </li>
      ))} */}
      {content}
    </ul>
  );
}

export default PastJourneyList;
