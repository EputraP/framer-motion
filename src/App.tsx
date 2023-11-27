import { useState } from "react";
import BasicOfMotion from "./component/basic-motion";
import Gesture from "./component/gesture";
import AnimationControl from "./component/animation-control";
import ViewBasedAnimation from "./component/view-based-animation";
import ScrollAnimation from "./component/scroll-animation";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <BasicOfMotion />
      </section>
      <section>
        <Gesture />
      </section>
      <section>
        <AnimationControl />
      </section>
      <section>
        <ViewBasedAnimation />
      </section>
      <section>
        <ScrollAnimation />
      </section>
    </>
  );
}

export default App;
