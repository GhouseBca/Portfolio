"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  tech: string[];
  image: string;
  category: "production" | "demo";
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Astromila",
    subtitle: "Astrology Web Platform",
    description: "A production-grade, highly interactive astrology web portal offering charts, horoscopes, and consulting features.",
    details: [
      "Contributed to 50% of the UI development using Next.js, TypeScript, and Tailwind CSS for a production-ready platform.",
      "Collaborated closely with the backend team to identify and resolve post-deployment integration issues, ensuring stable and smooth application performance."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
    image: "/images/astromila.png",
    category: "production",
    live: "https://astromila.com",
    featured: true,
  },
  {
    title: "Hello-SM",
    subtitle: "Online Training Platform",
    description: "A comprehensive educational platform designed to manage online courses, quizzes, and consultations.",
    details: [
      "Built a secure, real-time admin dashboard using Next.js, TypeScript, Tailwind CSS, and Convex to manage reviews, consultations, and ebooks.",
      "Contributed to 75% of the UI development with fully responsive, mobile-friendly design components.",
      "Implemented role-based user authentication for secure administrative control and student access.",
      "Delivered real-time data updates for quizzes and consult schedule changes, maximizing user interactivity."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "WorkOS"],
    image: "/images/hellosm.png",
    category: "production",
    live: "#",
    featured: true,
  },
  {
    title: "Typeform 13-Step Form",
    subtitle: "Interactive User Flow",
    description: "A beautiful multi-step feedback form layout mirroring Typeform's signature fluid transitions.",
    details: [
      "Designed immersive step animations and keyboard navigations using Next.js and framer-motion.",
      "Applied custom input validations and dynamic progress tracking indicators."
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/project1.png",
    category: "demo",
    live: "https://dribbble.com/tags/multi-step-form",
  },
  {
    title: "Integration Dashboard",
    subtitle: "SaaS Management UI",
    description: "A developer-focused integration portal for linking workspace communication applications.",
    details: [
      "Implemented drag-and-drop workflow connectors and modular status widgets.",
      "Constructed a clean, accessible layout using tailwind-merge and lucide-react icons."
    ],
    tech: ["Next.js", "ShadCN UI", "Tailwind CSS"],
    image: "/images/project2.png",
    category: "demo",
    live: "https://dribbble.com/tags/integration-dashboard",
  },
  {
    title: "Developer Documentation UI",
    subtitle: "Resource & Guide Center",
    description: "A fully responsive documentation hub with sidebar navigation and lightning-fast searching.",
    details: [
      "Designed a robust light/dark mode system utilizing Tailwind CSS custom theme variables.",
      "Established organized sidebar menus with intuitive routing for complex user guides."
    ],
    tech: ["Next.js", "Tailwind CSS"],
    image: "/images/project3.png",
    category: "demo",
    live: "https://dribbble.com/tags/api-documentation",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState(project.image);

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group">
      {/* Thumbnail Container */}
      <div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center border-b border-slate-900">
        <Image
          src={imgSrc}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            // Fallback to project1 if image fails to render
            setImgSrc("/images/project1.png");
          }}
        />
        
        {/* Feature badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/90 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <Star className="w-3 h-3 fill-indigo-400 text-indigo-400" />
            Featured
          </span>
        )}

        {/* Category badge */}
        <span className={`absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
          project.category === "production"
            ? "bg-emerald-950/90 text-emerald-300 border-emerald-500/30"
            : "bg-slate-950/90 text-slate-400 border-slate-800"
        }`}>
          {project.category === "production" ? "Live" : "Demo"}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-indigo-400/90 font-medium">
                {project.subtitle}
              </p>
            )}
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            {project.description}
          </p>
          
          {/* Performance Bullet Lists */}
          <ul className="space-y-1.5 pt-2 text-slate-300 font-light text-xs list-none">
            {project.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex gap-2 items-start leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Chips */}
        <div className="space-y-4 pt-3 border-t border-slate-900">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-slate-900 text-slate-400 rounded-md text-[10px] font-medium border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          {project.live && (
            <a
              href={project.live}
              target={project.live !== "#" ? "_blank" : undefined}
              rel={project.live !== "#" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
            >
              <span>Explore Platform</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "production" | "demo">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950/60 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              Projects & Contributions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto md:mx-0" />
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-slate-900 self-center md:self-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "production", label: "Live Platforms" },
              { id: "demo", label: "Interactive Demos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as "all" | "production" | "demo")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-650 text-white shadow-md shadow-indigo-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
