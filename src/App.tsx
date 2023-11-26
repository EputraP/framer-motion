import { useState } from "react";
import BasicOfMotion from "./component/basic-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BasicOfMotion />
    </>
  );
}

export default App;
