import { motion } from 'motion/react';
import { ExternalLink, Film, Database, Globe, Play, Github } from 'lucide-react';

const projects = {
  filmmaking: [
    {
      title: "The Night of Life: Before You Think About It",
      year: "2026",
      image: "/images/The Night of Life.png",
      desc: "A psychological drama short film exploring inner conflict and life-changing decisions.",
      roles: ["Writer", "Director", "Actor", "Musician", "Editor"],
      links: [
        { label: "Full Movie", url: "https://youtu.be/tEvYeAHmCHg", icon: <Play size={14} /> },
        { label: "Trailer", url: "https://youtu.be/R_THbZWmIGs", icon: <Film size={14} /> },
        { label: "IMDb", url: "https://www.imdb.com/title/tt39846631", icon: <ExternalLink size={14} /> },
        { label: "TMDB", url: "https://www.themoviedb.org/movie/1638463-the-night-of-life-before-you-think-about-it", icon: <ExternalLink size={14} /> },
        { label: "Letterboxd", url: "https://boxd.it/116UE", icon: <ExternalLink size={14} /> }
      ]
    }
  ],
  ai: [
    {
      title: "Solexplain AI",
      tech: "TypeScript, AI, Web3, Solana",
      image: "/images/solexplain.png",
      desc: "We are building an AI-powered tool that helps users understand their Solana wallet transactions in simple, human-readable language.",
      link: "https://github.com/aryansingh0777raghav/solexplain-ai"
    },
    {
      title: "Personal AI Voice Assistant",
      tech: "Python, AI, Automation",
      image: "/images/Voiceassistant.png",
      desc: "A desktop assistant built with Python that performs PC tasks via voice commands.",
      link: "#"
    }
  ],
  web: [
    { 
      title: "Scrollytelling Portfolio", 
      desc: "Premium cinematic portfolio with smooth scrolling and high-end animations.", 
      image: "/images/Scrollytelling.png",
      link: "https://scrollytelling-portfolio-of-aryan-s.vercel.app/" 
    },
    { 
      title: "3D Concept Portfolio", 
      desc: "A 3D Concept Portfolio project showcasing creative frontend capabilities.", 
      image: "/images/3D-Portfolio.png",
      link: "https://github.com/aryansingh0777raghav/3D-Concept-Portfolio-project" 
    },
    { 
      title: "Personal-CinePortfolio", 
      desc: "A sleek and performance-driven portfolio, designed with minimalism at its core.", 
      image: "/images/CinePortfolio.png",
      link: "https://aryansingh0777raghav.github.io/Aryan-Singh-Cine-Portfolio/" 
    },
    { 
      title: "Portfolio Terminal", 
      desc: "Interactive terminal-style portfolio.", 
      image: "/images/web-projects.png",
      link: "https://aryansingh0777raghav.github.io/Aryan-Interactive-portfolio/" 
    },
    { 
      title: "Personal Portfolio Minimal V3", 
      desc: "A clean, minimal, and fast personal portfolio website with a focus on simplicity and performance.", 
      image: "/images/MinimalV3.png",
      link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-MinimalV3/" 
    },
    { 
      title: "Personal Portfolio NetUI", 
      desc: "A clean personal portfolio built with NetUI.", 
      image: "/images/NetUI.png",
      link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-NetUI/" 
    },
    { 
      title: "ArTool YouTube Extension", 
      desc: "Download YouTube videos, audio, and thumbnails.", 
      image: "/images/ArTool.png",
      link: "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension" 
    },
    { 
      title: "MySites", 
      desc: "A website saver which saves your website and gives features to search also.", 
      image: "/images/MySites.png",
      link: "https://aryansingh0777raghav.github.io/MySites/" 
    },
    { 
      title: "Certilink", 
      desc: "A project repository for Certilink.", 
      image: "/images/Certilink.png",
      link: "https://aryansingh0777raghav.github.io/certilink/" 
    },
    { 
      title: "Chess Game", 
      desc: "A functional chess game built for the web.", 
      image: "/images/Chess.png",
      link: "https://github.com/aryansingh0777raghav/Chess-Game" 
    }
  ]
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Curated Works
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-gradient text-center"
          >
            Selected Projects
          </motion.h2>
        </div>

        {/* Filmmaking Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60">
              <Film size={18} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white/80">Filmmaking</h3>
          </div>
          <div className="grid gap-6 md:gap-10">
            {projects.filmmaking.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="group relative overflow-hidden glass rounded-3xl md:rounded-[3rem] p-6 md:p-12 transition-all hover:border-white/20 min-h-[400px] md:min-h-[500px] flex items-center"
              >
                {/* Background Image with Improved Visibility */}
                <div 
                  className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[1] md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 w-full">
                  <div className="bg-black/60 md:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <h4 className="text-2xl md:text-6xl font-black tracking-tighter leading-tight md:leading-none">{item.title}</h4>
                    </div>
                    <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-10 leading-relaxed max-w-xl font-medium">{item.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-10">
                      {item.roles.map(role => (
                        <span key={role} className="px-3 py-1 md:px-4 md:py-1.5 glass rounded-full text-[9px] md:text-[10px] font-bold tracking-wider text-white/60 uppercase">{role}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-end lg:items-end">
                    <div className="grid grid-cols-2 gap-2 md:gap-3 w-full max-w-sm">
                      {item.links.map(link => (
                        <a 
                          key={link.label} 
                          href={link.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="glass rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-start gap-2 md:gap-3 hover:bg-white hover:text-black transition-all group/link"
                        >
                          <div className="text-white group-hover/link:text-black transition-colors">{link.icon}</div>
                          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI & Web Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-32">
          {/* AI & Python */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60">
                <Database size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white/80">AI & Python</h3>
            </div>
            <div className="grid gap-6 flex-1">
              {projects.ai.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  className="glass rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[350px]"
                >
                  <div 
                    className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[1]" />

                  <div className="relative z-10 bg-black/60 md:bg-black/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/5">
                    <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">{item.tech}</p>
                    <p className="text-white/70 text-xs md:text-sm mb-6 leading-relaxed font-medium">{item.desc}</p>
                    {item.link !== "#" && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                        <Github size={14} /> Repository <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60">
                <Globe size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white/80">Web Development</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {projects.web.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
                  className="glass rounded-2xl p-5 md:p-6 hover:bg-white/5 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[200px] md:min-h-[250px]"
                >
                  <div 
                    className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[1]" />
                  
                  <div className="relative z-10 bg-black/70 md:bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                    <h4 className="font-bold text-xs md:text-sm mb-2 group-hover:text-white transition-colors tracking-tight">{item.title}</h4>
                    <p className="text-[9px] md:text-[10px] text-white/50 mb-4 font-medium leading-tight line-clamp-2 md:line-clamp-none">{item.desc}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-2">
                        View Project <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



