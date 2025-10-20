export type ExperienceSection = {
  title?: string;
  bullets: string[];
};

export type Experience = {
  companyName: string;
  role: string;
  logoSrc: string;
  logoFallback: string;
  location: string;
  start: string;
  end: string;
  sections: ExperienceSection[];
};

export const experiences: Experience[] = [
  {
    companyName: "Butter Money",
    role: "Full Stack Developer Intern",
    logoSrc: "/logo.svg",
    logoFallback: "BM",
    location: "Bengaluru, India",
    start: "March 2025",
    end: "Present",
    sections: [
      {
        title: "UI/UX Optimization and Performance",
        bullets: [
          "Spearheaded a full-scale responsive redesign of the company website using React, Tailwind CSS, and shadcn/ui, improving cross-device usability and boosting user retention by 25%.",
          "Developed a custom image optimization script at build time, reducing asset sizes by 96% (from 10MB to under 400KB) and boosting page load speeds by 2.5×.",
        ],
      },
      {
        title: "Internal Automation Tool",
        bullets: [
          "Built an internal document processing tool using Next.js (frontend), Tailwind CSS, shadcn/ui, and FastAPI (backend), reducing manual processing time from 35–40 minutes to under 5 minutes.",
          "Implemented secure cookie-based authentication to restrict tool access to internal staff and maintain session integrity.",
        ],
      },
      {
        title: "SEO and Analytics Integration",
        bullets: [
          "Enhanced SEO by optimizing robots.txt and implementing dynamic sitemap.xml, resulting in Lighthouse SEO scores of 91–100.",
          "Integrated PostHog for user behavior tracking and funnel analytics, improving conversion analysis by 30%.",
        ],
      },
    ],
  },
  {
    companyName: "MaxPetZ",
    role: "Full Stack Developer (Freelance)",
    logoSrc: "/mainlogo.svg",
    logoFallback: "MP",
    location: "India (Remote)",
    start: "Aug 2025",
    end: "Sept 2025",
    sections: [
      {
        title: "Overview",
        bullets: [
          "Developed an end-to-end web application for a leading veterinary client in India (MaxPetZ).",
          "Delivered user-facing application and admin portal for content/data management, end-to-end appointment booking, user management, and a blog with CMS for both user and admin flows.",
        ],
      },
      {
        title: "Tech Stack",
        bullets: [
          "Frontend: React (Vite), Tailwind CSS, shadcn/ui for the main site; Astro for the blog.",
          "Backend: Hono (Node.js) with Wrangler for Cloudflare Workers compatibility.",
          "Database: Neon Postgres, Prisma ORM with Prisma Accelerate.",
          "Cloud/Deployment: Cloudflare Pages (frontend and blog), Cloudflare Workers (backend), Cloudflare R2 bucket storage.",
        ],
      },
      {
        title: "Future Implementations",
        bullets: [
          "Integrate real-time social media APIs to surface the client's latest socials.",
          "Add an end-to-end payment system for appointment bookings.",
        ],
      },
    ],
  },
  {
    companyName: "Samsung Innovation Campus",
    role: "Coding & Programming Traniee",
    logoSrc: "/sicLogo.jpeg",
    logoFallback: "BM",
    location: "Bengaluru, India",
    start: "Jan 2024",
    end: "June 2024",
    sections: [
      {
        bullets: [
          "Gained hands-on experience with Python by learning it from scratch and applying its core syntax and constructs.",
          "Studied and implemented fundamental Object-Oriented Programming (OOP) principles, which enhanced my ability to design clean, modular, and reusable code structures.",
          "Solved numerous coding problems to strengthen problem-solving and logical thinking skills.",
          "Tackled challenging problems collaboratively through pair programming sessions, improving team coding and debugging abilities.",
          "Learned SQL and developed a basic Database Management System project using Python and MySQL, applying CRUD operations and schema design.",
        ],
      },
    ],
  },
];


