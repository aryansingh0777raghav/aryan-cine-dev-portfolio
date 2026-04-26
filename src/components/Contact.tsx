import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Connection
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gradient mb-6">Get in Touch</h2>
          <p className="text-white/40 max-w-lg font-medium leading-relaxed">
            Have a bold project in mind? Let's collaborate and build something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-12 border border-white/5 h-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="text-2xl font-black mb-10 tracking-tight">Contact Information</h3>
              
              <div className="space-y-8 w-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Email</p>
                    <p className="text-white font-bold text-sm md:text-base">aryansingh979211@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Location</p>
                    <p className="text-white font-bold text-sm md:text-base">Gorakhpur, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 flex justify-center lg:justify-start gap-4 w-full">
                <a href="https://github.com/aryansingh0777raghav" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/iamaryan07" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                  <Linkedin size={22} />
                </a>
                <a href="https://www.instagram.com/iam_aryannnn07" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-12 border border-white/5">
              <form 
                className="space-y-8" 
                action="https://formsubmit.co/aryansingh979211@gmail.com" 
                method="POST"
              >
                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha for better UX (Optional, remove if spam becomes an issue) */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page (Optional) */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black ml-4">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-8 py-5 glass-dark border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 transition-all text-sm font-medium placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black ml-4">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-8 py-5 glass-dark border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 transition-all text-sm font-medium placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black ml-4">Message</label>
                  <textarea 
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or vision..."
                    required
                    className="w-full px-8 py-5 glass-dark border border-white/5 rounded-[2rem] focus:outline-none focus:border-white/20 transition-all text-sm font-medium placeholder:text-white/20 resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

