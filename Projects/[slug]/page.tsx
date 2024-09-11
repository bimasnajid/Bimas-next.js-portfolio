"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NotFound from "@/not-found";
import Image from "next/image";
import FixedButton from "@/components/FixedButton";
import {
  faChevronUp,
  faChevronDown,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

type ProjectData = {
  title: string;
  tech: string[];
  year: string;
  preview?: string;
  code?: string;
  desc: string[];
  images: string[];
  slug: string;
};

type PageProps = {
  params: { slug: string };
};

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const isBottom =
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (isBottom) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-2xl"
        />
      </motion.div>
    </div>
  );
}

function Page({ params }: PageProps) {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const selectedData = jsonData.Projects.find(
      (item) => item.slug === params.slug
    );
    if (!selectedData) {
      setData(null);
    } else {
      // setData(selectedData);
    }
  }, [params.slug]);

  if (!data) {
    return <NotFound />;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10">
      <FixedButton onClick={handleBack}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>
      <ScrollDownButton />
      <div className="min-h-screen flex justify-center items-center">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0">
          <div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Project
              </h2>
              <h1 className="text-4xl font-medium text-neutral-900">
                {data.title}
              </h1>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Technology
              </h2>
              <p className="text-2xl font-normal text-neutral-900">
                {data.tech.join(", ")}
              </p>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <p className="text-2xl font-normal text-neutral-900">
                {data.year}
              </p>
            </div>
            {data.preview && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Preview
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  <a
                    href={data.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview{" "}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ml-3"
                    />
                  </a>
                </p>
              </div>
            )}
            {data.code && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Source Code
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  <a href={data.code} target="_blank" rel="noopener noreferrer">
                    Github <FontAwesomeIcon icon={faGithub} className="ml-3" />
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-start items-start flex-col mb-5">
            <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
              Description
            </h2>
            {data.desc.map((desc, index) => (
              <p
                key={index}
                className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 p-5 md:p-20 w-full">
        <div className="w-full h-auto text-center flex flex-col justify-center">
          {data.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Project Image ${index + 1}`}
              className="mb-5 h-auto max-h-screen max-w-7xl mx-auto object-contain"
              width={1920}
              height={1080}
              sizes="100vw"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
