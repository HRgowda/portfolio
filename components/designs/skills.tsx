import { motion } from 'framer-motion';
import React from 'react';
import { FiCode, FiCodepen, FiDatabase, FiGitBranch, FiCloud, FiArrowDown } from 'react-icons/fi';
import { FaReact, FaNode, FaJava, FaDocker, FaAws, FaHtml5, FaGithubAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb, SiGrafana, SiKubernetes, SiVim } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

// Defining types for skills data
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'C', icon: <FiCode className="text-blue-500" /> },
      { name: 'Python', icon: <img src="/python.png" alt="Python" className="w-4 h-4" /> },
      { name: 'Java', icon: <FaJava className="text-orange-600" /> },
      { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    ],
  },
  {
    category: 'Frontend Frameworks',
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'ShadCN', icon: <FiCodepen className="text-green-500" /> },
      { name: 'React Router DOM', icon: <FiCode className="text-indigo-500" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNode className="text-green-600" /> },
      { name: 'Express', icon: <img src="/express.png" alt="Express" className="w-4 h-4" /> },
      { name: 'Kafka', icon: <img src="/kafka.png" alt="Kafka" className="w-6 h-6" /> },
      { name: 'Hono', icon: <FiCodepen className="text-purple-500" /> },
      { name: 'Zod', icon: <FiCode className="text-blue-600" /> },
      { name: 'JWT', icon: <FiCloud className="text-blue-400" /> },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-indigo-500" /> },
      { name: 'NeonDB', icon: <FiDatabase className="text-gray-600" /> }, 
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Linux', icon: <img src="/linux.png" alt="Linux" className="w-4 h-4" /> },
      { name: 'CI/CD', icon: <FiGitBranch className="text-purple-400" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
      { name: 'AWS', icon: <FaAws className="text-yellow-500" /> },
      { name: 'Prometheus', icon: <img src="/prometheus.png" alt="Prometheus" className="w-4 h-4" /> },
      { name: 'Grafana', icon: <SiGrafana className="text-orange-500" /> },
      { name: 'Vim', icon: <SiVim className="text-green-500" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <img src="/git.png" alt="Git" className="w-4 h-4" /> },
      { name: 'VSCode', icon: <img src="/vscode.png" alt="VSCode" className="w-4 h-4" /> },
      { name: 'Postman', icon: <FiCodepen className="text-orange-500" /> },
      { name: 'Github Actions', icon: <FaGithubAlt className="text-black" /> },
    ],
  },
];

// Defining the scroll function
const scrollToProject = (): void => {
  const id = document.getElementById('projects');
  if (id) {
    id.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto shadow-xl rounded-2xl overflow-hidden p-6 bg-black">
      <h2 className="mt-4 text-4xl font-bold text-white text-center mb-2">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* First Row: Languages and Frontend */}
        {skillsData.slice(0, 2).map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="flex items-center space-x-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition duration-300 ease-in-out">
                    {skill.icon}
                    <span className="capitalize">{skill.name}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Second Row: Backend and Databases */}
        {skillsData.slice(2, 4).map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="flex items-center space-x-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition duration-300 ease-in-out">
                    {skill.icon}
                    <span className="capitalize">{skill.name}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Third Row: DevOps and Tools */}
        {skillsData.slice(4, 6).map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="flex items-center space-x-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition duration-300 ease-in-out">
                    {skill.icon}
                    <span className="capitalize">{skill.name}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={scrollToProject}
          className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
        >
          <span>See Projects</span>
          <FiArrowDown />
        </button>
      </div>
    </section>
  );
};
