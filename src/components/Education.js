import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-[3px] w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"MERN Stack Development Training"}
            time={"May 2023-August 2023"}
            place={"Deerwalk Training Center"}
            info={
              "Relevant courses included React, Node, Express and MongoDB. I have also learnt the version control and teamwork skills."
            }
          />

          <Details
            type={"Bachelor of Computer Applications"}
            time={"March 2019- 2024"}
            place={"St. Lawrence College, Chabahil Kathmandu"}
            info={
              "The courses included all the fundamentals of computer like OS, Networking, DSA, System Design and the programming languages like JAVA, JavaScript, C, C#"
            }
          />

          <Details
            type={"+2 Science with Bio"}
            time={"2017-2018"}
            place={"NASA International College"}
            info={
              "The courses included Maths, Physics, Chemistry, Biology with the various practical works and lab works. Conducted few field works and research related to the subjects."
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
