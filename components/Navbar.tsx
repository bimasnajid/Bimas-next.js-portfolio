"use client";
import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Define the props for the NavItems component
interface NavItemsProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the transition type for Framer Motion variants
interface TransitionType {
  type: "spring" | "tween";
  stiffness?: number;
  damping?: number;
  delay?: number;
}

// Define the shape of the navVariant object
interface NavVariant {
  open: {
    clipPath: string;
    transition: TransitionType;
  };
  closed: {
    clipPath: string;
    transition: TransitionType;
  };
}

const NavItems: React.FC<NavItemsProps> = ({ isNavOpen, setIsNavOpen }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  // Define navVariant with proper types
  const navVariant: NavVariant = {
    open: {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(0px at calc(100% - 120px) 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check and event listener
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // Adjust clipPath for mobile
  if (isMobile) {
    navVariant.open = {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: "tween",
      },
    };

    navVariant.closed = {
      clipPath: "circle(0px at calc(100% - 35px) 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  } else {
    navVariant.open = {
      clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };

    navVariant.closed = {
      clipPath: "circle(0px at calc(100% - 120px) 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  }

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
    closed: {
      opacity: 0,
      y: -40,
      rotate: 0,
    },
  };

  return (
    <motion.div
      className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden"
      animate={isNavOpen ? "open" : "closed"}
      initial={false}
    >
      <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw]">
        <div className="flex flex-col items-center mx-0 my-auto space-y-8">
          {/* title */}
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl font-bold text-white"
          >
            Menu
          </motion.h1>
          <a href="/#home">
            <motion.div
              onClick={handleItemClick}
              className="text-2xl font-bold text-white"
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
            >
              <motion.h2
                className="text-white"
                variants={itemVariants}
                animate={isNavOpen ? "open" : "closed"}
              >
                Home
              </motion.h2>
            </motion.div>
          </a>
          <Link href="/about">
            <motion.div
              onClick={handleItemClick}
              className="text-2xl font-bold text-white"
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
            >
              <motion.h2
                className="text-white"
                variants={itemVariants}
                animate={isNavOpen ? "open" : "closed"}
              >
                About
              </motion.h2>
            </motion.div>
          </Link>
          <Link href="/projects">
            <motion.div
              onClick={handleItemClick}
              className="text-2xl font-bold text-white"
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
            >
              <motion.h2
                className="text-white"
                variants={itemVariants}
                animate={isNavOpen ? "open" : "closed"}
              >
                Projects
              </motion.h2>
            </motion.div>
          </Link>
          <a href="/#contact">
            <motion.div
              onClick={handleItemClick}
              className="text-2xl font-bold text-white"
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
            >
              <motion.h2
                className="text-white"
                variants={itemVariants}
                animate={isNavOpen ? "open" : "closed"}
              >
                Contact
              </motion.h2>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
          isNavOpen ? "bg-transparent" : "backdrop-filter backdrop-blur-md"
        } inset-0 bg-opacity-50 flex flex-row justify-between items-center h-16 z-50`}
      >
        <div>
          <h1
            className={`text-2xl ml-2 md:ml-0 ${isNavOpen ? "text-white" : ""}`}
          >
            Mybimas
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="burger button flex flex-col justify-center items-center space-y-1.5"
            onClick={toggleNav}
          >
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : ""
              }`}
            ></div>
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>
      {/* items */}
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
