import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Code2, Film, Terminal, FileText } from 'lucide-react';

interface HeroProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Hero({ viewMode }: HeroProps) {
  const getCredentials = () => {
    if (viewMode === 'tech') {
      return [
        { label: "ArKTest Beta", role: "Founder & Lead Architect" },
        { label: "ITM Gorakhpur", role: "BCA (2024–2027)" },
        { label: "Samsung Innovation Campus", role: "Big Data (SIC08720)" },
        { label: "Techpile Technology", role: "Data Analytics (Grade A++)" },
      ];
    }
    if (viewMode === 'filmmaking') {
      return [
        { label: "CineOn Studio 7", role: "Founder & Director" },
        { label: "The Night of Life", role: "4K Directorial Debut (2026)" },
        { label: "The Indian Blog", role: "Featured Independent Director" },
        { label: "IMDb / TMDB / Letterboxd", role: "Verified Production Records" },
      ];
    }
    return [
      { label: "ArKTest Beta", role: "Founder & Lead Architect" },
      { label: "CineOn Studio 7", role: "Film Director & Writer" },
      { label: "ITM Gorakhpur", role: "BCA (2024–2027)" },
      { label: "Samsung Innovation Campus", role: "Big Data (SIC08720)" },
    ];
  };

  const credentials = getCredentials();

  return (
    <section id="home" className="pt-36 md:pt-44 pb-20 md:pb-28 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-8">
          <span className="section-index">001 // Overview</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Large Swiss Editorial Headline */}
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 leading-[1.05] mb-8"
          >
            {viewMode === 'tech' ? (
              <>
                Architect. Build.<br />
                <span className="text-neutral-500 font-semibold">
                  Engineering scalable platforms & AI systems.
                </span>
              </>
            ) : viewMode === 'filmmaking' ? (
              <>
                Conceive. Direct.<br />
                <span className="text-neutral-500 font-semibold">
                  Crafting psychological cinema & stories.
                </span>
              </>
            ) : (
              <>
                Engineer. Direct.<br />
                <span className="text-neutral-500 font-semibold">
                  Transforming digital platforms & cinematic stories.
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle & Mission Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mb-12"
          >
            {viewMode === 'tech' ? (
              <>
                Aryan Singh is a Software Engineer and Full-Stack Architect based in Gorakhpur, India. Founder & Lead Full-Stack Architect of <span className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4">ArKTest Beta</span>, architecting automated escrow reward platforms, zero-race-condition database concurrency, high-performance AI tools, and virtual operating systems.
              </>
            ) : viewMode === 'filmmaking' ? (
              <>
                Aryan Singh is an Independent Film Director, Screenwriter, and Editor based in Gorakhpur, India. Founder of <span className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4">CineOn Studio 7</span> and director of <span className="font-semibold text-neutral-950">The Night of Life: Before You Think About It</span>, crafting atmospheric psychological drama, existential narratives, and character-driven cinema.
              </>
            ) : (
              <>
                Aryan Singh is a dual-threat Software Engineer and Independent Film Director based in Gorakhpur, India. Founder & Lead Full-Stack Architect of <span className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4">ArKTest Beta</span>, architecting automated escrow reward platforms, AI tools, virtual operating systems, and narrative psychological films.
              </>
            )}
          </motion.p>

          {/* Credential & Institution Badges matching MobilityLab partner logos */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-200/80 mb-12"
          >
            {credentials.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:border-neutral-300 transition-colors">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-0.5">
                  {item.label}
                </p>
                <p className="text-xs font-bold text-neutral-900 leading-tight">
                  {item.role}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a 
              href="#statement" 
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>{viewMode === 'filmmaking' ? 'Explore Film Productions' : viewMode === 'tech' ? 'Explore Systems & Tools' : 'Explore Works & Mission'}</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs group-hover:translate-y-0.5 transition-transform">
                <ArrowDown size={13} className="text-neutral-900" />
              </span>
            </a>

            {viewMode === 'filmmaking' ? (
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-sm"
              >
                <Film size={13} />
                <span>Production: The Night of Life</span>
              </a>
            ) : (
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-sm"
              >
                <Sparkles size={13} />
                <span>Flagship: ArKTest Beta</span>
              </a>
            )}

            {viewMode === 'filmmaking' ? (
              <a
                href="https://indianblog.co.in/aryan-singh-filmmaker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-950 text-neutral-800 hover:text-neutral-950 text-xs font-semibold tracking-wide transition-all shadow-2xs"
              >
                <FileText size={13} />
                <span>Press Editorial Feature ↗</span>
              </a>
            ) : (
              <a
                href="mailto:aryansingh979211@gmail.com?subject=Resume%20Request%20for%20Aryan%20Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-950 text-neutral-800 hover:text-neutral-950 text-xs font-semibold tracking-wide transition-all shadow-2xs"
              >
                <FileText size={13} />
                <span>Request Resume / CV ↗</span>
              </a>
            )}
          </motion.div>
        </div>

        {/* Full-Width Panoramic Cinematic Frame (Ultra-Smooth Layer Isolated) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            contain: 'paint',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)'
          }}
          className="mt-12 sm:mt-16 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] border border-neutral-800 shadow-sm overflow-hidden"
        >
          <div 
            style={{ 
              contain: 'paint',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)'
            }}
            className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800/80 bg-black"
          >
            <img 
              src="/images/aryan_panorama.png" 
              alt="Aryan Singh" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translate3d(0, 0, 0)'
              }}
              className="w-full h-auto object-contain block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
