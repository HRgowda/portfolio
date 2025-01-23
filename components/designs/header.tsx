import Link from "next/link";

export function Header() {

  return (
    <header className="fixed top-0 z-50 backdrop-blur-lg text-gray-300 p-6 text-lg w-full flex justify-center">
      <div className="inline-flex space-x-12">
        {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((section):any => (
          <Link
            key={section}
            href={`#${section.toLowerCase()}`}
            className={"text-gray-400 cursor-pointer hover:underline  hover:text-white hover:rounded-full px-3 py-1 "}
          >
            {section}
          </Link>
        ))}
      </div>
    </header>
  );
}
