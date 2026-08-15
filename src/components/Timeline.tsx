import { Briefcase, GraduationCap, ExternalLink, Linkedin } from 'lucide-react';

interface TimelineProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const experience = [
  {
    company: "ArkTest (Application Review Kit)",
    role: "Founder & Lead Creator",
    period: "2026 – Present",
    type: "tech" as const,
    details: "Founded and architected ArkTest, a crowdsourced application review kit and beta testing platform connecting indie developers with real testers. Built the platform architecture, gamified ArK points system, and Creator Studio.",
    link: "https://arktest-beta.vercel.app/",
    linkedin: "https://www.linkedin.com/company/arktest-beta/"
  },
  {
    company: "Data Culture Technology",
    role: "Python Training",
    period: "Jun 2025 – Aug 2025",
    type: "tech" as const,
    details: "Learned core Python concepts (data types, functions, OOP). Hands-on exercises, real-world implementation, and building practical solutions."
  },
  {
    company: "Samsung Innovation Campus",
    role: "Big Data Certification",
    period: "Oct 2025 – Nov 2025",
    type: "tech" as const,
    details: "Successfully completed the Big Data course (Certificate ID: SIC08720), specializing in big data tools and techniques for processing, managing, and analyzing large datasets."
  },
  {
    company: "CineOn Studio 7",
    role: "Short Film Production",
    period: "2026",
    type: "filmmaking" as const,
    details: "Writer, Director, Actor, Musician, Editor for \"The Night of Life\". Featured on The Indian Blog for redefining independent storytelling. Handled creative direction, pacing, post-production, and final edit."
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

export default function Timeline({ viewMode }: TimelineProps) {
  // Filter experiences based on selected path
  const filteredExperience = experience.filter(item => {
    if (viewMode === 'tech') return item.type === 'tech';
    if (viewMode === 'filmmaking') return item.type === 'filmmaking';
    return true;
  });

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
              {filteredExperience.map((item, i) => (
                <div 
                  key={i}
                  className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative group hover:border-white/20 transition-colors duration-300"
                >
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">{item.period}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">{item.role}</h3>
                  <p className="text-xs md:text-sm font-bold text-white/40 mb-4">{item.company}</p>
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-4">{item.details}</p>
                  {(item.link || item.linkedin) && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink size={12} /> Live Platform
                        </a>
                      )}
                      {item.linkedin && (
                        <a 
                          href={item.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 flex items-center gap-1.5 transition-colors"
                        >
                          <Linkedin size={12} /> LinkedIn Page
                        </a>
                      )}
                    </div>
                  )}
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
                  className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative group hover:border-white/20 transition-colors duration-300"
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
