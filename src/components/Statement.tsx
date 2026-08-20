import { motion } from 'motion/react';

export default function Statement() {
  return (
    <section id="statement" className="py-24 md:py-36 bg-[#FAFAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">002 // Philosophy & Vision</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 leading-[1.3] tracking-tight">
              Technology evolves rapidly. Stories define humanity.
            </p>

            <p className="text-lg sm:text-2xl text-neutral-600 font-normal leading-relaxed">
              Aryan Singh operates at the intersection of <strong className="font-semibold text-neutral-950">software engineering rigor</strong> and <strong className="font-semibold text-neutral-950">cinematic emotional storytelling</strong>. 
            </p>

            <p className="text-base sm:text-xl text-neutral-500 font-normal leading-relaxed">
              From architecting zero-race-condition escrow economies and AI-driven mobile tools to writing and directing psychological short films, every system is designed to solve authentic human friction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
