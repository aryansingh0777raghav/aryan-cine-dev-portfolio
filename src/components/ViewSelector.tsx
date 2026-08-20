import { motion } from 'motion/react';
import { Cpu, Film, Sparkles, ArrowUpRight } from 'lucide-react';

interface ViewSelectorProps {
  onSelectMode: (mode: 'tech' | 'filmmaking' | 'both') => void;
}

export default function ViewSelector({ onSelectMode }: ViewSelectorProps) {
  const options = [
    {
      id: 'both' as const,
      index: '01',
      title: 'Unified Vision',
      subtitle: 'Complete Dual Showcase',
      desc: 'The complete portfolio bridging software engineering architecture rigor with emotional cinematic storytelling.',
      icon: Sparkles,
      recommended: true
    },
    {
      id: 'tech' as const,
      index: '02',
      title: 'Tech & Systems',
      subtitle: 'Software Engineering',
      desc: 'Explore crowdsourced QA platforms, browser OS simulators, AI developer tools, and scalable APIs.',
      icon: Cpu,
    },
    {
      id: 'filmmaking' as const,
      index: '03',
      title: 'Cinema & Stories',
      subtitle: 'Creative Direction',
      desc: 'Discover short films, psychological drama screenplays, atmospheric cinematography, and editorial.',
      icon: Film,
    }
  ];

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 overflow-y-auto overscroll-contain">
      <div className="w-full max-w-5xl relative z-10 my-auto py-6 sm:py-10 flex flex-col items-center">
        
        {/* Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10 max-w-xl px-2"
        >
          <span className="section-index mb-2.5 block text-[11px]">
            000 // Curate Experience
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 mb-2 sm:mb-3">
            Aryan Singh Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
            Select a pathway to personalize your experience. You can toggle modes anytime from the top bar.
          </p>
        </motion.div>

        {/* Responsive Options Grid - Unified Vision at TOP / Position 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl">
          {options.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => onSelectMode(opt.id)}
              className={`group rounded-2xl border transition-all duration-200 p-4 sm:p-6 cursor-pointer flex flex-col justify-between relative ${
                opt.recommended 
                  ? 'border-neutral-950 bg-white shadow-md ring-1 ring-neutral-950/10' 
                  : 'border-neutral-200 bg-[#FAFAFB] hover:bg-white hover:border-neutral-950 hover:shadow-md'
              }`}
            >
              {opt.recommended && (
                <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-neutral-950 text-white text-[9px] font-mono font-bold tracking-wider uppercase shadow-xs">
                  ★ Recommended
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-6">
                  <span className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                    opt.recommended ? 'text-neutral-950' : 'text-neutral-400 group-hover:text-neutral-950'
                  }`}>
                    {opt.index}
                  </span>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                    opt.recommended 
                      ? 'bg-neutral-950 text-white border-neutral-950' 
                      : 'bg-white border-neutral-200 text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white'
                  }`}>
                    <opt.icon size={16} />
                  </div>
                </div>

                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-0.5 block">
                  {opt.subtitle}
                </span>

                <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight mb-1.5 sm:mb-2">
                  {opt.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-3 sm:mb-6">
                  {opt.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-neutral-950 group-hover:underline">
                <span>Enter Pathway</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Skip button */}
        <button
          onClick={() => onSelectMode('both')}
          className="mt-6 text-xs font-mono text-neutral-400 hover:text-neutral-950 transition-colors underline cursor-pointer"
        >
          Direct Enter (Unified Vision) →
        </button>
      </div>
    </div>
  );
}
