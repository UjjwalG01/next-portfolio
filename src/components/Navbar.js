import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./customHooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`bg-black h-[2px] inline-block group-hover:w-full transition-[width] ease duration-200 absolute left-0 -bottom-0.5 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark py-2`}
    >
      {title}
      <span
        className={`bg-light h-[2px] inline-block group-hover:w-full transition-[width] ease duration-200 absolute left-0 bottom-1 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8`}
    >
      <button
        onClick={handleClick}
        className="hidden flex-col justify-center items-center lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                    rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                    rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                    rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Project"} className="mx-4" />
          <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          {/* we use svgr playground to convert svg into react components */}
          <motion.a
            href={"https://twitter.com/"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"https://github.com/"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={"https://linkedin.com/"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded full p-1 ${
              mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* For mobile devices */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-w-[70vw] flex flex-col justify-between items-center 
          fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/70 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Project"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center mt-2 flex-wrap">
            {/* we use svgr playground to convert svg into react components */}
            <motion.a
              href={"https://twitter.com/"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3"
              target="_blank"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={"https://github.com/"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-md"
              target="_blank"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://linkedin.com/"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] hidden lg:inline-block">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
