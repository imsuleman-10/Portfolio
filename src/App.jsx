import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Github, ExternalLink, Mail, MessageSquare, 
  Layout, Server, Database, Code2, ChevronRight, Menu, X 
} from 'lucide-react';

// --- DATA ---
import { projects } from './data/projects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main>
        {/* --- 1. HERO SECTION --- */}
        <section id="home" className="relative pt-32 pb-20 md:pt-26 md:pb-26 px-6 overflow-hidden">
          {/* Cinematic Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs md:text-sm font-bold mb-10 tracking-[0.2em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Full-Stack Projects
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.9]">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Beyond</span><br />
              Expectations.
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-medium">
              I'm <span className="text-white">Suleman Zaheer</span>. Founder of SAMStack and industrial tech enthusiast building high-performance digital ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#projects" className="group w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-2">
                View My Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-10 py-5 border border-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl transition-all">
                Start a Project
              </a>
            </div>
          </div>
        </section>
<About />
        {/* --- 2. SKILLS SECTION (Bento Style) --- */}
        <section id="skills">
            <Skills />
        </section>

        {/* --- 3. PROJECTS SECTION --- */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">Selected<br />Works.</h2>
              <p className="text-slate-400 text-lg">A deep dive into my engineering capabilities—from CRM portals to industrial automation.</p>
            </div>
            <a href="https://github.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold tracking-widest uppercase text-sm transition-colors border-b border-blue-400/20 pb-2">
              All Repositories <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* --- 4. TESTIMONIALS --- */}
        <Testimonials />

        {/* --- 5. PREMIUM CTA SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative group rounded-[48px] overflow-hidden p-12 md:p-24 border border-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-emerald-600/10 -z-10" />
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Ready to transform your ideas?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Let's collaborate on your next big venture. Available for direct hire and freelance contracts.
              </p>
              <a href="#contact" className="inline-block bg-white text-slate-950 px-14 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-emerald-400 hover:text-white">
                HIRE ME ON FIVERR
              </a>
            </div>
          </div>
        </section>

        {/* --- 6. CONTACT SECTION --- */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 italic">Get In Touch.</h2>
              <p className="text-slate-400">Expect a response within 24 hours.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 text-center">
                    <Mail className="mx-auto mb-4 text-blue-500" />
                    <p className="text-sm font-bold text-white uppercase tracking-widest">Email</p>
                    <p className="text-slate-400 mt-2 truncate">sulemanzaheer09@gmail.com</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 text-center">
                    <MessageSquare className="mx-auto mb-4 text-emerald-500" />
                    <p className="text-sm font-bold text-white uppercase tracking-widest">Chat</p>
                    <p className="text-slate-400 mt-2">Available 24/7</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 text-center">
                    <Github className="mx-auto mb-4 text-indigo-500" />
                    <p className="text-sm font-bold text-white uppercase tracking-widest">GitHub</p>
                    <p className="text-slate-400 mt-2">@imsuleman-10</p>
                </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center border-t border-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
            <div className="text-2xl font-black text-white tracking-tighter italic">
                SZ<span className="text-blue-500">.</span>DEV
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Hand-coded with precision. Powered by React, Tailwind v4, and professional-grade engineering.
            </p>
            <p className="text-slate-600 text-[10px] tracking-[0.3em] uppercase">
                © {new Date().getFullYear()} Suleman Zaheer • Lahore, Pakistan
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
