import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

// Import local image artifacts
const drMonicaImage = "/src/assets/images/dr_monica_perlman_1781160073883.png";
const clinicInteriorImage = "/src/assets/images/clinic_interior_1781160092917.png";
const skinComparisonImage = "/src/assets/images/skin_aesthetic_care_1781160113979.png";

interface IndexSectionProps {
  onConsultationClick: () => void;
  onExploreServicesClick: () => void;
  key?: string;
}

export default function IndexSection({ onConsultationClick, onExploreServicesClick }: IndexSectionProps) {
  const stats = [
    { value: '12+', label: 'YEARS IN DERMATOLOGY' },
    { value: '15,000+', label: 'RESTORED SKIN CONCERNS' },
    { value: '4.9 ★', label: 'GOOGLE PATIENT RATING' },
    { value: '100%', label: 'BOARD-CERTIFIED TREATMENTS' }
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
            BOARD-CERTIFIED DERMATOLOGY & AESTHETIC SKIN CARE — EST. 2021
          </motion.div>
          
          <h1 id="hero-headline" className="font-serif text-5xl md:text-6xl text-brand-primary font-light leading-[1.1] tracking-tight">
            The quiet <br />
            <span className="italic font-normal text-brand-accent">architecture</span> <br />
            of healthy skin<span className="text-brand-accent">.</span>
          </h1>
          
          <p id="hero-subtext" className="text-brand-secondary text-[15px] font-sans leading-relaxed font-light">
            Dr. Sonal Jain, MBBS, MD — a board-certified dermatologist and aesthetic specialist in Surat. An attentive practice devoted to custom skin barrier health, clinical laser precision, and outcomes that radiate quiet confidence.
          </p>
          
          <div id="hero-actions" className="flex flex-wrap items-center gap-6 pt-2">
            <button
              id="hero-book-btn"
              onClick={onConsultationClick}
              className="bg-brand-primary text-brand-bg text-xs font-mono tracking-widest uppercase py-4 px-8 rounded-none hover:bg-brand-accent-hover transition-all duration-200 flex items-center group shadow-sm"
            >
              REQUEST VISIT 
              <ArrowRight className="w-3.5 h-3.5 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
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
              alt="Dr. Sonal Jain, MBBS, MD" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 hover:scale-102"
            />
          </motion.div>
          <div id="hero-portrait-caption" className="flex justify-between items-center mt-3 text-[10px] tracking-wider text-brand-secondary font-mono uppercase px-1">
            <span>Dr. Sonal Jain, MBBS, MD (Dermatology)</span>
            <span>Surat, India</span>
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
            "Skin health, when done well, is a mirror of internal vitality. It is the steady barrier, the clean cellular renewal, the quiet confidence that empowers you to radiate — guiding you back to your natural state of glow, of ease, of skin that feels exactly like you."
          </blockquote>
          
          <div id="philosophy-signoff" className="text-[11px] tracking-widest text-brand-secondary font-mono uppercase">
            — Dr. Sonal Jain, Founder & Dermatologist
          </div>
        </div>
      </section>

      {/* 4. SELECTED CASE / COMPARISON PREVIEW */}
      <section id="comparison-preview-section" className="px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <div id="comparison-text-block" className="space-y-4">
          <div id="comparison-index" className="text-[10px] tracking-widest text-brand-secondary font-mono block uppercase">
            02 — SELECTED SPECIALTY FOCUS
          </div>
          <h2 id="comparison-title" className="font-serif text-3xl text-brand-primary font-light">
            Aesthetics & Laser Rejuvenation, 3 months post-care.
          </h2>
          <p id="comparison-subtext" className="text-brand-secondary text-xs font-sans max-w-xl font-light">
            Comprehensive dermatological restoration. Rebuilding core epidermal cellular barrier, increasing moisture-infusion, and soothing standard hyperpigmentations. Drag the center divider to compare.
          </p>
          <button 
            id="view-specialties-btn"
            onClick={onExploreServicesClick}
            className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary pb-0.5 inline-block hover:opacity-75 transition-opacity pt-1"
          >
            VIEW FULL SERVICES
          </button>
        </div>

        {/* Embedded Before After Slider Component */}
        <BeforeAfterSlider 
          beforeImg={skinComparisonImage} 
          afterImg={skinComparisonImage} 
          beforeLabel="STANDARD BARRIER"
          afterLabel="SKIN SQUARE GLOW"
          beforeFilter="contrast-[0.82] saturate-[0.70] brightness-[0.88]"
          afterFilter="contrast-[1.05] brightness-[1.02]"
        />
      </section>

      {/* 5. THE STUDIO / FLAGSHIP CLINIC INFORMATION */}
      <section id="studio-intro-section" className="grid grid-cols-1 md:grid-cols-12 gap-10 bg-brand-bg border-t border-brand-border/60">
        <div id="studio-text-col" className="md:col-span-4 px-6 md:px-12 py-16 flex flex-col justify-center space-y-6">
          <div id="studio-tag" className="text-[10px] tracking-widest text-brand-secondary font-mono uppercase">
            THE PRIVATE SUITE
          </div>
          <h2 id="studio-headline" className="font-serif text-4xl text-brand-primary font-light leading-tight">
            Avadh Arena, Vesu.
          </h2>
          <p id="studio-desc" className="text-brand-secondary text-sm font-sans leading-relaxed font-light">
            Our modern flagship practice situated in Vesu, Surat. Conceived as a quiet sanctuary for advanced clinical consultations, targeted fractional laser therapies, and unhurried aesthetic care programs.
          </p>
          <button
            id="book-studio-btn"
            onClick={onConsultationClick}
            className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary self-start pb-0.5 hover:opacity-75 transition-opacity"
          >
            BOOK A PRIVATE VISIT
          </button>
        </div>
        
        {/* Studio Image Column */}
        <div id="studio-img-col" className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-brand-border/60">
          <img 
            id="studio-lobby-img"
            src={clinicInteriorImage} 
            alt="Skin Square Clinic Vesu Surat Suite" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </section>
    </motion.div>
  );
}
