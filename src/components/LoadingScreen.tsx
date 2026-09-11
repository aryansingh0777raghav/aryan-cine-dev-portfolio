import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-6 select-none"
      style={{ backgroundColor: '#FAFAFB' }}
    >
      <div className="relative flex flex-col items-center max-w-sm sm:max-w-md w-full text-center">
        {/* ARYAN ONE Tactile 3D Physical Emblem */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-64 sm:w-80 md:w-96 mb-6"
        >
          <img 
            src="/images/aryan-one-logo.png" 
            alt="ARYAN ONE — One Vision. No Limits." 
            className="w-full h-auto object-contain block mx-auto ambient-depth-logo"
          />
        </motion.div>

        {/* High-Velocity Precision Progress Line (Thickened Tactile Pill) */}
        <div className="w-52 sm:w-64 h-1 bg-neutral-200/90 rounded-full overflow-hidden relative mx-auto mt-4">
          <motion.div
            className="h-full bg-neutral-950 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
