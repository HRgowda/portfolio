"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections: string[] = ["Home", "About", "Experience", "Skills", "Projects", "Achievements", "Education", "Contact"];

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full py-2">
      {/* Desktop Menu */}
      <div className="hidden md:flex backdrop-blur-lg text-gray-300 text-lg justify-center items-center rounded-full max-w-lg max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:space-x-12 sm:max-w-lg md:max-w-full">
          {sections.map((section: string) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="text-gray-400 cursor-pointer hover:underline hover:text-white hover:rounded-full px-3 py-1 transition-all duration-300 text-center text-sm sm:text-base"
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <div className="flex justify-end px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="backdrop-blur-lg text-gray-300 p-2 rounded-full transition-all duration-300 hover:bg-gray-800/50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full right-4 mt-2 backdrop-blur-lg bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"
          }`}
          style={{ width: "calc(100% - 2rem)", maxWidth: "320px" }}
        >
          <div className="py-4 px-2">
            {sections.map((section: string, index: number) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="w-full text-left text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg px-4 py-3 transition-all duration-300 text-sm"
                style={{
                  animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
