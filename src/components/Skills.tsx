import { motion, useScroll, useTransform } from 'motion/react';

const skills = {
  technical: ["Python", "Pandas", "JAVA Basic", "C", "C++", "HTML", "Data Structures", "Algorithms", "SQL", "JavaScript", "React"],
  creative: ["Writer", "Director", "Actor", "Musician", "Editor", "UI/UX Design"]
};

export default function Skills() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Refined Parallax Background Text (Outlined Engineering Style) */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-[-5%] text-[20vw] font-black select-none pointer-events-none whitespace-nowrap z-0 tracking-tighter opacity-[0.02]"
      >
        <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
          ENGINEERING • PRECISION • CODE •
        </span>
      </motion.div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
          Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-20 tracking-tighter text-gradient">Skills & Capabilities</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-10 border border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 md:mb-10 font-black">Technical Stack</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {skills.technical.map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.05, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold tracking-wider text-white/70 hover:bg-white hover:text-black transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-10 border border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 md:mb-10 font-black">Creative Arts</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {skills.creative.map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.05 + 0.5, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold tracking-wider text-white/70 hover:bg-white hover:text-black transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

