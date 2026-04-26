import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, X } from 'lucide-react';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const text = event.results[0][0].transcript.toLowerCase();
        setTranscript(text);
        handleCommand(text);
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

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase();
    let reply = "I'm sorry, I couldn't find that in my database. But I can tell you all about Aryan's technical skills, cinematic vision, projects like Solexplain AI, or his educational background at ITM Gorakhpur.";
    
    // Extended Knowledge Base
    const info = {
      about: "Aryan Singh is a dual-threat Software Engineer and Film Director. He specializes in bridging logical engineering with creative storytelling. He's currently available for freelance software and film projects.",
      projects: "Aryan's portfolio features high-end work like the Scrollytelling Portfolio, the Solana-based Solexplain AI, and a specialized Terminal Interface. His filmmaking peak is 'The Night of Life', which he wrote and directed.",
      skills: "On the tech side, he's a master of Python, Pandas, Java, C++, and SQL. In the studio, he excels as a Writer, Director, Actor, Musician, and Editor.",
      education: "He is currently pursuing his BCA at ITM Gorakhpur, building on a strong foundation from SR International Academy.",
      experience: "Aryan has a solid professional background. He served as a Film Director at CineOn Studio 7 from 2023 to 2025, overseeing production. He also completed a Python Training internship at Data Culture Technology in 2024.",
      availability: "Aryan is currently AVAILABLE for freelance work! You can hire him for web development, AI tool building, or professional film production.",
      social: "You can find Aryan on LinkedIn as iamaryan07, GitHub as aryansingh0777raghav, and Instagram as iam_aryannnn07.",
      links: "I can open his LinkedIn, GitHub, or IMDb for you. Just ask!",
      filmmaking: "Aryan's filmmaking style is psychological and dramatic. His short film 'The Night of Life: Before You Think About It' explores deep inner conflict and is available on YouTube."
    };

    // Advanced Intent Detection
    const has = (keywords: string[]) => keywords.some(k => cmd.includes(k));

    if (has(['project', 'kaam', 'work', 'portfolio', 'dikhao', 'build', 'create', 'made'])) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      reply = "Aryan has built some incredible digital experiences. " + info.projects;
    } else if (has(['who', 'about', 'him', 'aryan', 'kaun', 'btao', 'biography', 'identity', 'profile'])) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      reply = info.about;
    } else if (has(['skill', 'stack', 'tech', 'kya aata', 'languages', 'expert', 'coding', 'tools', 'know'])) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      reply = "Technically and creatively, Aryan is a powerhouse. " + info.skills;
    } else if (has(['experience', 'internship', 'job', 'past', 'history', 'career', 'company', 'office'])) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      reply = info.experience;
    } else if (has(['contact', 'baat', 'email', 'touch', 'reach', 'message', 'talk', 'hire', 'call', 'mail'])) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      reply = "You can reach out to Aryan directly at aryansingh979211@gmail.com. He is currently open for freelance opportunities.";
    } else if (has(['education', 'padhai', 'study', 'college', 'school', 'university', 'degree', 'qualification'])) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      reply = info.education;
    } else if (has(['film', 'movie', 'picture', 'direct', 'night of life', 'cinema', 'video', 'youtube'])) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      reply = info.filmmaking;
    } else if (has(['social', 'link', 'github', 'linkedin', 'instagram', 'imdb', 'tmdb'])) {
      reply = info.social + " " + info.links;
      if (cmd.includes('github')) window.open('https://github.com/aryansingh0777raghav', '_blank');
      if (cmd.includes('linkedin')) window.open('https://www.linkedin.com/in/iamaryan07', '_blank');
      if (cmd.includes('instagram')) window.open('https://www.instagram.com/iam_aryannnn07', '_blank');
    } else if (has(['available', 'freelance', 'work', 'job', 'hire'])) {
      reply = info.availability;
    } else if (has(['hello', 'hi', 'namaste', 'hey', 'greetings', 'up'])) {
      reply = "Greetings! I am the digital representative of Aryan Singh. Ask me anything about his engineering or filmmaking career.";
    }

    setResponse(reply);
    speak(reply);
  };

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
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

  return (
    <>
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-24 right-6 md:bottom-32 md:right-12 z-[100]"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white transition-all shadow-2xl ${isOpen ? 'bg-white text-black' : 'hover:scale-110'}`}
        >
          {isOpen ? <X size={20} /> : <Sparkles size={20} className={isSpeaking ? 'animate-pulse text-blue-400' : ''} />}
          {isSpeaking && (
            <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/20" />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 md:bottom-52 md:right-12 z-[100] w-[calc(100vw-3rem)] md:w-80 glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-white/10 shadow-3xl backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">AI Assistant</h4>
                <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
              </div>

              <div className="min-h-[60px] flex flex-col gap-2">
                <p className="text-sm font-medium text-white/80 leading-relaxed">
                  {response || "Click the mic and say 'Hello' or 'Show projects'"}
                </p>
                {transcript && (
                  <p className="text-[10px] font-bold text-white/30 italic">"{transcript}"</p>
                )}
              </div>

              <button
                onClick={toggleListening}
                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-all ${isListening ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-white text-black font-black hover:bg-gray-200'}`}
              >
                {isListening ? (
                  <>
                    <MicOff size={18} /> Listening...
                  </>
                ) : (
                  <>
                    <Mic size={18} /> Start Voice Command
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  'About Aryan', 
                  'Top Projects', 
                  'Skills', 
                  'Experience', 
                  'Education', 
                  'Contact', 
                  'Open GitHub', 
                  'Hire Me'
                ].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => handleCommand(tag.toLowerCase())}
                    className="px-3 py-2 bg-white/5 border border-white/5 rounded-xl text-[9px] font-bold text-white/40 hover:bg-white/10 hover:text-white transition-all text-left"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
