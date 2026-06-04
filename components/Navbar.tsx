"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-navbar py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link
          href="#hero"
          className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
            MG
          </div>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
            Ghouse
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social / Contact Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="mailto:mdghouse.bca@gmail.com"
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200 px-4 py-2 rounded-lg hover:border-indigo-500 hover:text-white transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span>Email Me</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-slate-800 bg-slate-900/50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 border-b border-slate-900 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-indigo-400 py-2 border-b border-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex justify-between items-center">
            <Link
              href="mailto:mdghouse.bca@gmail.com"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-indigo-600 text-sm font-medium text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 w-full justify-center transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>mdghouse.bca@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
