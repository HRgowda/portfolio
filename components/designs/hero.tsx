import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCode, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";


export function scrollToAbout () {
  const id = document.getElementById("about")
  if(id) {
    id.scrollIntoView({
      behavior: "smooth"
    })
  }
}

export function Hero() {
  const domains = ['Full Stack Developer', 'DevOps Engineer', 'ML Enthusiast'];
  const [animate, setAnimateClass] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateClass('fade-in');
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % domains.length);
      setTimeout(() => {
        setAnimateClass('');
      }, 500);
    }, 3000);
  }, []);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-900 via-black">
        {/* Python Logo - Left */}
        <motion.img
          src="/python.png"
          alt="Python Logo"
          className="absolute left-20 bottom-30 w-24 h-24 md:w-32 md:h-32"
          animate={{
            y: [0, 90, 0], // Moves up and down
          }}
          transition={{
            duration: 5, // Slower bouncing
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />

        {/* Main Content - Center */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-wide"
          >
            Hello, I’m <span className="mb-12">Hemanth R</span>
          </motion.h1>

          {/* Animated Subtitle with domain transitions */}
          <div className="text-xl md:text-2xl text-center relative">
            <motion.span
              key={currentWordIndex} // This ensures animations trigger when the word changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className={`text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 font-extrabold`}
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
            {/* GitHub Icon */}
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-gray-300 transition-transform duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>
            {/* LinkedIn Icon */}
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400 transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
            {/* LeetCode Icon */}
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

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="pt-4 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="" // 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
              <FiArrowDown className="ml-2 text-2xl" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 text-lg font-semibold rounded-full border border-gray-300/20 text-white hover:border-gray-300/40 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
          </motion.div>
        </div>

        {/* TypeScript Logo - Right */}
        <motion.img
          src="/ts.png"
          alt="TypeScript Logo"
          className="absolute right-20 top-30 w-24 h-24 md:w-32 md:h-32"
          animate={{
            y: [0, -90, 0], // Moves down when Python goes up
          }}
          transition={{
            duration: 5, // Slower bouncing
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
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
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl cursor-pointer" onClick={scrollToAbout}
        >
          <FiArrowDown />
        </motion.div>
      </section>
    </>
  );
}
