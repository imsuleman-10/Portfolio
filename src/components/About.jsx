export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-900">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden aspect-square">
            {/* Replace with your professional photo */}
            <img 
              src="/path-to-your-photo.jpg" 
              alt="Suleman Zaheer" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white mb-6 italic">Engineering <span className="text-blue-500">Value</span>.</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            With a background in both <span className="text-white">Computer Science</span> and <span className="text-white">Industrial Manufacturing</span>, I bridge the gap between digital efficiency and physical production.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            As the founder of <span className="text-blue-400">SAMStack</span>, I’ve led teams to build complex portals that solve real business bottlenecks. Whether it's an E-learning ecosystem or an inventory management system for my own motorcycle factory, I build with a focus on scalability and ROI.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-3xl font-black text-white">20+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white">100%</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}