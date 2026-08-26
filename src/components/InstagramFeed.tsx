import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, ExternalLink, Image, X } from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';
import { soundFX } from '../utils/audio';

interface InstagramFeedProps {
  viewMode?: 'tech' | 'filmmaking' | 'both' | null;
}

export default function InstagramFeed({ viewMode }: InstagramFeedProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFeed = () => {
    soundFX.playToggle();
    setIsOpen(!isOpen);
  };

  return (
    <section id="feed" className="py-20 md:py-32 bg-[#FAFAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-10">
          <span className="section-index">
            {viewMode === 'filmmaking' ? '008 // Visual Journal & Frames' : viewMode === 'tech' ? '008 // Creative Log & Feeds' : '008 // Visual Journal & Instagram'}
          </span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header & Launch Hub */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-xs transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-pink-600">
                  Instagram Creative Stream (@iam_aryannnn07)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                  13 Curated Frames
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 mb-3">
                Visual Journal.<br />
                <span className="text-neutral-500 font-semibold">
                  {viewMode === 'filmmaking' 
                    ? 'Cinematic frames & production stills.' 
                    : viewMode === 'tech'
                    ? 'Developer snapshots & creative logs.'
                    : 'Daily frames, stories & captures.'}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                {viewMode === 'filmmaking'
                  ? 'A curated visual stream of cinematic captures, behind-the-scenes filmmaking, and festival moments on Instagram.'
                  : viewMode === 'tech'
                  ? 'Behind-the-scenes developer workflows, creative setups, and daily updates directly from Instagram.'
                  : 'An authentic behind-the-scenes visual archive of daily captures, cinematic stills, and creative updates.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={toggleFeed}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-mono font-bold hover:bg-neutral-800 transition-all shadow-sm cursor-pointer"
              >
                {isOpen ? (
                  <>
                    <X size={14} className="text-neutral-300" />
                    <span>Close Journal</span>
                  </>
                ) : (
                  <>
                    <Image size={14} className="text-pink-400" />
                    <span>Open Visual Journal (13 Posts)</span>
                    <ChevronDown size={14} className="opacity-70" />
                  </>
                )}
              </button>

              <a
                href="https://www.instagram.com/iam_aryannnn07"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-950 text-neutral-900 text-xs font-semibold hover:bg-neutral-50 transition-all shadow-2xs"
              >
                <Instagram size={14} className="text-pink-600" />
                <span>Follow on Instagram</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
            </div>
          </div>

          {/* Expandable 13 Posts Grid */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-10 sm:pt-14 mt-10 sm:mt-12 border-t border-neutral-200 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                      All 13 Instagram Posts
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      Tap any card to view original post on Instagram
                    </p>
                  </div>

                  <button
                    onClick={toggleFeed}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono font-semibold transition-colors cursor-pointer"
                  >
                    <span>Collapse</span>
                    <ChevronUp size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {instagramPosts.map((post, idx) => (
                    <div
                      key={post.id}
                      style={{
                        contain: 'layout paint',
                        transform: 'translate3d(0,0,0)',
                        WebkitTransform: 'translate3d(0,0,0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      className="rounded-2xl border border-neutral-200/90 bg-[#FAFAFB] p-3 sm:p-4 shadow-2xs hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group relative"
                    >
                      {/* Top Card Bar */}
                      <div className="flex items-center justify-between px-1 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Instagram size={13} className="text-neutral-900" />
                          <span className="text-[11px] font-mono font-semibold text-neutral-800">
                            @iam_aryannnn07
                          </span>
                        </div>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-neutral-400 hover:text-neutral-950 inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Post #{idx + 1}</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>

                      {/* Instagram Embed Iframe Container with Zero Scroll Trapping */}
                      <div className="w-full rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 relative min-h-[440px] sm:min-h-[480px]">
                        <iframe
                          src={`${post.embedUrl}`}
                          className="w-full h-[460px] sm:h-[490px] border-0 pointer-events-none"
                          scrolling="no"
                          allowTransparency={true}
                          loading="lazy"
                          title={`Instagram post ${post.id}`}
                        />
                        
                        {/* Instant Tap Anchor */}
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open Instagram post ${post.id}`}
                          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                        />
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="pt-3 mt-2 border-t border-neutral-200/60 flex items-center justify-between text-xs px-1">
                        <span className="text-[10px] font-mono text-neutral-400">
                          Verified Instagram Frame
                        </span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-neutral-900 hover:underline inline-flex items-center gap-1"
                        >
                          View on Instagram <ArrowUpRight size={11} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Close Button */}
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={toggleFeed}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-900 text-xs font-mono font-bold hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all shadow-2xs cursor-pointer"
                  >
                    <ChevronUp size={14} />
                    <span>Collapse Visual Journal</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
