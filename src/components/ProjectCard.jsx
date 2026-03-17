import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-[32px] overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-slate-800 text-blue-400 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex items-center gap-5">
          <a href={project.link} className="flex items-center gap-2 text-white font-bold text-xs hover:text-blue-400 transition-colors uppercase tracking-widest">
            Live Demo <ExternalLink size={14} />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}