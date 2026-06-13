import React from 'react';

const projectsData = [
  {
    title: "Real-Time Currency Converter Web Application",
    description: "Developed a web-based currency converter that provides real-time exchange rate conversion between multiple international currencies. Integrated API-based live exchange rates with dynamic data fetching and built a responsive, user-friendly interface for accurate real-time conversions.",
    tags: ["React.js", "JavaScript", "REST API", "Git"],
    image: "/currency.png", 
    github: "https://github.com/akshayatambe/Currency-Converter"
  },
  {
    title: "AI-Powered Mock Interview Platform",
    description: "Built an AI-powered mock interview platform that simulates technical and behavioral interview environments for students. Implemented AI-generated questions, voice interaction, and automated feedback within an interactive interview system.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    image: "/ai-interviwer.png", 
    github: "https://github.com/akshayatambe/AI_Interviewer"
  },
  {
    title: "Pulse CRM – Client Management System",
    description: "A modern and responsive Client Management System developed to help businesses efficiently manage leads, deals, activities, and customer interactions in one centralized platform. The application provides a clean dashboard, sales pipeline tracking, activity monitoring, and authentication system with a user-friendly interface.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Router", "Supabase"],
    image: "/client.png", 
    github: "https://github.com/akshayatambe/client-connect-pro",
    demo: "https://client-management-system.akshayatambe80.workers.dev/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 bg-white max-w-5xl mx-auto border-t border-gray-100">
      
      {/* Title format exactly matching your layout */}
      <h2 className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-8">
        Projects
      </h2>

      {/* Your original clean, borderless row layout grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {projectsData.map((project) => (
          <div key={project.title} className="flex flex-col space-y-3">
            
            {/* Box container modified to object-contain so screenshots fit without cropping */}
            <div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 overflow-hidden rounded-sm flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title and Description information blocks */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-900 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technical text tag string lists */}
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-gray-400 font-medium">
              {project.tags.map((tag, idx) => (
                <span key={tag}>
                  {tag}{idx < project.tags.length - 1 ? " ," : ""}
                </span>
              ))}
            </div>

            {/* Hyperlink actions with all syntax bugs completely fixed */}
            <div className="flex items-center gap-3 text-[11px] text-gray-600 font-medium pt-1">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-black transition-colors"
              >
                GitHub
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-black transition-colors"
                >
                  Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}