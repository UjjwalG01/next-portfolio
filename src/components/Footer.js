import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark border-solid font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserverd</span>
        <div className="flex items-center">
          Build with
          <span className="text-red-500 text-2xl items-center px-1">
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
