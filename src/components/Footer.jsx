import React from 'react';
import { 
  Globe, 
  Terminal, 
  Heart, 
  ArrowUp,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Summary Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI Engineer specializing in multi-agent LLM systems, hybrid RAG pipelines, and production computer vision APIs. Designing intelligent systems that bridge research and scalable execution.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700/60"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-blue-400 transition-colors border border-slate-700/60"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                aria-label="Live Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Competencies list */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-200">
              Core Competencies
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-slate-400">
              <li>• LangGraph & CrewAI</li>
              <li>• Hybrid RAG (Dense + BM25)</li>
              <li>• YOLOv11 Computer Vision</li>
              <li>• Dockerized FastAPI Services</li>
              <li>• Text-to-SQL Agents</li>
              <li>• Embedded IoT & ESP32</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
