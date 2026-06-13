import React from 'react';

const Hero = () => {
  return (
    /* Increased container width to max-w-5xl so it stops feeling squished and tight */
    <section className="bg-white text-gray-800 pt-16 pb-12 px-6 max-w-5xl mx-auto text-center">
      
      {/* Profile Image - Fixed to match public/image.png */}
      <div className="flex justify-center mb-6">
        <img 
          src="/akshaya.png" 
          alt="Akshaya Tambe" 
          className="w-32 h-32 rounded-2xl object-cover shadow-sm border border-gray-100 bg-gray-50"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
        Akshaya <span className="text-[#800020]">Tambe</span>
      </h1>
      
      <p className="text-xs font-bold text-[#800020] uppercase tracking-widest mb-5">
        Aspiring Software Engineer | Full-Stack Developer | AI Enthusiast
      </p>

      {/* Wider limit allows paragraph lines to layout beautifully without compression */}
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-xs md:text-sm">
        Hi, I'm Akshaya. I build and own end-to-end responsive web applications, ML pipelines, 
        and robust backend architectures. I bring strong fundamentals in DSA, OOP, and Database 
        Management Systems to write scaleable, clean code.
      </p>
    </section>
  );
};

export default Hero;