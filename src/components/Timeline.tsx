import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    company: "Data Culture Technology",
    role: "Python Training",
    period: "Jun 2025 – Aug 2025",
    details: "Learned core Python concepts (data types, functions, OOP). Hands-on exercises, real-world implementation, and building practical solutions."
  },
  {
    company: "CineOn Studio 7",
    role: "Short Film Production",
    period: "2026",
    details: "Writer, Director, Actor, Musician, Editor for \"The Night of Life\". Handled creative direction, pacing, post-production, and final edit."
  }
];

const education = [
  {
    institution: "Institute of Technology and Management, Gorakhpur",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Sep 2024 - Dec 2027"
  },
  {
    institution: "SR International Academy, Nathnagar",
    degree: "Intermediate",
    period: "2022 - 2023"
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl glass flex items-center justify-center text-white/60">
                <Briefcase size={20} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gradient text-left">Experience</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {experience.map((item, i) => (
                <div 
                  key={i}
                  className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative group hover:border-white/20 transition-all"
                >
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">{item.period}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">{item.role}</h3>
                  <p className="text-xs md:text-sm font-bold text-white/40 mb-4">{item.company}</p>
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl glass flex items-center justify-center text-white/60">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gradient text-left">Education</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {education.map((item, i) => (
                <div 
                  key={i}
                  className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative group hover:border-white/20 transition-all"
                >
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">{item.period}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">{item.degree}</h3>
                  <p className="text-xs md:text-sm font-bold text-white/40">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

