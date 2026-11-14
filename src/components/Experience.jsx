import React from 'react';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Trophy, 
  Medal,
  Sparkles
} from 'lucide-react';
import { experiences, achievements } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Practical industry engineering, technical leadership, and nationally acclaimed robotics competition honors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Work History
              </h3>
            </div>

            <div className="relative border-l-2 border-blue-500/30 pl-6 ml-3 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-950 group-hover:scale-125 transition-transform" />

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all duration-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Robotics & IoT Awards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Robotics Awards
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-200 relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Medal className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                          {ach.rank}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                          Hardware & IoT
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {ach.title}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                        {ach.competition}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 pt-1 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Proven track record of designing embedded microcontrollers (ESP32, Arduino) and computer vision hardware integrations.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
