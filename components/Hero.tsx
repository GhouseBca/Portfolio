"use client";

import { useState } from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [profileSrc, setProfileSrc] = useState("/images/profile.webp");

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-24"
    >
      {/* Background Grid Pattern & Glows */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[150px] animate-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text Info */}
        <div className="md:col-span-7 space-y-6 md:space-y-8 text-center md:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold tracking-wide animate-pulse mx-auto md:mx-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I’m <span className="text-gradient-indigo-purple">Mohamed Ghouse</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 flex items-center justify-center md:justify-start gap-2">
              a <span className="text-gradient-cyan-blue">Software Engineer</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            Passionate Software Engineer with hands-on experience in <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, contributing to live production platforms. Dedicated to building scalable, AI-powered web applications that deliver impactful user experiences.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="#projects"
              className="glow-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-650 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/80 border border-slate-800 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-slate-900 hover:border-slate-700 hover:text-white transition-all duration-200 w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-indigo-400" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Photo & Floating Skills */}
        <div className="md:col-span-5 flex justify-center relative w-full mt-6 md:mt-0">
          {/* Main Visual Wrapper */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Ambient background glow behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl animate-float" />
            
            {/* Glowing border frame */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 p-[3px] animate-float">
              {/* Inner wrapper holding the image */}
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative flex items-center justify-center">
                <Image
                  src={profileSrc}
                  alt="Mohamed Ghouse"
                  width={384}
                  height={384}
                  priority
                  className="w-[96%] h-[96%] object-cover rounded-full z-10 transition-transform duration-500 hover:scale-105"
                  onError={() => {
                    // Fallback to profile-clean if primary fails to render
                    setProfileSrc("/images/profile-clean.webp");
                  }}
                />
              </div>
            </div>

            {/* Orbiting / Floating Skills */}
            {/* Top Left - React */}
            <div className="absolute -top-2 left-6 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg animate-float z-20 hover:scale-110 transition-transform">
              <Image src="/icons/react.png" alt="React" width={24} height={24} className="object-contain" />
            </div>

            {/* Top Right - TypeScript */}
            <div className="absolute -top-4 right-10 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg animate-float-delayed z-20 hover:scale-110 transition-transform">
              <Image src="/icons/ts.png" alt="TypeScript" width={24} height={24} className="object-contain" />
            </div>

            {/* Middle Right - Next.js (from next.svg or custom label) */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-xl shadow-lg animate-float z-20 flex items-center gap-1.5 hover:scale-110 transition-transform">
              <Image src="/next.svg" alt="Next.js" width={20} height={20} className="invert brightness-100 object-contain" />
              <span className="text-xs font-semibold text-white">Next.js</span>
            </div>

            {/* Bottom Right - HTML/CSS */}
            <div className="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg animate-float-delayed z-20 hover:scale-110 transition-transform">
              <Image src="/icons/css.png" alt="CSS" width={24} height={24} className="object-contain" />
            </div>

            {/* Bottom Left - Database/Tailwind */}
            <div className="absolute bottom-4 left-10 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg animate-float z-20 hover:scale-110 transition-transform">
              <Image src="/icons/database.png" alt="Database" width={24} height={24} className="object-contain" />
            </div>

            {/* Middle Left - HTML */}
            <div className="absolute top-1/3 -left-6 -translate-y-1/2 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg animate-float-delayed z-20 hover:scale-110 transition-transform">
              <Image src="/icons/html.png" alt="HTML" width={24} height={24} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
