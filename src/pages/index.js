import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile3.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ujjwal Giri | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:order-2">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design"}
                className={
                  "!text-6xl !text-right xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                }
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-end mt-2 lg:self-center">
                <Link
                  href={"./resume.pdf"}
                  target="_blank"
                  download={true}
                  className="bg-dark text-white px-4 py-2 flex rounded-md font-semibold text-lg
                   hover:text-dark border-2 hover:bg-white hover:border-2 hover:border-black 
                   dark:bg-white dark:text-dark hover:dark:bg-dark hover:dark:text-light 
                   hover:dark:border-light md:px-2 md:py-1 md:text-base"
                >
                  Resume
                </Link>
                <Link
                  href={"https://mail.google.com/mail/u/0/#inbox?compose=new"}
                  className="mx-4 text-lg font-medium bg-gray-300 px-5 py-2 rounded-md text-dark 
                    dark:bg-gray-100 md:px-2 md:py-1 md:text-base"
                  target="_blank"
                >
                  Email
                </Link>
              </div>
            </div>

            <div className="w-1/2 md:w-full md:order-1">
              <Image
                src={profilePic}
                className="w-full h-auto lg:hidden md:w-full md:pt-16 md:inline-block md:mb-12"
                priority
                alt="This is my profile piture"
                sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={profilePic}
            alt="This is a side icon for my web app"
            className="w-full h-auto border border-dark rounded-full"
          />
        </div>
      </main>
    </>
  );
}
