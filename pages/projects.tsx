"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

// main project image
import LUDOang from "@/public/projects/main-project/ludo.png";
import ReactChatMain from "@/public/projects/main-project/react-chat.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  desc: string;
  year: string;
  tech: string;
  bg: StaticImageData; // Updated for TypeScript
  slug: string;
}

const projects: Project[] = [
  {
    title: "LUDOang",
    desc: "LUDOang is a game created using python and pygame. This game is inspired by LUDO game.",
    year: "2023",
    tech: "Python, Pygame, OpenGL",
    bg: LUDOang,
    slug: "ludoang",
  },
  {
    title: "React Chat WebApp",
    desc: "My second React project. This project is a realtime chat webapp that I created using ReactJS, Firebase, and TailwindCSS.",
    year: "2023",
    tech: "Javascript, React Js, Firebase, Daisy UI",
    bg: ReactChatMain,
    slug: "react-chat",
  },
];

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <main className="overflow-hidden">
        <FixedButon onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButon>
        <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 p-10 mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            >
              <img
                src="/images/mybim.jpg"
                alt="Example Image"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="text-5xl font-bold text-black bg-transparent bg-opacity-50 md:bg-white lg:bg-transparent md-px-0 md:text-8xl">
              My Projects
            </h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
              List of my projects that I have done and{" "}
              <span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
                currently working on.
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full pl-10 mt-10 md:pl-32">
          <div className="flex flex-col items-center self-start justify-center my-5">
            <div className="self-start h-1 mb-3 bg-gray-700 rounded-full w-28"></div>
            <div className="h-1 translate-x-12 bg-gray-700 rounded-full w-28"></div>
            <h1 className="mt-3 text-3xl font-bold">Highlight</h1>
          </div>
        </div>
        <div className="container relative grid w-screen grid-cols-1 gap-4 px-10 mx-auto mb-10 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center mb-5">
            <div className="relative w-full images aspect-square">
              <div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/mybim.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/mybim.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/mybim.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex flex-col items-start justify-center mb-5 md:px-10"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <h2 className="mb-3 text-2xl font-bold tracking-wider">
              React Chat WebApp
            </h2>
            <p className="text-lg text-justify text-gray-600 title">
              React Chat WebApp is a chat application that I created using
              ReactJS, Firebase, and TailwindCSS. This is my second project
              using ReactJS and Firebase. I created this project to learn more
              about ReactJS and Firebase. I also used TailwindCSS to make the UI
              more beautiful and responsive. In this project, I learned many
              things about React and Firebase, such as React hooks, React
              Router, Firebase authentication, Firebase Firestore, and Firebase
              Storage. You can see the source code of this project on my GitHub
              account or preview the project by clicking the button below.
            </p>
            <div className="mt-3">
              <Button variation="primary">
                <Link href="projects/react-chat">More</Link>
              </Button>
              <Button variation="secondary">
                <a
                  href="https://react-chat-rouge.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-start w-full pl-10 mt-16 md:pl-32">
          <div className="flex flex-col items-start self-start justify-start my-5">
            <Hr />
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              Other Noteworthy Projects
            </motion.h1>
          </div>
        </div>
        <div className="container grid w-screen grid-cols-1 gap-4 px-10 mx-auto mb-10 cursor-pointer md:grid-cols-2">
          {/* loop projects data */}
          {projects.map((project, index) => (
            <Link href={`projects/${project.slug}`} key={index}>
              <motion.div
                className="relative z-10 flex flex-col items-start justify-center w-full h-auto px-5 py-20 mb-5 bg-gray-400 md:px-10 group/tes md:py-2 aspect-video"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
              >
                <img
                  src="/public/projects/sayurKu/leandig_page.png"
                  alt="Example Image"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="absolute top-0 left-0 px-4 py-2 bg-gray-600">
                  <h4 className="text-white">{project.year}</h4>
                </div>
                <div className="z-10 text-center transition-all duration-500 opacity-100 ease content group-hover/tes:opacity-0">
                  <h1 className="mb-3 text-3xl font-bold">{project.title}</h1>
                  <p>{project.desc}</p>
                  <div className="flex flex-row flex-wrap items-center justify-center mt-5">
                    {project.tech.split(",").map((t, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 m-1 text-white bg-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {/* view in archive btn */}
        <div className="flex flex-col items-center self-start justify-center my-5">
          <Button variation="primary">
            <Link href="/projects/archive">View In Archive</Link>
          </Button>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Page;
