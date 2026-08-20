import { motion } from 'motion/react';
import { Layers, BrainCircuit, Clapperboard, ShieldCheck } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      index: "01",
      icon: Layers,
      title: "Full-Stack Architecture",
      desc: "Designing resilient backend APIs and client interfaces with FastAPI, PostgreSQL/SQLAlchemy, and modern TypeScript. Focus on pessimistic DB locking, caching, and scalable REST endpoints."
    },
    {
      index: "02",
      icon: BrainCircuit,
      title: "AI Systems & Tooling",
      desc: "Building intuitive AI assistants, native accessibility overlays (ArType), Groq API integrations, and simulated web OS environments (ArVerse OS) that empower daily workflows."
    },
    {
      index: "03",
      icon: Clapperboard,
      title: "Cinematic Direction & Writing",
      desc: "Directing, writing, and editing psychological narrative short films (The Night of Life) with CineOn Studio 7. Exploring human relationships, existential solitude, and visual atmosphere."
    },
    {
      index: "04",
      icon: ShieldCheck,
      title: "Escrow QA & Platform Security",
      desc: "Pioneering democratized crowdsourced QA testing with ArKTest Beta. Eliminating race conditions, handling multi-account SMTP failover, and enforcing OWASP standards."
    }
  ];

  return (
    <section id="pillars" className="py-24 md:py-36 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">003 // Pillars & Mission</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-4">
            Structured Capabilities.<br />
            <span className="text-neutral-500 font-semibold">4 core vectors of impact.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Bridging technical engineering standards with storytelling clarity across software and cinema.
          </p>
        </div>

        {/* 4-Grid matching MobilityLab's exact numbered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-neutral-200">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-12 border-r border-b border-neutral-200 hover:bg-neutral-50/70 transition-colors group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors">
                  {item.index}
                </span>
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                  <item.icon size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
