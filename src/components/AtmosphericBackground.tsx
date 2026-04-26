import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function AtmosphericBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const glow1Color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.8, 1],
    ["rgba(37, 99, 235, 0.1)", "rgba(37, 99, 235, 0.15)", "rgba(249, 115, 22, 0.15)", "rgba(34, 197, 94, 0.1)", "rgba(255, 255, 255, 0.05)"]
  );

  const glow2Color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["rgba(37, 99, 235, 0.05)", "rgba(249, 115, 22, 0.1)", "rgba(249, 115, 22, 0.05)", "rgba(255, 255, 255, 0.02)"]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.5;
        this.speedY = Math.random() * 0.2 + 0.1;
        this.opacity = Math.random() * 0.2;
      }

      update() {
        this.y -= this.speedY;
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const init = () => {
      particles = [];
      const particleCount = 30; // Further reduced for performance
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Optimized Static Glows */}
      <motion.div
        style={{ y: y1, backgroundColor: glow1Color }}
        className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] blur-[120px] rounded-full transition-colors duration-1000"
      />
      <motion.div
        style={{ y: y2, backgroundColor: glow2Color }}
        className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] blur-[120px] rounded-full transition-colors duration-1000"
      />
      
      {/* Lightweight Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10 pointer-events-none"
      />
    </div>
  );
}
