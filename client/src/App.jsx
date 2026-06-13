import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    /* 
      CHANGES MADE:
      1. Removed 'min-h-screen' to stop the layout from stretching sections with huge gaps.
      2. Forced 'bg-white' and 'text-gray-900' to clear out old dark-theme configurations completely.
    */
    <div className="bg-white text-gray-900 overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;