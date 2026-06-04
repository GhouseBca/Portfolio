"use client";

import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info Blocks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let&apos;s discuss a project</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                  Whether you have an open software position, a freelance project, or just want to chat about development, feel free to drop a message!
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Email</span>
                    <a href="mailto:mdghouse.bca@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-indigo-450 transition-colors">
                      mdghouse.bca@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Phone</span>
                    <a href="tel:+919585972343" className="text-sm font-semibold text-slate-200 hover:text-indigo-450 transition-colors">
                      +91 95859 72343
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      Tirunelveli, TN, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-900">
                <a
                  href="https://github.com/GhouseBca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/GhouseBca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              action="mailto:mdghouse.bca@gmail.com"
              method="POST"
              encType="text/plain"
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Hey, I'd love to chat about..."
                  required
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="glow-btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-650 text-white font-semibold text-sm py-4 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
