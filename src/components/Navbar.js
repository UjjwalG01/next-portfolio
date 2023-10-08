import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`bg-black h-[2px] inline-block group-hover:w-full transition-[width] ease duration-200 absolute left-0 -bottom-0.5 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header
      className={`w-full px-32 py-8 font-medium flex items-center justify-between `}
    >
      <nav>
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/about"} title={"About"} className="mx-4" />
        <CustomLink href={"/projects"} title={"Project"} className="mx-4" />
        <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

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
      </nav>
    </header>
  );
};

export default Navbar;
