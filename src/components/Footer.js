import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-dark border-solid font-medium text-lg 
          dark:text-light dark:border-light md:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserverd</span>
        <div className="flex items-center lg:py-2">
          Build with
          <span className="text-purple-500 dark:text-purple-300 text-2xl items-center px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            className="underline underline-offset-2 font-semibold"
            href={"/"}
          >
            UjjwalG
          </Link>
        </div>
        <Link href={"/"}>Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
