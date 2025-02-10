import Link from "next/link";

export function Header() {
  const sections: string[] = ["Home", "About", "Skills", "Projects", "Achievements", "Education", "Contact"];

  return (
    <header className="fixed top-0 z-50 w-full p-2">
      <div className="backdrop-blur-lg text-gray-300 text-lg flex justify-center items-center rounded-full px-6 w-full max-w-screen-xl mx-auto">
        {/* Responsive flex container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:space-x-12 sm:max-w-sm md:max-w-full">
          {sections.map((section: string) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-gray-400 cursor-pointer hover:underline hover:text-white hover:rounded-full px-3 py-1 transition-all duration-300 text-center text-sm sm:text-base"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
