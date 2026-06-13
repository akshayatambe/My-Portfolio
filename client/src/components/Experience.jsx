import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center text-gray-900 tracking-tight">
          Work <span className="text-[#800020]">Experience</span>
        </h2>
        <p className="text-center text-xs text-gray-400 mb-12 uppercase tracking-widest">
          History
        </p>

        {/* Clean, un-congested timeline row for VaultofCodes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start pb-4"
        >
          {/* Left Column: Company & Date details */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold text-gray-900">Web Developer Intern</h3>
            <p className="text-xs text-gray-500 font-medium">VaultofCodes (Remote)</p>
            <p className="text-[11px] text-gray-400 mt-1 font-mono tracking-wide">Nov 2025 – Dec 2025</p>
          </div>

          {/* Right Column: Experience Bullet Points */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              Tech Stack: HTML5 · CSS3 · JavaScript · SQL
            </div>
            
            <ul className="list-disc list-outside pl-4 text-xs text-gray-600 space-y-2 leading-relaxed">
              <li>
                Developed and maintained responsive web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and seamless mobile responsiveness.
              </li>
              <li>
                Built interactive UI components and implemented clean client-side functionality to enhance overall user experiences.
              </li>
              <li>
                Worked on real-world mini projects applying DOM manipulation, strict form validation rules, and event handling concepts.
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}