import { motion } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { ArrowRight } from 'lucide-react';

const skinComparisonImage = "/src/assets/images/skin_aesthetic_care_1781160113979.png";

interface WorksProps {
  onConsultationClick: () => void;
  key?: string;
}

export default function Works({ onConsultationClick }: WorksProps) {
  const departments = [
    {
      id: "I",
      category: "AESTHETIC DERMATOLOGY",
      title: "Laser Cellular Rejuvenation",
      description: "Patient, 32. Focused skin resurfacing to restore healthy epidermal barrier strength, clear tone unevenness, and calm vascular hyperpigmentations. Three months follow-up post-care.",
      duration: "45 mins",
      recovery: "2 days",
      beforeFilter: "contrast-[0.85] saturate-[0.70] brightness-[0.88] grayscale-[10%]",
      afterFilter: "contrast-[1.05] brightness-[1.02]"
    },
    {
      id: "II",
      category: "COSMETIC COLLAGEN INFUSION",
      title: "Micro-Nutrient Needleless Therapy",
      description: "Patient, 44. Comprehensive facial hydration and micro-circulatory flow lifting. Targeted skin revitalization using custom active serum infusions. Shown 2 weeks post-treatment.",
      duration: "60 mins",
      recovery: "0 days (Immediate)",
      beforeFilter: "contrast-[0.90] saturate-[0.80] brightness-[0.92] blur-[0.4px]",
      afterFilter: "contrast-[1.02] saturate-[1.05] brightness-[1.03]"
    }
  ];

  return (
    <motion.div
      id="works-section-root"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-24 md:space-y-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Works Header */}
      <section id="works-header" className="pt-8 md:pt-16 space-y-6 max-w-3xl">
        <div id="works-cat" className="text-[10px] tracking-[0.25em] text-brand-secondary font-mono font-medium uppercase">
          DEPARTMENTS & CARE PORTFOLIO
        </div>
        <h1 id="works-headline" className="font-serif text-4.5xl md:text-5.5xl text-brand-primary font-light leading-snug">
          Drag to reveal.<br />
          <span className="italic font-normal text-brand-accent">The result</span> is our only argument.
        </h1>
        <p id="works-subtext" className="text-brand-secondary text-xs font-sans font-light leading-relaxed max-w-xl">
          An honest, unretouched look at our specialized aesthetic dermatology and corrective clinical therapies. Captured under standardized illumination and focus — details that showcase true restoration. Drag the slider to review the epidermal changes.
        </p>
      </section>

      {/* Specialty Cases List */}
      <section id="portfolio-cases" className="space-y-28 md:space-y-36">
        {departments.map((dept, idx) => (
          <div id={`case-block-${dept.id}`} key={idx} className="space-y-10 border-t border-brand-border/60 pt-10">
            {/* Header / Meta */}
            <div id={`case-meta-${dept.id}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div id={`case-num-${dept.id}`} className="md:col-span-1 font-serif text-4xl text-brand-accent font-light leading-none">
                {dept.id}
              </div>
              <div id={`case-title-block-${dept.id}`} className="md:col-span-6 space-y-2">
                <div id={`case-dept-tag-${dept.id}`} className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase">
                  {dept.category}
                </div>
                <h2 id={`case-heading-${dept.id}`} className="font-serif text-2xl text-brand-primary font-light">
                  {dept.title}
                </h2>
                <p id={`case-desc-${dept.id}`} className="text-brand-secondary text-xs font-sans leading-relaxed font-light">
                  {dept.description}
                </p>
              </div>
              <div id={`case-duration-block-${dept.id}`} className="md:col-span-2 space-y-1">
                <div className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase">DURATION</div>
                <div id={`case-dur-val-${dept.id}`} className="font-serif text-lg text-brand-primary font-light">{dept.duration}</div>
              </div>
              <div id={`case-recovery-block-${dept.id}`} className="md:col-span-3 space-y-1">
                <div className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase">RECOVERY</div>
                <div id={`case-rec-val-${dept.id}`} className="font-serif text-lg text-brand-primary font-light">{dept.recovery}</div>
              </div>
            </div>

            {/* Slider view */}
            <div id={`case-slider-wrapper-${dept.id}`}>
              <BeforeAfterSlider 
                beforeImg={skinComparisonImage} 
                afterImg={skinComparisonImage} 
                beforeLabel="PRE-CARE"
                afterLabel="POST-CARE"
                beforeFilter={dept.beforeFilter}
                afterFilter={dept.afterFilter}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Call to action citation at the bottom */}
      <section id="consultation-callout" className="py-20 flex flex-col items-center text-center space-y-10 border-t border-brand-border/60">
        <h2 id="callout-headline" className="font-serif text-3.5xl md:text-4xl text-brand-primary font-light max-w-2xl leading-relaxed">
          A consultation begins with a long conversation, <br />
          <span className="italic font-normal text-brand-accent">not a photograph.</span>
        </h2>
        <button
          id="callout-btn"
          onClick={onConsultationClick}
          className="bg-brand-primary text-brand-bg text-xs font-mono tracking-widest uppercase py-4.5 px-9 hover:bg-brand-accent-hover transition-all duration-200 shadow-sm flex items-center group"
        >
          REQUEST A CONSULTATION 
          <ArrowRight className="w-3.5 h-3.5 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </motion.div>
  );
}
