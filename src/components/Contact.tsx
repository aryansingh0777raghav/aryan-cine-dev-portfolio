import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram, 
  Youtube, 
  Film, 
  Newspaper, 
  ExternalLink, 
  ArrowUpRight, 
  Send, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  viewMode?: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Contact({ viewMode }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  const developerProfiles = [
    { label: "GitHub", url: "https://github.com/aryansingh0777raghav", icon: <Github size={13} /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/iamaryan07", icon: <Linkedin size={13} className="text-blue-600" /> },
    { label: "Instagram", url: "https://www.instagram.com/iam_aryannnn07", icon: <Instagram size={13} className="text-pink-600" /> }
  ];

  const cinemaProfiles = [
    { label: "YouTube (CineOn)", url: "https://www.youtube.com/@cineonstudio7", icon: <Youtube size={13} className="text-red-600" /> },
    { label: "IMDb Profile", url: "https://www.imdb.com/name/nm18214429", icon: <Film size={13} /> },
    { label: "TMDB", url: "https://www.themoviedb.org/person/6018661-aryan-singh", icon: <Film size={13} /> },
    { label: "Letterboxd", url: "https://boxd.it/2VQn1", icon: <Film size={13} /> },
    { label: "FilmFreeway", url: "https://filmfreeway.com/iamaryannnn07", icon: <Film size={13} /> },
    { label: "The Indian Blog", url: "https://indianblog.co.in/aryan-singh-filmmaker/", icon: <Newspaper size={13} /> }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">009 // Inquiries & Collaboration</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            Initiate Contact.<br />
            <span className="text-neutral-500 font-semibold">Let's build something exceptional.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            {viewMode === 'tech'
              ? 'Available for full-stack engineering contracts, platform architecture, and startup advisory.'
              : viewMode === 'filmmaking'
              ? 'Available for film directing collaborations, screenplay development, and production advisory.'
              : 'Available for full-stack engineering contracts, startup advisory, or film directing collaborations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Details & Profiles Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-[#FAFAFB] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Direct Email
                </span>
                <a 
                  href="mailto:aryansingh979211@gmail.com" 
                  className="text-base sm:text-lg font-bold text-neutral-950 hover:underline break-all"
                >
                  aryansingh979211@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Base Coordinates
                </span>
                <p className="text-sm font-semibold text-neutral-800">
                  Gorakhpur, Uttar Pradesh, India
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Current Availability
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-neutral-800">
                    {viewMode === 'tech'
                      ? 'Open for Software Engineering & Full-Stack Contracts'
                      : viewMode === 'filmmaking'
                      ? 'Open for Film Directing & Creative Productions'
                      : 'Open for Software Engineering & Film Contracts'}
                  </span>
                </div>
              </div>

              {/* Developer & Social Profiles */}
              {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
                <div className="pt-4 border-t border-neutral-200/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    Developer & Engineering Networks
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {developerProfiles.map((p, i) => (
                      <a
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all shadow-2xs"
                      >
                        {p.icon}
                        <span>{p.label}</span>
                        <ArrowUpRight size={11} className="opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Cinema & Press Profiles */}
              {(viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null) && (
                <div className="pt-4 border-t border-neutral-200/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    Cinema, Film & Press Portals
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cinemaProfiles.map((p, i) => (
                      <a
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all shadow-2xs"
                      >
                        {p.icon}
                        <span>{p.label}</span>
                        <ArrowUpRight size={10} className="opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="py-16 text-center space-y-3">
                  <CheckCircle2 size={40} className="text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold text-neutral-950">Message Dispatched</h3>
                  <p className="text-xs text-neutral-500">Your email client has been prepared. Aryan will respond shortly.</p>
                </div>
              ) : (
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const message = formData.get('message');
                    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                    const body = encodeURIComponent(`Hi Aryan,\n\n${message}\n\nFrom: ${name} (${email})`);
                    window.location.href = `mailto:aryansingh979211@gmail.com?subject=${subject}&body=${body}`;
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="e.g. Aryan Singh"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950 focus:bg-white transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="yourname@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      Message / Project Details
                    </label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      required 
                      placeholder="Describe your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-xs focus:outline-none focus:border-neutral-950 focus:bg-white transition-all font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Send Message</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
