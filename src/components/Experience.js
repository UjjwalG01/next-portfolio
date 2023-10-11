import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-purple-500 capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-[3px] w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Frontend Intern"}
            time={"September 2022- March 2023"}
            company={"Reflex IT Solutions"}
            address={"Dillibazar, Kathmandu"}
            companyLink={"reflexitsolution.com/"}
            work={
              "Worked on a Frontend Intern and implemented the basic designs using React and its libraries. Worked on MERN tech stacks in a team and help in delivering the projects."
            }
          />

          <Details
            position={"Computer Instructor"}
            time={"May 2019-September 2022"}
            company={"JEEVAN TARA ACADEMY"}
            address={"Gokarneshwor Kathmandu"}
            companyLink={"www.jta.com.np"}
            work={
              "Worked as an IT instructor for a school and taught the basics of programming. I have learned many aspects of working along with the teams, to achieve a desired goal."
            }
          />

          {/* <Details
            position={"Software Engineer"}
            time={"2022-Present"}
            company={"Google"}
            address={"Mountain View, CA"}
            companyLink={"www.google.com"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />

          <Details
            position={"Software Engineer"}
            time={"2022-Present"}
            company={"Google"}
            address={"Mountain View, CA"}
            companyLink={"www.google.com"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          /> */}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
