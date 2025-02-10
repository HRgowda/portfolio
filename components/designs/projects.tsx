import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";  
import { Button } from "../ui/button";
import { Card } from "../ui/card";

// Defining types for project data
interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string | undefined;
  github: string | undefined;
  image: string;
}

export function Project() {
  const projects: Project[] = [
    {
      title: "TapNGo",
      description: "A full-stack financial application offering seamless digital payments, deposit goals, wallet management, and financial transactions.",
      tech: ["NextJs", "NextAuth", "TypeScript", "Tailwind CSS", "Express Js", "PostgreSQL + Prisma", "NodeMailer", "CI/CD"],
      link: process.env.NEXT_PUBLIC_TAPNGO_URL,
      github: process.env.NEXT_PUBLIC_TAPNGO_GITHUB,  
      image: "/tapngo.png"
    },
    {
      title: "TaskForge",
      description: "A full-stack application automating the bounty distribution process for GitHub issues. Users can submit bounty details, and the application validates and sends the bounty directly to the recipient without requiring manual intervention.",
      tech: ["NextJs", "TypeScript", "Express Js", "Tailwind CSS", "Shadcn", "PostgresSQL + Prisma", "Kafka"],
      link: process.env.NEXT_PUBLIC_TASKFORGE_URL,
      github: process.env.NEXT_PUBLIC_TASKFORGE_GITHUB,  
      image: "/taskforge.png"
    },
    {
      title: "RepoSphere",
      description: "A full-stack GitHub SAAS application enabling users to log in, integrate repositories, view summaries of the latest commits, and interact with an AI assistant to answer repository-related questions.",
      tech: ["NextJs", "Typescript", "Tailwind CSS", "Shadcn", "PostgreSQL + Prisma", "Clerk Auth", "tRPC"],
      link: "#",
      github: process.env.NEXT_PUBLIC_REPOSPHERE_GITHUB,  
      image: "/repo.png"
    },
    {
      title: "MindCraft",
      description: "A full-stack blogging platform designed for seamless content creation, sharing, and discovery. Empowering writers to connect and engage with their audience effortlessly.",
      tech: ["React", "Cloudflare workers", "Typescript", "Tailwind CSS", "PostgreSQL + Prisma", "Zod", "JWT"],
      link: process.env.NEXT_PUBLIC_MINDCRAFT_URl,
      github: process.env.NEXT_PUBLIC_MINDCRAFT_GITHUB,  
      image: "/mindcraft.png"
    },
  ];

  return (
    <>
      <section id="projects" className="py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`w-full h-full p-6 overflow-hidden hover:shadow-xl transition-all duration-300 border-white/10 hover:border-white/70 border-b border-white/20 rounded-2xl`}>
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full rounded-lg cursor-pointer hover:opacity-90 hover:scale-105 transition-transform duration-300 rounded-xl ease-in-out"
                      onClick={() => window.open(project.link, "_blank")}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex gap-4">
                        <Button
                          className="rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-6 h-6 text-white" />
                        </Button>
                        <Button
                          className="rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <Globe className="w-6 h-6 text-white" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-white px-2 py-1 rounded-full text-sm hover:bg-white/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
