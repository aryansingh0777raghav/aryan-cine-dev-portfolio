import { motion } from 'motion/react';
import { Cpu, Film, Sparkles } from 'lucide-react';

interface ViewSelectorProps {
  onSelectMode: (mode: 'tech' | 'filmmaking' | 'both') => void;
}

export default function ViewSelector({ onSelectMode }: ViewSelectorProps) {
  const options = [
    {
      id: 'tech' as const,
      title: 'Tech & Systems',
      subtitle: 'Software Engineering',
      desc: 'Explore virtual OS simulators, developer sandboxes, AI tools, and full-stack systems.',
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    },
    {
      id: 'filmmaking' as const,
      title: 'Cinema & Stories',
      subtitle: 'Creative Filmmaking',
      desc: 'Discover short films, psychological drama direction, screenplay writing, and editing.',
      icon: <Film className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    },
    {
      id: 'both' as const,
      title: 'Unified Vision',
      subtitle: 'Software & Cinema',
      desc: 'The complete showcase bridging complex engineering logic and emotional cinematic storytelling.',
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    }
  ];

  return (
    <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-start md:justify-center p-4 md:p-6 overflow-y-auto scrollbar-thin">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/[0.01] blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-5xl relative z-10 py-6 md:py-10 flex flex-col items-center">
        {/* Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 md:mb-16 max-w-xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-3 md:mb-5">
            Select Path
          </span>
          <h1 className="text-2xl md:text-5xl font-black tracking-tight text-white mb-3 md:mb-5 uppercase leading-none">
            ARYAN SINGH <br />
            <span className="text-white/30 font-light">PORTFOLIO</span>
          </h1>
          <p className="text-[10px] md:text-sm text-white/40 px-4 md:px-0 font-medium tracking-wide leading-relaxed">
            Curate your experience. Select a path below to filter projects and experiences. You can switch modes at any time from the header.
          </p>
        </motion.div>

        {/* Responsive Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-2 md:px-0">
          {options.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectMode(opt.id)}
              className="group relative overflow-hidden glass rounded-2xl md:rounded-[2rem] p-5 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-[border-color,background-color] duration-300 cursor-pointer flex flex-col justify-between min-h-[140px] md:min-h-[320px]"
            >
              {/* Radial gradient spotlight on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

              {/* Mobile layout: flex-row, Desktop layout: flex-col */}
              <div className="flex md:flex-col gap-4 md:gap-0">
                {/* Icon Circle */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border transition-colors duration-300 md:mb-8 flex-shrink-0 bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white">
                  {opt.icon}
                </div>

                <div>
                  {/* Subtitle */}
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 mb-1 md:mb-2.5 block">
                    {opt.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-base md:text-2xl font-black text-white tracking-tight leading-tight md:leading-none">
                    {opt.title}
                  </h3>
                </div>
              </div>

              {/* Description (Hidden or smaller on mobile to save vertical height) */}
              <p className="text-[10px] md:text-sm text-white/50 leading-relaxed font-medium mt-3 mb-4 md:my-6 line-clamp-2 md:line-clamp-none">
                {opt.desc}
              </p>

              {/* Enter Link CTA */}
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 mt-auto">
                Enter Portfolio <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
