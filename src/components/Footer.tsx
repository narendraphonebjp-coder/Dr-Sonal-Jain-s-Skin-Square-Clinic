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
            Midas Skin Clinic<span className="text-[#8DA68E]">.</span>
          </button>
          <p id="footer-brand-tagline" className="text-xs text-[#8C857B] font-sans font-light leading-relaxed max-w-sm">
            Founded by Dr. Avani Patel, MD in 2015. Offering state-of-the-art dermatological corrective treatments, hair restoration, and specialized aesthetic laser therapies in Surat, Gujarat.
          </p>
        </div>

        {/* Center Clinic 1 */}
        <div id="footer-clinic-1" className="md:col-span-3.5 space-y-3 font-mono text-[10px] tracking-widest text-[#8C857B] uppercase">
          <div className="font-serif text-xs text-[#2C2A29] normal-case tracking-normal font-medium mb-1">
            SURAT OFFICES
          </div>
          <div className="flex items-start gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal leading-relaxed">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#8DA68E] shrink-0" />
            <span>
              <strong>Velocity Hub Suite:</strong> 1008, 10th Floor, Velocity Business Hub, Adajan, Surat 395009<br />
              <strong>Surat Central:</strong> Midas Tower, L.P. Savani Road, Surat 395009
            </span>
          </div>
          <div className="pt-1">
            <a 
              id="footer-google-maps-link"
              href="https://maps.app.goo.gl/btuFoMPtnutwMn838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-[#2C2A29] hover:text-[#8DA68E] font-medium tracking-wider flex items-center gap-1 transition-colors underline decoration-dotted underline-offset-2"
            >
              NAVIGATE VIA GOOGLE MAPS →
            </a>
          </div>
        </div>

        {/* Right Clinic 2 */}
        <div id="footer-clinic-2" className="md:col-span-3.5 space-y-3 font-mono text-[10px] tracking-widest text-[#8C857B] uppercase">
          <div className="font-serif text-xs text-[#2C2A29] normal-case tracking-normal font-medium mb-1">
            CONTACT & HOURS
          </div>
          <div className="flex items-center gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal">
            <Phone className="w-3.5 h-3.5 text-[#8DA68E] shrink-0" />
            <span>+91 97262 50505 &nbsp;|&nbsp; +91 98795 38838</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#59534C] font-sans font-light normal-case tracking-normal font-medium">
            <Mail className="w-3.5 h-3.5 text-[#8DA68E] shrink-0" />
            <span className="lowercase">info@midasskinclinic.com</span>
          </div>
        </div>

      </div>

      {/* Under Footer legal */}
      <div id="footer-bottom-bar" className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#A69E92] uppercase">
        <div id="footer-legal-copy">
          © {new Date().getFullYear()} MIDAS SKIN HAIR & LASER CLINIC. ALL RIGHTS RESERVED.
        </div>
        <div id="footer-legal-board" className="flex items-center gap-6">
          <span>BOARD CERTIFIED PRACTITIONERS</span>
          <span>PRIVACY STANDARDS</span>
        </div>
      </div>
    </footer>
  );
}
