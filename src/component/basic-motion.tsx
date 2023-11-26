import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./componet.scss";

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  // motion : untuk setiap html tag yang mau dianimasikan, didepan html tagnya dikasih motion.[[htmltag]]
  // ketika udah dikasih itu, html tagnya bakal punya props motion
  // ada 2 keadaan mount sama unmount
  // > mount : ketika komponen diload pertama oleh html
  // > unmount: ketika komponen gk diload sama html
  // untuk mount ketika mount sendiri yang dipake biasanya
  // > initial: keadaan awal
  // > animate: keadaan akhir
  // untuk unmount sendiri yang dipake biasanya
  // > exit : keadaan ketika komponennya unmount
  // ketika mau pakai unmount perlu menggunakan AnimatePresence yang ngeWrap html tag yang dianimasikan
  // transition : yang ngasih transisi durasi, dan tipe durasi (kayak transition css biasa)
  // bisa pakai animation css, caranya
  // dikasih array, contohnya yang translationY => y.
  // itu kan pakai array, nah itu keyframenya
  // untuk ngatur percentage keyframenya, di transition ada times
  // jumlah array di keyframe harus sama dengan jumlah array di y nya
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }}
            animate={{
              rotate: "180deg",
              scale: 1,
              //   y: [0, 150, -150, -150, 0],
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            style={{
              width: "150px",
              height: "150px",
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
