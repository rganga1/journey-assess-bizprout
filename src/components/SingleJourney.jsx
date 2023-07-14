import React from "react";
import { deleteExisting, updateExisting } from "../features/journeySlice";
import { useDispatch } from "react-redux";

function SingleJourney({
  journey: { jid, fromPlace, toPlace, fromdate, todate, cost },
  f: setIsUpdating,
  j: jid_h,
}) {
  const dispatch = useDispatch();
  const isHighlighed = jid == jid_h;
  // console.log('setIsUpdating', setIsUpdating)
  // console.log('In single Journey', jid, fromPlace, toPlace, fromdate, todate, cost)
  // function SingleJourney(journey) {
  //   console.log('journey', journey)
  //   const { jid, fromPlace, toPlace, fromdate, todate, cost }=journey.journey
  return (
    <div
      className={`flex justify-around ${
        isHighlighed
          ? "border-gray-800 shadow-xl bg-gray-100"
          : "border-gray-400"
      }  border-2 py-4 rounded-lg`}>
      <div className="flex flex-col">
        <h2>cost (Rs)</h2>
        <h2>{cost.toLocaleString("en-IN")}</h2>
      </div>
      <div>
        <div>From:{fromPlace || "Source"}</div>
        <div>From Date: {fromdate}</div>
        <button
          onClick={() => {
            // dispatch(updateExisting(jid));
            setIsUpdating({
              is: true,
              journey: { jid, fromPlace, toPlace, fromdate, todate, cost },
            });
          }}
          className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          update
        </button>
      </div>
      <div>
        <div>To:{toPlace || "Destination"}</div>
        <div>To Date: {todate}</div>
        <button
          onClick={() => {
            dispatch(deleteExisting(jid));
            setIsUpdating({
              is: false,
              journey:null,
            });
          }}
          className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm">
          delete
        </button>
      </div>
    </div>
  );
}

export default SingleJourney;
