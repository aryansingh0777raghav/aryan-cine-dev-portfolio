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
      desc: 'Drill down into virtual OS simulators, developer sandboxes, AI tools, and full-stack applications.',
      icon: <Cpu className="w-6 h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    },
    {
      id: 'filmmaking' as const,
      title: 'Cinema & Stories',
      subtitle: 'Creative Filmmaking',
      desc: 'Discover short films, psychological drama screenplay direction, score composition, and editing.',
      icon: <Film className="w-6 h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    },
    {
      id: 'both' as const,
      title: 'Unified Vision',
      subtitle: 'Software & Cinema',
      desc: 'Explore the complete journey bridging complex system logic and emotional visual storytelling.',
      icon: <Sparkles className="w-6 h-6 text-white/70 group-hover:text-black transition-colors duration-500" />,
      iconBg: 'bg-white/5 border-white/10 group-hover:bg-white group-hover:border-white'
    }
  ];

  return (
    <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center p-6 overflow-y-auto">
      {/* Subtle white ambient glow in background (monochromatic) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-5xl relative z-10 py-10 flex flex-col items-center">
        {/* Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-5">
            Select Path
          </span>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight text-white mb-5 uppercase leading-none">
            ARYAN SINGH <br />
            <span className="text-white/30 font-light">PORTFOLIO</span>
          </h1>
          <p className="text-xs md:text-sm text-white/40 max-w-md mx-auto font-medium tracking-wide leading-relaxed">
            Curate your experience. Select a path below to filter projects and experiences. You can switch modes at any time from the header.
          </p>
        </motion.div>

        {/* Dynamic Monochromatic Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {options.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelectMode(opt.id)}
              className="group relative overflow-hidden glass rounded-[2rem] p-8 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col min-h-[320px] justify-between"
            >
              {/* Radial gradient spotlight on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

              <div>
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 mb-8 ${opt.iconBg}`}>
                  {opt.icon}
                </div>

                {/* Subtitle */}
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 mb-2.5 block">
                  {opt.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight">
                  {opt.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-medium mb-8">
                {opt.desc}
              </p>

              {/* Enter Link CTA */}
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Enter Portfolio <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
