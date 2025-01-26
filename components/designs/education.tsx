import { motion } from "framer-motion";
import { Card } from "../ui/card";

interface EducationCard {
  title: string;
  subtitle: string;
  institution: string;
  duration: string;
}

export function Education() {
  const educationData: EducationCard[] = [
    {
      title: "Bachelor of Engineering - Information Science",
      subtitle: "Don Bosco Institute of Technology",
      institution: "2022 - 2026",
      duration: "2022 - 2026",
    },
    {
      title: "Pre-University - PCMB",
      subtitle: "RNS Vidyanikethan",
      institution: "2020 - 2022",
      duration: "2020 - 2022",
    },
    {
      title: "High School",
      subtitle: "Camlin English School",
      institution: "2017 - 2020",
      duration: "2017 - 2020",
    },
  ];

  return (
    <>
      <section id="education" className="py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Education
          </h2>

          {educationData.map((education, index) => (
            <Card
              key={index}
              className="p-8 backdrop-blur-sm bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-md hover:shadow-white mb-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{education.title}</h3>
                  <p className="text-lg text-white/80">{education.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
                    {education.duration}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>
    </>
  );
}
