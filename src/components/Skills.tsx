import { motion } from 'motion/react';
import { Terminal, Film, Sparkles, Check } from 'lucide-react';

interface SkillsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const skills = {
  technical: [
    "Python & FastAPI",
    "PostgreSQL & SQL",
    "JavaScript (ES6+) & TypeScript",
    "React & Tailwind CSS",
    "HTML5 & Semantic CSS3",
    "Data Structures & Algorithms",
    "Java & C++",
    "Big Data Analytics (Samsung SIC)",
    "RESTful API Architecture",
    "Git & GitHub Version Control"
  ],
  creative: [
    "Screenwriting & Script Development",
    "Film Direction & Scene Pacing",
    "Cinematography & Lighting",
    "DaVinci Resolve Color Grading",
    "Premiere Pro Video Editing",
    "Sound Design & Audio Mixing"
  ]
};

export default function Skills({ viewMode }: SkillsProps) {
  return (
    <section id="skills" className="py-24 md:py-36 bg-[#FAFAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">007 // Technical & Creative Matrix</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            {viewMode === 'tech' ? 'Technical Matrix.' : viewMode === 'filmmaking' ? 'Creative Matrix.' : 'Capabilities Matrix.'}<br />
            <span className="text-neutral-500 font-semibold">
              {viewMode === 'tech' ? 'Software engineering & systems toolset.' : viewMode === 'filmmaking' ? 'Directorial & cinematic craft.' : 'Engineering & storytelling toolset.'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            {viewMode === 'tech'
              ? 'Specialized competencies across full-stack backend development, PostgreSQL concurrency, and AI developer tooling.'
              : viewMode === 'filmmaking'
              ? 'Specialized competencies across psychological screenwriting, atmospheric cinematography, DaVinci Resolve color grading, and editorial direction.'
              : 'Specialized competencies across full-stack software development, systems security, and narrative filmmaking.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Matrix */}
          {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 bg-white p-8 hover:border-neutral-400 transition-all"
            >
              <div className="flex items-center gap-2 mb-6">
                <Terminal size={18} className="text-neutral-950" />
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  Software Engineering & Architecture
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.technical.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                  >
                    <Check size={11} className="text-neutral-400" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Creative Matrix */}
          {(viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 bg-white p-8 hover:border-neutral-400 transition-all"
            >
              <div className="flex items-center gap-2 mb-6">
                <Film size={18} className="text-neutral-950" />
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  Cinema, Direction & Post-Production
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.creative.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-medium text-neutral-800 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                  >
                    <Sparkles size={11} className="text-neutral-400" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
