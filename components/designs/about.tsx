import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          About Me
        </h2>
        <Card className="text-white/80 p-8 backdrop-blur-sm rounded-xl bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-md hover:shadow-white">
          <p className="text-lg text-white leading-relaxed">
            Hi, I’m <strong>Hemanth R</strong>, a dedicated <strong className="text-green-400 font-medium">Full Stack Developer</strong> and Final Year student pursuing <strong>B.E. in Information Science and Engineering</strong> at <strong>Don Bosco Institute of Technology</strong>.
            I’m currently interning as a <strong className="text-green-400 font-medium">Full Stack Developer</strong> at <strong>Butter Money</strong>, where I help build scalable, real-world fintech applications.
            I thrive on solving complex problems, love building applications from the ground up, and actively contribute to open-source projects. I'm driven by a passion for learning, curiosity, and a mindset that embraces challenges as opportunities to grow.
          </p>

          <Separator className="my-6 bg-white/10" />

          <p className="text-lg text-white leading-relaxed">
            My core strengths lie in architecting full-stack web applications with a sharp focus on user experience, performance, and maintainability. I’ve also adopted <strong className="text-green-400 font-medium">DevOps practices</strong> to streamline CI/CD pipelines and automate infrastructure across projects.
            Notable work includes:
            <br />
            • <Link href="https://tapngo-userapp.hemanthr.tech" target="_blank" className="text-green-400 cursor-pointer">TapNGo</Link> – A secure financial web app focused on seamless peer-to-peer transfers. <br />
            • <Link href="https://taskforge.hemanthr.tech" target="_blank" className="text-green-400">TaskForge</Link> – A tool that automates bounty distribution for GitHub issues, improving transparency and team productivity. <br />
            • <span className="text-green-400">CampusConnect</span> – (In Progress) A platform designed to streamline campus collaboration, event coordination, and peer networking among students.

          </p>

          <Separator className="my-6 bg-white/10" />

          <p className="text-lg text-white leading-relaxed">
            I’m deeply curious about emerging technologies, especially <strong className="text-green-400 font-medium">Machine Learning</strong>, and aim to integrate intelligent systems into future products. I strongly believe in building with purpose — creating tools that are not only functional but meaningful.
            If you're looking for someone who combines technical skill with real-world problem solving, let’s connect and build something impactful together. 🚀
          </p>
        </Card>
      </motion.div>
    </section>
  );
}
