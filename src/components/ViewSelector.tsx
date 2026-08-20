import { motion } from 'motion/react';
import { Cpu, Film, Sparkles, ArrowUpRight } from 'lucide-react';

interface ViewSelectorProps {
  onSelectMode: (mode: 'tech' | 'filmmaking' | 'both') => void;
}

export default function ViewSelector({ onSelectMode }: ViewSelectorProps) {
  const options = [
    {
      id: 'tech' as const,
      index: '01',
      title: 'Tech & Systems',
      subtitle: 'Software Engineering',
      desc: 'Explore crowdsourced QA platforms, browser OS environments, AI writing tools, and scalable backend APIs.',
      icon: Cpu,
    },
    {
      id: 'filmmaking' as const,
      index: '02',
      title: 'Cinema & Stories',
      subtitle: 'Creative Direction',
      desc: 'Discover short films, psychological drama screenplay writing, atmospheric cinematography, and editorial.',
      icon: Film,
    },
    {
      id: 'both' as const,
      index: '03',
      title: 'Unified Vision',
      subtitle: 'Complete Showcase',
      desc: 'The complete portfolio bridging engineering architecture rigor with emotional cinematic storytelling.',
      icon: Sparkles,
    }
  ];

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center p-6 overflow-y-auto">
      <div className="w-full max-w-5xl relative z-10 py-10 flex flex-col items-center">
        {/* Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 max-w-xl"
        >
          <span className="section-index mb-4 block">
            000 // Curate Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-4">
            Aryan Singh Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
            Select a pathway to personalize your experience. You can switch or combine modes at any time from the top navigation bar.
          </p>
        </motion.div>

        {/* Responsive Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {options.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              onClick={() => onSelectMode(opt.id)}
              className="group rounded-2xl border border-neutral-200 bg-[#FAFAFB] hover:bg-white hover:border-neutral-950 hover:shadow-lg transition-all duration-300 p-7 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors">
                    {opt.index}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                    <opt.icon size={18} />
                  </div>
                </div>

                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-1 block">
                  {opt.subtitle}
                </span>

                <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-3">
                  {opt.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-8">
                  {opt.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-neutral-950 group-hover:underline">
                <span>Enter Pathway</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
