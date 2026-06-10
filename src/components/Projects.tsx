import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Film, Database, Globe, Play, Github, Info, X, Sparkles, Cpu, Mic, Volume2, Search, Code, BookOpen, Layers } from 'lucide-react';

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
      title: "ArLip (AI Shorts Generator)",
      tech: "React, FastAPI, Groq API, FFmpeg, yt-dlp, Python, AI",
      image: "/images/ArLip.png",
      desc: "A production-ready, full-stack web application that downloads landscape YouTube videos and automatically transcribes, analyzes, trims, and center-crops them into multiple 9:16 viral vertical Shorts with burned-in subtitles.",
      link: "https://github.com/aryansingh0777raghav/ArLip",
      tagline: "Automated Shorts. Viral Reach.",
      coreVision: "ArLip is a production-ready, full-stack web application designed for content creators. It automates the entire pipeline of turning long-form landscape YouTube videos into engaging, TikTok-style vertical shorts with styled subtitles and viral metadata.",
      techStack: [
        { name: "React (Vite)", desc: "Interactive frontend dashboard and vertical video player UI" },
        { name: "FastAPI (Python)", desc: "High-performance backend API and background processing worker" },
        { name: "Groq Cloud API", desc: "Whisper-v3 for ultra-fast transcription and Llama-3.3-70b for viral moment analysis" },
        { name: "FFmpeg & OpenCV", desc: "Subprocess engine for video trimming, center-cropping, and burning custom animated subtitles" },
        { name: "yt-dlp", desc: "Robust handler for extracting high-quality video and audio streams" },
        { name: "SQLAlchemy & SQLite", desc: "Database models for tracking job status and clips metadata" }
      ],
      features: [
        {
          title: "Automated Download & Stream Extraction",
          desc: "Extracts combined video and audio streams directly from any landscape YouTube URL via a robust yt-dlp handler."
        },
        {
          title: "Ultra-Fast Transcription",
          desc: "Converts audio files using the high-performance Groq Whisper API (distil-whisper-large-v3-en) with word-level timestamps."
        },
        {
          title: "AI Moment & Virality Analysis",
          desc: "Uses Groq Llama-3.3-70b in JSON mode to isolate the most engaging hooks, stories, or takeaways and suggest catching viral metadata."
        },
        {
          title: "Center-Crop 9:16 Vertical formatting",
          desc: "Recenter-crops horizontal format to portrait aspect ratios using custom FFmpeg filter operations."
        },
        {
          title: "TikTok-Style Burned-in Subtitles",
          desc: "Automatically creates word-grouped subtitles and burns them onto the video with viral creator styling (bold font, yellow-and-white accents, black outline)."
        },
        {
          title: "Interactive Dashboard",
          desc: "Track pipeline progress, preview clips in a vertical HTML5 video player, and download finished short MP4 videos."
        }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArLip" },
        { label: "Technical Walkthrough", url: "https://github.com/aryansingh0777raghav/ArLip#readme" }
      ]
    },
    {
      title: "ArCh (Aryan Search Engine)",
      tech: "Electron.js, FastAPI, Groq API, Vosk STT, Piper TTS, Python, AI, Desktop",
      image: "/images/arch.png",
      desc: "A premium, Perplexity-style AI-powered desktop search engine that searches the web in real-time, extracts main article contexts, and compiles cited AI summaries—100% free of paid search API dependencies.",
      link: "https://github.com/aryansingh0777raghav/ArCh",
      tagline: "Search Smarter. Think Faster.",
      coreVision: "A premium, Perplexity-style AI-powered desktop search engine that compiles cited AI summaries in real-time. It completely bypasses paid search API dependencies by utilizing custom concurrent scraping.",
      techStack: [
        { name: "Electron.js", desc: "Desktop app shell and glassmorphism interface" },
        { name: "FastAPI (Python)", desc: "High-performance backend API service" },
        { name: "Groq API (Llama-3.3-70b)", desc: "Ultra-fast LLM inference for cited summaries" },
        { name: "BeautifulSoup4 & aiohttp", desc: "Custom concurrent async web scraper" },
        { name: "Vosk STT", desc: "Offline, local Speech-to-Text translation" },
        { name: "Piper TTS", desc: "Offline, local Text-to-Speech narration" },
        { name: "HTML5 / CSS3 / Vanilla JS", desc: "Modern Glassmorphism UI" }
      ],
      features: [
        {
          title: "Custom Web Crawler",
          desc: "Bypasses paid search APIs by scraping DuckDuckGo, fetching top target pages concurrently, and cleaning ads/scripts to build a rich LLM context in real time."
        },
        {
          title: "Offline Speech-to-Text (STT)",
          desc: "Local microphone recording with Vosk models, using mono byte-slicing for high voice transcription accuracy."
        },
        {
          title: "Offline Text-to-Speech (TTS)",
          desc: "Narrates search summaries using local Piper ONNX voices (US English & Hindi) and Windows SAPI fallback."
        },
        {
          title: "Bilingual & Hands-Free Interaction",
          desc: "Supports voice inputs in both English and Hindi. Automatically speaks the answer out loud when voice-triggered."
        },
        {
          title: "Local Cache & Storage",
          desc: "Optimizes speed and offline lookups via local query MD5 caching, local search history, and bookmarks."
        }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArCh" },
        { label: "Technical Walkthrough", url: "https://github.com/aryansingh0777raghav/ArCh#readme" }
      ]
    },
    {
      title: "Solexplain AI",
      tech: "TypeScript, AI, Web3, Solana",
      image: "/images/solexplain.png",
      desc: "We are building an AI-powered tool that helps users understand their Solana wallet transactions in simple, human-readable language.",
      link: "https://github.com/aryansingh0777raghav/solexplain-ai",
      tagline: "Understand Your Transactions. Simplify Web3.",
      coreVision: "Solexplain AI decodes complex, low-level Solana blockchain transactions into simple, plain English summaries, protecting users from malicious drains and phishing.",
      techStack: [
        { name: "TypeScript", desc: "Strongly-typed frontend client logic" },
        { name: "Solana Web3.js", desc: "Ledger integration and transaction fetching" },
        { name: "OpenAI API", desc: "Generative transaction parsing and analysis" },
        { name: "React & TailwindCSS", desc: "Modern clean web user interface" }
      ],
      features: [
        {
          title: "Transaction Decryption",
          desc: "Converts complex transaction instructions and logs into readable objects."
        },
        {
          title: "AI Risk Analysis",
          desc: "Scans transactions for known drainer patterns and security risks."
        },
        {
          title: "Human-Readable Summaries",
          desc: "Generates clear explanations of which tokens are moving in/out of the wallet."
        }
      ]
    },
    {
      title: "Personal AI Voice Assistant",
      tech: "Python, AI, Automation",
      image: "/images/Voiceassistant.png",
      desc: "A desktop assistant built with Python that performs PC tasks via voice commands.",
      link: "#",
      tagline: "Automate Your Desktop. Control with Voice.",
      coreVision: "A voice-activated automation assistant built in Python that executes system commands, launches applications, and handles offline tasks using voice triggers.",
      techStack: [
        { name: "Python", desc: "Core logic and system automation scripts" },
        { name: "SpeechRecognition", desc: "Audio capture and speech interpretation" },
        { name: "Pyttsx3", desc: "Offline text-to-speech voice narration" },
        { name: "OS & Subprocess", desc: "Direct operating system process management" }
      ],
      features: [
        {
          title: "Desktop Automation",
          desc: "Launch programs, open web links, take screenshots, and lock/shutdown PC."
        },
        {
          title: "System Monitoring",
          desc: "Queries system stats like battery life, CPU temperature, and active processes."
        },
        {
          title: "Extensible Voice Commands",
          desc: "Add new commands easily by defining Python functions."
        }
      ]
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Refined Parallax Background Text (Outlined Cinematic Style) */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-[-10%] text-[18vw] font-black select-none pointer-events-none whitespace-nowrap z-0 tracking-tighter opacity-[0.03] uppercase"
        shadow-text="FEATURED WORKS"
      >
        <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
          FEATURED • PROJECTS • CINEMATIC • WORKS • 
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                  onClick={() => setSelectedProject(item)}
                  className="glass rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[350px] cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[1]" />

                  <div className="relative z-10 bg-black/60 md:bg-black/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/5">
                    <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{item.title}</h4>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tech.split(',').map((tag) => (
                        <span key={tag.trim()} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold tracking-wider text-white/60 uppercase">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="text-white/70 text-xs md:text-sm mb-6 leading-relaxed font-medium line-clamp-3 md:line-clamp-none">{item.desc}</p>
                    
                    <div className="flex flex-wrap gap-4 items-center mt-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(item);
                        }}
                        className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
                      >
                        <Info size={14} /> Details
                      </button>
                      {item.link !== "#" && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                        >
                          <Github size={14} /> Repository <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
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

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-[2rem] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-10 flex flex-col gap-6 md:gap-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer z-20 text-white/70"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-12 gap-6 md:gap-8 mt-4">
                {/* Left column: Image & Tech Stack & Buttons */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  {/* Image container */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback in case user hasn't added the image yet
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  
                  {/* Tech Stack List */}
                  {selectedProject.techStack && (
                    <div className="flex flex-col gap-3">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <Cpu size={12} /> Tech Architecture
                      </h4>
                      <div className="flex flex-col gap-2">
                        {selectedProject.techStack.map((techItem: any, idx: number) => (
                          <div key={idx} className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col gap-0.5 hover:border-white/10 transition-colors">
                            <span className="text-xs font-bold text-white/90">{techItem.name}</span>
                            {techItem.desc && <span className="text-[10px] text-white/50 font-medium">{techItem.desc}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="flex flex-col gap-2 mt-2">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="glass rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all font-bold text-[10px] md:text-xs uppercase tracking-widest text-white/80"
                      >
                        <Github size={14} /> Repository <ExternalLink size={10} />
                      </a>
                    )}
                    {selectedProject.links && selectedProject.links.map((lnk: any, idx: number) => {
                      if (lnk.url === selectedProject.link) return null;
                      return (
                        <a 
                          key={idx}
                          href={lnk.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="glass rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all font-bold text-[10px] md:text-xs uppercase tracking-widest text-white/80"
                        >
                          <BookOpen size={14} /> {lnk.label} <ExternalLink size={10} />
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                {/* Right column: Vision & Features */}
                <div className="md:col-span-7 flex flex-col gap-6">
                  {/* Header */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                      Project Showcase
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2 leading-tight">{selectedProject.title}</h3>
                    {selectedProject.tagline && (
                      <p className="text-sm font-semibold text-gradient mb-4">{selectedProject.tagline}</p>
                    )}
                    <hr className="border-white/5" />
                  </div>
                  
                  {/* Core Vision */}
                  {selectedProject.coreVision && (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <Sparkles size={12} /> Core Vision
                      </h4>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium">
                        {selectedProject.coreVision}
                      </p>
                    </div>
                  )}
                  
                  {/* Key Features */}
                  {selectedProject.features && (
                    <div className="flex flex-col gap-3">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <Layers size={12} /> Key Highlights
                      </h4>
                      <div className="flex flex-col gap-4">
                        {selectedProject.features.map((feature: any, idx: number) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                            <div className="flex flex-col gap-0.5">
                              <span className="text-xs font-bold text-white/90 leading-none">{feature.title}</span>
                              <span className="text-xs text-white/60 leading-relaxed font-medium">{feature.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}




