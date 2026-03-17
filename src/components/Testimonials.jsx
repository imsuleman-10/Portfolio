import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarmad Aziz",
    role: "CEO, SAMStack",
    content: "Suleman's ability to turn complex logic into a smooth user interface is remarkable. He handled our portal development with extreme professionalism.",
  },
  {
    name: "John Miller",
    role: "E-Learning Consultant",
    content: "Exceptional work on our LMS. The automated certification logic he built saved us hundreds of hours of manual work.",
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Client Feedback</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="glass-card p-10 rounded-[32px] relative overflow-hidden group">
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />
            <p className="text-lg text-slate-300 italic mb-8 relative z-10">
              "{rev.content}"
            </p>
            <div>
              <h4 className="text-white font-bold">{rev.name}</h4>
              <p className="text-blue-500 text-sm">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}