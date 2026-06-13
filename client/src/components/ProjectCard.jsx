import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, duration, description, tech, image, github }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-gray-100 bg-white p-6 rounded-xl shadow-sm">
      
      {/* Left Column: Image Container with Contain adjustment */}
      <div className="md:col-span-5 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-2 flex items-center justify-center h-44 md:h-48 shadow-sm">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full max-h-full object-contain" // Changed to object-contain so screenshots fit without clipping
        />
      </div>

      {/* Right Column: Information Data Container */}
      <div className="md:col-span-7 space-y-2.5">
        <div>
          <h3 className="text-base font-bold text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="text-[10px] font-mono text-gray-400 mt-0.5">{duration}</p>
        </div>
        
        <p className="text-xs text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((techItem) => (
            <span 
              key={techItem} 
              className="text-[10px] font-medium bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-0.5 rounded"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="pt-2">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-500 hover:text-[#800020] transition-colors inline-flex items-center gap-1.5 font-medium text-xs"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>

    </div>
  );
}