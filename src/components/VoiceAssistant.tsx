import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, X, Send, Trash2, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface VoiceAssistantProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const scrollToSection = (id: string) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(id, { duration: 1.0 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};

const getLocalResponse = (command: string, viewMode: 'tech' | 'filmmaking' | 'both' | null): string => {
  const cmd = command.toLowerCase();
  
  const info = {
    about: viewMode === 'tech'
      ? "Aryan Singh is a Software Engineer and Full-Stack Architect based in Gorakhpur, India. Founder & Lead Full-Stack Architect of ArKTest Beta, architecting automated escrow platforms, AI tools, and virtual operating systems. Open for freelance contracts and engineering roles."
      : viewMode === 'filmmaking'
      ? "Aryan Singh is an Independent Film Director, Screenwriter, and Editor based in Gorakhpur, India. Founder of CineOn Studio 7 and director of 'The Night of Life: Before You Think About It'. Available for directorial collaborations and creative productions."
      : "Aryan Singh is a dual-threat Software Engineer, Founder & Lead Full-Stack Architect of ArKTest Beta, and Film Director. He specializes in bridging logical engineering with creative storytelling. He's currently available for freelance software and film projects.",
    projects: viewMode === 'filmmaking'
      ? "Aryan's primary directorial project is 'The Night of Life: Before You Think About It' (4K short film with CineOn Studio 7), along with screenwriting archives."
      : "Aryan's flagship platform is ArKTest Beta (Crowd Testing & Escrow QA Platform), along with ArVerse OS (Virtual OS Simulator), ArType (AI Android Assistant), Certilink (Credential Verifier), ArLip, and ArCh.",
    arktest: "ArKTest Beta (https://arktest-beta.vercel.app) is a full-stack crowd testing & QA innovation platform founded by Aryan Singh (Co-Founded by Vijay Laxmi Singh). Built with FastAPI (Python 3.14), PostgreSQL/SQLAlchemy, and Vanilla JS, it features an automated ArK Points escrow economy, pessimistic DB locking (with_for_update()), OWASP security, single-user CSV exports, PWA capabilities, and SMTP failover. Official LinkedIn page: https://www.linkedin.com/company/arktest-beta/",
    skills: viewMode === 'filmmaking'
      ? "In the studio, he excels as a Screenwriter, Director, Actor, Sound Designer, and Editor utilizing DaVinci Resolve and Premiere Pro."
      : "On the tech side, he's a master of Python (FastAPI), PostgreSQL, SQLAlchemy, React, TypeScript, Java, C++, SQL, and modern web architectures.",
    education: "He is currently pursuing his BCA (Bachelor of Computer Applications) at ITM Gorakhpur (Sep 2024 - Dec 2027), building on a strong foundation from SR International Academy, Nathnagar.",
    experience: viewMode === 'filmmaking'
      ? "Aryan's creative journey:\n1. CineOn Studio 7 (2026) - Film Director & Editor\n2. 'The Night of Life' - 4K Directorial Debut\n3. The Indian Blog - Featured Independent Filmmaker."
      : "Aryan has a solid professional background:\n1. Founder & Lead Full-Stack Architect at ArKTest Beta (2026 – Present)\n2. Python Training Internship at Data Culture Technology (Jun 2025 – Aug 2025)\n3. Samsung Innovation Campus Big Data Certification (Oct 2025 – Nov 2025)\n4. ITM Gorakhpur BCA (2024–2027).",
    samsung: "Aryan completed the Big Data Certification course of the Samsung Innovation Campus (9/10/2025 to 15/11/2025). The certificate number is SIC08720. This training focused on data manipulation, analysis, and processing large datasets.",
    availability: viewMode === 'tech'
      ? "Aryan is currently AVAILABLE for freelance engineering work, full-stack development, and AI tool building!"
      : viewMode === 'filmmaking'
      ? "Aryan is currently OPEN for film directing, screenplay development, and cinematic production collaborations!"
      : "Aryan is currently AVAILABLE for freelance work! You can hire him for web development, AI tool building, or professional film production.",
    contact: "You can reach out to Aryan directly at aryansingh979211@gmail.com. He is currently open for new opportunities.",
    social: "You can find Aryan on LinkedIn as iamaryan07, GitHub as aryansingh0777raghav, and Instagram as iam_aryannnn07.",
    links: "I can open his LinkedIn, GitHub, or IMDb for you. Just ask!",
    filmmaking: "Aryan's filmmaking style is psychological and dramatic. His short film 'The Night of Life: Before You Think About It' explores deep inner conflict and is available on YouTube."
  };

  const has = (keywords: string[]) => keywords.some(k => cmd.includes(k));

  if (has(['arktest', 'beta test', 'testing task', 'ark points', 'testing platform'])) {
    setTimeout(() => scrollToSection('#projects'), 150);
    return info.arktest;
  } else if (has(['samsung', 'sic08720', 'big data', 'bigdata'])) {
    return info.samsung;
  } else if (has(['project', 'kaam', 'work', 'portfolio', 'dikhao', 'build', 'create', 'made'])) {
    setTimeout(() => scrollToSection('#projects'), 150);
    return info.projects;
  } else if (has(['skill', 'tech', 'language', 'stack', 'coding', 'framework', 'tools', 'jaanta'])) {
    setTimeout(() => scrollToSection('#skills'), 150);
    return info.skills;
  } else if (has(['film', 'movie', 'cinema', 'the night of life', 'director', 'directing', 'cineon'])) {
    setTimeout(() => scrollToSection('#about'), 150);
    return info.filmmaking;
  } else if (has(['experience', 'intern', 'training', 'job', 'journey', 'timeline'])) {
    setTimeout(() => scrollToSection('#timeline'), 150);
    return info.experience;
  } else if (has(['contact', 'email', 'phone', 'hire', 'reach', 'baat', 'message'])) {
    setTimeout(() => scrollToSection('#contact'), 150);
    return info.contact;
  } else if (has(['about', 'who is', 'kon hai', 'aryan', 'background', 'intro'])) {
    setTimeout(() => scrollToSection('#about'), 150);
    return info.about;
  }

  if (viewMode === 'tech') {
    return `Aryan Singh is a Software Engineer & Founder of ArKTest Beta. How can I help you explore his technical architecture, AI tools, or repositories?`;
  }
  if (viewMode === 'filmmaking') {
    return `Aryan Singh is an Independent Film Director and Screenwriter. How can I help you explore his productions or 'The Night of Life'?`;
  }
  return `Aryan Singh is a dual-threat Software Engineer & Filmmaker. Founder of ArKTest Beta and director of 'The Night of Life'. How can I help you explore his portfolio?`;
};

export default function VoiceAssistant({ viewMode }: VoiceAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      sender: 'ai',
      text: viewMode === 'tech'
        ? "Hello! I am Aryan's AI assistant. Ask me anything about his software engineering architectures, ArKTest Beta, or developer tooling."
        : viewMode === 'filmmaking'
        ? "Hello! I am Aryan's AI assistant. Ask me anything about his cinematic directing, 'The Night of Life', or CineOn Studio 7 productions."
        : "Hello! I am Aryan's AI assistant. Ask me anything about his software engineering projects, ArKTest Beta, or film productions.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          handleSendMessage(transcript);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const speakText = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/https?:\/\/\S+/g, '').replace(/[*_#]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    setTimeout(() => {
      const reply = getLocalResponse(text, viewMode);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      speakText(reply);
    }, 300);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please type your message.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const toggleMute = () => {
    if (!isMuted && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setIsMuted(!isMuted);
  };

  const clearChat = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setMessages([
      {
        id: 'initial',
        sender: 'ai',
        text: "Hello! I am Aryan's AI assistant. Ask me anything about his software engineering projects, ArKTest Beta, or film productions.",
        timestamp: new Date()
      }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      handleSendMessage(inputText);
    }
  };

  const getSuggestions = () => [
    { text: "About Aryan 👨‍💻", query: "Who is Aryan?" },
    { text: "Flagship ArKTest 🚀", query: "Tell me about ArKTest Beta" },
    { text: "Tech Stack 💻", query: "What are his coding skills?" },
    { text: "Short Film 🎬", query: "What film did he direct?" },
    { text: "Contact Details 📧", query: "How can I contact Aryan?" }
  ];

  return (
    <>
      {/* Floating Sparkles Button */}
      {!isOpen && (
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          <button
            aria-label="Open AI Voice Assistant"
            onClick={() => setIsOpen(true)}
            className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:scale-105 transition-all shadow-xl relative group cursor-pointer"
            title="Ask AI Assistant"
          >
            <Sparkles size={20} className={isSpeaking ? 'animate-pulse text-amber-400' : ''} />
            {isSpeaking && (
              <div className="absolute inset-0 rounded-full animate-ping bg-neutral-950/20" />
            )}
          </button>
        </motion.div>
      )}

      {/* Swiss Clean Assistant Drawer / Dialog with Frosted Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[520px] max-h-[calc(100vh-4rem)] rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/60 flex items-center justify-between bg-white/40 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-white font-mono text-xs font-bold">
                  AI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-950">Aryan's AI Assistant</h4>
                  <p className="text-[10px] text-neutral-500 font-mono">
                    {isListening ? 'Listening...' : 'Online & Ready'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  aria-label={isMuted ? "Unmute Voice" : "Mute Voice"}
                  onClick={toggleMute}
                  className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-white/60 transition-colors"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                <button
                  aria-label="Clear Chat"
                  onClick={clearChat}
                  className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-white/60 transition-colors"
                >
                  <Trash2 size={15} />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-white/60 transition-colors"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-neutral-950 text-white rounded-tr-none shadow-xs'
                        : 'bg-white/80 backdrop-blur-md text-neutral-900 border border-white/80 rounded-tl-none font-normal shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="text-[9px] opacity-40 mt-1 block text-right font-mono">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl rounded-tl-none px-3.5 py-2 flex items-center gap-2 shadow-xs">
                    <Loader2 size={13} className="animate-spin text-neutral-500" />
                    <span className="text-xs text-neutral-500 font-mono">Processing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2">
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {getSuggestions().map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(sug.query)}
                    className="flex-shrink-0 px-3 py-1 bg-white/60 backdrop-blur-sm border border-white/70 rounded-full text-[10px] font-mono text-neutral-700 hover:bg-neutral-950 hover:text-white transition-colors shadow-xs"
                  >
                    {sug.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/60 bg-white/40 backdrop-blur-md flex items-center gap-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  isListening
                    ? 'bg-red-500 text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-neutral-700 border border-white/80 shadow-xs'
                }`}
              >
                {isListening ? <MicOff size={15} className="animate-pulse" /> : <Mic size={15} />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Aryan's projects..."
                disabled={isListening}
                className="flex-1 bg-white/60 backdrop-blur-sm border border-white/70 rounded-xl px-3.5 py-2 text-xs text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-950 focus:bg-white/80 transition-colors"
              />

              <button
                type="submit"
                disabled={!inputText.trim() || isLoading || isListening}
                className="w-9 h-9 rounded-xl bg-neutral-950 text-white flex items-center justify-center disabled:opacity-40 shadow-xs"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
