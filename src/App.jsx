import React from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.users.entities[1].name);
  console.log('user', user)
  return <div>Welcome {user}</div>;
}

export default App;
