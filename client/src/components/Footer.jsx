import React from 'react';

export default function Footer() {
  return (
    // Professional solid black styling layout
    <footer className="bg-black border-t border-gray-800 py-8 px-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-medium">
        
        {/* Left Hand: Copyright Signature Line */}
        <div className="text-gray-300">
          © 2027 Akshaya Tambe. All rights reserved.
        </div>

        {/* Right Hand: Core Academic Program Duration Tag */}
        <div className="tracking-wide text-[11px] text-gray-400">
          Information Technology · AI-ML (2023 — 2027)
        </div>

      </div>
    </footer>
  );
}