import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Calendar, Award, CheckCircle2, ExternalLink, ShieldCheck, X, FileText } from 'lucide-react';

interface CertificationsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const certificationData = {
  title: "Data Analytics Summer Training",
  organization: "Techpile Technology Pvt. Ltd.",
  duration: "45 Days • July 2026",
  grade: "A++",
  status: "Completed",
  certificateId: "TechpileST260123",
  image: "/images/techpile_certificate.jpg",
  description: "Successfully completed a 45-day industry-oriented Data Analytics Summer Training at Techpile Technology Pvt. Ltd. The program focused on practical applications of Python, SQL, data analysis, data visualization, and solving real-world business problems through project-based learning. Successfully completed the capstone project and received an A++ Grade.",
  skills: [
    "Python",
    "SQL",
    "Data Analysis",
    "Data Cleaning",
    "Data Visualization",
    "Statistics",
    "Microsoft Excel",
    "Problem Solving"
  ],
  achievements: [
    "Awarded A++ Grade",
    "Successfully completed the capstone project",
    "Received Certificate of Completion",
    "Received Project Completion Certificate",
    "Awarded Outstanding Performer Gold Medal"
  ],
  technologies: "Python • SQL • Excel • Data Analytics"
};

export default function Certifications({ viewMode }: CertificationsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (viewMode === 'filmmaking') return null;

  return (
    <section id="certifications" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/[0.015] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Credentials & Training
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gradient mb-4">
            Training & Certifications
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Industry-recognized training programs, technical certifications, and capstone achievements.
          </p>
        </div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="glass rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 relative group max-w-5xl mx-auto shadow-2xl"
        >
          {/* Top Badges Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-full text-[10px] font-bold tracking-wider uppercase">
                <ShieldCheck size={14} className="text-green-400" /> Verified Training
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-white/40 rounded-full text-[10px] font-bold tracking-wider uppercase">
                ID: {certificationData.certificateId}
              </span>
            </div>

            {/* A++ Grade Badge */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Grade</span>
              <span className="px-4 py-1.5 bg-white text-black font-black rounded-full text-xs tracking-wider uppercase shadow-lg">
                {certificationData.grade}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                  {certificationData.title}
                </h3>

                {/* Info Metadata Bar */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-xs text-white/60 font-medium">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-white/40" />
                    <span>{certificationData.organization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-white/40" />
                    <span>{certificationData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-white/40" />
                    <span>Grade {certificationData.grade}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-8">
                  {certificationData.description}
                </p>

                {/* Achievements Checklist */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4 flex items-center gap-2">
                    <Award size={14} /> Key Achievements
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {certificationData.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-white/80 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <FileText size={14} /> View Certificate
                </button>

                <button
                  disabled
                  title="Project link not available"
                  className="px-6 py-3 bg-white/5 border border-white/5 text-white/30 font-bold rounded-xl text-xs uppercase tracking-widest cursor-not-allowed flex items-center gap-2 opacity-50"
                >
                  <ExternalLink size={14} /> View Project
                </button>
              </div>
            </div>

            {/* Right Skills & Tech Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between bg-white/[0.015] border border-white/5 rounded-2xl p-6 md:p-8">
              {/* Skills Pill Badges */}
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">
                  Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificationData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider text-white/70 hover:bg-white hover:text-black transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies summary */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Technologies</p>
                <p className="text-xs font-bold text-white/80">{certificationData.technologies}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Full-Res Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8 flex flex-col gap-6"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">Certificate of Completion & Honors</h4>
                  <p className="text-xs text-white/50">Techpile Technology Pvt. Ltd. • ID: {certificationData.certificateId}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={certificationData.image}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-white/10 hover:bg-white hover:text-black text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5"
                  >
                    Open Original <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white hover:text-black text-white/70 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
                <img
                  src={certificationData.image}
                  alt="Techpile Training Certificate & Medals"
                  className="w-full h-auto object-contain max-h-[70vh] mx-auto rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
