import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Additional Feature 1: Dark / Light Mode with localStorage persistence (Default: Light Mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('mhf_portfolio_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to Light Mode
    return false;
  });

  // Additional Feature 5: Dynamic Navbar Active Section Tracker
  const [activeSection, setActiveSection] = useState('home');

  // Sync dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mhf_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mhf_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Dynamic Navbar Scroll Spy (IntersectionObserver)
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Dynamic Responsive Navbar with Active Highlighting & Dark Mode */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section A & B: Hero / Home */}
        <Hero />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Skills Section */}
        <Skills />

        {/* Section E: Projects Section (with Category/Tech Filtering) */}
        <Projects />

        {/* Experience & Robotics Awards Section */}
        <Experience />

        {/* Section F: Contact Section (Controlled Form + Validation + Alert) */}
        <Contact />
      </main>

      {/* Section G: Footer */}
      <Footer />

      {/* Additional Feature 4: Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
