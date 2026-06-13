import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certificationsData = [
  {
    title: "VaultofCodes Web Development Certificate",
    year: "2025",
    description: "Completed a 1-month Web Development internship with hands-on experience in HTML, CSS, JavaScript, and responsive web applications."
  },
  {
    title: "Infosys Software Engineering Certificate",
    year: "2025",
    description: "Gained practical knowledge of Software Engineering fundamentals and Agile software development practices."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading with Maroon Accent */}
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center text-gray-900 tracking-tight">
          Certifications & <span className="text-[#800020]">Awards</span>
        </h2>
        <p className="text-center text-xs text-gray-400 mb-12">
          Achievements and credentials
        </p>

        {/* Two-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-150 bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start hover:border-gray-300 transition-colors duration-200"
            >
              {/* Icon Container: Changed text-purple/indigo to a subtle dark gray or text-[#800020] */}
              <div className="text-[#800020] text-xl mt-1 flex-shrink-0">
                <FaAward />
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900 tracking-tight leading-snug">
                  {cert.title}
                </h3>
                
                {/* Year Badge: Changed from purple text to a clean neutral dark-gray font-mono */}
                <p className="text-[10px] font-mono font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded inline-block">
                  {cert.year}
                </p>

                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}