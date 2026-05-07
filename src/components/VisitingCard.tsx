import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function VisitingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 px-6 bg-black relative flex justify-center items-center overflow-hidden">
      {/* Background ambient glow - optimized for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/[0.05] blur-[80px] rounded-full pointer-events-none" style={{ willChange: 'transform' }} />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10" style={{ willChange: 'transform' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Digital Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gradient">
            My Visiting Card
          </h2>
          <p className="text-white/40 mt-4 text-sm max-w-md mx-auto">
            Hover or tap to flip the card and see the details.
          </p>
        </motion.div>

        <div className="perspective-1000 w-full max-w-[340px] aspect-[1/1.75] mx-auto group">
          <motion.div
            className="w-full h-full relative preserve-3d cursor-pointer"
            style={{ willChange: 'transform' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
          >
            {/* Front Card */}
            <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10" style={{ willChange: 'transform' }}>
              <img 
                src="/images/front_card.png" 
                alt="Visiting Card Front" 
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Back Card */}
            <div 
              className="absolute inset-0 backface-hidden w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10"
              style={{ transform: "rotateY(180deg)" }}
            >
              <img 
                src="/images/back_card.png" 
                alt="Visiting Card Back" 
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
