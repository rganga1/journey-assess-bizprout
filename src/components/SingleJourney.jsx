import React from "react";

function SingleJourney({
  journey: { jid, fromPlace, toPlace, fromdate, todate, cost },
}) {
  // console.log('In single Journey', jid, fromPlace, toPlace, fromdate, todate, cost)
  // function SingleJourney(journey) {
  //   console.log('journey', journey)
  //   const { jid, fromPlace, toPlace, fromdate, todate, cost }=journey.journey
  return (
    <div className="flex justify-around">
      <div>
        <div>From:{fromPlace || "Source"}</div>
        <div>From Date: {fromdate}</div>
      </div>
      <div>
        <div>To:{toPlace || "Destination"}</div>
        <div>To Date: {todate}</div>
      </div>
    </div>
  );
}

export default SingleJourney;
