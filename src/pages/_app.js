import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import img from "../../public/images/profile3.png";

// initializing the font with variable
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href={img} />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
