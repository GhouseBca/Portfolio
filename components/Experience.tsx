"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "Kosal IT Solution",
    location: "Tirunelveli, TN",
    duration: "June 2025 - Present",
    description: [
      "Building and maintaining production-ready web application frontends with modern, user-friendly layouts.",
      "Developing scalable UI components using Next.js, React, TypeScript, and Tailwind CSS.",
      "Optimizing performance and responsive sizing of interfaces to improve overall mobile and web compatibility.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    role: "Web Developer Intern",
    company: "Code Genie Solutions",
    location: "Tirunelveli, TN",
    duration: "April 2023 - May 2023",
    description: [
      "Assisted in crafting responsive website sections using HTML, CSS, and basic JavaScript layouts.",
      "Collaborated with project leads to translate static designs into interactive HTML pages.",
      "Conducted debugging and layout fixes across various screen viewport configurations.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-850 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Chronology Badge on left side for desktop */}
              <div className="hidden md:block absolute right-full mr-12 top-1 text-right w-44">
                <span className="text-sm font-semibold text-indigo-400 block">{exp.duration}</span>
                <span className="text-xs text-slate-500 flex items-center justify-end gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300 z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-purple-400" />
              </span>

              {/* Content Card */}
              <div className="glass-card p-6 rounded-2xl relative">
                {/* Mobile time & location (hidden on desktop) */}
                <div className="md:hidden flex flex-wrap gap-3 text-xs font-semibold text-slate-400 mb-2 items-center">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-500/20 text-xs font-medium self-start sm:self-center">
                    <Briefcase className="w-3.5 h-3.5" />
                    Internship
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-slate-400 font-light text-sm list-disc pl-4 mb-5">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech chips utilized */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-900">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-900 text-slate-400 rounded-md text-[11px] font-medium border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
