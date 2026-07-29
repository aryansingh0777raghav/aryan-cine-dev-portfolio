import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
  setViewMode: (mode: 'tech' | 'filmmaking' | 'both') => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[60] transition-all duration-500 rounded-2xl ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-md border border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white hover:opacity-70 transition-opacity">
          AS<span className="text-white/40">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mode Switcher */}
          {viewMode !== null && (
            <div className="bg-white/5 border border-white/10 rounded-full p-0.5 flex items-center relative backdrop-blur-md">
              {(['tech', 'filmmaking', 'both'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`text-[9px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full relative z-10 transition-colors duration-300 cursor-pointer ${
                    viewMode === mode ? 'text-black font-extrabold' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {viewMode === mode && (
                    <motion.div
                      layoutId="headerActiveMode"
                      className="absolute inset-0 bg-white rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {mode === 'tech' ? 'Tech' : mode === 'filmmaking' ? 'Film' : 'Both'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-[calc(100%+1rem)] left-0 w-full glass rounded-3xl overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {/* Mobile Mode Switcher */}
              {viewMode !== null && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-1 flex justify-between items-center relative backdrop-blur-md mb-2">
                  {(['tech', 'filmmaking', 'both'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setViewMode(mode);
                        setIsOpen(false);
                      }}
                      className={`flex-1 text-[10px] font-black uppercase tracking-wider py-2.5 rounded-xl relative z-10 transition-colors duration-300 text-center cursor-pointer ${
                        viewMode === mode ? 'text-black font-extrabold' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {viewMode === mode && (
                        <motion.div
                          layoutId="mobileActiveMode"
                          className="absolute inset-0 bg-white rounded-xl z-[-1]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {mode === 'tech' ? 'Tech' : mode === 'filmmaking' ? 'Film' : 'Both'}
                    </button>
                  ))}
                </div>
              )}

              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold tracking-tighter text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
