"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 overflow-hidden">
      <div className="flex justify-center items-center flex-col mt-5 self-center min-h-[50vh] border-b-2 min-w-[80vw] ">
        <Link href="/#contact">
          <motion.h2
            className="text-xl font-medium mt-3 text-center text-gray-400  hover:underline whitespace-nowrap leading-none md:tracking-[0.5rem]"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Want something like this?
          </motion.h2>
          <motion.h1
            className="mt-3 text-5xl font-medium leading-none md:text-7xl hover:underline whitespace-nowrap"
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            Get In Touch{" "}
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="ml-2 text-5xl "
            />
          </motion.h1>
        </Link>
      </div>
      <footer className="flex justify-center items-center flex-col my-5 self-start]">
        <p className="text-sm text-gray-800">
          &copy;{new Date().getFullYear()} -{" "}
          <span className="text-lg text-gray-700">Mybimas</span>
        </p>
      </footer>
    </div>
  );
}
