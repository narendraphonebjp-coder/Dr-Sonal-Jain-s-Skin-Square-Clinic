import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

import drMonicaImage from '../assets/images/dr_monica_perlman_1781160073883.png';
import clinicInteriorImage from '../assets/images/clinic_interior_1781160092917.png';
import skinComparisonImage from '../assets/images/skin_aesthetic_care_1781160113979.png';

interface IndexSectionProps {
  onConsultationClick: () => void;
  onExploreServicesClick: () => void;
  key?: string;
}

export default function IndexSection({ onConsultationClick, onExploreServicesClick }: IndexSectionProps) {
  const stats = [
    { value: '15+', label: 'YEARS OF EXPERT DERMATOLOGY' },
    { value: '45k+', label: 'SUCCESSFUL PROCEDURES' },
    { value: '4.9 ★', label: 'GOOGLE MAPS PATIENT RATING' },
    { value: 'Surat', label: 'VELOCITY BUSINESS HUB' }
  ];

  return (
    <motion.div
      id="index-section-root"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-24 md:space-y-36 pb-20"
    >
      {/* 1. HERO HEADER AREA */}
      <section id="hero-header-area" className="px-6 md:px-12 max-w-7xl mx-auto pt-10 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div id="hero-text-block" className="space-y-8 max-w-xl">
          <motion.div 
            id="hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.25em] text-brand-secondary font-mono font-medium uppercase"
          >
            BOARD-CERTIFIED DERMATOLOGIST & SKIN CARE SPECIALIST
          </motion.div>
          
          <h1 id="hero-headline" className="font-serif text-5xl md:text-6xl text-brand-primary font-light leading-[1.1] tracking-tight">
            The quiet <br />
            <span className="italic font-normal text-brand-accent">architecture</span> <br />
            of clinical beauty<span className="text-brand-accent">.</span>
          </h1>
          
          <p id="hero-subtext" className="text-brand-secondary text-[15px] font-sans leading-relaxed font-light">
            Dr. Avani Patel, MD — a premier board-certified dermatologist and cosmetology specialist in Surat, Gujarat. An exclusive skin & hair practice devoted to customized client outcomes, advanced laser therapies, and therapeutic beauty solutions that radiate absolute confidence.
          </p>
          
          <div id="hero-actions" className="flex flex-wrap items-center gap-6 pt-2">
            <button
              id="hero-book-btn"
              onClick={onConsultationClick}
              className="bg-brand-primary text-brand-bg text-xs font-mono tracking-widest uppercase py-4 px-8 rounded-none hover:opacity-90 transition-all duration-200 flex items-center group shadow-sm"
            >
              REQUEST VISIT 
              <ArrowRight className="w-3.5 h-3.5 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              id="hero-maps-btn"
              href="https://maps.app.goo.gl/btuFoMPtnutwMn838"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-brand-primary border border-brand-primary/45 hover:border-brand-primary text-xs font-mono tracking-widest uppercase py-4 px-8 rounded-none transition-all duration-200 flex items-center gap-1.5"
            >
              FIND ON GOOGLE MAPS
            </a>
            <button
              id="hero-procedures-btn"
              onClick={onExploreServicesClick}
              className="text-brand-primary text-xs font-mono tracking-widest uppercase border-b border-brand-primary pb-1 hover:opacity-75 transition-opacity"
            >
              OUR DEPARTMENTS
            </button>
          </div>
        </div>

        {/* Hero Portrait Display */}
        <div id="hero-portrait-wrapper" className="relative w-full">
          <motion.div
            id="hero-portrait-motion"
            initial={{ scale: 1.02, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="aspect-[4/5] bg-brand-bg overflow-hidden border border-brand-border"
          >
            <img 
              id="hero-portrait-img"
              src={drMonicaImage} 
              alt="Dr. Avani Patel, MD" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 hover:scale-102"
            />
          </motion.div>
          <div id="hero-portrait-caption" className="flex justify-between items-center mt-3 text-[10px] tracking-wider text-brand-secondary font-mono uppercase px-1">
            <span>Dr. Avani Patel, MD (Dermatology & Cosmetology)</span>
            <span>Adajan, Surat</span>
          </div>
        </div>
      </section>

      {/* 2. STAT COUNTERS */}
      <section id="stat-counters-section" className="bg-brand-border/30 py-16 px-6 md:px-12 border-y border-brand-border/100">
        <div id="stats-grid" className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div id={`stat-box-${idx}`} key={idx} className="space-y-2 text-center lg:text-left">
              <div id={`stat-val-${idx}`} className="font-serif text-3xl md:text-4xl text-brand-primary font-light">
                {stat.value}
              </div>
              <div id={`stat-lbl-${idx}`} className="text-[9px] tracking-widest leading-relaxed text-brand-secondary font-mono uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section id="philosophy-section" className="px-6 md:px-12 max-w-7xl mx-auto">
        <div id="philosophy-layout" className="max-w-3xl space-y-10">
          <div id="philosophy-index" className="text-[10px] tracking-widest text-brand-secondary font-mono block uppercase">
            01 — PHILOSOPHY
          </div>
          
          <blockquote id="philosophy-quote" className="font-serif text-2xl md:text-3.5xl text-brand-primary font-light leading-relaxed">
            "Primary care is fundamentally a partnership. It is the thorough preventative conversation, the unhurried consultation, and the quiet comfort of knowing your doctor is genuinely listening — empowering you with clinical confidence, balance, and physical longevity."
          </blockquote>
          
          <div id="philosophy-signoff" className="text-[11px] tracking-widest text-brand-secondary font-mono uppercase">
            — Dr. Avani Patel, Founder & Senior Dermatologist
          </div>
        </div>
      </section>

      {/* 4. SELECTED CASE / COMPARISON PREVIEW */}
      <section id="comparison-preview-section" className="px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <div id="comparison-text-block" className="space-y-4">
          <div id="comparison-index" className="text-[10px] tracking-widest text-brand-secondary font-mono block uppercase">
            02 — INTEGRATIVE CARE FOCUS
          </div>
          <h2 id="comparison-title" className="font-serif text-3xl text-brand-primary font-light">
            Therapeutic Welness & Skin Barrier Restoration, 3 months post-care.
          </h2>
          <p id="comparison-subtext" className="text-brand-secondary text-xs font-sans max-w-xl font-light">
            Combining medical oversight with supportive lifestyle medicine. Repairing core protective epidermal barriers and soothing standard skin irritations under personalized care parameters. Drag the center divider to compare.
          </p>
          <button 
            id="view-specialties-btn"
            onClick={onExploreServicesClick}
            className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary pb-0.5 inline-block hover:opacity-75 transition-opacity pt-1"
          >
            VIEW CLINIC SERVICES
          </button>
        </div>

        {/* Embedded Before After Slider Component */}
        <BeforeAfterSlider 
          beforeImg={skinComparisonImage} 
          afterImg={skinComparisonImage} 
          beforeLabel="STANDARD BARRIER"
          afterLabel="INTEGRATIVE GLOW"
          beforeFilter="contrast-[0.82] saturate-[0.70] brightness-[0.88]"
          afterFilter="contrast-[1.05] brightness-[1.02]"
        />
      </section>

      {/* 4.5. PATIENT TESTIMONIALS (GOOGLE MAPS REVIEWS) */}
      <section id="patient-reviews-section" className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div id="reviews-header" className="space-y-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-4">
            <div id="reviews-index" className="text-[10px] tracking-widest text-[#5A6B5A] font-mono block uppercase">
              03 — GOOGLE MAPS REVIEWS & TESTIMONIALS
            </div>
            <h2 id="reviews-title" className="font-serif text-3xl text-brand-primary font-light">
              Loved by our Surat community.
            </h2>
          </div>
          <a
            id="google-maps-reviews-btn"
            href="https://maps.app.goo.gl/btuFoMPtnutwMn838"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary pb-1 inline-flex items-center gap-2 hover:opacity-75 transition-opacity self-start md:self-auto"
          >
            VIEW GOOGLE MAPS LISTING
            <span className="text-brand-accent">→</span>
          </a>
        </div>

        <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Dr. Avani Patel is incredibly thorough and empathetic. She spends time explaining skin barrier health and customized corrective treatments rather than rushing. Best dermatologist in Surat!",
              author: "Charlotte V.",
              rating: "5.0 ★",
              date: "3 weeks ago (Midas Clinic)"
            },
            {
              text: "Midas Skin Hair & Laser Clinic has completely changed how I treat my hair and skin issues. The laser treatments are advanced, completely painless, and results started showing within a few sessions.",
              author: "David M.",
              rating: "5.0 ★",
              date: "1 month ago (Surat Office)"
            },
            {
              text: "I visited their Velocity Business Hub suite for chemical peeling and active acne treatment. The staff is highly professional, and the clinic interior looks like a calming retreat. Highly recommend!",
              author: "Sarah K.",
              rating: "5.0 ★",
              date: "2 months ago (Adajan Office)"
            }
          ].map((rev, idx) => (
            <div id={`review-card-${idx}`} key={idx} className="bg-brand-bg border border-brand-border/60 p-8 flex flex-col justify-between space-y-6 rounded-xs hover:border-brand-accent/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-brand-accent tracking-widest">
                  <span>{rev.rating}</span>
                  <span className="text-brand-secondary/40">VERIFIED REVIEW</span>
                </div>
                <p className="font-serif italic text-base text-brand-primary leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
              <div className="border-t border-brand-border/60 pt-4 flex justify-between items-center text-[10px] font-mono text-brand-secondary/60 uppercase tracking-widest">
                <span className="font-semibold text-brand-primary">{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE STUDIO / FLAGSHIP CLINIC INFORMATION */}
      <section id="studio-intro-section" className="grid grid-cols-1 md:grid-cols-12 gap-10 bg-brand-bg border-t border-brand-border/60">
        <div id="studio-text-col" className="md:col-span-4 px-6 md:px-12 py-16 flex flex-col justify-center space-y-6">
          <div id="studio-tag" className="text-[10px] tracking-widest text-brand-secondary font-mono uppercase">
            THE FLAGSHIP PRACTICE
          </div>
          <h2 id="studio-headline" className="font-serif text-4xl text-brand-primary font-light leading-tight">
            Velocity Business Hub, Adajan.
          </h2>
          <p id="studio-desc" className="text-brand-secondary text-sm font-sans leading-relaxed font-light">
            Our premier dermatology suite situated on the 10th floor of Velocity Business Hub, Adajan, Surat. Designed as a spacious, state-of-the-art sanctuary for high-end digital skin evaluations, unhurried consultations, and specialized medical cosmetic lasers.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button
              id="book-studio-btn"
              onClick={onConsultationClick}
              className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary self-start pb-0.5 hover:opacity-75 transition-opacity"
            >
              BOOK AN OFFICE VISIT
            </button>
            <a
              id="studio-map-link"
              href="https://maps.app.goo.gl/btuFoMPtnutwMn838"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-accent font-mono tracking-widest uppercase border-b border-brand-accent self-start pb-0.5 hover:opacity-75 transition-opacity flex items-center gap-1"
            >
              MAP & DIRECTIONS
            </a>
          </div>
        </div>
        
        {/* Studio Image Column */}
        <div id="studio-img-col" className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-brand-border/60">
          <img 
            id="studio-lobby-img"
            src={clinicInteriorImage} 
            alt="Midas Skin Hair & Laser Clinic Velocity Business Hub Suite" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </section>
    </motion.div>
  );
}
