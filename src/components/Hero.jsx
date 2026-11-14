import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Bot, 
  Database, 
  Cpu, 
  Award,
  Terminal,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navHeight = 70;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI Engineer & Backend Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 font-mono">
                {personalInfo.title}{' '}
                <span className="text-blue-600 dark:text-cyan-400 text-base sm:text-lg block sm:inline font-sans font-medium">
                  — LLM Agents & Microservices
                </span>
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science graduate specializing in <strong className="font-semibold text-slate-900 dark:text-slate-100">multi-agent LLM orchestration</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-100">hybrid RAG pipelines</strong>, and containerized <strong className="font-semibold text-slate-900 dark:text-slate-100">computer vision APIs</strong>. Experienced with Python, FastAPI, LangGraph, CrewAI, YOLOv11, PostgreSQL, and Docker.
            </p>

            {/* Core Tech highlights pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['LangGraph', 'CrewAI', 'Hybrid RAG', 'FastAPI', 'YOLOv11', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Two Action Buttons: Download Resume (PDF) & View Projects */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.resumePdfUrl}
                download="AI_Engineer_Resume_Mehedi_Hossen_Fahim.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              </a>
            </div>

            {/* Quick Social & Contact links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Profile Picture & Tech Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-lg opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-7">
                
                {/* Profile Photo Display (With backdrop designed for transparent PNG) */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    {/* Portrait Image Frame with tailored gradient background */}
                    <div className="w-40 h-48 sm:w-44 sm:h-52 rounded-2xl bg-gradient-to-b from-blue-100 via-sky-50 to-slate-200 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-950 p-1 shadow-md ring-4 ring-blue-500/20 overflow-hidden relative flex items-end justify-center">
                      <img 
                        src={personalInfo.profilePhoto} 
                        alt={personalInfo.name}
                        className="w-full h-full object-contain object-bottom drop-shadow-md"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/80 to-transparent flex items-end justify-center pb-1">
                        <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">AI Engineer</span>
                      </div>
                    </div>

                    {/* Online status indicator */}
                    <div className="absolute -bottom-1.5 right-1.5 bg-emerald-500 text-white p-1 rounded-full border-2 border-white dark:border-slate-900 shadow" title="Available for opportunities">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mt-1">
                    Dhaka, Bangladesh · 3x Award Winner
                  </p>
                </div>

                {/* Micro tech indicators */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Bot className="w-4 h-4 text-blue-500" />
                      <span>Primary Stack:</span>
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      FastAPI + LangGraph
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Robotics Honors:</span>
                    </span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      1st, 2nd & 3rd Place
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Cpu className="w-4 h-4 text-purple-500" />
                      <span>Degree & CGPA:</span>
                    </span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      B.Sc CSE · 3.58
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
