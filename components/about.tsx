"use client";

import { Award, Cpu, Globe, GraduationCap, Code2, Database, Terminal, Settings } from "lucide-react";

type Skill = {
  name: string;
  level?: number;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: "Convex" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: "Java" },
      { name: "Python" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "WorkOS" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/60 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Title */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            About Me & Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Bio and Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>My Story</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                I&apos;m <strong>Mohamed Ghouse</strong>, a BCA graduate based in Tirunelveli, Tamil Nadu. I have a deep passion for frontend and full-stack development, focusing on crafting clean, performant, and highly interactive user interfaces.
              </p>
              
              <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                Having contributed to production-grade applications during internships, I&apos;ve honed my skills in React, TypeScript, Tailwind, and Next.js. My goal is to build scalable, AI-powered software solutions while continuous learning.
              </p>

              {/* CGPA Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-900">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-900 text-center">
                  <span className="block text-2xl font-extrabold text-gradient-indigo-purple">7.94</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">BCA CGPA</span>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-900 text-center">
                  <span className="block text-2xl font-extrabold text-gradient-cyan-blue">2+</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Internships Completed</span>
                </div>
              </div>
            </div>

            {/* Certifications and Languages */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-900/60">
                  <h4 className="font-semibold text-sm text-slate-200">Full Stack Development MasterClass</h4>
                  <p className="text-xs text-indigo-400 mt-1">NoviTech R&D Pvt. Ltd.</p>
                  <p className="text-xs text-slate-400 mt-1">Apr - May 2026</p>
                  <div className="mt-2 text-[11px] text-slate-500 font-mono">
                    ID: NT_B64FSDET410
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-2 border-t border-slate-900">
                <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Languages</span>
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg text-xs border border-slate-800">
                    Tamil (Native)
                  </span>
                  <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg text-xs border border-slate-800">
                    English (Professional)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Skills Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Technical Skills</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-3 bg-slate-900/30 p-4 rounded-xl border border-slate-900/50">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-900">
                      {category.icon}
                      <h4 className="font-bold text-sm text-slate-200">{category.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1.5 bg-slate-900 text-slate-300 hover:text-white rounded-lg text-xs border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-950 transition-all duration-200"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
