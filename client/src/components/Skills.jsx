import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDatabase, FaHtml5, FaCss3Alt, FaJs,
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiExpress, SiBootstrap, SiTailwindcss, SiPostman, SiCplusplus, SiC } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <VscVscode /> },
    ],
  },
];

const coreConcepts = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
];

export default function Skills() {
  return (
    // Changed bg color to clean white and adjusted section classes
    <section id="skills" className="section-padding bg-white border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        // Expanded container width to 6xl to fix the congested visual feeling
        className="max-w-6xl mx-auto px-4"
      >
        {/* Adjusted headers to match clean light typography */}
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center text-gray-900 tracking-tight">
          My <span className="text-[#800020]">Skills</span>
        </h2>
        <p className="text-center text-xs text-gray-400 mb-12 uppercase tracking-widest">
          Stack
        </p>

        {skillGroups.map((group, gi) => (
          <div key={group.title} className="mb-8">
            <h3 className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ y: -2 }}
                  /* Completely replaced purple highlights and glass styling with clean, crisp borders */
                  className="border border-gray-200 bg-white rounded-md px-3.5 py-1.5 flex items-center gap-2.5 text-xs font-medium text-gray-700 shadow-sm transition-colors duration-200 hover:border-gray-300"
                >
                  <span className="text-sm text-gray-500">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10">
          <h3 className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-4">
            Core Concepts
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {coreConcepts.map((concept) => (
              <span
                key={concept}
                /* Switched old purple tags to light crisp gray pills with dark text */
                className="px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}