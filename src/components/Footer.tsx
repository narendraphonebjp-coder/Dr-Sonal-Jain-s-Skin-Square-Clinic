import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: 'INDEX' | 'BIOGRAPHY' | 'SERVICES' | 'CONTACT') => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer id="app-footer" className="bg-[#FAF8F5] border-t border-[#EBE6DD]/60 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div id="footer-grid-container" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EBE6DD]/60">
        
        {/* Left Branding Column */}
        <div id="footer-brand-col" className="md:col-span-5 space-y-4">
          <button 
            id="footer-brand-logo"
            onClick={() => onNavClick('INDEX')}
            className="font-serif text-2xl text-[#2C2A29] font-semibold tracking-tight hover:opacity-85 transition-opacity"
          >
            Skin Square<span className="text-[#8DA68E]">.</span>
          </button>
          <p id="footer-brand-tagline" className="text-xs text-[#8C857B] font-sans font-light leading-relaxed max-w-sm">
            Board-Certified dermatologist and advanced skin care specialists devoted to scientific skin barrier restoration, aesthetic laser treatments, and custom clinical therapies in Surat.
          </p>
        </div>

        {/* Center Clinic 1 */}
        <div id="footer-clinic-1" className="md:col-span-3.5 space-y-3 font-mono text-[10px] tracking-widest text-[#8C857B] uppercase">
          <div className="font-serif text-xs text-[#2C2A29] normal-case tracking-normal font-medium mb-1">
            VESU FLAGSHIP CLINIC
          </div>
          <div className="flex items-start gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal leading-relaxed">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#8DA68E] shrink-0" />
            <span>312, 313, 3rd Floor, Avadh Arena, VIP Road, above Croma Showroom, Vesu, Surat, Gujarat 395007</span>
          </div>
        </div>

        {/* Right Clinic 2 */}
        <div id="footer-clinic-2" className="md:col-span-3.5 space-y-3 font-mono text-[10px] tracking-widest text-[#8C857B] uppercase">
          <div className="font-serif text-xs text-[#2C2A29] normal-case tracking-normal font-medium mb-1">
            CONTACT & HOURS
          </div>
          <div className="flex items-center gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal">
            <Phone className="w-3.5 h-3.5 text-[#8DA68E] shrink-0" />
            <span>+91 91068 52367</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal">
            <Mail className="w-3.5 h-3.5 text-[#8DA68E] shrink-0" />
            <span>skinsquareofficial@gmail.com</span>
          </div>
        </div>

      </div>

      {/* Under Footer legal */}
      <div id="footer-bottom-bar" className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#A69E92] uppercase">
        <div id="footer-legal-copy">
          © {new Date().getFullYear()} SKIN SQUARE CLINIC. ALL RIGHTS RESERVED.
        </div>
        <div id="footer-legal-board" className="flex items-center gap-6">
          <span>BOARD CERTIFIED PRACTITIONERS</span>
          <span>PRIVACY STANDARDS</span>
        </div>
      </div>
    </footer>
  );
}
