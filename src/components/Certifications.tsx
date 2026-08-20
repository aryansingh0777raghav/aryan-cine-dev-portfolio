import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Award, ExternalLink, ArrowUpRight, CheckCircle2, FileText, X } from 'lucide-react';

interface CertificationsProps {
  viewMode: 'tech' | 'filmmaking' | 'both' | null;
}

export default function Certifications({ viewMode }: CertificationsProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const recognitions = [
    {
      type: "filmmaking",
      tag: "Press Coverage • Editorial Spotlight",
      title: "Aryan Singh: The Young Filmmaker Redefining Independent Storytelling",
      publisher: "THE INDIAN BLOG",
      date: "July 27, 2026",
      desc: "Featured in an exclusive editorial spotlight celebrating emerging independent storytellers in India. Details Aryan Singh's journey from Gorakhpur, UP, his directorial debut 'The Night of Life: Before You Think About It', and his multi-disciplinary vision bridging software engineering with cinema.",
      link: "https://indianblog.co.in/aryan-singh-filmmaker/",
      image: "/images/aryan_press_portrait.jpg",
      points: [
        "Spotlight on directorial debut 'The Night of Life'",
        "Celebrated for emotional realism & philosophical depth",
        "Recognized for dual expertise in Software & Cinema"
      ]
    },
    {
      type: "tech",
      tag: "Samsung Credential • Big Data",
      title: "Samsung Innovation Campus Big Data Certification",
      publisher: "Samsung Electronics",
      date: "Nov 2025",
      desc: "Certified in Big Data analytics and computational statistics (Certificate ID: SIC08720). Covered end-to-end data manipulation pipelines, machine learning feature engineering, and high-throughput Python data workflows.",
      points: [
        "Certificate ID: SIC08720",
        "Data pipeline modeling & predictive analytics",
        "High-throughput Python data transformations"
      ]
    },
    {
      type: "tech",
      tag: "Industry Training • Grade A++",
      title: "Data Analytics Summer Training & Capstone",
      publisher: "Techpile Technology Pvt. Ltd.",
      date: "July 2026",
      desc: "45-day intensive industry training covering Python data analytics, relational SQL databases, business intelligence visualization, and statistical modeling. Awarded Grade A++ and Outstanding Performer recognition.",
      certificateImage: "/images/techpile_certificate.jpg",
      certificateId: "TechpileST260123",
      points: [
        "Awarded Grade A++ on Capstone Project",
        "Comprehensive Python, SQL & Business Analytics",
        "Certificate ID: TechpileST260123",
        "Outstanding Performer Gold Medal"
      ]
    }
  ];

  const filtered = recognitions.filter(item => {
    if (viewMode === 'both' || viewMode === null) return true;
    return item.type === viewMode;
  });

  return (
    <section id="certifications" className="py-24 md:py-36 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Monospaced Section Indexer */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-index">006 // Press & Recognitions</span>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            In the Spotlight.<br />
            <span className="text-neutral-500 font-semibold">Press features & credentials.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Verified media coverage, institutional certifications, and industry accolades.
          </p>
        </div>

        {/* News & Editorial Cards Grid matching MobilityLab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-neutral-200 bg-white p-7 hover:border-neutral-400 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="swiss-pill-tag">{item.tag}</span>
                  <span className="font-mono text-[11px] text-neutral-400">{item.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight mb-2 group-hover:text-neutral-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono font-semibold text-neutral-500 mb-4">
                  {item.publisher}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-neutral-950 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-neutral-700 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:underline"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : item.certificateImage ? (
                  <button
                    onClick={() => setSelectedCertificate({
                      src: item.certificateImage!,
                      title: item.title,
                      subtitle: `${item.publisher} • ID: ${item.certificateId}`
                    })}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:underline cursor-pointer"
                  >
                    <FileText size={13} />
                    <span>View Certificate</span>
                    <ArrowUpRight size={13} />
                  </button>
                ) : (
                  <span className="text-xs font-mono text-neutral-400">Verified Credential</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Res Image Viewer Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <div
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-3xl border border-neutral-200 bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 flex flex-col gap-6 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">{selectedCertificate.title}</h4>
                  <p className="text-xs text-neutral-500 font-mono">{selectedCertificate.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCertificate.src}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-900 font-semibold rounded-xl text-xs transition-colors flex items-center gap-1.5"
                  >
                    Open Original <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Image View */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
                <img
                  src={selectedCertificate.src}
                  alt={selectedCertificate.title}
                  className="w-full h-auto object-contain max-h-[70vh] mx-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
