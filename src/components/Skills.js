import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light py-2 px-3 absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl mt-64 w-full text-center">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">

        <motion.div
          className="flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light p-8"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={"CSS"} x={"-8vw"} y={"-24vw"} />
        <Skill name={"HTML"} x={"2vw"} y={"-12vw"} />
        <Skill name={"JavaScript"} x={"20vw"} y={"-20vw"} />
        <Skill name={"ReactJS"} x={"-5vw"} y={"23vw"} />
        <Skill name={"NodeJS"} x={"-20vw"} y={"-10vw"} />
        <Skill name={"TailwindCSS"} x={"20vw"} y={"6vw"} />
        <Skill name={"NextJS"} x={"-25vw"} y={"18vw"} />
        <Skill name={"Bootstrap"} x={"18vw"} y={"23vw"} />

      </div>
    </>
  )
};

export default Skills;
