import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, RefreshCw, UserCheck, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface VisitingCardProps {
  viewMode?: 'tech' | 'filmmaking' | 'both' | null;
}

export default function VisitingCard({ viewMode }: VisitingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [saved, setSaved] = useState(false);

  const downloadVCard = () => {
    soundFX.playClick();
    
    const org = viewMode === 'tech' 
      ? 'ArKTest Beta' 
      : viewMode === 'filmmaking' 
      ? 'CineOn Studio 7' 
      : 'ArKTest Beta | CineOn Studio 7';
      
    const title = viewMode === 'tech'
      ? 'Founder & Lead Full-Stack Architect'
      : viewMode === 'filmmaking'
      ? 'Independent Film Director & Screenwriter'
      : 'Founder & Lead Full-Stack Architect | Independent Film Director';

    const note = viewMode === 'tech'
      ? 'Founder & Architect of ArKTest Beta (Crowdsourced QA Marketplace & Escrow Concurrency)'
      : viewMode === 'filmmaking'
      ? 'Director of The Night of Life (4K Short Film) & Screenwriter at CineOn Studio 7'
      : 'Founder & Architect of ArKTest Beta & Director of The Night of Life';

    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Singh;Aryan;;;
FN:Aryan Singh
ORG:${org}
TITLE:${title}
EMAIL;TYPE=INTERNET,PREF:aryansingh979211@gmail.com
ADR;TYPE=HOME:;;Gorakhpur;Uttar Pradesh;;India
URL;TYPE=WORK:https://aryan-cine-dev-portfolio.vercel.app/
URL;TYPE=LinkedIn:https://www.linkedin.com/in/iamaryan07
URL;TYPE=GitHub:https://github.com/aryansingh0777raghav
NOTE:${note}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aryan_Singh.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleFlip = () => {
    soundFX.playToggle();
    setIsFlipped(!isFlipped);
  };

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
          className="text-center mb-10 max-w-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 mb-3">
            Digital Identity Card
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal">
            Hover or tap to flip the card, or save Aryan's verified contact card directly into your phone.
          </p>
        </motion.div>

        {/* 3D Card Stage */}
        <div className="perspective-1000 w-full max-w-[310px] aspect-[1/1.75] mx-auto mb-8">
          <motion.div
            className="w-full h-full relative preserve-3d cursor-pointer"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            onClick={handleFlip}
            onHoverStart={() => {
              soundFX.playToggle();
              setIsFlipped(true);
            }}
            onHoverEnd={() => {
              soundFX.playToggle();
              setIsFlipped(false);
            }}
          >
            {/* Front Card */}
            <div 
              className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
            >
              <img 
                src="/images/front_card.png" 
                alt="Aryan Singh Identity Card Front" 
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Back Card */}
            <div 
              className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <img 
                src="/images/back_card.png" 
                alt="Aryan Singh Identity Card Back" 
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleFlip}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 bg-[#FAFAFB] text-xs font-semibold text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-pointer shadow-2xs"
          >
            <RefreshCw size={13} className={isFlipped ? "rotate-180 transition-transform" : ""} />
            <span>{isFlipped ? "Flip to Front" : "Flip to Back"}</span>
          </button>

          <button
            onClick={downloadVCard}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
          >
            {saved ? (
              <>
                <UserCheck size={14} className="text-emerald-400" />
                <span>Contact Saved (.vcf)</span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span>Add to Contacts (.vcf)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
