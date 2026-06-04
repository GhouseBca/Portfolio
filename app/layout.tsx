import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mohamed Ghouse | Software Engineer Portfolio",
  description: "Portfolio of Mohamed Ghouse - Software Engineer specialized in Next.js, React, TypeScript, and Tailwind CSS. Explore my work experience, certification, and live projects.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-[73px] md:pt-[88px]">{children}</main>
        <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Mohamed Ghouse. All rights reserved.</p>
            <p className="text-slate-600">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

