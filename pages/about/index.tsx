"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import FixedButton from "../../components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hr from "../../components/Hr";
import Footer from "@/components/Footer";

// Images
import Me1 from "../../public/images/me1.jpg";
import Me2 from "../../publice/images/me2.jpg";
import Me3 from "../../public/images/me3.jpg";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <main className="overflow-hidden">
        <FixedButton onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButton>
        <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 p-10 mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ ease: "circOut", duration: 1 }}
              className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            >
              <img
                src="/images/me2.jpg"
                alt="Example Image"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="text-5xl font-bold text-black bg-transparent bg-opacity-50 md:bg-white lg:bg-transparent md-px-0 md:text-8xl">
              About Me
            </h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
              A brief introduction about me and{" "}
              <span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
                my interest.
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
            <h1 className="mt-3 text-3xl font-bold">Who Am I?</h1>
          </div>
        </div>
        <div className="container relative grid w-screen grid-cols-1 gap-4 px-10 mx-auto mb-10 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center mb-5">
            <div className="relative w-full images aspect-square">
              <div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="w-full h-full"
                >
                  <img
                    src="/images/me2.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-full"
                >
                  <img
                    src="/images/me3.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full"
                >
                  <img
                    src="/images/me1.jpg"
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
              Bimas Najid Ilmansyah
            </h2>
            <p className="text-lg text-justify text-gray-600 title">
              Hey there, I’m Bimas Najid Ilmansyah, a{" "}
              <span className="font-medium text-black">tech enthusiast</span>{" "}
              and
              <span className="font-medium text-black">
                aspiring Web Developer.
              </span>{" "}
              Originating from Pasuruan, East Java, Indonesia, I’m currently
              embarking on a fascinating journey at{" "}
              <span className="font-medium text-black">
                Universitas Muhammadiyah Sidoarjo,
              </span>{" "}
              where I’m pursuing my degree in{" "}
              <span className="font-medium text-black">
                Informatics Engineering.
              </span>{" "}
              My passion for technology and coding knows no bounds. Beyond the
              world of coding, I find myself deeply immersed in the realms of
              design, Game Development, and the fascinating universe of AI. I
              believe that in today’s fast-paced digital landscape, being a{" "}
              <span className="font-medium text-black">lifelong learner</span>{" "}
              is not just a choice, but a necessity. Let’s connect and explore
              this ever-evolving world of tech together!
            </p>
          </motion.div>
        </div>
        <div className="container grid w-screen grid-cols-1 gap-4 p-10 mx-auto mt-10 mb-24 md:grid-cols-2">
          <motion.div
            className="flex flex-col items-center justify-center mb-5"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
              Language & Framework
            </h2>
            <p className="tracking-widest text-center text-gray-500 md:px-5">
              <span className="font-bold text-black">HTML</span> |{" "}
              <span className="font-bold text-black">CSS</span> |{" "}
              <span className="font-bold text-black">Javascript</span> |{" "}
              <span className="font-medium text-black">Typescript</span> |{" "}
              <span className="font-bold text-black">React</span> |{" "}
              <span className="font-medium text-black">NextJS</span> |{" "}
              <span className="font-bold text-black">SASS</span> |{" "}
              <span className="font-medium text-black">Tailwind</span> |{" "}
              <span className="font-medium text-black">NodeJS</span> |{" "}
              <span className="font-medium text-black">ExpressJS</span>
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-5"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
              Tools
            </h2>
            <p className="tracking-widest text-center text-gray-500 md:px-5">
              <span className="font-medium text-black">VS Code</span> |{" "}
              <span className="font-medium text-black">Git</span> |{" "}
              <span className="font-medium text-black">Figma</span> |{" "}
              <span className="font-medium text-black">Trello</span> |{" "}
              <span className="font-medium text-black">Postman</span> |{" "}
              <span className="font-medium text-black">NPM</span> |{" "}
              <span className="font-medium text-black">Webpack</span> |{" "}
              <span className="font-medium text-black">Vite</span>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-start w-full pl-10 mt-16 md:pl-32">
          <div className="flex flex-col items-center self-start justify-center my-5 ">
            <motion.div
              className="self-start h-1 mb-3 bg-gray-700 rounded-full w-28"
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            ></motion.div>
            <motion.div
              className="h-1 bg-gray-700 rounded-full w-28"
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: -50,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            ></motion.div>
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.7,
                type: "spring",
              }}
            >
              Education &amp; Experience
            </motion.h1>
          </div>
        </div>
        <div className="container grid w-screen grid-cols-1 gap-10 p-10 mx-auto my-10 md:grid-cols-2">
          <motion.div
            className="flex flex-col items-start justify-center mb-5"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              Education | Universitas Muhammadiyah Sidoarjo
            </h2>
            <h3 className="mb-3 font-medium text-gray-500 text-md">
              Teknik Informatika | 2023 - Now
            </h3>
            <p className="relative pl-3 text-justify text-gray-500">
              <span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-''"></span>
              I&rsquo;m currently in my third semester at Universitas Negeri
              Malang, majoring in Informatics Engineering. This journey has been
              nothing short of exhilarating, filled with countless opportunities
              to learn and grow. With a steadfast dedication to my studies,
              I&rsquo;ve achieved a commendable GPA of 3.93. Throughout my
              academic journey, I&rsquo;ve delved into various facets of
              computer science, honing my skills in web development,
              programming, and problem-solving.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start justify-center mb-5"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              Experience | Freelance Web Developer
            </h2>
            <h3 className="mb-3 font-medium text-gray-500 text-md">
              Fullstack Web Developer | 2023 - Now
            </h3>
            <p className="relative pl-3 text-justify text-gray-500">
              <span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-''"></span>
              My experience extends across various technologies, with a primary
              focus on Next.js and Laravel. I&rsquo;ve successfully completed
              three projects using Next.js and Laravel. What sets me apart is my
              ability to adapt to different project requirements. Whether
              working collaboratively as part of a team or independently, I
              ensure that each project I undertake meets high-quality standards
              and fulfills the unique needs of clients.
            </p>
          </motion.div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
