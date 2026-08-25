import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface NavbarProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
  setViewMode: (mode: 'tech' | 'filmmaking' | 'both') => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const getSubItems = () => {
    if (viewMode === 'tech') {
      return [
        { name: 'ArKTest Beta (Flagship)', href: '#projects' },
        { name: 'ArVerse OS', href: '#projects' },
        { name: 'Certilink (Verification)', href: '#projects' },
        { name: 'ArType (AI Assistant)', href: '#projects' }
      ];
    }
    if (viewMode === 'filmmaking') {
      return [
        { name: 'The Night of Life (4K Film)', href: '#projects' },
        { name: 'CineOn Studio 7', href: '#projects' },
        { name: 'Press & Media Spotlight', href: '#certifications' }
      ];
    }
    return [
      { name: 'ArKTest Beta (Flagship)', href: '#projects' },
      { name: 'ArVerse OS', href: '#projects' },
      { name: 'Certilink (Verification)', href: '#projects' },
      { name: 'The Night of Life (Film)', href: '#projects' }
    ];
  };

  const navLinks = [
    { name: 'Overview', href: '#home' },
    { name: viewMode === 'filmmaking' ? 'Craft' : 'Pillars', href: '#pillars' },
    { 
      name: viewMode === 'filmmaking' ? 'Films' : 'Projects', 
      href: '#projects',
      hasDropdown: true,
      subItems: getSubItems()
    },
    { name: 'Timeline', href: '#timeline' },
    { name: viewMode === 'filmmaking' ? 'Press' : 'Credentials', href: '#certifications' },
    { name: 'Journal', href: '#feed' },
  ];

  return (
    <header className="fixed top-3.5 md:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transform-gpu">
      {/* Floating Beveled Glassmorphism Pill with Specular Highlight and Layered Ambient Depth */}
      <div className="bg-white/55 backdrop-blur-md md:backdrop-blur-2xl border border-black/[0.08] ring-1 ring-white/90 rounded-2xl md:rounded-full py-3 md:py-3.5 px-5 sm:px-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-between transition-all duration-300 transform-gpu">
        
        {/* Left: Modern Geometric 'A' Monogram Logo + AryanVerse brand */}
        <a href="#home" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-6 h-6 flex items-center justify-center relative">
            <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
              {/* Outer Geometric 'A' Silhouette */}
              <path 
                d="M12 2.5L2.5 21H7.2L12 11.2L16.8 21H21.5L12 2.5Z" 
                fill="#0A0A0A" 
              />
              {/* Inner Triangle Negative Space */}
              <polygon points="9.5,15.5 14.5,15.5 12,10.2" fill="#FFFFFF" />
              {/* Swiss Red Precision Focal Dot */}
              <circle cx="12" cy="18.2" r="1.1" fill="#E63946" />
            </svg>
          </div>
          <span className="font-extrabold tracking-tight text-neutral-950 text-sm sm:text-base leading-none">
            AryanVerse
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                  onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors flex items-center gap-1 py-1"
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={11} className="text-neutral-500" />
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isProjectsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1.5 w-52 rounded-2xl bg-white/85 backdrop-blur-2xl border border-white/80 p-2 shadow-xl z-50"
                      >
                        {link.subItems?.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-3.5 py-2 text-xs text-neutral-800 hover:text-neutral-950 hover:bg-white/70 rounded-xl transition-colors font-medium"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-1"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section: Exact MobilityLab Toggle Switch + Contact Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Exact MobilityLab Toggle Capsule Switch: Tech [ ● ] Film */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-800">
            <button
              type="button"
              onClick={() => {
                soundFX.playClick();
                setViewMode('tech');
              }}
              className={`text-[12px] font-mono cursor-pointer transition-colors ${
                viewMode === 'tech' ? 'text-neutral-950 font-bold' : 'text-neutral-500 hover:text-neutral-950'
              }`}
            >
              Tech
            </button>

            {/* Dark Charcoal Slider Capsule with White Sliding Circle (Exact MobilityLab match) */}
            <button
              type="button"
              role="switch"
              aria-checked={viewMode === 'filmmaking'}
              onClick={() => {
                soundFX.playToggle();
                if (viewMode === 'tech') setViewMode('both');
                else if (viewMode === 'both') setViewMode('filmmaking');
                else setViewMode('tech');
              }}
              className="w-11 h-5.5 bg-neutral-700 hover:bg-neutral-800 rounded-full p-0.5 transition-colors relative cursor-pointer flex items-center shadow-xs"
              title={`Current: ${viewMode || 'both'}. Click to toggle.`}
            >
              <motion.div
                className="w-4.5 h-4.5 bg-white rounded-full shadow-sm"
                animate={{ 
                  x: viewMode === 'tech' ? 1 : viewMode === 'both' ? 10 : 21 
                }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            </button>

            <button
              type="button"
              onClick={() => {
                soundFX.playClick();
                setViewMode('filmmaking');
              }}
              className={`text-[12px] font-mono cursor-pointer transition-colors ${
                viewMode === 'filmmaking' ? 'text-neutral-950 font-bold' : 'text-neutral-500 hover:text-neutral-950'
              }`}
            >
              Film
            </button>
          </div>

          {/* Exact MobilityLab Contact Button with White Square Arrow Badge */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>Contact</span>
            <span className="w-5 h-5 rounded-md bg-white text-neutral-950 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-xs">
              <svg className="w-3 h-3 text-neutral-950 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <button 
          aria-label="Toggle navigation menu"
          className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation with Frosted Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden mt-2.5 rounded-3xl bg-white/70 backdrop-blur-2xl border border-black/[0.08] ring-1 ring-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1)] space-y-4"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold text-neutral-800 hover:text-neutral-950 px-3 py-2 rounded-xl hover:bg-white/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">Curation:</span>
                <div className="flex items-center gap-1 bg-neutral-900/[0.04] p-1 rounded-full border border-neutral-900/[0.06] backdrop-blur-sm">
                  {(['tech', 'both', 'filmmaking'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setViewMode(m);
                        setIsOpen(false);
                      }}
                      className={`text-[10px] font-mono px-3 py-1 rounded-full transition-all ${
                        viewMode === m 
                          ? 'bg-neutral-950 text-white font-bold shadow-xs' 
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      {m === 'tech' ? 'Tech' : m === 'both' ? 'Both' : 'Film'}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center w-full py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                Contact ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
