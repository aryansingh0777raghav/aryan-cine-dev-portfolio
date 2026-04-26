import { motion } from 'motion/react';
import AtmosphericBackground from './AtmosphericBackground';
import { ExternalLink, Github, Linkedin, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <AtmosphericBackground />

      {/* Overlay Content */}
      <div className="relative z-20 px-4 md:px-6 max-w-7xl mx-auto w-full pt-32 pb-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.16, 1, 0.3, 1], // Apple-style expo easing
              delay: 0.2 
            }}
            className="mb-8 md:mb-12 relative"
          >
            <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-full animate-pulse" />
            <h1 className="text-[12vw] md:text-[10rem] font-black text-white leading-[0.8] tracking-[-0.05em] text-gradient mb-8 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              ARYAN <br /> SINGH
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6 
            }}
            className="max-w-3xl"
          >
            <p className="text-lg md:text-3xl text-white/40 font-medium mb-12 leading-tight tracking-tight px-4 md:px-0">
              Director & Software Engineer | AI Enthusiast & Filmmaker <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-white"
              >
                "I build digital experiences."
              </motion.span> <br />
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="text-white/60 text-sm md:text-xl block mt-4 font-normal leading-relaxed"
              >
                From fast, minimal web applications to intelligent AI tools. <br className="hidden md:block" />
                Bridging design and engineering. A unique blend of logical problem solving and creative storytelling.
              </motion.span>
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-12 py-6 bg-white text-black font-black rounded-3xl flex items-center gap-4 transition-all hover:shadow-[0_20px_80px_rgba(255,255,255,0.4)] text-sm uppercase tracking-[0.2em]"
              >
                View Masterpieces <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "https://github.com/aryansingh0777raghav", icon: <Github size={24} />, delay: 1.8 },
                  { href: "https://www.linkedin.com/in/iamaryan07", icon: <Linkedin size={24} />, delay: 1.9 },
                  { href: "https://www.instagram.com/iam_aryannnn07", icon: (
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ), delay: 2.0 }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: social.delay, type: "spring", stiffness: 200 }}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-16 h-16 md:w-20 md:h-20 glass rounded-3xl flex items-center justify-center text-white/40 hover:text-white hover:scale-110 hover:border-white/20 transition-all group"
                  >
                    <div className="group-hover:rotate-6 transition-transform">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Availability Ticker */}
      <div className="relative w-full py-10 bg-white/5 border-y border-white/5 overflow-hidden z-10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap flex gap-20 items-center"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/10 uppercase tracking-tighter">
              AVAILABLE FOR FREELANCE WORK ✦ SOFTWARE ENGINEER ✦ FILM DIRECTOR ✦ AI ENTHUSIAST
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Status Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden xl:block z-30"
      >
        <div className="glass rounded-[2rem] p-6 border border-white/5 backdrop-blur-3xl max-w-[280px]">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img 
                src="/images/profile.png" 
                alt="Aryan Singh" 
                className="w-12 h-12 rounded-2xl object-cover border border-white/10"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Currently</p>
              <p className="text-xs font-bold text-white">Available for Freelance</p>
            </div>
          </div>
          <p className="text-[10px] text-white/30 leading-relaxed font-medium">
            Bridging design and engineering. A unique blend of logical problem solving and creative storytelling.
          </p>
        </div>
      </motion.div>
      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-white via-white to-transparent" />
      </motion.div>
    </section>
  );
}


