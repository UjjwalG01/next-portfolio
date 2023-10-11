import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import InstaIcon from "./Icons";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-dark border-solid font-medium text-lg 
          dark:text-light dark:border-light md:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserverd</span>
        <div className="flex items-center lg:py-2">
          Developed by &nbsp;
          <Link
            className="hover:underline underline-offset-2 font-semibold"
            href={"/"}
          >
            UjjwalG
          </Link>
        </div>
        <Link
          href={"https://www.instagram.com/__ujjwal_g/"}
          className="w-6 mr-3 flex"
          target="_blank"
        >
          <h2 className="font-mont font-semibold text-purple-600">Instagram</h2>
          <InstaIcon className={"flex"} />
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
