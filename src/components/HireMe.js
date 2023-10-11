import React from "react";
import Circular from "./Circular";
import Link from "next/link";

const HireMe = () => {
  // md:right-8 md:left-auto md:top-0 md:bottom-auto
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-12 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center relative justify-center md:w-28">
        <Circular className="fill-dark animate-spin-slow dark:fill-white" />
        <Link
          href={"mailto:ug.online.st@gmail.com"}
          className="flex items-center justify-center bg-dark text-light 
              shadow-md border border-solid border-dark w-20 h-20 rounded-full 
              font-semibold hover:bg-light hover:text-dark absolute left-1/2 
              top-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-white dark:text-dark 
              hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
