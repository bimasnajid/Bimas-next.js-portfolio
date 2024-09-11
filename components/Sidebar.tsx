"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";

// Pastikan Anda memiliki referensi ke fullpage_api yang didefinisikan di global
declare global {
  interface Window {
    fullpage_api: any;
  }
}

const Sidebar: React.FC = () => {
  const handleMoveToSection = (index: number) => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      window.fullpage_api.moveTo(index);
    }
  };

  const containIsActive = (index: number) => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      const activeSection = window.fullpage_api.getActiveSection();
      if (activeSection && activeSection.index === index) {
        return "bg-gray-500";
      }
    }
    return "";
  };

  // Optional: Update class names on section change
  useEffect(() => {
    const handleSectionChange = () => {
      // Update logic based on section change
    };

    if (typeof window !== "undefined" && window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(false); // For demonstration, prevent scrolling
      window.fullpage_api.setScrollingSpeed(700);
      window.fullpage_api.setScrollOverflow(true);
    }

    return () => {
      if (typeof window !== "undefined" && window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
    };
  }, []);

  return (
    <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul
        id="sidebar"
        className="flex flex-col justify-evenly items-center h-full text-gray-50"
      >
        <li data-menuanchor="home" className={containIsActive(1)}>
          <button onClick={() => handleMoveToSection(1)}>
            <FontAwesomeIcon icon={faHome} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="about" className={containIsActive(2)}>
          <button onClick={() => handleMoveToSection(2)}>
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="projects" className={containIsActive(3)}>
          <button onClick={() => handleMoveToSection(3)}>
            <FontAwesomeIcon icon={faFolderOpen} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="contact" className={containIsActive(4)}>
          <button onClick={() => handleMoveToSection(4)}>
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
