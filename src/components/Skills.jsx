import { Code2, Database, Layout, Server } from 'lucide-react';

const categories = [
  { title: "Frontend", icon: <Layout />, items: ["React", "Tailwind v4", "JavaScript"] },
  { title: "Backend", icon: <Server />, items: ["Node.js", "Express", "Laravel"] },
  { title: "Database", icon: <Database />, items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "DevOps", icon: <Code2 />, items: ["Git", "Vercel", "REST APIs"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="p-8 rounded-[32px] bg-slate-900/30 border border-slate-800 hover:border-blue-500/30 transition-all">
            <div className="text-blue-500 mb-6">{cat.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span key={item} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-lg font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}