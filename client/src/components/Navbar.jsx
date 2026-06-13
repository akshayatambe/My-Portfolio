import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-5 flex justify-between items-center max-w-5xl mx-auto">
      <div className="flex gap-6 text-xs font-semibold tracking-wide text-gray-500">
        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
        <a href="#skills" className="hover:text-gray-900 transition-colors">Stack</a>
        <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
      </div>
      <div>
        <a href="#contact" className="text-xs font-bold text-[#800020] hover:text-[#600018] tracking-wider transition-colors">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;