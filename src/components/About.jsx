import React from 'react';
import { 
  GraduationCap, 
  Target, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle,
  Download
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Engineering intelligent, autonomous agent systems and production-grade backends with precision and performance.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-center shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Description & Career Goals */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Summary Card */}
            <div className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Professional Profile
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bioSummary}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {['Multi-Agent Orchestration', 'Self-Corrective RAG', 'Computer Vision Inference', 'Containerized APIs'].map((pill, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Career Goals & Vision
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.careerGoals}
              </p>
            </div>

            {/* Educational Background Card */}
            <div className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Educational Background
                  </h3>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    {personalInfo.education.period}
                  </span>
                </div>
              </div>
              <div className="space-y-2 border-l-2 border-indigo-500/30 pl-4 py-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                  {personalInfo.education.institution}
                </p>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold">
                  Cumulative CGPA: {personalInfo.education.cgpa}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
                  {personalInfo.education.highlights}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Information Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Personal Details</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold">
                  Verified Info
                </span>
              </h3>

              <div className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
                
                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Full Name</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{personalInfo.name}</p>
                  </div>
                </div>

                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="block font-medium text-blue-600 dark:text-cyan-400 hover:underline truncate">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Phone</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Location</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Live Portfolio</span>
                    <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="block font-medium text-blue-600 dark:text-cyan-400 hover:underline truncate">
                      {personalInfo.portfolioUrl.replace('https://', '')}
                    </a>
                  </div>
                </div>

                <div className="py-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Industry Focus</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200">AI Agents, Computer Vision & Scalable APIs</p>
                  </div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <a
                  href={personalInfo.resumePdfUrl}
                  download="AI_Engineer_Resume_Mehedi_Hossen_Fahim.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (1-Page PDF)</span>
                </a>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/80 transition-colors"
                >
                  <span>Connect with Me Directly</span>
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
