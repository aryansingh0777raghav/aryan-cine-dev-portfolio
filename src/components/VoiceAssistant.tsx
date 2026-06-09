import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, X, Send, Trash2, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const scrollToSection = (id: string) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(id, { duration: 1.0 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};

const getLocalResponse = (command: string): string => {
  const cmd = command.toLowerCase();
  
  const info = {
    about: "Aryan Singh is a dual-threat Software Engineer and Film Director. He specializes in bridging logical engineering with creative storytelling. He's currently available for freelance software and film projects.",
    projects: "Aryan's portfolio features high-end work like the Scrollytelling Portfolio, the Solana-based Solexplain AI, and a specialized Terminal Interface. His filmmaking peak is 'The Night of Life', which he wrote and directed.",
    skills: "On the tech side, he's a master of Python, Pandas, Java, C++, SQL, and modern web tech. In the studio, he excels as a Writer, Director, Actor, Musician, and Editor.",
    education: "He is currently pursuing his BCA (Bachelor of Computer Applications) at ITM Gorakhpur (Sep 2024 - Dec 2027), building on a strong foundation from SR International Academy, Nathnagar.",
    experience: "Aryan has a solid professional background:\n1. Python Training Internship at Data Culture Technology (Jun 2025 – Aug 2025)\n2. Samsung Innovation Campus Big Data Certification (Oct 2025 – Nov 2025)\n3. CineOn Studio 7 (2026) - Film Director & Editor.",
    samsung: "Aryan completed the Big Data Certification course of the Samsung Innovation Campus (9/10/2025 to 15/11/2025). The certificate number is SIC08720. This training focused on data manipulation, analysis, and processing large datasets.",
    availability: "Aryan is currently AVAILABLE for freelance work! You can hire him for web development, AI tool building, or professional film production.",
    contact: "You can reach out to Aryan directly at aryansingh979211@gmail.com. He is currently open for freelance opportunities.",
    social: "You can find Aryan on LinkedIn as iamaryan07, GitHub as aryansingh0777raghav, and Instagram as iam_aryannnn07.",
    links: "I can open his LinkedIn, GitHub, or IMDb for you. Just ask!",
    filmmaking: "Aryan's filmmaking style is psychological and dramatic. His short film 'The Night of Life: Before You Think About It' explores deep inner conflict and is available on YouTube."
  };

  const has = (keywords: string[]) => keywords.some(k => cmd.includes(k));

  if (has(['samsung', 'sic08720', 'big data', 'bigdata'])) {
    return info.samsung;
  } else if (has(['project', 'kaam', 'work', 'portfolio', 'dikhao', 'build', 'create', 'made'])) {
    setTimeout(() => scrollToSection('#projects'), 150);
    return "Aryan has built some incredible digital experiences. " + info.projects;
  } else if (has(['who', 'about', 'him', 'aryan', 'kaun', 'btao', 'biography', 'identity', 'profile'])) {
    setTimeout(() => scrollToSection('#about'), 150);
    return info.about;
  } else if (has(['skill', 'stack', 'tech', 'kya aata', 'languages', 'expert', 'coding', 'tools', 'know'])) {
    setTimeout(() => scrollToSection('#skills'), 150);
    return "Technically and creatively, Aryan is a powerhouse. " + info.skills;
  } else if (has(['experience', 'internship', 'job', 'past', 'history', 'career', 'company', 'office'])) {
    setTimeout(() => scrollToSection('#experience'), 150);
    return info.experience;
  } else if (has(['contact', 'baat', 'email', 'touch', 'reach', 'message', 'talk', 'hire', 'call', 'mail'])) {
    setTimeout(() => scrollToSection('#contact'), 150);
    return info.contact;
  } else if (has(['education', 'padhai', 'study', 'college', 'school', 'university', 'degree', 'qualification'])) {
    setTimeout(() => scrollToSection('#experience'), 150);
    return info.education;
  } else if (has(['film', 'movie', 'picture', 'direct', 'night of life', 'cinema', 'video', 'youtube'])) {
    setTimeout(() => scrollToSection('#projects'), 150);
    return info.filmmaking;
  } else if (has(['social', 'link', 'github', 'linkedin', 'instagram', 'imdb', 'tmdb'])) {
    if (cmd.includes('github')) setTimeout(() => window.open('https://github.com/aryansingh0777raghav', '_blank'), 500);
    if (cmd.includes('linkedin')) setTimeout(() => window.open('https://www.linkedin.com/in/iamaryan07', '_blank'), 500);
    if (cmd.includes('instagram')) setTimeout(() => window.open('https://www.instagram.com/iam_aryannnn07', '_blank'), 500);
    return info.social + " " + info.links;
  } else if (has(['available', 'freelance', 'work', 'job', 'hire'])) {
    return info.availability;
  } else if (has(['hello', 'hi', 'namaste', 'hey', 'greetings', 'up'])) {
    return "Greetings! I am the digital representative of Aryan Singh. Ask me anything about his engineering or filmmaking career.";
  }

  return "I'm sorry, I couldn't find that in my knowledge base. But I can tell you all about Aryan's technical skills, cinematic vision, projects like Solexplain AI, his Samsung Big Data certification, or his educational background at ITM Gorakhpur.";
};

const SUGGESTIONS = [
  { text: "About Aryan 👨‍💻", query: "Who is Aryan?" },
  { text: "Top Projects 🚀", query: "Show me his projects" },
  { text: "Skills & Tech 💻", query: "What are his coding skills?" },
  { text: "Samsung Big Data 📜", query: "Tell me about his Samsung Big Data certificate" },
  { text: "Short Film 🎬", query: "What film did he direct?" },
  { text: "Contact details 📧", query: "How can I contact Aryan?" },
  { text: "Hire Aryan 💼", query: "Is Aryan available for freelance work?" }
];

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [inputText, setInputText] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      sender: 'ai',
      text: "Hello! I am Aryan's AI assistant. Ask me anything about his technical skills, projects, film productions, or professional experience. Feel free to type below or click the microphone to speak!",
      timestamp: new Date()
    }
  ]);

  const recognitionRef = useRef<any>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleSendMessage(text, true);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Scroll to bottom of chat area dynamically and cleanly
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      // Set scroll immediately to scrollHeight for zero-lag feeling
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  // Clean up speech synthesis when component unmounts or opens/closes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  const speak = (text: string) => {
    if (isMuted) return;
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = async (text: string, isVoiceInput = false) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setTranscript('');
    setIsLoading(true);

    // Get response directly from local parser
    const replyText = getLocalResponse(text.trim());

    // Small artificial delay to simulate typing (reduced to 350ms for faster feel)
    await new Promise(resolve => setTimeout(resolve, 350));

    const aiMessage: Message = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: replyText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);

    if (isVoiceInput) {
      // Automatically speak voice input responses
      speak(replyText);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setIsListening(true);
      setTranscript('');
      recognitionRef.current?.start();
    }
  };

  const toggleMute = () => {
    if (!isMuted) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
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
        text: "Chat cleared! Ask me anything about Aryan's portfolio, experience, skills, or projects.",
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

  return (
    <>
      {/* Floating Sparkles Button */}
      {!isOpen && (
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-all shadow-2xl hover:border-white/20 bg-black/40 hover:bg-black/60 relative group"
            title="Ask AI Assistant"
          >
            <Sparkles size={22} className={isSpeaking ? 'animate-pulse text-blue-400' : 'group-hover:rotate-12 transition-transform'} />
            {isSpeaking && (
              <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/20" />
            )}
          </button>
        </motion.div>
      )}

      {/* Expanded Wide Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-[calc(100vw-2rem)] sm:w-[480px] h-[550px] md:h-[650px] max-h-[calc(100vh-4rem)] glass rounded-[2rem] border border-white/10 shadow-3xl backdrop-blur-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white relative shadow-inner">
                  <Sparkles size={16} className={isSpeaking ? 'animate-pulse' : ''} />
                  {isListening && (
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-black rounded-full animate-pulse" />
                  )}
                  {!isListening && (
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Aryan's AI Representative</h4>
                  <p className="text-[10px] text-white/40 font-medium">
                    {isListening ? 'Listening...' : 'Online & Ready'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Voice mute/unmute */}
                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all"
                  title={isMuted ? "Unmute Voice Output" : "Mute Voice Output"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Clear Chat */}
                <button
                  onClick={clearChat}
                  className="p-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all"
                  title="Close Assistant"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scroll-smooth"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed shadow-sm transition-all ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-white/90 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="text-[8px] opacity-30 mt-1.5 block text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-white/40" />
                    <span className="text-xs text-white/40 font-medium">Assistant is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion Pills */}
            <div className="px-5 pb-2 pt-1">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x mask-gradient">
                {SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(sug.query)}
                    className="flex-shrink-0 snap-center px-3.5 py-1.5 bg-white/[0.04] border border-white/5 rounded-full text-[10px] font-bold text-white/50 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
                  >
                    {sug.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Input Form */}
            <form onSubmit={handleSubmit} className="p-5 pt-2 border-t border-white/5 bg-black/30 flex items-center gap-3">
              {/* Mic Speech Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  isListening
                    ? 'bg-red-500/10 text-red-500 border border-red-500/20 shadow-lg shadow-red-500/10'
                    : 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5'
                }`}
                title={isListening ? "Stop Listening" : "Start Voice Input"}
              >
                {isListening ? <MicOff size={18} className="animate-pulse" /> : <Mic size={18} />}
              </button>

              {/* TextInput */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isListening ? "Listening..." : "Ask me anything about Aryan..."}
                disabled={isListening}
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder-white/30 disabled:opacity-50"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading || isListening}
                className="w-11 h-11 rounded-xl bg-white text-black hover:bg-gray-200 flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-white"
                title="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
