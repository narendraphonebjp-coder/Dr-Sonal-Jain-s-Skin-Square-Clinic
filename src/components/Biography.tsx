import { motion } from 'motion/react';
import drMonicaImage from '../assets/images/dr_monica_perlman_1781160073883.png';

export default function Biography() {
  const events = [
    {
      year: "2006",
      title: "Medical Degree (MBBS)",
      description: "Government Medical College, Surat (GMC) — graduated with distinguished medical honors and high excellence"
    },
    {
      year: "2010",
      title: "Post Graduate in Dermatology (DDVL / MD)",
      description: "Recognized Post Graduation in Dermatology, Venereology & Leprosy — advanced specialty training in clinical dermatotherapy and lasers"
    },
    {
      year: "2012",
      title: "Cosmetology & Laser Specialization",
      description: "Completed fellowship in aesthetic and advanced cosmetic lasers, micro-infusions and dermal fillers"
    },
    {
      year: "2015",
      title: "Founded MIDAS SKIN HAIR & LASER CLINIC",
      description: "Opened the flagship high-tech clinic in Adajan, Surat to establish patient-centric dermatology excellence"
    },
    {
      year: "2020",
      title: "Advanced Laser Infrastructure",
      description: "Integrated FDA-approved gold standard skin resurfacing and hair reduction laser systems to expand cosmetic solutions"
    },
    {
      year: "2026",
      title: "Surat's Premier Dermatologist",
      description: "Upholding supreme patient-first standards of care with multi-laser technologies and comprehensive trichology"
    }
  ];

  const publications = [
    { source: "INDIAN JOURNAL OF DERMATOLOGY", title: "Targeted Laser Therapy for Post-Inflammatory Vascular Hyperpigmentation", year: "2025" },
    { source: "CLINICAL & AESTHETIC REVIEW", title: "Combining Chemical Peels and Active Serums for Melasma Management in Indian Skin", year: "2024" },
    { source: "TRICHOLOGY ADVANCES TODAY", title: "Efficacy of Micro-Nutrient Infusions and Platelet-Rich Plasma in Androgenetic Alopecia", year: "2023" },
    { source: "SURAT MEDICAL UNION PAPERS", title: "Evaluation of Safety Parameters for Fractional Carbon Dioxide Resurfacing", year: "2022" },
    { source: "COSMETIC TECHNOLOGY QUARTERLY", title: "Innovative Needleless Hydration Systems for Barrier-Compromised Epidermis", year: "2021" }
  ];

  return (
    <motion.div
      id="biography-section-root"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-24 md:space-y-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Bio Header */}
      <section id="bio-header" className="pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div id="bio-header-text" className="md:col-span-5 space-y-6">
          <div id="bio-cat" className="text-[10px] tracking-[0.25em] text-brand-secondary font-mono font-medium uppercase">
            BIOGRAPHY
          </div>
          <h1 id="bio-headline" className="font-serif text-4.5xl md:text-5.5xl text-brand-primary font-light leading-snug">
            A physician's <br />
            <span className="italic font-normal text-brand-accent">first language</span> <br />
            is listening.
          </h1>
        </div>
      </section>

      {/* Bio Image */}
      <section id="bio-portrait-section" className="aspect-[16/9] md:aspect-[21/9] bg-brand-bg overflow-hidden border border-brand-border rounded-sm">
        <img 
          id="bio-portrait"
          src={drMonicaImage} 
          alt="Dr. Avani Patel" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[10%]"
        />
      </section>

      {/* Narrative Section */}
      <section id="bio-narrative" className="grid grid-cols-1 md:grid-cols-12 gap-10 text-justify">
        <div id="bio-editorial" className="md:col-span-8 md:col-start-3 space-y-8 font-sans text-sm font-light text-brand-secondary leading-relaxed">
          <p id="bio-p1" className="text-base leading-relaxed text-brand-primary">
            <span className="font-serif text-4xl float-left mr-2.5 mt-1 text-brand-accent font-normal">A</span>
            vani Patel, MD, was raised in Gujarat with a deep-seated appreciation for the fine intersections of clinical science, artistic skin health, and lifestyle aesthetic medicine. The principles she carried with her — active listening, thorough preventative care, state-of-the-art technological intervention, and dedicated empathy — became the foundational pillars of her medical practice.
          </p>

          <p id="bio-p2">
            She completed her clinical training and earned her Medical Degree in Surat with outstanding honors, before pursuing advanced specializations in clinical dermatology, venereology, and laser technologies. With multiple board certifications and specialized training under elite aesthetic teachers, Dr. Patel envisioned a modern suite where professional skin health was treated with safety, precision, and state-of-the-art medical lasers.
          </p>

          <p id="bio-p3">
            In 2015, she established MIDAS SKIN HAIR & LASER CLINIC in Surat, Gujarat, starting as a focused specialty practice. Her vision for premium, personalized skin care and unhurried medical evaluation quickly resonated with the Gujarat community, leading to the establishment of our premier, spacious suite at Velocity Business Hub with advanced FDA-approved laser treatments.
          </p>

          <p id="bio-p4">
            Her medical philosophy is defined by a complete refusal of rushed, conveyor-belt medical sessions. Instead, Dr. Patel emphasizes comprehensive conversations, ensuring your specific skin history, genetic indicators, and lifestyle factors guide every custom laser or therapeutic program. Under her guidance, MIDAS has integrated medical dermatology, non-invasive hair solutions, corrective skin resurfacing, and nourishing aesthetic facials into one of the region's elite centers.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="timeline-section" className="space-y-12">
        <div id="timeline-title-block">
          <div id="timeline-tag" className="text-[10px] tracking-widest text-brand-secondary font-mono uppercase">
            TRAINING & LANDMARKS
          </div>
          <h2 id="timeline-title" className="font-serif text-3xl text-brand-primary font-light mt-4">
            A lifelong clinical dedication.
          </h2>
        </div>

        <div id="timeline-list" className="border-t border-brand-border/60 divide-y divide-brand-border/60">
          {events.map((evt, idx) => (
            <div id={`timeline-row-${idx}`} key={idx} className="grid grid-cols-1 md:grid-cols-12 py-8 gap-4 items-start">
              <div id={`timeline-year-${idx}`} className="md:col-span-2 font-serif text-xl text-brand-accent">
                {evt.year}
              </div>
              <div id={`timeline-content-${idx}`} className="md:col-span-10 space-y-1.5">
                <h3 id={`timeline-event-title-${idx}`} className="font-mono text-xs tracking-wider uppercase text-brand-primary font-medium">
                  {evt.title}
                </h3>
                <p id={`timeline-event-desc-${idx}`} className="font-sans text-xs font-light text-brand-secondary leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications-section" className="space-y-12">
        <div id="publications-title-block">
          <div id="publications-tag" className="text-[10px] tracking-widest text-brand-secondary font-mono uppercase">
            SELECTED READS & PUBLICATIONS
          </div>
        </div>

        <div id="publications-list" className="border-t border-brand-border/60 divide-y divide-brand-border/60 font-mono text-[11px] tracking-wider text-brand-secondary uppercase">
          {publications.map((pub, idx) => (
            <div id={`pub-row-${idx}`} key={idx} className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 items-center">
              <div id={`pub-source-${idx}`} className="md:col-span-3 text-brand-primary font-semibold">
                {pub.source}
              </div>
              <div id={`pub-title-${idx}`} className="md:col-span-8 font-serif italic text-xs tracking-normal normal-case text-brand-secondary">
                "{pub.title}"
              </div>
              <div id={`pub-year-${idx}`} className="md:col-span-1 text-right md:text-left text-[10px]">
                {pub.year}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
