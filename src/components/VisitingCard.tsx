import { useState } from 'react';
import { motion } from 'motion/react';

export default function VisitingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-24 md:py-36 bg-white border-b border-neutral-200 flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center">
        {/* Monospaced Section Indexer */}
        <div className="w-full flex items-center gap-3 mb-12">
          <span className="section-index">008 // Digital Identity</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 mb-3">
            Digital Identity Card
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal">
            Hover or tap to flip the card and view direct contact details.
          </p>
        </motion.div>

        <div className="perspective-1000 w-full max-w-[320px] aspect-[1/1.75] mx-auto">
          <motion.div
            className="w-full h-full relative preserve-3d cursor-pointer"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
          >
            {/* Front Card */}
            <div 
              className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-900"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
            >
              <img 
                src="/images/front_card.png" 
                alt="Visiting Card Front" 
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Back Card */}
            <div 
              className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-900"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
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
