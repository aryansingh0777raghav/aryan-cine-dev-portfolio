import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, ExternalLink } from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';
import { soundFX } from '../utils/audio';

interface InstagramFeedProps {
  viewMode?: 'tech' | 'filmmaking' | 'both' | null;
}

export default function InstagramFeed({ viewMode }: InstagramFeedProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedPosts = showAll ? instagramPosts : instagramPosts.slice(0, 6);

  const toggleShowAll = () => {
    soundFX.playToggle();
    setShowAll(!showAll);
  };

  return (
    <section id="feed" className="py-24 md:py-36 bg-[#FAFAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">
            {viewMode === 'filmmaking' ? '008 // Visual Journal & Frames' : viewMode === 'tech' ? '008 // Creative Log & Feeds' : '008 // Visual Journal & Instagram'}
          </span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-pink-600">
                Instagram Live Showcase (@iam_aryannnn07)
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
              Visual Journal.<br />
              <span className="text-neutral-500 font-semibold">
                {viewMode === 'filmmaking' 
                  ? 'Cinematic frames & production stills.' 
                  : viewMode === 'tech'
                  ? 'Developer logs & creative captures.'
                  : 'Daily logs, frames & stories.'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              {viewMode === 'filmmaking'
                ? 'Directorial behind-the-scenes, visual aesthetic explorations, and festival moments directly from Instagram.'
                : viewMode === 'tech'
                ? 'Engineering milestones, creative setup snapshots, and behind-the-scenes logs directly from Instagram.'
                : 'A curated visual stream of daily captures, cinematic stills, and behind-the-scenes updates from Instagram.'}
            </p>
          </div>

          <a
            href="https://www.instagram.com/iam_aryannnn07"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 transition-all shadow-sm shrink-0"
          >
            <Instagram size={14} className="text-pink-400" />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>

        {/* Instagram Embeds Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-4 shadow-xs hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
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

              {/* Instagram Embed Iframe */}
              <div className="w-full rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center min-h-[440px] sm:min-h-[480px]">
                <iframe
                  src={`${post.embedUrl}`}
                  className="w-full h-[460px] sm:h-[490px] border-0"
                  scrolling="no"
                  allowTransparency={true}
                  loading="lazy"
                  title={`Instagram post ${post.id}`}
                />
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-3 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs px-1">
                <span className="text-[10px] font-mono text-neutral-400">
                  Instagram Verified Post
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
            </motion.div>
          ))}
        </div>

        {/* Expand / Collapse Toggle Button */}
        {instagramPosts.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-900 text-xs font-mono font-bold hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all shadow-xs cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Fewer Posts</span>
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  <span>Load All 13 Posts ({instagramPosts.length - 6} more)</span>
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
