import Link from "next/link";

export function Header() {
  const sections: string[] = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="backdrop-blur-lg text-gray-300 text-lg flex justify-center items-center rounded-full px-6 py-3 w-full max-w-screen-xl mx-auto">
        {/* Flex container for the navigation links */}
        <div className="inline-flex space-x-8 flex-wrap justify-center md:justify-center md:space-x-12">
          {sections.map((section: string) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-gray-400 cursor-pointer hover:underline hover:text-white hover:rounded-full px-3 py-1 transition-all duration-300 text-center"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
