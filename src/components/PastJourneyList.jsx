import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleJourney from "./SingleJourney";

function PastJourneyList({ f: journey, f1: setIsUpdating }) {
  const jid_h = journey ? journey.jid : null;
  const journeysList = useSelector((state) => state.journeys.entities);
  const addButton = null;
  // console.log("journeys", journeysList);
  // console.log("journeys", journeysList[0].jid);
  // const journey = journeysList[0];
  // useEffect(() => {
  //   if (jid_h) {
  //   }
  // }, [[jid_h]]);
  const content = journeysList.map((journey) => {
    return (
      <li key={journey.jid}>
        <SingleJourney journey={journey} f={setIsUpdating} j={jid_h} />
      </li>
    );
  });
  return <ul className="grid xl:grid-cols-2 gap-6">{content}</ul>;
}

export default PastJourneyList;
