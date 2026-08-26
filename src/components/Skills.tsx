import { motion } from 'motion/react';
import { Terminal, Film, Sparkles, Check } from 'lucide-react';

interface SkillsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const resumeSkills = {
  languages: [
    "Python",
    "C",
    "C++",
    "SQL",
    "Java (Core/Basic)",
    "HTML"
  ],
  backend: [
    "FastAPI",
    "RESTful APIs",
    "PostgreSQL & SQLite Schema Design"
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Vercel Deployment"
  ],
  other: [
    "AI-Augmented Software Development",
    "API Integration",
    "Rapid Prototyping",
    "Data Structures & Algorithms",
    "DBMS & OOP Fundamentals"
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
              ? 'Core competencies in backend API architecture, database systems, and modern AI-augmented developer workflows.'
              : viewMode === 'filmmaking'
              ? 'Competencies in psychological screenwriting, atmospheric cinematography, DaVinci Resolve color grading, and editorial direction.'
              : 'Specialized competencies across software engineering, AI workflows, and cinematic storytelling.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tech Matrix */}
          {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-400 transition-all ${
                viewMode === 'tech' ? 'lg:col-span-12' : 'lg:col-span-7'
              }`}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-100">
                <Terminal size={18} className="text-neutral-950" />
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  Technical Skills & Systems
                </h3>
              </div>

              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    // Programming Languages
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {resumeSkills.languages.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                      >
                        <Check size={11} className="text-neutral-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend & APIs */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    // Backend & APIs
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {resumeSkills.backend.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                      >
                        <Check size={11} className="text-neutral-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    // Tools & Platforms
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {resumeSkills.tools.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                      >
                        <Check size={11} className="text-neutral-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Workflows & Core CS */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    // AI Workflows & Core CS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {resumeSkills.other.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                      >
                        <Check size={11} className="text-neutral-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Creative Matrix */}
          {(viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-400 transition-all ${
                viewMode === 'filmmaking' ? 'lg:col-span-12' : 'lg:col-span-5'
              }`}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-100">
                <Film size={18} className="text-neutral-950" />
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  Cinema & Directorial Craft
                </h3>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                  // Production & Post
                </span>
                <div className="flex flex-wrap gap-2">
                  {resumeSkills.creative.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors cursor-default"
                    >
                      <Sparkles size={11} className="text-neutral-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
