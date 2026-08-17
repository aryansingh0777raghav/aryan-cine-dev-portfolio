import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Film, Database, Globe, Play, Github, Linkedin, Info, X, Sparkles, Cpu, Mic, Volume2, Search, Code, BookOpen, Layers, Newspaper } from 'lucide-react';

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
        { label: "Press Feature", url: "https://indianblog.co.in/aryan-singh-filmmaker/", icon: <Newspaper size={14} /> },
        { label: "IMDb", url: "https://www.imdb.com/title/tt39846631", icon: <ExternalLink size={14} /> },
        { label: "TMDB", url: "https://www.themoviedb.org/movie/1638463-the-night-of-life-before-you-think-about-it", icon: <ExternalLink size={14} /> },
        { label: "Letterboxd", url: "https://boxd.it/116UE", icon: <ExternalLink size={14} /> },
        { label: "FilmFreeway", url: "https://filmfreeway.com/iamaryannnn07", icon: <ExternalLink size={14} /> }
      ]
    }
  ],
  ai: [
    {
      title: "ArKTest Beta (Application Review Kit)",
      tech: "FastAPI (Python 3.14), PostgreSQL / SQLAlchemy, Vanilla JS, Bootstrap 5, PWA, Vercel",
      image: "/images/arktest.png",
      desc: "ArKTest Beta is a full-stack web application designed to solve the $100/mo barrier of traditional QA testing for indie developers. Built with FastAPI, PostgreSQL/SQLAlchemy, and Vanilla JavaScript, it features an automated ArK Points escrow economy, real-time public telemetry, dispute arbitration, multi-tier reputation ranks, and individual CSV transaction exports.",
      link: "https://arktest-beta.vercel.app",
      github: "https://github.com/aryansingh0777raghav/ArKTest",
      linkedin: "https://www.linkedin.com/company/arktest-beta/",
      role: "Founder & Lead Full-Stack Architect (Founded by Aryan Singh, Co-Founded by Vijay Laxmi Singh)",
      tagline: "A Full-Stack Crowd Testing & QA Innovation Platform Connecting Indie Developers with Verified QA Testers",
      coreVision: "ArKTest Beta is a full-stack web application designed to solve the $100/mo barrier of traditional QA testing for indie developers. Built with FastAPI, PostgreSQL/SQLAlchemy, and Vanilla JavaScript, it features an automated ArK Points escrow economy, real-time public telemetry, dispute arbitration, multi-tier reputation ranks, and individual CSV transaction exports.",
      metrics: [
        { label: "0% Race Condition Risk", desc: "Pessimistic database locking protects financial ledger operations from concurrent payout conflicts." },
        { label: "100% Automated Escrow Refunds", desc: "Unused campaign escrow points are automatically returned to creators." },
        { label: "PWA Ready", desc: "Native home-screen installable experience for supported iOS and Android workflows." },
        { label: "100% Pytest API Suite Passing", desc: "Automated API test suite currently passing." }
      ],
      techStack: [
        { name: "FastAPI (Python 3.14)", desc: "High-performance backend API framework handling endpoints, routing, and live telemetry." },
        { name: "PostgreSQL & SQLite (SQLAlchemy ORM)", desc: "Enterprise database schema with pessimistic row-level locking (with_for_update()) for zero-race-condition ledger transactions." },
        { name: "Security & Auth (OWASP)", desc: "JWT Tokens, PBKDF2 SHA-256 hashing, rate-limited OTP dispatches (3 attempts / 5 mins), Pydantic URL sanitization, and CORS whitelist." },
        { name: "JavaScript ES6+ & Bootstrap 5", desc: "Native ES6+ frontend engine with custom glassmorphism design system, responsive layouts, and zero framework overhead." },
        { name: "Services & Testing", desc: "Multi-account Gmail SMTP pool with automatic fallback and 100% Pytest automated suite coverage." },
        { name: "PWA & Vercel Deployment", desc: "Native mobile installability, service worker caching, public aggregate telemetry, and Vercel cloud deployment." }
      ],
      features: [
        {
          title: "1. Automated Escrow-Backed Reward Economy",
          desc: "Engineered an atomic escrow lock system (Reward Points × Max Testers). Points are locked when a campaign launches and automatically refunded to creators when campaigns end or are cancelled."
        },
        {
          title: "2. Full-Stack OWASP Security Remediation",
          desc: "Implemented pessimistic row-level locking using with_for_update(), race-condition protection during point payouts, PBKDF2 SHA-256 password hashing, JWT authorization, rate-limited OTP dispatches (3 attempts / 5 mins), Pydantic URL sanitization, and production CORS whitelist."
        },
        {
          title: "3. Interactive Financial Ledgers & CSV Exports",
          desc: "Built transaction-management functionality allowing administrators to inspect any user's complete point ledger, inspect individual transactions, track point movements, generate single-user CSV financial reports, and export reports with one click."
        },
        {
          title: "4. Multi-Tier Reputation & Badge Engine",
          desc: "Automatic reputation progression (Bronze → Silver → Gold → Platinum), paired with administrative Early Tester (first 25 onboarding users) and Verified Tester credentials."
        },
        {
          title: "5. Multi-Account SMTP Auto-Failover Engine",
          desc: "Developed a multi-account Gmail SMTP pool with automatic fallback for account verification OTPs, password reset OTPs, SMTP failure recovery, and reliable email delivery."
        },
        {
          title: "6. Progressive Web App & Public Telemetry",
          desc: "Includes PWA support, native mobile installation, service worker caching, responsive mobile experience, and an unauthenticated aggregate homepage statistics endpoint."
        }
      ],
      links: [
        { label: "Live Demo", url: "https://arktest-beta.vercel.app" },
        { label: "GitHub Repo", url: "https://github.com/aryansingh0777raghav/ArKTest" },
        { label: "LinkedIn Page", url: "https://www.linkedin.com/company/arktest-beta/" }
      ]
    },
    {
      title: "ArType",
      tech: "Kotlin, Jetpack Compose, Material 3, Groq API, Android Accessibility Service",
      image: "/images/artype.png",
      desc: "A lightweight AI-powered Android writing assistant that works alongside any existing keyboard instead of replacing it. Using Android Accessibility Services, a floating overlay, and Groq AI, ArType enables multilingual voice typing, AI-powered text improvement, smart replies, and text rewriting across any Android application while keeping user data private through Bring Your Own API Keys.",
      link: "https://github.com/aryansingh0777raghav/ArType",
      tagline: "AI Writing Assistant for Every Keyboard",
      coreVision: "ArType is a privacy-first Android application built with Kotlin and Jetpack Compose. Instead of replacing the user's keyboard, it acts as an intelligent AI layer over existing keyboards such as Gboard, Samsung Keyboard, and SwiftKey. It combines Android Accessibility Services, multilingual speech recognition, and Groq AI to deliver fast, secure, and context-aware writing assistance across all apps.",
      techStack: [
        { name: "Kotlin 2.0 & Jetpack Compose", desc: "Powers the premium Material 3 user interface with responsive layouts, fluid animations, and a modern custom theme." },
        { name: "Android Accessibility Service", desc: "Integrates deep system-level overlays and text detection to inject and rewrite text in active text fields seamlessly." },
        { name: "Groq Cloud API", desc: "Leverages fast LLM inference to provide instant voice typing transcribing, context-aware rewriting, and smart replies." },
        { name: "SpeechRecognizer", desc: "Handles bilingual/multilingual voice input for English, Hindi, and Hinglish with automatic speech-to-text conversion." },
        { name: "EncryptedSharedPreferences", desc: "Secures user-provided Groq API keys locally using Android Keystore hardware-backed encryption." }
      ],
      features: [
        {
          title: "Floating AI Bubble Overlay",
          desc: "Displays an intuitive, non-obtrusive floating shortcut bubble when text input fields gain focus, providing instant access to writing actions."
        },
        {
          title: "Multilingual Voice Typing",
          desc: "Dictate naturally in English, Hindi, or Hinglish. Features automatic language detection and AI-driven punctuation formatting."
        },
        {
          title: "Smart Contextual Replies",
          desc: "Generates three relevant, situation-specific reply suggestions based on the text context with a single tap."
        },
        {
          title: "Seven Versatile Rewrite Modes",
          desc: "Supports quick tone and style adjustments: Fix Grammar, Professional, Friendly, Formal, Casual, Shorter, and Longer rewriting formats."
        },
        {
          title: "Bring Your Own API Key (BYOK)",
          desc: "Allows direct client-to-API communication with Groq without intermediate servers, keeping your writing data completely private."
        },
        {
          title: "System-Wide Keyboard Integration",
          desc: "Integrates smoothly over Gboard, Samsung Keyboard, SwiftKey, and any other system keyboards without requiring replacement."
        }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArType" },
        { label: "Download APK", url: "https://github.com/aryansingh0777raghav/ArType/releases" }
      ]
    },
    {
      title: "ArVerse OS",
      tech: "React, Tailwind CSS, Vite, Framer Motion, Context API, AI",
      image: "/images/ArVerse.png",
      desc: "A next-generation virtual OS simulator running entirely in the browser. It features a complete window manager, customizable wallpapers, booting and lock screens, spotlight search, application switcher, and a custom AI assistant brain (ArKon Brain) for intelligent system-wide automation.",
      link: "https://github.com/aryansingh0777raghav/ArVerse-OS",
      tagline: "The AI-Powered Virtual Operating System.",
      coreVision: "ArVerse OS is a next-generation virtual OS simulator running entirely in the browser. It features a complete window manager, customizable wallpapers, booting and lock screens, spotlight search, application switcher, and a custom AI assistant brain (ArKon Brain) for intelligent system-wide automation and focus mode management.",
      techStack: [
        { name: "React & Context API", desc: "Handles overall state machine, workspace environments, and theme configurations" },
        { name: "Tailwind CSS & Framer Motion", desc: "Powers the premium glassmorphism layouts, workspace transitions, and window animations" },
        { name: "Virtual OS Shell", desc: "Booting sequence, lock screens, and custom desktop control center configurations" },
        { name: "ArKon Brain", desc: "AI assistant core integration designed for task tracking and voice spotlight automation queries" },
        { name: "Spotlight Launcher", desc: "Quick keyboard-triggered portal (Ctrl+K) to execute system-wide queries, search apps, and prompt AI" }
      ],
      features: [
        {
          title: "Virtual OS Desktop Shell",
          desc: "Simulates a complete desktop environment with an interactive BootScreen, LockScreen, top MenuBar, application Dock, and Control Center."
        },
        {
          title: "Window Management System",
          desc: "Supports running multiple apps simultaneously in draggable, resizable, and minimizable windows with a custom AppSwitcher."
        },
        {
          title: "ArKon Brain Integration",
          desc: "Integrated AI logic (ArKon Brain) that processes user requests and assists with focus mode controls, spotlight search, and system settings."
        },
        {
          title: "Spotlight Search Overlay",
          desc: "Quick launcher triggerable via shortcut (Ctrl+K) to search apps, execute shell queries, or ask the AI assistant."
        },
        {
          title: "Focus Mode Dashboard",
          desc: "A customized distraction-free workspace that optimizes task tracking, displays time blocks, and silences background alerts."
        }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArVerse-OS" },
        { label: "Technical Walkthrough", url: "https://github.com/aryansingh0777raghav/ArVerse-OS#readme" }
      ]
    },
    {
      title: "ArFt (Frontend Sandbox)",
      tech: "React, Vite, Groq API, Monaco Editor, JSZip, IndexedDB, AI",
      image: "/images/ArFt.png",
      desc: "A browser-based AI frontend development IDE and playground. It features a virtual file system (VFS), Monaco code editor integration, responsive multi-device preview, local IndexedDB persistence, file directory importing via Native Filesystem APIs, and an integrated AI website builder.",
      link: "https://github.com/aryansingh0777raghav/ArFt",
      tagline: "The AI-Powered Frontend Sandbox.",
      coreVision: "ArFt is a browser-based AI frontend development IDE and playground. It features a virtual file system (VFS), Monaco code editor integration, responsive multi-device preview, local IndexedDB persistence, file directory importing via Native Filesystem APIs, and an integrated AI agent (powered by Groq Llama models) that can generate, improve, explain, or refactor HTML, CSS, and JS components dynamically.",
      techStack: [
        { name: "React (Vite)", desc: "Interactive frontend sandbox dashboard and device preview control" },
        { name: "Monaco Code Editor", desc: "Integrates standard tabbed programming workspace with live syntax highlighting and auto-formatting" },
        { name: "Groq Cloud API", desc: "Uses Llama-3.3-70b-versatile for code generation, explanation modes, and real-time refactoring" },
        { name: "Native Filesystem API", desc: "Allows importing entire local folder hierarchies via window.showDirectoryPicker()" },
        { name: "JSZip & IndexedDB", desc: "Enables exporting files as ZIPs and auto-saving project workspaces locally" }
      ],
      features: [
        {
          title: "AI Website Builder",
          desc: "Instantly generates complete frontend landing pages, blogs, and interfaces from natural language prompts using Groq Llama-3.3-70b."
        },
        {
          title: "Interactive Live Preview",
          desc: "Interactive sandbox that renders changes in real time with desktop, tablet, and mobile viewport controls."
        },
        {
          title: "Monaco Code Editor",
          desc: "Professional, tabbed code editing experience powered by Monaco Editor with syntax highlighting and auto-formatting."
        },
        {
          title: "Directory Import",
          desc: "Bypasses browser sandboxing to open, load, and edit entire local folder hierarchies via window Native Filesystem API triggers."
        },
        {
          title: "Learning & Explanation Mode",
          desc: "Let creators explain specific lines of code, analyze stylesheets, or map component layouts using AI."
        },
        {
          title: "IndexedDB Workspace",
          desc: "Automatically saves and loads projects locally to allow offline work across browser sessions."
        }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArFt" },
        { label: "Technical Walkthrough", url: "https://github.com/aryansingh0777raghav/ArFt#readme" }
      ]
    },
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
      title: "ArkTest Beta Testing Platform", 
      desc: "Crowdsourced application review kit & beta testing platform connecting indie developers with real testers.", 
      image: "/images/arktest.png",
      link: "https://arktest-beta.vercel.app/" 
    },
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
      link: "https://github.com/aryansingh0777raghav/ArTool" 
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

interface ProjectsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Projects({ viewMode }: ProjectsProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Refined Parallax Background Text (Outlined Cinematic Style) */}
      <motion.div 
        style={{ y }}
        className="hidden md:block absolute top-20 left-[-10%] text-[18vw] font-black select-none pointer-events-none whitespace-nowrap z-0 tracking-tighter opacity-[0.03] uppercase transform-gpu"
        shadow-text="FEATURED WORKS"
      >
        <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
          {viewMode === 'tech' ? 'ENGINEERING • SOFTWARE • CODE • SYSTEMS • ' :
           viewMode === 'filmmaking' ? 'CINEMATIC • STORIES • DIRECTING • FILMS • ' :
           'FEATURED • PROJECTS • CINEMATIC • WORKS • '}
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

        {/* Flagship Tech Application Spotlight: ArKTest Beta */}
        {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 md:mb-32 relative group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-black tracking-widest uppercase">
                <Sparkles size={14} className="text-amber-400" /> Flagship Platform • QA Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold tracking-widest uppercase">
                Founder & Lead Full-Stack Architect
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                Vercel Deployed
              </span>
            </div>

            <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-12 border border-white/10 bg-white/[0.015] hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden relative">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                {/* Left Thumbnail & Impact Metrics Showcase */}
                <div className="lg:col-span-6 relative group/img space-y-4">
                  <div 
                    onClick={() => setSelectedProject(projects.ai[0])}
                    className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-pointer"
                  >
                    <img 
                      src="/images/arktest.png" 
                      alt="ArKTest Beta Application Review Kit Dashboard" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-700 transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                        Interactive Dashboard Preview
                      </span>
                      <span className="text-xs font-bold text-black bg-white px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                        View Details <Info size={14} />
                      </span>
                    </div>
                  </div>

                  {/* 4 Key Metrics Pills */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="glass rounded-xl p-3 border border-white/5 bg-white/[0.02]">
                      <p className="text-[10px] font-black text-amber-400 uppercase tracking-wider mb-0.5">0% Race Condition Risk</p>
                      <p className="text-[10px] text-white/60 font-medium leading-tight">Pessimistic database locking protects ledger</p>
                    </div>
                    <div className="glass rounded-xl p-3 border border-white/5 bg-white/[0.02]">
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-wider mb-0.5">100% Escrow Refunds</p>
                      <p className="text-[10px] text-white/60 font-medium leading-tight">Unused points returned to creators</p>
                    </div>
                    <div className="glass rounded-xl p-3 border border-white/5 bg-white/[0.02]">
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-wider mb-0.5">PWA Ready</p>
                      <p className="text-[10px] text-white/60 font-medium leading-tight">Native iOS & Android installable</p>
                    </div>
                    <div className="glass rounded-xl p-3 border border-white/5 bg-white/[0.02]">
                      <p className="text-[10px] font-black text-purple-400 uppercase tracking-wider mb-0.5">100% Pytest API Suite</p>
                      <p className="text-[10px] text-white/60 font-medium leading-tight">Automated API test coverage passing</p>
                    </div>
                  </div>
                </div>

                {/* Right Information & Links */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 leading-none">
                      ArKTest Beta
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-amber-300/90 mb-2 tracking-tight">
                      A Full-Stack Crowd Testing & QA Innovation Platform Connecting Indie Developers with Verified QA Testers
                    </p>
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">
                      Founded by Aryan Singh | Co-Founded by Vijay Laxmi Singh
                    </p>

                    <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium mb-6">
                      ArKTest Beta is a full-stack web application designed to solve the $100/mo barrier of traditional QA testing for indie developers. Built with FastAPI, PostgreSQL/SQLAlchemy, and Vanilla JavaScript, it features an automated ArK Points escrow economy, real-time public telemetry, dispute arbitration, multi-tier reputation ranks, and individual CSV transaction exports.
                    </p>

                    {/* Features checklist */}
                    <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                      {[
                        "Automated Escrow-Backed Reward Economy",
                        "Full-Stack OWASP Security Remediation",
                        "Financial Ledgers & CSV Exports",
                        "Multi-Tier Reputation & Badges",
                        "SMTP Auto-Failover Engine",
                        "Progressive Web App & Public Telemetry"
                      ].map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Cpu size={14} className="text-amber-400 flex-shrink-0" />
                          <span className="text-[11px] text-white/80 font-medium leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-3">
                    <a
                      href="https://arktest-beta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-white text-black font-extrabold rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02]"
                    >
                      <Globe size={14} /> Live Demo <ExternalLink size={13} />
                    </a>

                    <a
                      href="https://github.com/aryansingh0777raghav/ArKTest"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Github size={14} /> GitHub Repo
                    </a>

                    <a
                      href="https://www.linkedin.com/company/arktest-beta/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Linkedin size={14} /> LinkedIn Page
                    </a>

                    <button
                      onClick={() => setSelectedProject(projects.ai[0])}
                      className="px-5 py-3 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-amber-500/20 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Info size={14} /> Full Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filmmaking Section */}
        {(viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null) && (
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
                  className="group relative overflow-hidden glass rounded-3xl md:rounded-[3rem] p-6 md:p-12 transition-[border-color] duration-300 hover:border-white/20 min-h-[400px] md:min-h-[500px] flex items-center"
                >
                  {/* Background Image with Improved Visibility */}
                  <div 
                    className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-[transform,opacity] duration-1000 ease-out bg-cover bg-center"
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
                            className="glass rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-start gap-2 md:gap-3 hover:bg-white hover:text-black transition-colors duration-300 group/link"
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
        )}

        {/* AI & Web Grid */}
        {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
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
                    className="glass rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-[border-color] duration-300 group relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[350px] cursor-pointer"
                  >
                    <div 
                      className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-[transform,opacity] duration-700 ease-out bg-cover bg-center"
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
                    className="glass rounded-2xl p-5 md:p-6 hover:bg-white/5 transition-colors duration-300 group relative overflow-hidden flex flex-col justify-end min-h-[200px] md:min-h-[250px]"
                  >
                    <div 
                      className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-[transform,opacity] duration-700 ease-out bg-cover bg-center"
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
        )}
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
                        className="glass rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white/80"
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
                          className="glass rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white/80"
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




