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
        title: "Channel Partner Platform Development",
        bullets: [
          "Engineered a complete Channel Partner Sales Agent module (front-end and back-end), enabling secure registration, lead creation and tracking, and real-time monitoring of customer loan applications.",
          "Designed scalable data models and role-based authentication that improved operational efficiency and increased qualified lead intake.",
          "Integrated Zoho CRM automation to sync newly generated leads with detailed customer metadata, eliminating manual data entry and accelerating sales team follow-ups.",
        ],
      },
      {
        title: "Customer Onboarding & Document Automation",
        bullets: [
          "Contributed to a high-impact onboarding flow for real loan customers with document uploads, validation, and end-to-end editing support.",
          "Built Slack automation delivering customer documents and statuses directly to internal teams, integrated with v2 of our document processor for faster handling and compliance.",
        ],
      },
      {
        title: "Admin/Ops Dashboard & Workflow Optimization",
        bullets: [
          "Developed a centralized dashboard for internal teams to manage loan journeys, customers, and channel partners.",
          "Reduced document processing time from 40 minutes to under 5 minutes (87% improvement).",
        ],
      },
      {
        title: "Eligibility Flow & UI/UX Performance",
        bullets: [
          "Spearheaded the Eligibility module, implementing precise input validation and eligibility checks based on customer personal and income details to ensure accurate loan qualification decisions.",
          "Developed a build-time image optimization engine that reduced asset sizes by 96% (10MB → 400KB), improving load speed by 2.5x.",
        ],
      },
      {
        title: "SEO and Analytics Integration",
        bullets: [
          "Implemented dynamic robots.txt and sitemap.xml, achieving 91–100 Lighthouse SEO scores.",
          "Integrated PostHog for user tracking and funnels, boosting conversion analytics by 30%.",
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


