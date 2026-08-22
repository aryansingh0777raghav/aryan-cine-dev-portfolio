import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  Globe, 
  ArrowUpRight, 
  X, 
  Play, 
  Linkedin,
  Github,
  Layers,
  Cpu,
  Film,
  Newspaper,
  BookOpen,
  Award,
  Search
} from 'lucide-react';
import { soundFX } from '../utils/audio';

interface Project {
  title: string;
  category?: string;
  tech: string;
  image: string;
  desc: string;
  link?: string;
  github?: string;
  linkedin?: string;
  role?: string;
  year?: string;
  tagline?: string;
  coreVision?: string;
  roles?: string[];
  techStack?: { name: string; desc: string }[];
  features?: { title: string; desc: string }[];
  modalHighlights?: { title: string; desc: string }[];
  metrics?: { label: string; desc: string }[];
  links?: { label: string; url: string; icon?: any }[];
  highlights?: string[];
  imdb?: string;
  tmdb?: string;
  letterboxd?: string;
  filmfreeway?: string;
  youtube?: string;
}

interface ProjectsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Projects({ viewMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'web' | 'film'>('all');

  const flagshipProject: Project = {
    title: "ArKTest Beta (Application Review Kit)",
    category: "Flagship Full-Stack Platform",
    tech: "FastAPI (Python 3.14), PostgreSQL / SQLAlchemy, SQLite, Vanilla JS, Bootstrap 5, JWT/PBKDF2/OTP, SMTP Pool, PWA, Vercel",
    image: "/images/arktest.png",
    desc: "ArKTest Beta is a full-stack crowd testing and QA marketplace designed to solve the $100/mo barrier of traditional QA testing for indie developers. Built with FastAPI, PostgreSQL/SQLAlchemy, and Vanilla JavaScript, it features an automated ArK Points escrow economy, real-time public telemetry, dispute arbitration, multi-tier reputation ranks, and individual CSV transaction exports.",
    link: "https://arktest-beta.vercel.app/",
    linkedin: "https://www.linkedin.com/company/arktest-beta/",
    role: "Founder & Lead Full-Stack Architect (Founded by Aryan Singh, Co-Founded by Vijay Laxmi Singh)",
    tagline: "A Full-Stack Crowd Testing & QA Innovation Platform Connecting Indie Developers with Verified QA Testers",
    coreVision: "ArKTest Beta eliminates high upfront QA barriers for independent creators. By automating tokenized escrow rewards, pessimistic database locking, and multi-account SMTP failover, it offers a secure, democratized review economy for indie apps.",
    metrics: [
      { label: "0% Race Condition Risk", desc: "Pessimistic database locking protects financial ledger operations from concurrent payout conflicts." },
      { label: "100% Automated Escrow Refunds", desc: "Unused campaign escrow points are automatically returned to creators." },
      { label: "PWA Native Ready", desc: "Native home-screen installable experience for supported iOS and Android workflows." },
      { label: "100% Pytest API Passing", desc: "Comprehensive automated endpoint test suite currently passing." }
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
        desc: "Implemented pessimistic row-level locking using with_for_update(), race-condition protection during point payouts, PBKDF2 SHA-256 password hashing, JWT authorization, rate-limited OTP dispatches, and production CORS whitelist."
      },
      {
        title: "3. Interactive Financial Ledgers & CSV Exports",
        desc: "Built transaction-management functionality allowing administrators to inspect complete point ledgers, track point movements, and generate instantaneous single-user CSV reports."
      },
      {
        title: "4. Multi-Tier Reputation & Badge Engine",
        desc: "Automatic reputation progression (Bronze → Silver → Gold → Platinum), paired with administrative Early Tester (first 25 onboarding users) and Verified Tester credentials."
      },
      {
        title: "5. Multi-Account SMTP Auto-Failover Engine",
        desc: "Developed a multi-account Gmail SMTP pool with automatic fallback for account verification OTPs, password reset OTPs, and reliable email delivery."
      },
      {
        title: "6. Progressive Web App & Public Telemetry",
        desc: "Includes PWA support, native mobile installation, service worker caching, responsive mobile experience, and an unauthenticated aggregate homepage statistics endpoint."
      }
    ],
    links: [
      { label: "Live Demo", url: "https://arktest-beta.vercel.app/" },
      { label: "LinkedIn Page", url: "https://www.linkedin.com/company/arktest-beta/" }
    ]
  };

  const aiProjects: Project[] = [
    {
      title: "ArType",
      category: "AI Android Assistant",
      tech: "Kotlin, Jetpack Compose, Material 3, Groq API, Android Accessibility Service",
      image: "/images/artype.png",
      desc: "A lightweight AI-powered Android writing assistant that works alongside any existing keyboard instead of replacing it. Using Android Accessibility Services, a floating overlay, and Groq AI, ArType enables multilingual voice typing, AI text improvement, smart replies, and text rewriting.",
      github: "https://github.com/aryansingh0777raghav/ArType",
      tagline: "AI Writing Assistant for Every Keyboard",
      coreVision: "ArType is a privacy-first Android application built with Kotlin and Jetpack Compose. Instead of replacing the user's keyboard, it acts as an intelligent AI layer over existing keyboards such as Gboard, Samsung Keyboard, and SwiftKey. It combines Android Accessibility Services, multilingual speech recognition, and Groq AI to deliver fast, secure, and context-aware writing assistance across all apps.",
      techStack: [
        { name: "Kotlin 2.0 & Jetpack Compose", desc: "Powers the premium Material 3 user interface with responsive layouts and fluid animations." },
        { name: "Android Accessibility Service", desc: "Integrates deep system-level overlays and text detection to inject and rewrite text in active fields." },
        { name: "Groq Cloud API", desc: "Leverages fast LLM inference to provide instant voice typing transcription and context-aware rewriting." },
        { name: "SpeechRecognizer", desc: "Handles bilingual/multilingual voice input for English, Hindi, and Hinglish with automatic punctuation." },
        { name: "EncryptedSharedPreferences", desc: "Secures user-provided Groq API keys locally using Android Keystore hardware encryption." }
      ],
      features: [
        { title: "Floating AI Bubble Overlay", desc: "Displays an intuitive floating shortcut bubble when text input fields gain focus." },
        { title: "Multilingual Voice Typing", desc: "Dictate naturally in English, Hindi, or Hinglish with automatic punctuation formatting." },
        { title: "Smart Contextual Replies", desc: "Generates three relevant, situation-specific reply suggestions based on active text context." },
        { title: "Seven Versatile Rewrite Modes", desc: "Fix Grammar, Professional, Friendly, Formal, Casual, Shorter, and Longer rewrite modes." },
        { title: "Bring Your Own API Key (BYOK)", desc: "Direct client-to-API communication with Groq without intermediate servers, keeping data private." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArType" },
        { label: "Download APK", url: "https://github.com/aryansingh0777raghav/ArType/releases" }
      ]
    },
    {
      title: "ArVerse OS",
      category: "Web OS & Virtual Environment",
      tech: "React, Tailwind CSS, Vite, Framer Motion, Context API, AI",
      image: "/images/ArVerse.png",
      desc: "A next-generation virtual OS simulator running entirely in the browser. It features a complete window manager, customizable wallpapers, booting and lock screens, spotlight search, application switcher, and a custom AI assistant brain (ArKon Brain) for intelligent system-wide automation.",
      github: "https://github.com/aryansingh0777raghav/ArVerse-OS",
      tagline: "The AI-Powered Virtual Operating System.",
      coreVision: "ArVerse OS is a next-generation virtual OS simulator running entirely in the browser. It features a complete window manager, customizable wallpapers, booting and lock screens, spotlight search, application switcher, and a custom AI assistant brain (ArKon Brain) for intelligent system-wide automation and focus mode management.",
      techStack: [
        { name: "React & Context API", desc: "Handles overall state machine, workspace environments, and theme configurations." },
        { name: "Tailwind CSS & Framer Motion", desc: "Powers the premium glassmorphism layouts, workspace transitions, and window animations." },
        { name: "Virtual OS Shell", desc: "Booting sequence, lock screens, and custom desktop control center configurations." },
        { name: "ArKon Brain", desc: "AI assistant core integration designed for task tracking and voice spotlight automation queries." }
      ],
      features: [
        { title: "Virtual OS Desktop Shell", desc: "Complete desktop environment with BootScreen, LockScreen, top MenuBar, application Dock, and Control Center." },
        { title: "Window Management System", desc: "Supports running multiple apps simultaneously in draggable, resizable, and minimizable windows with AppSwitcher." },
        { title: "ArKon Brain Integration", desc: "Integrated AI logic that processes user requests and assists with focus mode controls and system settings." },
        { title: "Spotlight Search Overlay", desc: "Quick launcher triggerable via shortcut (Ctrl+K) to search apps, execute shell queries, or ask AI." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArVerse-OS" },
        { label: "Walkthrough", url: "https://github.com/aryansingh0777raghav/ArVerse-OS#readme" }
      ]
    },
    {
      title: "ArFt (Frontend Sandbox)",
      category: "AI Code Editor & Sandbox",
      tech: "React, Vite, Groq API, Monaco Editor, JSZip, IndexedDB, Native Filesystem API",
      image: "/images/ArFt.png",
      desc: "A browser-based AI frontend development IDE and playground featuring a virtual file system (VFS), Monaco editor, multi-device live preview, local IndexedDB persistence, file directory importing via Native Filesystem APIs, and an integrated AI website builder.",
      github: "https://github.com/aryansingh0777raghav/ArFt",
      tagline: "The AI-Powered Frontend Sandbox.",
      coreVision: "ArFt is a browser-based AI frontend development IDE and playground featuring a virtual file system (VFS), Monaco code editor integration, responsive multi-device preview, local IndexedDB persistence, file directory importing via Native Filesystem APIs, and an integrated AI agent (powered by Groq Llama models).",
      techStack: [
        { name: "React (Vite)", desc: "Interactive frontend sandbox dashboard and device preview control." },
        { name: "Monaco Code Editor", desc: "Tabbed programming workspace with live syntax highlighting and auto-formatting." },
        { name: "Groq Cloud API", desc: "Uses Llama-3.3-70b-versatile for code generation, explanation modes, and real-time refactoring." },
        { name: "Native Filesystem API", desc: "Allows importing entire local folder hierarchies via window.showDirectoryPicker()." }
      ],
      features: [
        { title: "AI Website Builder", desc: "Instantly generates complete frontend landing pages from natural language prompts using Groq Llama-3.3-70b." },
        { title: "Interactive Live Preview", desc: "Sandbox that renders changes in real time with desktop, tablet, and mobile viewport controls." },
        { title: "Directory Import", desc: "Bypasses browser sandboxing to open, load, and edit entire local folder hierarchies." },
        { title: "IndexedDB Workspace", desc: "Automatically saves and loads projects locally to allow offline work across browser sessions." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArFt" },
        { label: "Walkthrough", url: "https://github.com/aryansingh0777raghav/ArFt#readme" }
      ]
    },
    {
      title: "ArLip (AI Shorts Generator)",
      category: "AI Media Automation",
      tech: "React, FastAPI, Groq API, FFmpeg, yt-dlp, Python, Whisper AI, SQLite",
      image: "/images/ArLip.png",
      desc: "A production-ready, full-stack web application that downloads landscape YouTube videos and automatically transcribes, analyzes, trims, and center-crops them into multiple 9:16 viral vertical Shorts with burned-in subtitles.",
      github: "https://github.com/aryansingh0777raghav/ArLip",
      tagline: "Automated Shorts. Viral Reach.",
      coreVision: "ArLip is a production-ready, full-stack web application designed for content creators. It automates the entire pipeline of turning long-form landscape YouTube videos into engaging, TikTok-style vertical shorts with styled subtitles and viral metadata.",
      techStack: [
        { name: "React (Vite)", desc: "Interactive frontend dashboard and vertical video player UI." },
        { name: "FastAPI (Python)", desc: "High-performance backend API and background processing worker." },
        { name: "Groq Cloud API", desc: "Whisper-v3 for ultra-fast transcription and Llama-3.3-70b for viral moment analysis." },
        { name: "FFmpeg & OpenCV", desc: "Subprocess engine for video trimming, center-cropping, and burning custom animated subtitles." }
      ],
      features: [
        { title: "Automated Download & Stream Extraction", desc: "Extracts combined video and audio streams directly from any landscape YouTube URL via yt-dlp." },
        { title: "Ultra-Fast Transcription", desc: "Converts audio files using the high-performance Groq Whisper API with word-level timestamps." },
        { title: "AI Moment & Virality Analysis", desc: "Uses Groq Llama-3.3-70b in JSON mode to isolate the most engaging hooks and takeaways." },
        { title: "TikTok-Style Burned-in Subtitles", desc: "Automatically creates word-grouped subtitles and burns them onto the video with viral creator styling." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArLip" },
        { label: "Walkthrough", url: "https://github.com/aryansingh0777raghav/ArLip#readme" }
      ]
    },
    {
      title: "ArCh (Aryan Search Engine)",
      category: "Perplexity-Style AI Engine",
      tech: "Electron.js, FastAPI, Groq API, Vosk STT, Piper TTS, Python, AI, Desktop",
      image: "/images/arch.png",
      desc: "A premium, Perplexity-style AI-powered desktop search engine that searches the web in real-time, extracts main article contexts, and compiles cited AI summaries—100% free of paid search API dependencies.",
      github: "https://github.com/aryansingh0777raghav/ArCh",
      tagline: "Search Smarter. Think Faster.",
      coreVision: "A premium, Perplexity-style AI-powered desktop search engine that compiles cited AI summaries in real-time. It completely bypasses paid search API dependencies by utilizing custom concurrent scraping.",
      techStack: [
        { name: "Electron.js", desc: "Desktop app shell and glassmorphism interface." },
        { name: "FastAPI (Python)", desc: "High-performance backend API service." },
        { name: "Groq API (Llama-3.3-70b)", desc: "Ultra-fast LLM inference for cited summaries." },
        { name: "BeautifulSoup4 & aiohttp", desc: "Custom concurrent async web scraper." },
        { name: "Vosk STT & Piper TTS", desc: "Offline, local Speech-to-Text translation and Text-to-Speech narration." }
      ],
      features: [
        { title: "Custom Web Crawler", desc: "Bypasses paid search APIs by scraping DuckDuckGo, fetching top target pages concurrently, and cleaning ads to build rich context." },
        { title: "Offline Speech-to-Text (STT)", desc: "Local microphone recording with Vosk models for high voice transcription accuracy." },
        { title: "Offline Text-to-Speech (TTS)", desc: "Narrates search summaries using local Piper ONNX voices (US English & Hindi)." },
        { title: "Bilingual & Hands-Free", desc: "Supports voice inputs in both English and Hindi with automatic spoken narration." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/ArCh" },
        { label: "Walkthrough", url: "https://github.com/aryansingh0777raghav/ArCh#readme" }
      ]
    },
    {
      title: "Solexplain AI",
      category: "Web3 Transaction Parser",
      tech: "TypeScript, Solana Web3.js, OpenAI API, React, Tailwind CSS",
      image: "/images/solexplain.png",
      desc: "An AI-powered Web3 tool that decodes complex, low-level Solana blockchain transactions into simple, plain human-readable summaries, protecting users from malicious drains and phishing.",
      github: "https://github.com/aryansingh0777raghav/solexplain-ai",
      tagline: "Understand Your Transactions. Simplify Web3.",
      coreVision: "Solexplain AI decodes complex, low-level Solana blockchain transactions into simple, plain English summaries, protecting users from malicious drains and phishing.",
      techStack: [
        { name: "TypeScript", desc: "Strongly-typed frontend client logic." },
        { name: "Solana Web3.js", desc: "Ledger integration and transaction fetching." },
        { name: "OpenAI API", desc: "Generative transaction parsing and analysis." }
      ],
      features: [
        { title: "Transaction Decryption", desc: "Converts complex transaction instructions and logs into readable objects." },
        { title: "AI Risk Analysis", desc: "Scans transactions for known drainer patterns and security risks." },
        { title: "Human-Readable Summaries", desc: "Generates clear explanations of which tokens are moving in/out of the wallet." }
      ],
      links: [
        { label: "Source Code", url: "https://github.com/aryansingh0777raghav/solexplain-ai" }
      ]
    },
    {
      title: "Personal AI Voice Assistant",
      category: "Desktop Automation & Voice AI",
      tech: "Python, SpeechRecognition, Pyttsx3, OS / Subprocess",
      image: "/images/Voiceassistant.png",
      desc: "A voice-activated automation assistant built in Python that executes system commands, launches applications, monitors hardware health, and handles offline tasks using voice triggers.",
      tagline: "Automate Your Desktop. Control with Voice.",
      coreVision: "A voice-activated automation assistant built in Python that executes system commands, launches applications, and handles offline tasks using voice triggers.",
      techStack: [
        { name: "Python", desc: "Core logic and system automation scripts." },
        { name: "SpeechRecognition", desc: "Audio capture and speech interpretation." },
        { name: "Pyttsx3", desc: "Offline text-to-speech voice narration." }
      ],
      features: [
        { title: "Desktop Automation", desc: "Launch programs, open web links, take screenshots, and lock/shutdown PC." },
        { title: "System Monitoring", desc: "Queries system stats like battery life, CPU temperature, and active processes." },
        { title: "Extensible Commands", desc: "Add new commands easily by defining Python functions." }
      ]
    }
  ];

  const webProjects: Project[] = [
    { 
      title: "Certilink (Credential & Verification Engine)", 
      category: "Digital Credential & Verification",
      tech: "HTML5, Modern CSS, JavaScript ES6, LocalStorage API, Hash Verification",
      desc: "A specialized digital verification engine and credential repository designed for hosting, indexing, and validating verified academic and industry certifications with instant verification links and interactive preview modals.", 
      image: "/images/Certilink.png",
      link: "https://aryansingh0777raghav.github.io/certilink/",
      github: "https://github.com/aryansingh0777raghav/certilink",
      tagline: "Cryptographic Credential Indexing & Verification Engine",
      coreVision: "Certilink provides a decentralized, clean digital showcase for academic and professional certifications, guaranteeing quick credential discovery and instant high-res audit validation.",
      modalHighlights: [
        { title: "Instant Verification Engine", desc: "Allows direct verification lookups for certificates, IDs, and achievement credentials." },
        { title: "High-Resolution Modal Previews", desc: "Interactive image viewer for training diplomas, grade cards, and academic honours." }
      ]
    },
    { 
      title: "3D Concept Portfolio", 
      category: "Interactive 3D Frontend",
      tech: "React, Three.js, Canvas, Tailwind CSS",
      desc: "A 3D Concept Portfolio project showcasing creative interactive web capabilities and spatial canvas rendering.", 
      image: "/images/3D-Portfolio.png",
      link: "https://aryansingh0777raghav.github.io/3D-Concept-Portfolio-project/",
      github: "https://github.com/aryansingh0777raghav/3D-Concept-Portfolio-project" 
    },
    { 
      title: "Scrollytelling Portfolio", 
      category: "Cinematic Web Experience",
      tech: "React, Framer Motion, Tailwind CSS, Lenis Scroll",
      desc: "Premium cinematic scrollytelling portfolio with smooth hardware-accelerated scrolling and high-end animations.", 
      image: "/images/Scrollytelling.png",
      github: "https://github.com/aryansingh0777raghav/Scrollytelling-Portfolio-of-Aryan-Singh" 
    },
    { 
      title: "Chess Web Game", 
      category: "Interactive Browser Game",
      tech: "JavaScript, HTML5 Canvas, MiniMax AI",
      desc: "A fully functional chess game built for the web with legal move validation, check detection, and local AI logic.", 
      image: "/images/Chess.png",
      link: "https://aryansingh0777raghav.github.io/Chess-Game/",
      github: "https://github.com/aryansingh0777raghav/Chess-Game" 
    },
    { 
      title: "Cine-Dev Showcase Portal", 
      category: "Interactive Web Architecture",
      tech: "HTML5, CSS3, JavaScript ES6",
      desc: "A sleek dual-theme split interface engineered with vanilla JavaScript ES6 and semantic CSS for multimedia showcases.", 
      image: "/images/CinePortfolio.png",
      link: "https://aryansingh0777raghav.github.io/Aryan-Singh-Cine-Portfolio/",
      github: "https://github.com/aryansingh0777raghav/Aryan-Singh-Cine-Portfolio" 
    },
    { 
      title: "Portfolio Terminal", 
      category: "Interactive CLI Portfolio",
      tech: "JavaScript, Bash Emulator, CSS3",
      desc: "Interactive command-line terminal portfolio supporting authentic shell commands and interactive Easter eggs.", 
      image: "/images/Portfolio-Terminal.png",
      link: "https://aryansingh0777raghav.github.io/Aryan-Interactive-portfolio/",
      github: "https://github.com/aryansingh0777raghav/Aryan-Interactive-portfolio" 
    },
    { 
      title: "Personal Portfolio Minimal V3", 
      category: "Ultra-Minimalist UI",
      tech: "Vanilla JavaScript, CSS3, HTML5",
      desc: "A clean, minimal, and ultra-fast personal portfolio website with a sharp focus on simplicity and typography performance.", 
      image: "/images/MinimalV3.png",
      link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-MinimalV3/",
      github: "https://github.com/aryansingh0777raghav/Personal-Portfolio-MinimalV3" 
    },
    { 
      title: "Personal Portfolio NetUI", 
      category: "Glassmorphism Concept",
      tech: "React, Tailwind CSS, Glassmorphic UI",
      desc: "A clean personal portfolio built with NetUI showcasing translucent layered cards and dynamic lighting.", 
      image: "/images/NetUI.png",
      link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-NetUI/",
      github: "https://github.com/aryansingh0777raghav/Personal-Portfolio-NetUI" 
    },
    { 
      title: "ArTools YouTube Extension", 
      category: "Chrome Extension & Productivity",
      tech: "JavaScript, Chrome Extension API, DOM Parser",
      desc: "A productivity browser extension allowing instant downloads of YouTube videos, audio streams, and HD thumbnails.", 
      image: "/images/ArTool.png",
      github: "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension",
      link: "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension" 
    },
    { 
      title: "MySites Portal", 
      category: "Web Deployment Saver & Search",
      tech: "JavaScript ES6, LocalStorage API, CSS3",
      desc: "A developer website saver that organizes your deployments, stores metadata, and offers fast instantaneous search.", 
      image: "/images/MySites.png",
      link: "https://aryansingh0777raghav.github.io/MySites/",
      github: "https://github.com/aryansingh0777raghav/MySites" 
    }
  ];

  const filmProjects: Project[] = [
    {
      title: "The Night of Life: Before You Think About It",
      year: "2026",
      category: "Cinematic Film Production",
      tech: "",
      image: "/images/The%20Night%20of%20Life.png",
      desc: "A psychological drama short film exploring inner conflict, existential isolation, student academic despair, and life-changing decisions. Written, directed, scored, and edited by Aryan Singh under CineOn Studio 7.",
      roles: ["Writer", "Director", "Actor", "Musician", "Editor"],
      imdb: "https://www.imdb.com/title/tt39846631",
      tmdb: "https://www.themoviedb.org/movie/1638463-the-night-of-life-before-you-think-about-it",
      letterboxd: "https://boxd.it/116UE",
      filmfreeway: "https://filmfreeway.com/iamaryannnn07",
      youtube: "https://youtu.be/tEvYeAHmCHg",
      links: [
        { label: "Full Movie", url: "https://youtu.be/tEvYeAHmCHg", icon: <Play size={13} /> },
        { label: "Trailer", url: "https://youtu.be/R_THbZWmIGs", icon: <Film size={13} /> },
        { label: "Press Feature", url: "https://indianblog.co.in/aryan-singh-filmmaker/", icon: <Newspaper size={13} /> },
        { label: "IMDb", url: "https://www.imdb.com/title/tt39846631", icon: <ExternalLink size={13} /> },
        { label: "TMDB", url: "https://www.themoviedb.org/movie/1638463-the-night-of-life-before-you-think-about-it", icon: <ExternalLink size={13} /> },
        { label: "Letterboxd", url: "https://boxd.it/116UE", icon: <ExternalLink size={13} /> },
        { label: "FilmFreeway", url: "https://filmfreeway.com/iamaryannnn07", icon: <ExternalLink size={13} /> }
      ]
    }
  ];

  const matchesSearch = (p: Project) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.tech.toLowerCase().includes(query) ||
      (p.category && p.category.toLowerCase().includes(query)) ||
      p.desc.toLowerCase().includes(query)
    );
  };

  const filteredAI = aiProjects.filter(matchesSearch);
  const filteredWeb = webProjects.filter(matchesSearch);
  const filteredFilm = filmProjects.filter(matchesSearch);
  const showFlagship = (activeCategory === 'all' || activeCategory === 'ai') && matchesSearch(flagshipProject);
  const totalCount = (showFlagship ? 1 : 0) +
    ((activeCategory === 'all' || activeCategory === 'ai') ? filteredAI.length : 0) +
    ((activeCategory === 'all' || activeCategory === 'web') ? filteredWeb.length : 0) +
    ((activeCategory === 'all' || activeCategory === 'film') ? filteredFilm.length : 0);

  const getCategoryPills = () => {
    if (viewMode === 'tech') {
      return [
        { id: 'all' as const, label: `All Tech (${aiProjects.length + webProjects.length + 1})` },
        { id: 'ai' as const, label: `AI Systems (${aiProjects.length + 1})` },
        { id: 'web' as const, label: `Web Apps (${webProjects.length})` }
      ];
    }
    if (viewMode === 'filmmaking') {
      return [
        { id: 'all' as const, label: `All Cinema (${filmProjects.length})` },
        { id: 'film' as const, label: `Directorial Works (${filmProjects.length})` }
      ];
    }
    return [
      { id: 'all' as const, label: `All (${aiProjects.length + webProjects.length + filmProjects.length + 1})` },
      { id: 'ai' as const, label: `AI Systems (${aiProjects.length + 1})` },
      { id: 'web' as const, label: `Web Apps (${webProjects.length})` },
      { id: 'film' as const, label: `Cinema (${filmProjects.length})` }
    ];
  };

  return (
    <section id="projects" className="py-24 md:py-36 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">004 // Projects & Labs</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
              {viewMode === 'filmmaking' ? 'Cinematic Archive.' : viewMode === 'tech' ? 'Engineered Systems.' : 'Selected Works.'}<br />
              <span className="text-neutral-500 font-semibold">
                {viewMode === 'filmmaking' ? 'Narrative short films & screenplays.' : viewMode === 'tech' ? 'Flagship platforms & software tools.' : 'Flagship systems & creative labs.'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              {viewMode === 'tech'
                ? 'A comprehensive archive of 18+ engineered software platforms, AI applications, developer tools, and web interfaces.'
                : viewMode === 'filmmaking'
                ? 'Cinematic short film productions, screenwriting archives, and directorial projects under CineOn Studio 7.'
                : 'A comprehensive archive of 18+ engineered software platforms, AI applications, web interfaces, and narrative filmmaking.'}
            </p>
          </div>
        </div>

        {/* Instant Search & Quick Category Filters */}
        <div className="mb-14 p-4 rounded-2xl bg-[#FAFAFB] border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tech (e.g. React, Python)..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-950 p-1 text-xs cursor-pointer"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {getCategoryPills().map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`text-[11px] font-mono px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-neutral-950 text-white font-bold shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search State */}
        {totalCount === 0 && (
          <div className="py-16 text-center rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 mb-16">
            <Search size={32} className="text-neutral-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-neutral-950 mb-1">No matching projects found</h4>
            <p className="text-xs text-neutral-500 mb-4">No results matched "{searchQuery}". Try searching for another keyword or clear search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold cursor-pointer"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* 🌟 Flagship Spotlight: ArKTest Beta */}
        {showFlagship && (viewMode === 'tech' || viewMode === 'both' || viewMode === null) && (
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="swiss-pill-tag-active flex items-center gap-1.5">
                <Sparkles size={11} className="text-amber-400" /> Flagship Platform
              </span>
              <span className="swiss-pill-tag">
                Crowd Testing & Escrow
              </span>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-6 sm:p-10 md:p-12 text-white shadow-xl hover:border-neutral-700 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left: Interactive Preview & Metrics */}
                <div className="lg:col-span-6 space-y-4">
                  <div 
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xs cursor-pointer group"
                  >
                    <img 
                      src="/images/arktest.png" 
                      alt="ArKTest Beta Dashboard" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 text-xs font-semibold shadow-xs">
                        <Info size={13} /> View Architecture
                      </span>
                    </div>
                  </div>

                  {/* 4 Metrics Pills */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {flagshipProject.metrics?.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                        <p className="text-[11px] font-mono font-bold text-white leading-tight mb-0.5">
                          {metric.label}
                        </p>
                        <p className="text-[10px] text-neutral-400 leading-tight font-normal">
                          {metric.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Project Details & Action Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                      ArKTest Beta
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-300 mb-2">
                      {flagshipProject.tagline}
                    </p>
                    <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-4">
                      {flagshipProject.role}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                      {flagshipProject.desc}
                    </p>

                    {/* Feature Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {flagshipProject.features?.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-neutral-300 font-medium leading-snug">
                            {feat.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-3">
                    <a
                      href="https://arktest-beta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-all shadow-xs"
                    >
                      <Globe size={13} />
                      <span>Live Platform</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/arktest-beta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors"
                    >
                      <Linkedin size={13} className="text-blue-400" />
                      <span>Company LinkedIn</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-200 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Info size={13} /> Full Specs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 💻 Cluster 1: AI Systems & Developer Tooling */}
        {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && 
         (activeCategory === 'all' || activeCategory === 'ai') && 
         filteredAI.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Cluster 01 // AI Systems ({filteredAI.length})
              </span>
              <div className="h-px bg-neutral-200 flex-1" />
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-neutral-950 mb-8 tracking-tight">
              AI Systems & Developer Tooling
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAI.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl border border-neutral-800/90 bg-[#0A0A0A] p-6 hover:border-neutral-700 hover:shadow-xl transition-all flex flex-col justify-between group text-white"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">{item.category}</span>
                      {item.github && (
                        <a 
                          href={item.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-neutral-950 transition-all"
                          title="GitHub Repository"
                        >
                          <Github size={13} />
                        </a>
                      )}
                    </div>

                    <div 
                      onClick={() => {
                        soundFX.playModalOpen();
                        setSelectedProject(item);
                      }}
                      className="aspect-video rounded-xl overflow-hidden border border-neutral-800 mb-5 bg-neutral-900 cursor-pointer"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/profile.png';
                        }}
                      />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-[11px] font-mono text-neutral-400 mb-3">
                      {item.tech}
                    </p>

                    <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <button
                      onClick={() => {
                        soundFX.playModalOpen();
                        setSelectedProject(item);
                      }}
                      className="text-xs font-mono font-medium text-neutral-300 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Info size={12} /> View Architecture
                    </button>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                      >
                        Code <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 🌐 Cluster 2: Web Applications & Interfaces */}
        {(viewMode === 'tech' || viewMode === 'both' || viewMode === null) && 
         (activeCategory === 'all' || activeCategory === 'web') && 
         filteredWeb.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Cluster 02 // Web Projects ({filteredWeb.length})
              </span>
              <div className="h-px bg-neutral-200 flex-1" />
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-neutral-950 mb-8 tracking-tight">
              Web Applications & Interactive Interfaces
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWeb.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl border border-neutral-800/90 bg-[#0A0A0A] p-6 hover:border-neutral-700 hover:shadow-xl transition-all flex flex-col justify-between group text-white"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">{item.category}</span>
                      {item.github ? (
                        <a 
                          href={item.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-neutral-950 transition-all"
                          title="GitHub Repository"
                        >
                          <Github size={13} />
                        </a>
                      ) : item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-neutral-950 transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink size={13} />
                        </a>
                      ) : null}
                    </div>

                    <div 
                      onClick={() => {
                        soundFX.playModalOpen();
                        setSelectedProject(item);
                      }}
                      className="aspect-video rounded-xl overflow-hidden border border-neutral-800 mb-5 bg-neutral-900 cursor-pointer"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/profile.png';
                        }}
                      />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-[11px] font-mono text-neutral-400 mb-3">
                      {item.tech}
                    </p>

                    <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                      >
                        Live Demo <ArrowUpRight size={12} />
                      </a>
                    ) : item.github ? (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                      >
                        Source Code <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-neutral-400">Archived Project</span>
                    )}

                    <button
                      onClick={() => {
                        soundFX.playModalOpen();
                        setSelectedProject(item);
                      }}
                      className="text-xs font-mono font-medium text-neutral-300 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Info size={12} /> Specs
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 🎬 Cluster 3: Filmmaking & Cinema Showcase */}
        {(viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null) && 
         (activeCategory === 'all' || activeCategory === 'film') && 
         filteredFilm.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Cluster 03 // Cinema ({filteredFilm.length})
              </span>
              <div className="h-px bg-neutral-200 flex-1" />
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-neutral-950 mb-8 tracking-tight">
              Cinematic & Narrative Productions
            </h3>

            <div className="space-y-8">
              {filteredFilm.map((film, idx) => (
                <div key={idx} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-6 sm:p-10 md:p-12 text-white shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                      <div className="aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative">
                        <img 
                          src={film.image} 
                          alt={film.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">{film.category}</span>
                        <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">// {film.year}</span>
                      </div>
                      
                      <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                        {film.title}
                      </h4>
                      {film.tech ? (
                        <p className="text-xs font-mono text-neutral-400 mb-3">{film.tech}</p>
                      ) : null}
                      
                      {/* Roles */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {film.roles?.map((r, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-semibold text-neutral-300">
                            {r}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                        {film.desc}
                      </p>

                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-neutral-800">
                        {film.links?.map((lnk, i) => (
                          <a 
                            key={i} 
                            href={lnk.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-white hover:text-neutral-950 text-xs font-semibold transition-all flex items-center gap-1.5"
                          >
                            {lnk.icon}
                            <span>{lnk.label}</span>
                            <ArrowUpRight size={11} className="opacity-60" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 🔍 Interactive Technical Details Modal (Full Specs & Tech Architecture) */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/60 backdrop-blur-xs overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white border border-neutral-200 p-6 sm:p-10 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-800 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="swiss-pill-tag mb-2">{selectedProject.category || "Architecture Breakdown"}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mb-2">
                  {selectedProject.title}
                </h3>
                {selectedProject.tagline && (
                  <p className="text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                    {selectedProject.tagline}
                  </p>
                )}
                <p className="text-xs font-mono text-neutral-500">
                  {selectedProject.tech}
                </p>
              </div>

              <div className="space-y-6">
                {/* Core Vision */}
                {selectedProject.coreVision ? (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                      <Sparkles size={13} /> Core Vision
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {selectedProject.coreVision}
                    </p>
                  </div>
                ) : selectedProject.desc ? (
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {selectedProject.desc}
                  </p>
                ) : null}

                {/* Tech Stack Breakdown */}
                {selectedProject.techStack && (
                  <div className="pt-4 border-t border-neutral-100">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                      <Cpu size={13} /> Tech Architecture
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.techStack.map((techItem, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80">
                          <p className="text-xs font-bold text-neutral-900 mb-0.5">{techItem.name}</p>
                          <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">{techItem.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features & Highlights List */}
                {selectedProject.features && (
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                      <Layers size={13} /> Key Highlights & Modules
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                          <h5 className="text-xs font-bold text-neutral-950 mb-1">{feat.title}</h5>
                          <p className="text-xs text-neutral-600 leading-relaxed font-normal">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action Links */}
                <div className="pt-6 border-t border-neutral-100 flex flex-wrap gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="swiss-btn text-xs"
                    >
                      <Globe size={13} /> Visit Live Demo ↗
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="swiss-btn-outline text-xs"
                    >
                      <Github size={13} /> Source Code ↗
                    </a>
                  )}
                  {selectedProject.linkedin && (
                    <a
                      href={selectedProject.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="swiss-btn-outline text-xs"
                    >
                      <Linkedin size={13} className="text-blue-600" /> LinkedIn Page ↗
                    </a>
                  )}
                  {selectedProject.links?.map((lnk, idx) => {
                    if (lnk.url === selectedProject.link || lnk.url === selectedProject.github) return null;
                    return (
                      <a
                        key={idx}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="swiss-btn-outline text-xs"
                      >
                        <BookOpen size={13} /> {lnk.label} ↗
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
