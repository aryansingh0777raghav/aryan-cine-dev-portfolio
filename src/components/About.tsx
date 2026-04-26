import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6 md:mb-8"
          >
            The Visionary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter text-gradient"
          >
            About Me
          </motion.h2>
          <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm Aryan Singh! With a foundational background in Biology, I bring a unique perspective to technology, 
              combining analytical skills with creativity. My journey from the sciences to tech has strengthened my 
              adaptability and problem-solving abilities, focused entirely on developing practical digital solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I am a continuous learner passionate about emerging tech trends and innovative applications of programming. 
              Whether it's building AI tools, robust web applications, or directing short films, I aim to create 
              impactful digital experiences.
            </motion.p>
          </div>
          
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-bold">Titles</p>
              <p className="text-white text-sm md:text-base font-bold leading-snug">Director & Software Engineer | AI Enthusiast & Filmmaker</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-bold">Industry Profiles</p>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                {["IMDb", "TMDB", "Letterboxd", "FilmFreeway"].map((label, idx) => (
                  <motion.a 
                    key={label}
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    href={
                      label === "IMDb" ? "https://www.imdb.com/name/nm18214429" :
                      label === "TMDB" ? "https://www.themoviedb.org/person/6018661-aryan-singh" :
                      label === "Letterboxd" ? "https://boxd.it/2VQn1" :
                      "https://filmfreeway.com/iamaryannnn07"
                    }
                    target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold text-white/60 transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] md:aspect-square rounded-3xl md:rounded-[3rem] overflow-hidden glass border border-white/10 group"
        >
          {/* Profile Image */}
          <img 
            src="/images/profile.png" 
            alt="Aryan Singh" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
            <div className="glass-dark rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 backdrop-blur-3xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] md:text-[10px] font-black text-white/40 uppercase tracking-widest">CineOn Studio 7</p>
                <a href="https://www.youtube.com/@cineonstudio7?sub_confirmation=1" target="_blank" rel="noreferrer" className="text-[9px] md:text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded">SUBSCRIBE</a>
              </div>
              <p className="text-[10px] md:text-xs text-white/60 font-medium italic">
                "Bridging the gap between biological complexity and digital precision."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

