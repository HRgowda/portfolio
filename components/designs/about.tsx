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
        <Card className="text-white/80 p-8 backdrop-blur-sm bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-md hover:shadow-white">
          <p className="text-lg text-white leading-relaxed">
            Hi, I’m <strong>Hemanth R</strong>, a passionate <strong className="text-green-400 font-medium">Full Stack Developer</strong> and a pre-final-year student pursuing <strong>B.E. in Information Science and Engineering</strong> at <strong>Don Bosco Institute of Technology</strong>.
            I’m actively seeking <u>internship opportunities</u> (remote or on-site) to apply and enhance my skills.
          </p>
          <Separator className="my-6 bg-white/10" />
          <p className="text-lg text-white leading-relaxed">
            My expertise lies in building scalable web applications with a focus on seamless user experiences and efficient backend operations. I’ve also incorporated <strong className="text-green-400 font-medium">DevOps practices</strong> into major projects to streamline workflows. Some of my notable projects include <Link href="https://tapngo-userapp.hemanthr.tech" target="_blank" className="text-green-400 cursor-pointer">
              TapNGo 
            </Link>
             (a secure financial app) and 
            <Link href="" className="text-green-400"> TaskFoge</Link>  (automate bounty distribution for GitHub issues.)
            <Link href="" className="text-green-400"> RepoSphere</Link> (an AI-powered SaaS solution for GitHub optimization).
          </p>
          <Separator className="my-6 bg-white/10" />
          <p className="text-lg text-white leading-relaxed">
            I am highly enthusiastic about exploring <strong className="text-green-400 font-medium">Machine Learning</strong> and integrating it into future projects. With every opportunity, I aim to deliver innovative solutions that make a meaningful impact. Let’s connect and create something extraordinary! 🚀
          </p>
        </Card>
      </motion.div>
    </section>
  );
}
