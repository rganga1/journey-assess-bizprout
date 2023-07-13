import React from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.users.entities[1].name);
  const journeys = useSelector((state) => state.journeys.entities[1]);
  console.log("user", user);
  console.log("journeys", journeys);
  return <div>Journey Details of {user}</div>;
}

export default App;
