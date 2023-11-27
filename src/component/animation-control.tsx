import React from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

const AnimationControl = () => {
  const flipControl = useAnimationControls();

  const onClickHandler = () => {
    flipControl.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button onClick={onClickHandler} className="example-button">
        Flips !
      </motion.button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={flipControl}
        exit="initial"
        style={{
          width: "150px",
          height: "150px",
          background: "black",
        }}
      ></motion.div>
    </div>
  );
};

export default AnimationControl;
