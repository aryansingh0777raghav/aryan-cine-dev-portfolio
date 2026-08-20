import { motion } from 'motion/react';
import { ArrowUpRight, Youtube } from 'lucide-react';

interface AboutProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function About({ viewMode }: AboutProps) {
  const getSubheading = () => {
    if (viewMode === 'tech') return 'The Technical Architect';
    if (viewMode === 'filmmaking') return 'The Cinematic Storyteller';
    return 'Dual-Threat Engineer & Director';
  };

  const getProfileLinks = () => {
    const techLinks = [
      { label: 'GitHub', url: 'https://github.com/aryansingh0777raghav' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/iamaryan07' }
    ];
    const filmLinks = [
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
          <span className="section-index">002 // About & Background</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="swiss-pill-tag mb-2">
              {getSubheading()}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950">
              Bridging analytical logic<br />
              <span className="text-neutral-500 font-semibold">with human storytelling.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              <p>
                Hi, I'm <strong className="font-semibold text-neutral-950">Aryan Singh</strong>. With a foundational background in biology and analytical sciences, I bring a unique system-level perspective to software development — treating software architectures like biological ecosystems where resilience, balance, and fault-tolerance are paramount.
              </p>
              <p>
                As the Founder & Lead Full-Stack Architect of <strong className="font-semibold text-neutral-950">ArKTest Beta</strong>, I engineer crowdsourced QA marketplaces, zero-race-condition escrow economies, and low-latency AI tools.
              </p>
              <p>
                Simultaneously, through <strong className="font-semibold text-neutral-950">CineOn Studio 7</strong>, I write, direct, score, and edit atmospheric psychological drama films that confront existential conflict, isolation, and student mental health.
              </p>
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
            <div className="rounded-3xl border border-neutral-200 bg-[#FAFAFB] p-4 sm:p-6 space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 relative bg-neutral-100">
                <img 
                  src="/images/profile.png" 
                  alt="Aryan Singh" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono font-bold text-neutral-900">CineOn Studio 7</p>
                  <p className="text-[10px] text-neutral-500">Official Production Channel</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
