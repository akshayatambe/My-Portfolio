import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-12 px-6 max-w-5xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Column: Biography */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xs font-bold text-[#800020] uppercase tracking-wider">
            About Me
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            I'm an aspiring Software Engineer currently pursuing my B.Tech in Information Technology with a Minor in AI-ML at G.H. Raisoni College of Engineering and Management, Pune, maintaining a CGPA of 9.32/10.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            I have hands-on experience in frontend and full-stack web development, with a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, and Database Management Systems.
          </p>
        </div>

        {/* Right Column: Education Timeline Details */}
        <div>
          <h2 className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-900">B.Tech in Information Technology</h4>
              <p className="text-[11px] text-gray-500">G.H. Raisoni College of Engineering and Management, Pune</p>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>CGPA: 9.32 / 10</span>
                {/* Updated to exact timeline format */}
                <span className="font-mono text-[#800020] font-semibold">2023 — 2027</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <h4 className="text-xs font-bold text-gray-900">Higher Secondary Education (Class XII)</h4>
              <p className="text-[11px] text-gray-500">Shri Shiv Chhatrapati College, Junnar</p>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>75.67%</span>
                <span className="font-mono">2021 — 2023</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;