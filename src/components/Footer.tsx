import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  viewMode?: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Footer({ viewMode }: FooterProps) {
  const getSocialLinks = () => {
    if (viewMode === 'tech') {
      return [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/iamaryan07" },
        { label: "GitHub", url: "https://github.com/aryansingh0777raghav" },
        { label: "Instagram", url: "https://www.instagram.com/iam_aryannnn07" },
      ];
    }
    if (viewMode === 'filmmaking') {
      return [
        { label: "Google Panel", url: "https://share.google/rvj5TA6ZWVsg3A3GH" },
        { label: "YouTube (CineOn)", url: "https://www.youtube.com/@cineonstudio7" },
        { label: "IMDb", url: "https://www.imdb.com/name/nm18214429/" },
        { label: "TMDB", url: "https://www.themoviedb.org/person/6018661-aryan-singh" },
        { label: "Letterboxd", url: "https://boxd.it/2VQn1" },
        { label: "FilmFreeway", url: "https://filmfreeway.com/iamaryannnn07" },
        { label: "Instagram", url: "https://www.instagram.com/iam_aryannnn07" },
      ];
    }
    return [
      { label: "Google Panel", url: "https://share.google/rvj5TA6ZWVsg3A3GH" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/iamaryan07" },
      { label: "GitHub", url: "https://github.com/aryansingh0777raghav" },
      { label: "YouTube", url: "https://www.youtube.com/@cineonstudio7" },
      { label: "IMDb", url: "https://www.imdb.com/name/nm18214429/" },
      { label: "TMDB", url: "https://www.themoviedb.org/person/6018661-aryan-singh" },
      { label: "Letterboxd", url: "https://boxd.it/2VQn1" },
      { label: "Instagram", url: "https://www.instagram.com/iam_aryannnn07" },
    ];
  };

  const socialLinks = getSocialLinks();

  return (
    <footer className="py-16 md:py-24 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          {/* Coordinates */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
              // Address & Contact
            </span>
            <p className="text-xs font-medium text-neutral-600 leading-relaxed">
              Aryan Singh<br />
              Gorakhpur, Uttar Pradesh, India<br />
              <a href="mailto:aryansingh979211@gmail.com" className="font-semibold text-neutral-900 hover:underline">
                aryansingh979211@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
              // Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-neutral-600">
              <a href="#home" className="hover:text-neutral-950">Overview</a>
              <a href="#pillars" className="hover:text-neutral-950">Pillars</a>
              <a href="#projects" className="hover:text-neutral-950">Projects</a>
              <a href="#timeline" className="hover:text-neutral-950">Timeline</a>
              <a href="#certifications" className="hover:text-neutral-950">Recognitions</a>
              <a href="#feed" className="hover:text-neutral-950">Journal</a>
              <a href="#contact" className="hover:text-neutral-950">Contact</a>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
              // Networks
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-neutral-600 hover:text-neutral-950 inline-flex items-center gap-0.5"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <p>© 2026 Aryan Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
