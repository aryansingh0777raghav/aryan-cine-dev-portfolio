import { motion } from 'motion/react';
import { Briefcase, GraduationCap, ArrowUpRight, Linkedin, Globe } from 'lucide-react';

interface TimelineProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const experience = [
  {
    year: "2026",
    marker: "// 2026 – Present",
    company: "ArKTest Beta (Application Review Kit)",
    role: "Founder & Lead Full-Stack Architect",
    type: "tech" as const,
    details: "Founded by Aryan Singh (Co-Founded by Vijay Laxmi Singh). Engineered a full-stack crowd testing and QA marketplace using FastAPI, PostgreSQL/SQLAlchemy, and Vanilla JavaScript. Implemented automated escrow point locking, pessimistic database concurrency, PWA capabilities, and single-user CSV exports.",
    link: "https://arktest-beta.vercel.app/",
    linkedin: "https://www.linkedin.com/company/arktest-beta/"
  },
  {
    year: "2026",
    marker: "// 2026",
    company: "CineOn Studio 7",
    role: "Film Director, Screenwriter & Editor",
    type: "filmmaking" as const,
    details: "Written and directed 'The Night of Life: Before You Think About It' — a psychological narrative short film addressing student mental health, academic isolation, and inner psychological resilience. Handled entire post-production, editing, and distribution across IMDb and film festival circuits.",
    link: "https://www.youtube.com/@cineonstudio7"
  },
  {
    year: "2025",
    marker: "// 2025 (Nov)",
    company: "Samsung Innovation Campus",
    role: "Big Data Certification (SIC08720)",
    type: "tech" as const,
    details: "Completed intensive Big Data & Data Analytics training program (SIC08720) covering large-scale dataset manipulation, data cleaning, Python analytics, and predictive data modeling pipelines."
  },
  {
    year: "2025",
    marker: "// 2025 (Jun – Aug)",
    company: "Data Culture Technology",
    role: "Python Training Internship",
    type: "tech" as const,
    details: "Completed industry training in Python core engineering, OOP architectures, database normalization, and automated script testing.",
  },
  {
    year: "2024",
    marker: "// 2024 – 2027",
    company: "Institute of Technology & Management (ITM)",
    role: "Bachelor of Computer Applications (BCA)",
    type: "tech" as const,
    details: "Pursuing degree in Computer Applications at ITM Gorakhpur. Deep coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Modern Software Engineering.",
  }
];

export default function Timeline({ viewMode }: TimelineProps) {
  const filteredExp = experience.filter(item => {
    if (viewMode === 'both' || viewMode === null) return true;
    return item.type === viewMode;
  });

  return (
    <section id="timeline" className="py-24 md:py-36 bg-[#FAFAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">005 // Milestones & Journey</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            Trajectory & Milestones.<br />
            <span className="text-neutral-500 font-semibold">Chronological progression.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            {viewMode === 'tech'
              ? 'A chronological timeline of startup founding, technical internships, and computer applications coursework.'
              : viewMode === 'filmmaking'
              ? 'Chronological milestones in narrative screenwriting, cinematic directing, and independent festival releases.'
              : 'A chronological timeline of startup founding, technical internships, certifications, and creative productions.'}
          </p>
        </div>

        {/* Columnar Swiss Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExp.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-neutral-200 bg-white p-7 hover:border-neutral-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-950">
                    {item.marker}
                  </span>
                  <span className="swiss-pill-tag">
                    {item.type === 'tech' ? 'Engineering' : 'Cinema'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-1">
                  {item.company}
                </h3>

                <p className="text-xs font-semibold text-neutral-700 mb-4">
                  {item.role}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-6">
                  {item.details}
                </p>
              </div>

              {(item.link || item.linkedin) && (
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1"
                    >
                      <Globe size={12} /> Visit Link <ArrowUpRight size={12} />
                    </a>
                  )}
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <Linkedin size={12} /> LinkedIn <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
