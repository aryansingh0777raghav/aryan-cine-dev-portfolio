import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Youtube, Github, Globe, Terminal, Film, Sparkles } from 'lucide-react';

interface AboutProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function About({ viewMode }: AboutProps) {
  const [activePersona, setActivePersona] = useState<'unified' | 'tech' | 'filmmaker'>(
    viewMode === 'filmmaking' ? 'filmmaker' : viewMode === 'tech' ? 'tech' : 'unified'
  );

  useEffect(() => {
    if (viewMode === 'filmmaking') {
      setActivePersona('filmmaker');
    } else if (viewMode === 'tech') {
      setActivePersona('tech');
    } else {
      setActivePersona('unified');
    }
  }, [viewMode]);
  const getSubheading = () => {
    if (viewMode === 'tech') return 'The Technical Architect';
    if (viewMode === 'filmmaking') return 'Filmmaker • Screenwriter • Actor • Musician';
    return 'Architect • Filmmaker • Writer • Actor • Musician';
  };

  const getHeading = () => {
    if (viewMode === 'tech') {
      return (
        <>
          Engineering resilient systems<br />
          <span className="text-neutral-500 font-semibold">with analytical precision.</span>
        </>
      );
    }
    if (viewMode === 'filmmaking') {
      return (
        <>
          Capturing existential truths<br />
          <span className="text-neutral-500 font-semibold">through psychological cinema.</span>
        </>
      );
    }
    return (
      <>
        Bridging analytical logic<br />
        <span className="text-neutral-500 font-semibold">with human storytelling.</span>
      </>
    );
  };

  const getProfileLinks = () => {
    const techLinks = [
      { label: 'GitHub', url: 'https://github.com/aryansingh0777raghav' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/iamaryan07' },
      { label: 'ArKTest Platform', url: 'https://arktest-beta.vercel.app/' }
    ];
    const filmLinks = [
      { label: 'Wikidata', url: 'https://www.wikidata.org/wiki/Q138471331' },
      { label: 'Press Feature', url: 'https://indianblog.co.in/aryan-singh-filmmaker/' },
      { label: 'IMDb', url: 'https://www.imdb.com/name/nm18214429' },
      { label: 'TMDB', url: 'https://www.themoviedb.org/person/6018661-aryan-singh' },
      { label: 'Letterboxd', url: 'https://boxd.it/2VQn1' },
      { label: 'FilmFreeway', url: 'https://filmfreeway.com/iamaryannnn07' }
    ];

    if (viewMode === 'tech') return techLinks;
    if (viewMode === 'filmmaking') return filmLinks;
    return [...techLinks, ...filmLinks];
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">004 // About & Background</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="swiss-pill-tag mb-2">
              {getSubheading()}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950">
              {getHeading()}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              {viewMode === 'tech' ? (
                <>
                  <p>
                    Hi, I'm <strong className="font-semibold text-neutral-950">Aryan Singh</strong>. With a foundational background in analytical sciences and system-level computing, I approach software development with strict architectural discipline — designing fault-tolerant, scalable, and modular backend infrastructures.
                  </p>
                  <p>
                    As the Founder & Lead Full-Stack Architect of <strong className="font-semibold text-neutral-950">ArKTest Beta</strong>, I engineer crowdsourced QA marketplaces, zero-race-condition escrow economies, and low-latency developer tools using FastAPI, PostgreSQL/SQLAlchemy, and modern TypeScript.
                  </p>
                  <p>
                    Currently pursuing my BCA at ITM Gorakhpur, holding credentials from Samsung Innovation Campus in Big Data (SIC08720) and Grade A++ in Python & Data Analytics from Techpile Technology.
                  </p>
                </>
              ) : viewMode === 'filmmaking' ? (
                <>
                  <p>
                    Hi, I'm <strong className="font-semibold text-neutral-950">Aryan Singh</strong>. As an <strong className="font-semibold text-neutral-950">independent filmmaker, screenwriter, director, actor, and musician</strong>, I create immersive narrative cinema exploring psychological tension, existential solitude, and emotional vulnerability.
                  </p>
                  <p>
                    Through <strong className="font-semibold text-neutral-950">CineOn Studio 7</strong>, I helm end-to-end cinematic pipelines — from original screenplay writing and actor performance to atmospheric cinematography, DaVinci Resolve color grading, and original musical scoring.
                  </p>
                  <p>
                    My directorial debut short film, <strong className="font-semibold text-neutral-950">'The Night of Life: Before You Think About It'</strong> (which I wrote, directed, scored, edited, and starred in as Aarav), is an intense psychological drama confronting a fractured father-son dynamic, generational clash, severe depression, and unfulfilled dreams during a midnight highway breakdown — indexed on IMDb, TMDB, Letterboxd, and FilmFreeway.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Hi, I'm <strong className="font-semibold text-neutral-950">Aryan Singh</strong>. Operating across both high-throughput software architecture and multifaceted cinematic arts, I refuse to be confined to a single dimension — bringing systems-level rigor to code and deep human authenticity to storytelling.
                  </p>
                  <p>
                    As the Founder & Lead Full-Stack Architect of <strong className="font-semibold text-neutral-950">ArKTest Beta</strong>, I engineer crowdsourced QA marketplaces, zero-race-condition escrow economies, and low-latency developer tools using FastAPI, PostgreSQL, and modern TypeScript.
                  </p>
                  <p>
                    Simultaneously, through <strong className="font-semibold text-neutral-950">CineOn Studio 7</strong>, I am an <strong className="font-semibold text-neutral-950">independent filmmaker, screenwriter, director, actor, and musician</strong> — writing original screenplays, performing, composing original musical scores, and directing psychological films that confront complex human relationships, repressed emotions, and existential struggles.
                  </p>
                </>
              )}
            </div>

            {/* Profile Links Matrix */}
            <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-2.5">
              {getProfileLinks().map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-btn-outline text-xs"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Portrait Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-[#FAFAFB] p-4 sm:p-6 space-y-4 ambient-depth-card">
              
              {/* Persona Switcher Tabs */}
              <div className="flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-white border border-neutral-200/90 ambient-depth-floating">
                <button
                  onClick={() => setActivePersona('unified')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activePersona === 'unified'
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Sparkles size={12} className={activePersona === 'unified' ? 'text-amber-400' : ''} />
                  <span>Unified</span>
                </button>
                <button
                  onClick={() => setActivePersona('tech')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activePersona === 'tech'
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Terminal size={12} />
                  <span>The Architect</span>
                </button>
                <button
                  onClick={() => setActivePersona('filmmaker')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activePersona === 'filmmaker'
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Film size={12} className={activePersona === 'filmmaker' ? 'text-amber-400' : ''} />
                  <span>The Filmmaker</span>
                </button>
              </div>

              {/* Photo Frame with AnimatePresence */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200/80 relative bg-neutral-100 ambient-depth-frame">
                <AnimatePresence mode="wait">
                  {activePersona === 'unified' ? (
                    <motion.img 
                      key="unified-img"
                      src="/images/aryan-unified.jpg" 
                      alt="Aryan Singh - Dual-Threat Software Engineer & Independent Film Director" 
                      title="Aryan Singh - Unified Vision"
                      loading="eager"
                      fetchPriority="high"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover block"
                    />
                  ) : activePersona === 'tech' ? (
                    <motion.img 
                      key="tech-img"
                      src="/images/profile.png" 
                      alt="Aryan Singh - Software Engineer & Founder of ArKTest Beta" 
                      title="Aryan Singh - Software Engineer"
                      loading="eager"
                      fetchPriority="high"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 block"
                    />
                  ) : (
                    <motion.img 
                      key="film-img"
                      src="/images/aryan-singh-filmmaker.jpg" 
                      alt="Aryan Singh - Independent Film Director & Writer" 
                      title="Aryan Singh Filmmaker"
                      loading="eager"
                      fetchPriority="high"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover block"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Dynamic Bottom Badge */}
              {activePersona === 'unified' ? (
                <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between ambient-depth-floating">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-[11px] font-mono font-bold text-neutral-900">Unified Vision Verified</p>
                    </div>
                    <p className="text-[10px] text-neutral-500">Systems Architect • Filmmaker, Writer, Actor & Musician</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/aryansingh0777raghav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-neutral-950 text-white text-[10px] font-bold hover:bg-neutral-800 transition-colors"
                      title="GitHub Profile"
                    >
                      <Github size={11} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@cineonstudio7?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-bold hover:bg-red-700 transition-colors"
                      title="CineOn YouTube Channel"
                    >
                      <Youtube size={11} />
                      <span className="hidden sm:inline">Films</span>
                    </a>
                  </div>
                </div>
              ) : activePersona === 'tech' ? (
                <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between ambient-depth-floating">
                  <div>
                    <p className="text-[11px] font-mono font-bold text-neutral-900">GitHub Verified</p>
                    <p className="text-[10px] text-neutral-500">Founder & Lead Full-Stack Architect</p>
                  </div>
                  <a
                    href="https://github.com/aryansingh0777raghav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950 text-white text-[11px] font-bold hover:bg-neutral-800 transition-colors"
                  >
                    <Github size={13} />
                    <span>View Repos</span>
                  </a>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between ambient-depth-floating">
                  <div>
                    <p className="text-[11px] font-mono font-bold text-neutral-900">CineOn Studio 7</p>
                    <p className="text-[10px] text-neutral-500">Filmmaker, Writer, Director, Actor & Musician</p>
                  </div>
                  <a
                    href="https://www.youtube.com/@cineonstudio7?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 text-white text-[11px] font-bold hover:bg-red-700 transition-colors"
                  >
                    <Youtube size={13} />
                    <span>Subscribe</span>
                  </a>
                </div>
              )}
            </div>

            {/* Parent Creative Venture Insignia Card */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 ambient-depth-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="w-24 sm:w-24 shrink-0">
                <img 
                  src="/images/aryan-one-logo.png" 
                  alt="ARYAN ONE — One Vision. No Limits." 
                  className="w-full h-auto object-contain block ambient-depth-logo"
                />
              </div>
              <div className="flex-1 sm:border-l sm:border-neutral-200/80 sm:pl-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 block mb-0.5">
                  Parent Creative Engine
                </span>
                <p className="text-xs font-semibold text-neutral-900 leading-snug">
                  Uniting software architectures (ArKTest Beta) & multidisciplinary cinema (CineOn Studio 7).
                </p>
                <p className="text-[10px] font-mono text-neutral-500 mt-1">
                  ONE VISION. NO LIMITS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
