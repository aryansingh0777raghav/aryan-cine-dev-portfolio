import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || ('ontouchstart' in window));

    const lenis = new Lenis({
      duration: isMobile ? 0.7 : 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: isMobile ? 1.4 : 1.0,
      syncTouch: true,
      infinite: false,
    });

    (window as any).lenis = lenis;

    // Disable scroll on initial load if viewMode is not chosen
    if (!sessionStorage.getItem('portfolio-view-mode')) {
      lenis.stop();
    }

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

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
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
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
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999]"
          >
            <ViewSelector onSelectMode={handleSelectMode} />
          </motion.div>
        )}
      </AnimatePresence>

      {viewMode !== null && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-white to-orange-600 z-[9999] origin-left"
            style={{ scaleX }}
          />
          <Navbar viewMode={viewMode} setViewMode={handleSelectMode} />
          <main>
            <Hero viewMode={viewMode} />
            <About viewMode={viewMode} />
            <Projects viewMode={viewMode} />
            <Timeline viewMode={viewMode} />
            <Certifications viewMode={viewMode} />
            <Skills viewMode={viewMode} />
            <VisitingCard />
            <Contact />
          </main>
          <VoiceAssistant viewMode={viewMode} />
          <Footer />
        </>
      )}
    </div>
  );
}
