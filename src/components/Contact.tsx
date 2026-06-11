import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BookingForm } from '../types';

export default function Contact() {
  const [form, setForm] = useState<BookingForm>({
    fullName: '',
    email: '',
    telephone: '',
    clinic: '',
    procedure: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [validatedCode, setValidatedCode] = useState<string | null>(null);

  const clinics = [
    { name: "Velocity Business Hub Suite, Adajan", value: "velocity" },
    { name: "Surat Central Clinic", value: "surat-central" }
  ];

  const specialties = [
    { name: "Clinical Dermatology & Acne Treatment", value: "clinical-dermatology" },
    { name: "Advanced Laser Treatments & Scar Repair", value: "advanced-lasers" },
    { name: "Cosmetology, Aesthetics & Peels", value: "cosmetology-aesthetics" },
    { name: "Hair Loss, Restore & Trichology Solutions", value: "hair-trichology" },
    { name: "Skin Resurfacing & Radiance Peels", value: "skin-resurfacing" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      alert("Please fill out your Full Name and Email address.");
      return;
    }

    // Save locally
    const existingBookings = JSON.parse(localStorage.getItem('midas_appointments') || '[]');
    const newBooking = {
      ...form,
      timestamp: new Date().toISOString(),
      id: "MC-" + Math.floor(1000 + Math.random() * 9000)
    };
    existingBookings.push(newBooking);
    localStorage.setItem('midas_appointments', JSON.stringify(existingBookings));

    setValidatedCode(newBooking.id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      email: '',
      telephone: '',
      clinic: '',
      procedure: '',
      message: ''
    });
    setSubmitted(false);
    setValidatedCode(null);
  };

  return (
    <motion.div
      id="contact-section-root"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-24 md:space-y-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <section id="contact-header" className="pt-8 md:pt-16 max-w-3xl space-y-6">
        <div id="contact-cat" className="text-[10px] tracking-[0.25em] text-brand-secondary font-mono font-medium uppercase">
          CONTACT & CONSULTATION
        </div>
        <h1 id="contact-title" className="font-serif text-4.5xl md:text-5.5xl text-brand-primary font-light leading-snug">
          Request a <br />
          <span className="italic font-normal text-brand-accent">personal</span> <br />
          consultation<span className="text-brand-accent">.</span>
        </h1>
      </section>

      {/* Main Interactive Form Grid */}
      <section id="booking-grid" className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div id="form-column" className="md:col-span-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                id="consultation-form" 
                onSubmit={handleSubmit} 
                className="space-y-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Row 1: Full Name */}
                <div id="form-group-name" className="space-y-1.5 border-b border-brand-border/60 pb-3 group focus-within:border-brand-primary transition-colors">
                  <label htmlFor="fullName" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                    FULL NAME *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="E.g., Charlotte Vance"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full bg-transparent border-none text-brand-primary text-sm font-sans focus:ring-0 focus:outline-none placeholder-brand-secondary/50 py-1"
                  />
                </div>

                {/* Row 2: Email & Telephone */}
                <div id="form-row-2" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div id="form-group-email" className="space-y-1.5 border-b border-brand-border/60 pb-3 focus-within:border-brand-primary transition-colors">
                    <label htmlFor="email" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                      EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g., charlotte@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-none text-brand-primary text-sm font-sans focus:ring-0 focus:outline-none placeholder-brand-secondary/50 py-1"
                    />
                  </div>

                  <div id="form-group-tel" className="space-y-1.5 border-b border-brand-border/60 pb-3 focus-within:border-brand-primary transition-colors">
                    <label htmlFor="telephone" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                      TELEPHONE
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      placeholder="+1 (858) 000-0000"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className="w-full bg-transparent border-none text-brand-primary text-sm font-sans focus:ring-0 focus:outline-none placeholder-brand-secondary/50 py-1"
                    />
                  </div>
                </div>

                {/* Row 3: Clinic Select & Procedure Select */}
                <div id="form-row-3" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div id="form-group-clinic" className="space-y-1.5 border-b border-brand-border/60 pb-3 focus-within:border-brand-primary transition-colors">
                    <label htmlFor="clinic" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                      CLINIC LOCATION
                    </label>
                    <select
                      id="clinic"
                      value={form.clinic}
                      onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                      className="w-full bg-transparent border-none text-xs font-mono tracking-wider text-brand-primary focus:ring-0 focus:outline-none py-1.5 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-brand-bg text-brand-primary">Select location...</option>
                      {clinics.map((c) => (
                        <option key={c.value} value={c.value} className="bg-brand-bg text-brand-primary">{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div id="form-group-specialty" className="space-y-1.5 border-b border-brand-border/60 pb-3 focus-within:border-brand-primary transition-colors">
                    <label htmlFor="procedure" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                      DISCIPLINE OF INTEREST
                    </label>
                    <select
                      id="procedure"
                      value={form.procedure}
                      onChange={(e) => setForm({ ...form, procedure: e.target.value })}
                      className="w-full bg-transparent border-none text-xs font-mono tracking-wider text-brand-primary focus:ring-0 focus:outline-none py-1.5 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-brand-bg text-brand-primary">Select specialty...</option>
                      {specialties.map((s) => (
                        <option key={s.value} value={s.value} className="bg-brand-bg text-brand-primary">{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div id="form-group-msg" className="space-y-2 border-b border-brand-border/60 pb-6 focus-within:border-brand-primary transition-colors">
                  <label htmlFor="message" className="text-[9px] tracking-widest text-brand-secondary font-mono uppercase block">
                    MESSAGE
                  </label>
                  <p id="msg-sublabel" className="text-[10px] text-brand-secondary/60 italic font-sans font-light">
                    Tell us, in your own words, what you would like to discuss.
                  </p>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-none text-brand-primary text-sm font-sans focus:ring-0 focus:outline-none placeholder-brand-secondary/50 py-1 resize-none"
                    placeholder="Enter details of your healthcare or cosmetic goals..."
                  />
                </div>

                {/* Submit button */}
                <button
                  id="send-request-btn"
                  type="submit"
                  className="w-full sm:w-auto bg-brand-primary text-brand-bg text-xs font-mono tracking-widest uppercase py-4 px-10 hover:bg-[#403E3C] transition-all duration-200 flex items-center justify-center group"
                >
                  SEND REQUEST 
                  <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                id="success-receipt"
                className="bg-brand-border/20 border border-brand-border p-8 md:p-10 space-y-6 rounded-sm text-center md:text-left"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                  <div id="success-icon-badge" className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-bg shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <h2 id="success-heading" className="font-serif text-2xl text-brand-primary font-light">
                      Consultation Request Received
                    </h2>
                    <p id="success-message" className="text-sm text-brand-secondary font-sans font-light leading-relaxed">
                      Thank you for trusting MIDAS Skin Hair & Laser Clinic, <strong>{form.fullName}</strong>. A clinic patient care representative will contact you at <strong>{form.email}</strong> shortly to finalize your appointment scheduling.
                    </p>
                    
                    {/* Appointment Receipt Details */}
                    <div id="receipt-details" className="border-t border-brand-border pt-4 grid grid-cols-2 gap-4 text-left text-[11px] font-mono tracking-wider text-brand-secondary uppercase">
                      <div>
                        <div>REFERENCE CODE</div>
                        <div className="font-serif text-[13px] text-brand-primary font-medium tracking-normal mt-1">{validatedCode}</div>
                      </div>
                      <div>
                        <div>CLINIC SELECTED</div>
                        <div className="font-serif text-[13px] text-brand-primary font-medium tracking-normal mt-1">
                          {clinics.find(c => c.value === form.clinic)?.name.split(" ")[0] || "General Consultation"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center md:justify-start">
                  <button
                    id="new-request-btn"
                    onClick={handleReset}
                    className="text-xs text-brand-primary font-mono tracking-widest uppercase border-b border-brand-primary pb-0.5 hover:opacity-75 transition-opacity"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Clinic Contacts */}
        <div id="contacts-column" className="md:col-span-4 space-y-10 lg:pl-6 border-t md:border-t-0 md:border-l border-brand-border/60 pt-10 md:pt-0">
          {/* Clinic 1 */}
          <div id="contact-clinic-vesu" className="space-y-4">
            <h3 className="font-serif text-lg text-brand-primary font-light uppercase tracking-wider">
              PRIME LOCATIONS
            </h3>
            
            <div className="space-y-6 font-mono text-[10px] tracking-widest text-brand-secondary uppercase">
              <div className="space-y-2">
                <div className="font-serif text-xs text-brand-primary normal-case font-medium">Velocity Business Hub Suite</div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed normal-case font-sans text-xs text-brand-secondary font-light">
                    1008, 10th Floor, Velocity Business Hub,<br />
                    Near Madhuvan Circle, L.P. Savani Road,<br />
                    Adajan, Surat, Gujarat 395009
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-xs text-brand-primary normal-case font-medium">Surat Central Clinic</div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed normal-case font-sans text-xs text-brand-secondary font-light">
                    Midas Tower, Near Circle Plaza, L.P. Savani Road,<br />
                    Surat, Gujarat 395009
                  </span>
                </div>
              </div>

              <div className="pb-2">
                <a
                  id="contact-google-maps-btn"
                  href="https://maps.app.goo.gl/btuFoMPtnutwMn838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-brand-primary text-brand-bg text-[10px] font-mono tracking-widest uppercase py-3 px-4 hover:opacity-90 transition-opacity"
                >
                  LAUNCH GOOGLE MAPS DIRECTORY
                </a>
              </div>
              
              <div className="flex items-center gap-2.5 border-t border-brand-border pt-4">
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span className="font-sans text-xs font-light text-brand-secondary normal-case">+91 97262 50505</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                <span className="font-sans text-xs font-light text-brand-secondary normal-case lowercase font-medium">info@midasskinclinic.com</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed normal-case font-sans text-xs text-brand-secondary font-light">
                  Monday — Saturday: 10:30 AM — 8:30 PM<br />
                  Sunday: Closed (Consultation by Appointment)
                </span>
              </div>
            </div>
          </div>

          {/* Notice footer */}
          <div id="contact-notice" className="border-t border-brand-border pt-6 text-[11px] font-sans text-brand-secondary/70 leading-relaxed font-light italic">
            Our clinical dermatologists and expert technicians are board-certified, accepting medical skin care and protective aesthetic laser consultations. Telemedicine advice can be arranged.
          </div>
        </div>
      </section>
    </motion.div>
  );
}
