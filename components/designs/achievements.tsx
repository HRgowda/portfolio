import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

export function Achievements() {
  return (
    <section id="achievements" className="py-12 mb-20 px-4 md:px-8 relative overflow-hidden">
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
          My Achievements
        </h2>
        <Card className="text-white/80 p-8 backdrop-blur-sm rounded-xl bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-md hover:shadow-white">
          <p className="text-lg text-white leading-relaxed">
            Here are some of my notable achievements:
          </p>
          <Separator className="my-6 bg-white/10" />
          <ul className="list-disc pl-5 text-lg text-white leading-relaxed space-y-4">
            <li>
              <strong className="text-green-400">Runner Up</strong> of <strong>Pykathon 2024</strong> at Don Bosco Institute of Technology.
            </li>
            <li>
               I have been selected as one of the top <strong className="text-green-400">35 students</strong> by <strong>Samsung Innovation Campus</strong> for the <strong>Coding and Programming</strong> Training Programme (2023-2024) and the <strong>IoT Programme</strong> (2024-2025)
            </li>
          </ul>
          <Separator className="my-6 bg-white/10" />
          <p className="text-lg text-white leading-relaxed">
            I’m always looking forward to new challenges and opportunities to grow further.
          </p>
        </Card>
      </motion.div>
    </section>
  );
}
