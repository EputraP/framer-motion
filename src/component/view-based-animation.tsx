import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimation = () => {
  const divRef = useRef(null);
  const isView = useInView(divRef, { once: false });

  return (
    <motion.div
      ref={divRef}
      style={{
        height: "100vh",
        width: "100vh",
        backgroundColor: `${isView ? "red" : "blue"}`,
        transition: "3s background",
      }}
    >
      ViewBasedAnimation
    </motion.div>
  );
};

export default ViewBasedAnimation;
