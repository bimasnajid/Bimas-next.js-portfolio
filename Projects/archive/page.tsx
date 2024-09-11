// pages/projects/archive/page.tsx
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import FixedButton from "@/components/FixedButton"; // Pastikan komponen FixedButton sudah ada

interface Project {
  year: string;
  title: string;
  tech: string;
  github?: string;
  preview?: string;
}

const projects: Project[] = [
  {
    year: "2023",
    title: "LUDOang",
    tech: "Python, Pygame, OpenGL",
    github: "https://github.com/Alvalens/ludo-game",
    preview: "https://github.com/Alvalens/ludo-game/releases/tag/pre-release",
  },
  {
    year: "2023",
    title: "React Realtime Chat",
    tech: "Javascript, React Js, Firebase, Daisy UI",
    github: "https://github.com/Alvalens/react-realtime-chat",
    preview: "https://react-chat-rouge.vercel.app",
  },
];

export default function ArchivePage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="overflow-hidden">
      {/* Tombol Kembali */}
      <FixedButton onClick={handleBack}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      <div className="min-h-screen w-screen mt-10 p-10 flex justify-center items-center flex-col mb-10">
        <div className="flex justify-center items-center flex-col my-5">
          <motion.div
            className="bg-gray-700 w-28 h-1 rounded-full mb-3"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
          />
          <motion.h1
            className="text-3xl font-bold mt-3"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, type: "spring" }}
          >
            Archive
          </motion.h1>
        </div>

        {/* Tabel Proyek Arsip */}
        <div className="mx-auto container md:px-10 grid grid-cols-1">
          <table className="space-y-3">
            <thead>
              <tr className="hover:shadow-md transition-all ease duration-500">
                <th className="text-start">Year</th>
                <th className="text-start">Title</th>
                <th className="text-start">Technology</th>
                <th className="text-start">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="hover:shadow-md transition-all ease duration-500"
                >
                  <td>{project.year}</td>
                  <td>{project.title}</td>
                  <td>{project.tech}</td>
                  <td>
                    <div className="flex flex-row justify-center items-center">
                      {project.github && (
                        <a href={project.github} title="Link to GitHub">
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-xl mr-2"
                          />
                        </a>
                      )}
                      {project.preview && (
                        <a
                          href={project.preview}
                          title="Link to project preview"
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-xl"
                          />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
