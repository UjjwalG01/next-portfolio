import React from "react";
import { motion, useScroll } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 stroke-purple-700 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          style={{ pathLength: scrollYProgress }}
          className="stroke-[3px] fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-purple-700 animate-pulse"
        />
      </svg>
    </figure>
  );
}

export default LiIcon;
