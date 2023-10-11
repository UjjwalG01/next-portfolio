import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/ss1.jpg";
import project2 from "../../public/images/projects/weather-app.jpg";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between mt-16 relative 
        rounded-3xl rounded-br-3xl border border-solid border-dark bg-light 
        shadow-2xl p-12 dark:border-light dark:bg-dark"
    >
      <div className="absolute bg-dark dark:bg-light top-0 -right-3  w-[101%] h-[103%] -z-10 rounded-[2.5rem] rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline-offset-auto hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-semibold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10 mr-3 " target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light rounded-lg px-3 py-2 text-lg dark:bg-light dark:text-dark font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center 
        justify-center rounded-2xl border border-solid border-dark 
        bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light"
    >
      <div className="absolute bg-dark dark:bg-light top-0 -right-3  w-[101%] h-[103%] -z-10 rounded-[2rem] rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      <div className="flex flex-col items-start justify-between mt-4">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline-offset-auto hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-semibold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} className="w-8" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:text-purple-600 hover:underline"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="The react project for making portfolio"
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Knowledge brings Power the to Thrive!"}
            className={"leading"}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                title={"Full Stack Room Booking Web Application"}
                summary={
                  "Node with Express as a backend and React as a frontend, this web app is full stack project where host can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements."
                }
                github={"https://github.com/UjjwalG01/full-stack-web-mern.git"}
                img={project1}
                link={"#"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Full Stack Room Booking Application"}
                summary={
                  "Node with Express as a backend and React as a frontend, this web app is full stack project where host can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements."
                }
                github={"https://github.com/UjjwalG01/full-stack-web-mern.git"}
                img={project1}
                link={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Full Stack Room Booking Application"}
                summary={
                  "Node with Express as a backend and React as a frontend, this web app is full stack project where host can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements."
                }
                github={"https://github.com/UjjwalG01/full-stack-web-mern.git"}
                img={project1}
                link={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={"A weather application to show current weather status"}
                summary={
                  "With the API call to the backend using openweatherapi, the basic implementation of frontend has been done to schieve the goal of the project."
                }
                github={"https://github.com/UjjwalG01?tab=repositories"}
                img={project2}
                link={"#"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"A weather application to show current weather status"}
                github={"https://github.com/UjjwalG01?tab=repositories"}
                img={project2}
                link={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"A weather application to show current weather status"}
                summary={
                  "Node with Express as a backend and React as a frontend, this web app is full stack project where host can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements."
                }
                github={"https://github.com/UjjwalG01?tab=repositories"}
                img={project2}
                link={"/"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
