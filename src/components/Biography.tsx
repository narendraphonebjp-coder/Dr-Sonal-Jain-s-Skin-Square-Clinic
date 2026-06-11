import { motion } from 'motion/react';

const drMonicaImage = "/src/assets/images/dr_monica_perlman_1781160073883.png";

export default function Biography() {
  const events = [
    {
      year: "2012",
      title: "MBBS Graduation",
      description: "Government Medical College, Surat — graduated with distinguished honors in clinical medicine"
    },
    {
      year: "2016",
      title: "MD & DVL, Residency in Dermatology",
      description: "Specialized residency focusing on cosmetic dermatology, venereology, and advanced aesthetic lasers"
    },
    {
      year: "2017",
      title: "Fellowship, Advanced Lasers & Aesthetics",
      description: "Specialized training in non-invasive skin barrier therapies and cellular-level rejuvenation"
    },
    {
      year: "2021",
      title: "Founded Skin Square Clinic",
      description: "Opened the bespoke Vesu flagship suite in Surat to provide premium, board-certified patient care"
    },
    {
      year: "2024",
      title: "Integrated Fractional Cellular Lasers",
      description: "Incorporated state-of-the-art non-surgical laser procedures for targeted hyperpigmentation"
    },
    {
      year: "2026",
      title: "Sustaining Elite Skin Care Standards",
      description: "Rejuvenating thousands of patients with customized, evidence-based skin barrier therapeutics"
    }
  ];

  const publications = [
    { source: "DERMATOLOGICAL REVIEW", title: "Modern Non-Invasive Rejuvenation of Epidermal Barriers", year: "2025" },
    { source: "CLINICAL COSMETIC JOURNAL", title: "Laser Cellular Refinement in South Asian Skin Phenotypes", year: "2024" },
    { source: "GUJARAT JOURNAL OF MEDICINE", title: "Efficacy of Targeted Micro-Nutrient Facial Hydro-Infusion", year: "2023" },
    { source: "COSMETIC DERMATOLOGY JOURNAL", title: "Managing Persistent Hyperpigmentation in Med-Spa Practice", year: "2022" },
    { source: "AESTHETIC THERAPEUTICS", title: "The Impact of Custom Cellular Serums on Skin Barrier Integrity", year: "2021" }
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
          alt="Dr. Sonal Jain" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[10%]"
        />
      </section>

      {/* Narrative Section */}
      <section id="bio-narrative" className="grid grid-cols-1 md:grid-cols-12 gap-10 text-justify">
        <div id="bio-editorial" className="md:col-span-8 md:col-start-3 space-y-8 font-sans text-sm font-light text-brand-secondary leading-relaxed">
          <p id="bio-p1" className="text-base leading-relaxed text-brand-primary">
            <span className="font-serif text-4xl float-left mr-2.5 mt-1 text-brand-accent font-normal">S</span>
            onal Jain was raised in Gujarat with a deep appreciation for the fine intersections of clinical science, artistic skin aesthetics, and patient confidence. The vocabularies of her youth — meticulous detail, healing touch, patient wellness, and committed empathy — became, almost without her realizing it, the core guiding architectural pillars of her future specialty dermatology practice.
          </p>

          <p id="bio-p2">
            She completed her medical training and earned her MBBS degree with honors in Surat, followed by a dedicated post-graduate residency in clinical dermatology, venereology, and leprosy (MD, D.V.L). Throughout her medical post-graduation, she realized that standard dermatology and skin care treatments often overlooked individualised skin barrier qualities. In 2021, she established Skin Square Clinic in Vesu, Surat to offer customized, board-certified aesthetic skin care under strict medical standards.
          </p>

          <p id="bio-p3">
            What started as a dedicated elite aesthetic practice quickly earned trust in Surat. Patients found a space where skin treatments were designed around their physiological profile, utilizing state-of-the-art non-surgical laser procedures and personalized cellular formulations. Over the years, Skin Square has evolved into an exceptional local benchmark for advanced dermatology, laser pigmentation corrective care, and clinical anti-aging therapies.
          </p>

          <p id="bio-p4">
            Her clinical philosophy is defined by her complete refusal of formulaic, rushed consultations. She does not merely prescribe products; she listens closely to patient lifestyle histories, treating skin health and cellular renewal as an elegant medical craft. For her, cutting-edge aesthetic technology is a powerful tool to restore natural skin vitality, bringing patients back to their most radiant self.
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
