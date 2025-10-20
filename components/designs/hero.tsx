import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCode, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

export function scrollToAbout() {
  const id = document.getElementById("about");
  if (id) {
    const headerHeight = 80; // Account for fixed header height
    const elementPosition = id.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

export function Hero() {
  const domains: string[] = ["Full Stack Developer", "DevOps Engineer", "ML Enthusiast"];
  const [animate, setAnimateClass] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateClass("fade-in");
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % domains.length);
      setTimeout(() => {
        setAnimateClass("");
      }, 500);
    }, 3000);

    return () => clearInterval(timer); // Cleanup to avoid memory leaks
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-900 via-black"
    >
      {/* Python Logo - Left (Top) for smaller screens */}
      <motion.img
        src="/python.png"
        alt="Python Logo"
        className="ml-8 mt-12 absolute left-0 top-12 w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20 lg:left-20 lg:ml-40 rounded-full md:block"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* React Logo - Left (Bottom) for smaller screens */}
      <motion.img
        src="/react.png"
        alt="React Logo"
        className="ml-8 mb-20 absolute left-0 bottom-12 w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20 lg:left-20 lg:ml-40 rounded-full md:block"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Main Content - Center */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-wide"
        >
          Hello, I’m <span className="mb-12">Hemanth R</span>
        </motion.h1>
        <div className="text-xl md:text-2xl text-center relative">
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 font-extrabold"
          >
            {domains[currentWordIndex]}
          </motion.span>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="pt-4 flex justify-center space-x-6"
        >
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LEETCODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-orange-500 transition-transform duration-300 hover:scale-125"
          >
            <FaCode />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-transform duration-300 hover:scale-125"
          >
            <FaMedium />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="pt-4 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/Hemanth_R.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
            <FiArrowDown className="ml-2 text-xl sm:text-2xl" />
          </Link>

          <button
            onClick={() => {
              const element = document.getElementById("experience");
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}  
            className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold rounded-full border border-gray-300/20 text-white hover:shadow-white shadow-sm backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
        </motion.div>
      </div>

      {/* AWS Logo - Right (Top) for smaller screens */}
      <motion.img
        src="/aws.png"
        alt="AWS Logo"
        className="mr-8 mt-12 absolute right-0 top-12 w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20 lg:mr-40 lg:right-20 rounded-lg md:block"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* TypeScript Logo - Right (Bottom) for smaller screens */}
      <motion.img
        src="/ts.png"
        alt="TypeScript Logo"
        className="mr-8 mb-20 absolute right-0 bottom-12 w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20 lg:mr-40 lg:right-20 rounded-full md:block"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Bouncing Arrow at the Bottom */}
      <motion.div
        animate={{
          y: [0, 10, 0], // Bouncing effect
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl cursor-pointer mb-24 lg:mb-28 xl:mb-10"
        onClick={scrollToAbout}
      >
        <FiArrowDown />
        
      </motion.div>
    </section>
  );
}