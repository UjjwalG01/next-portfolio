import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/projects/project-image.jpg";
import article2 from "../../public/images/projects/ss2.jpg";
import article3 from "../../public/images/projects/3.jpg";
import article4 from "../../public/images/projects/5.jpg";
import article5 from "../../public/images/projects/6.jpg";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:text-purple-600">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transform: { duration: 0.2 } }}
        className="w-64 z-10 h-auto hidden absolute rounded-lg"
        alt={title}
        priority
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center dark:bg-dark dark:text-light dark:border-light justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-orange-700 font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 relative w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark text-light dark:border-light">
      <div className="absolute bg-dark dark:bg-light top-0 -right-3  w-[101%] h-[103%] -z-10 rounded-[2rem] rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer inline-block overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto"
        />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-lg"
      >
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:text-purple-600">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-purple-600 font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>My Articles</title>
        <meta name="description" content="This is my about page" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className={"mb-16"}
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles
              title={"This is my sample article title"}
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
              img={article1}
            />
            <FeaturedArticles
              title={"Build a full stack room booking web app using ReactJS"}
              summary={
                "Build A Full Stack web application from scratch using React, Tailwind CSS, Node.js, ExpressJS, and MongoDB"
              }
              time={"9 min read"}
              link={"/"}
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-center text-4xl w-full mt-32 my-16 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article3}
            />
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article4}
            />
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article5}
            />
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article5}
            />
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article5}
            />
            <Article
              title={"This is a sample article title! (ARTICLES COMING SOON)"}
              date={"July 13, 2023"}
              link={"/"}
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
