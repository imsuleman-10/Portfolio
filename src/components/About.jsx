import React from 'react';
import profileImg from '../assets/profile1.jpg'; 

export default function About() {
  return (
    // Reduced padding from py-24 to py-16 to make it shorter
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900/50">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* --- Shorter Image Container --- */}
        <div className="relative group max-w-[320px] mx-auto lg:mx-0 w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[24px] blur-lg opacity-10 group-hover:opacity-30 transition duration-700"></div>
          
          {/* Using a tighter aspect ratio (square-ish) to save vertical space */}
          <div className="relative aspect-square rounded-[24px] overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
            <img 
              src={profileImg} 
              alt="Suleman Zaheer" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* --- Compact Text Content --- */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">
            Engineering <span className="text-blue-500">Value.</span>
          </h2>

          <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-6">
            <p>
              I bridge the gap between <span className="text-white">Computer Science</span> and <span className="text-white">Industrial Manufacturing</span>. My focus is on architecting high-performance digital ecosystems.
            </p>
            <p>
              As the founder of <span className="text-blue-400 font-semibold">SAMStack</span>, I build scalable full-stack solutions. From motorcycle factory logistics to e-learning portals, I deliver efficiency as a product.
            </p>
          </div>
          
          {/* Compact Stats */}
          <div className="flex gap-10 pt-6 border-t border-slate-900">
            <div>
              <h4 className="text-2xl font-black text-white tracking-tighter">20+</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Projects</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white tracking-tighter">100%</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Success</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
