import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Calendar, Award, CheckCircle2, ExternalLink, ShieldCheck, X, FileText, Newspaper, Sparkles, UserCheck } from 'lucide-react';

interface CertificationsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

const mediaFeatureData = {
  title: "Aryan Singh: The Young Filmmaker Redefining Independent Storytelling",
  publisher: "THE INDIAN BLOG",
  publishedDate: "July 27, 2026",
  badge: "Press Coverage • Editorial Spotlight",
  articleUrl: "https://indianblog.co.in/aryan-singh-filmmaker/",
  image: "/images/aryan_press_portrait.jpg",
  description: "Featured in an exclusive editorial spotlight on The Indian Blog celebrating emerging independent storytellers in India. The article delves into Aryan Singh's journey from Gorakhpur, UP, highlighting his directorial debut 'The Night of Life: Before You Think About It', his multi-disciplinary expertise as a Writer, Director & Actor, and his commitment to psychological storytelling, emotional realism, and philosophical cinema.",
  highlights: [
    "Featured as an Emerging Independent Indian Filmmaker",
    "Spotlight on Directorial Debut 'The Night of Life'",
    "Recognized for Multi-disciplinary Roles (Writer, Director, Actor)",
    "Highlighted for Balancing Software Engineering & Cinema",
    "Praised for Psychological Depth & Philosophical Storytelling"
  ],
  topics: ["Media Coverage", "The Indian Blog", "Gorakhpur Filmmaker", "Independent Cinema", "Short Film", "Psychological Drama"]
};

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
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const showMedia = viewMode === 'filmmaking' || viewMode === 'both' || viewMode === null;
  const showTech = viewMode === 'tech' || viewMode === 'both' || viewMode === null;

  return (
    <section id="certifications" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/[0.015] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Honors, Press & Credentials
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gradient mb-4">
            Recognitions & Achievements
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Featured media coverages, industry-recognized training credentials, and creative milestones.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Card 1: Media Press Coverage (Shown in filmmaking & both modes) */}
          {showMedia && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 relative group max-w-5xl mx-auto shadow-2xl"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 rounded-full text-[10px] font-black tracking-wider uppercase">
                    <Newspaper size={14} className="text-orange-400" /> Featured Press Coverage
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/5 text-white/40 rounded-full text-[10px] font-bold tracking-wider uppercase">
                    {mediaFeatureData.publisher}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/40 font-medium">
                  <Calendar size={14} />
                  <span>{mediaFeatureData.publishedDate}</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Left Portrait Image Feature */}
                <div className="lg:col-span-4 relative">
                  <div 
                    onClick={() => setSelectedImage({
                      src: mediaFeatureData.image,
                      title: mediaFeatureData.title,
                      subtitle: `${mediaFeatureData.publisher} • ${mediaFeatureData.publishedDate}`
                    })}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group/img cursor-pointer shadow-xl bg-neutral-950"
                  >
                    <img
                      src={mediaFeatureData.image}
                      alt="Aryan Singh Press Portrait"
                      className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        Editorial Portrait
                      </span>
                      <span className="text-xs text-white bg-white/10 hover:bg-white hover:text-black p-1.5 rounded-lg transition-colors">
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 block">
                      Editorial Article Feature
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 leading-snug group-hover:text-white transition-colors">
                      {mediaFeatureData.title}
                    </h3>

                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-6">
                      {mediaFeatureData.description}
                    </p>

                    {/* Key Article Highlights */}
                    <div className="mb-8">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-2">
                        <Sparkles size={14} className="text-amber-400" /> Article Highlights
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {mediaFeatureData.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-white/80 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-white/80 font-medium leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Tags */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {mediaFeatureData.topics.map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/60">
                          #{topic}
                        </span>
                      ))}
                    </div>

                    <a
                      href={mediaFeatureData.articleUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-white text-black font-extrabold rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02]"
                    >
                      <Newspaper size={14} /> Read Full Feature Article <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Tech Certification (Shown in tech & both modes) */}
          {showTech && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
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
                      onClick={() => setSelectedImage({
                        src: certificationData.image,
                        title: "Data Analytics Training Certificate & Medals",
                        subtitle: `${certificationData.organization} • ID: ${certificationData.certificateId}`
                      })}
                      className="px-6 py-3 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <FileText size={14} /> View Certificate
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
          )}
        </div>
      </div>

      {/* Full-Res Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
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
                  <h4 className="text-lg font-bold text-white">{selectedImage.title}</h4>
                  <p className="text-xs text-white/50">{selectedImage.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={selectedImage.src}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-white/10 hover:bg-white hover:text-black text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5"
                  >
                    Open Original <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white hover:text-black text-white/70 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Image View */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
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

