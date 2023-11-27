import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gesture = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <div className="each-component">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          transition={{
            duration: 0.125,
            ease: "backInOut",
          }}
          className="example-button"
        >
          Show/Hide
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          style={{ backgroundColor: "red" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="example-button"
        >
          Show/Hide
        </motion.button>
      </div>
      <div className="all-component">
        <MotionConfig
          transition={{
            duration: 0.125,
            ease: "backInOut",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            className="example-button"
          >
            Show/Hide
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
            style={{ backgroundColor: "red" }}
            className="example-button"
          >
            Show/Hide
          </motion.button>
        </MotionConfig>
      </div>
    </div>
  );
};

export default Gesture;
