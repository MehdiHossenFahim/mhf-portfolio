import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Bot, 
  Sparkles, 
  Stethoscope, 
  Database, 
  ScanLine, 
  CheckCircle2,
  Filter,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter categories
  const categories = ['All', 'AI & LLM Agents', 'Computer Vision', 'Full-Stack & Web'];

  // Filtered list using standard array filter
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Icon mapping
  const renderProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-8 h-8 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-purple-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-emerald-400" />;
      case 'Database':
        return <Database className="w-8 h-8 text-amber-400" />;
      case 'ScanLine':
        return <ScanLine className="w-8 h-8 text-rose-400" />;
      default:
        return <FolderGit2 className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Production-tested AI agent architectures, self-corrective RAG engines, and real-time computer vision APIs.
          </p>
        </div>

        {/* Feature 2: Technology & Category Filtering */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 mr-2 font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Container: Rendered via .map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Visual / Image Preview Area */}
                <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden`}>
                  {/* Background circuit grid overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Category Pill & Status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20">
                      {project.category}
                    </span>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                    </span>
                  </div>

                  {/* Centered Large Tech Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-inner">
                      {renderProjectIcon(project.icon)}
                    </div>
                  </div>

                  {/* Bottom title preview strip */}
                  <div className="relative z-10 text-white text-xs font-mono tracking-wider font-semibold opacity-90 truncate">
                    {project.badge ? `STATUS: ${project.badge}` : 'Production Microservice'}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Architectural Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used Badges */}
                  <div className="pt-2">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2 font-mono">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Live Demo & GitHub Action Buttons */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="View Project Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
