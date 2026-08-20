import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Pillars from './components/Pillars';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import VisitingCard from './components/VisitingCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import VoiceAssistant from './components/VoiceAssistant';
import ViewSelector from './components/ViewSelector';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'tech' | 'filmmaking' | 'both' | null>(() => {
    if (typeof window !== 'undefined') {
      return (sessionStorage.getItem('portfolio-view-mode') as any) || null;
    }
    return null;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let rafId: number;

    const isTouchDevice = typeof window !== 'undefined' && (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024
    );

    let lenis: any = null;

    if (!isTouchDevice) {
      // Desktop: Smooth Lenis mousewheel momentum
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 0,
        syncTouch: false,
        infinite: false,
      });

      (window as any).lenis = lenis;

      if (!sessionStorage.getItem('portfolio-view-mode')) {
        lenis.stop();
      }

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    } else {
      // Mobile / Touch: 100% Native 120 FPS GPU compositor touch scroll (zero main-thread lag)
      (window as any).lenis = null;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => {
      (window as any).lenis = null;
      cancelAnimationFrame(rafId);
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  const handleSelectMode = (mode: 'tech' | 'filmmaking' | 'both') => {
    setViewMode(mode);
    sessionStorage.setItem('portfolio-view-mode', mode);
    
    // Resume scroll once selection is made
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.start();
    }
  };

  return (
    <div className="bg-white text-neutral-950 min-h-screen font-sans selection:bg-neutral-950 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <AnimatePresence>
        {viewMode === null && !loading && (
          <motion.div
            key="selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999]"
          >
            <ViewSelector onSelectMode={handleSelectMode} />
          </motion.div>
        )}
      </AnimatePresence>

      {viewMode !== null && (
        <>
          {/* Top Precision Scroll Progress Line */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-950 z-[9999] origin-left"
            style={{ scaleX }}
          />

          {/* MobilityLab Swiss Header */}
          <Navbar viewMode={viewMode} setViewMode={handleSelectMode} />

          <main>
            {/* 001 // Overview Hero */}
            <Hero viewMode={viewMode} />

            {/* 002 // Philosophy & Vision Statement */}
            <Statement />

            {/* 003 // 4 Core Competency Pillars */}
            <Pillars />

            {/* About & Narrative */}
            <About viewMode={viewMode} />

            {/* 004 // Projects & Flagship ArKTest Beta Showcase */}
            <Projects viewMode={viewMode} />

            {/* 005 // Trajectory & Milestones Timeline */}
            <Timeline viewMode={viewMode} />

            {/* 006 // Press & Recognitions */}
            <Certifications viewMode={viewMode} />

            {/* 007 // Technical & Creative Matrix */}
            <Skills viewMode={viewMode} />

            {/* Digital Identity Visiting Card */}
            <VisitingCard />

            {/* 008 // Inquiries & Contact */}
            <Contact />
          </main>

          {/* AI Voice Assistant */}
          <VoiceAssistant viewMode={viewMode} />

          {/* Swiss Minimalist Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
