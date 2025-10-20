import Link from "next/link";

export function Header() {
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
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full py-2">
      <div className="backdrop-blur-lg text-gray-300 text-lg flex justify-center items-center rounded-full max-w-lg max-w-screen-xl mx-auto">
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
    </header>
  );
}
