import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/images/profile.png";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

function about() {
  const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [isInView, value]);

    return <span ref={ref}></span>;
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="This is my about page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion fuels Purpose!"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col xl:col-span-4 items-start justify-start md:order-2 md:col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-white">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I'm Ujjwal Giri, a MERN Stack developer with a passion for
                creating beautiful, functional, and modern implementations of
                designs. With more than 1.5 years of experience in the field. I
                am always looking for creative way and efficient way for
                developing web applications.
              </p>

              <p className="font-medium">
                Developing a user-centric web application has become the most
                important thing for any of the organizations and the development
                is all about solving problems and creating intuitive, enjoyable
                experiences for users.
              </p>
              <p className="font-medium">
                I'm comfortable to implement the designs for either website,
                mobile app, or other digital product, I bring my commitment to
                design excellence and user-centered thinking to every project I
                work on. I look forward to the opportunity to bring my skills
                and passion to your next project.
              </p>
            </div>

            <div
              className="col-span-3 relative  h-max rounded-2xl border border-solid 
                border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute bg-dark top-0 -right-3  w-[102%] h-[103%] -z-10 rounded-2xl dark:bg-light" />
              <Image
                src={ProfilePic}
                alt="profile image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col xl:col-span-8 xl:flex-row xl:items-center items-end justify-between md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75 md">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
