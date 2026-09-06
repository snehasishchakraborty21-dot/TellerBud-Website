import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, ArrowRight, Building2, Info, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { SITE_CONFIG } from '../config/site';

interface ContactPageProps {
  onGetTellerBud?: () => void;
  onNavigate: (page: PageId) => void;
}

// Temporary placeholder asset path for Contact page hero
const CONTACT_HERO_IMG = '/assets/contact-hero.jpg';
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=85';

export default function ContactPage({ onNavigate, onGetTellerBud }: ContactPageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [enquiryType, setEnquiryType] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  // Submission State
  const [formAttempted, setFormAttempted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormAttempted(true);
  };

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. CONTACT HERO                                    */}
      {/* ================================================== */}
      <section className="relative w-full h-[480px] sm:h-[540px] lg:h-[580px] bg-[#050F11] overflow-hidden flex items-center">
        {/* Background Photograph Container */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          {!heroImgError ? (
            <img
              src={CONTACT_HERO_IMG}
              onError={() => setHeroImgError(true)}
              alt="Contact TellerBud"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={FALLBACK_HERO}
              alt="Contact TellerBud"
              className="w-full h-full object-cover object-center"
            />
          )}
          {/* Moderate dark oceanic-green overlay keeping photograph visible */}
          <div className="absolute inset-0 bg-[#050F11]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F11]/90 via-[#050F11]/75 to-[#005F67]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008C95]/20 border border-[#008C95]/40 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                CONTACT TELLERBUD
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14]">
              Let’s start a conversation.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB]/90 leading-relaxed font-normal max-w-2xl">
              Contact TellerBud for general enquiries, business participation, partnerships and platform information.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. CONTACT INTRODUCTION                            */}
      {/* ================================================== */}
      <section className="w-full py-14 sm:py-20 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Connect with the TellerBud team.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal max-w-2xl mx-auto">
              Share your enquiry using the form below. The appropriate TellerBud team can review the information and respond through the supplied contact details.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. CONTACT DETAILS AND FORM                        */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN — CONTACT DETAILS */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs space-y-8">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-2">
                    TOUCHPOINTS
                  </span>
                  <h3 className="text-2xl font-semibold text-[#090D10]">
                    Contact & Reach Us
                  </h3>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Email */}
                  {SITE_CONFIG.contact.email && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#008C95] shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#008C95] uppercase block">
                          EMAIL
                        </span>
                        <a
                          href={`mailto:${SITE_CONFIG.contact.email}`}
                          className="text-base font-semibold text-[#090D10] hover:text-[#008C95] transition-colors"
                        >
                          {SITE_CONFIG.contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {SITE_CONFIG.contact.location && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#008C95] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#008C95] uppercase block">
                          LOCATION
                        </span>
                        <span className="text-base font-semibold text-[#090D10]">
                          {SITE_CONFIG.contact.location}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Business and Partnership Enquiries Section */}
                <div className="pt-6 border-t border-[#D9E4E4] space-y-3">
                  <div className="flex items-center gap-2 text-[#008C95] font-semibold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Business and Partnership Enquiries</span>
                  </div>
                  <p className="text-sm text-[#30383D] leading-relaxed font-normal">
                    Use the Contact form to discuss participating business locations, Agent opportunities and potential partnerships.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs text-left space-y-8">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-2">
                    DIRECT MESSAGE
                  </span>
                  <h3 className="text-2xl font-semibold text-[#090D10]">
                    Send us a message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#090D10] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#008C95]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl text-sm text-[#090D10] placeholder-[#30383D]/50 focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95] transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-[#090D10] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#008C95]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl text-sm text-[#090D10] placeholder-[#30383D]/50 focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95] transition-all"
                    />
                  </div>

                  {/* Organisation or Business Name — optional */}
                  <div>
                    <label className="block text-xs font-semibold text-[#090D10] uppercase tracking-wider mb-2">
                      Organisation or Business Name <span className="text-xs text-[#30383D]/60 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Acme Mobile Services"
                      className="w-full px-4 py-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl text-sm text-[#090D10] placeholder-[#30383D]/50 focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95] transition-all"
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#090D10] uppercase tracking-wider mb-2">
                      Enquiry Type <span className="text-[#008C95]">*</span>
                    </label>
                    <select
                      required
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl text-sm text-[#090D10] focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95] transition-all"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Business Owner Enquiry">Business Owner Enquiry</option>
                      <option value="Partnership Enquiry">Partnership Enquiry</option>
                      <option value="Platform Information">Platform Information</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#090D10] uppercase tracking-wider mb-2">
                      Message <span className="text-[#008C95]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can TellerBud assist you today?"
                      className="w-full px-4 py-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl text-sm text-[#090D10] placeholder-[#30383D]/50 focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Professional Configurable Demo State Notice */}
                {formAttempted && (
                  <div className="p-4 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 text-xs sm:text-sm text-[#005F67] flex items-start gap-3">
                    <Info className="w-5 h-5 shrink-0 text-[#008C95] mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#090D10]">Thank you for completing the details.</p>
                      <p className="mt-1 text-[#30383D]">Form submission will be connected during implementation.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. PARTNERSHIP BAND                                */}
      {/* ================================================== */}
      <section className="w-full bg-[#EAF6F6] border-b border-[#008C95]/20 py-16 sm:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Interested in working with TellerBud?
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
              Business owners, participating Agents and prospective partners can contact TellerBud to discuss platform participation and requirements.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('for-business-owners')}
                className="px-7 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Business Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. FINAL CTA BAND                                  */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              Looking for the TellerBud Customer App?
            </h2>
            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Access the Customer Mobile App to request convenient Pickup or Delivery support.
            </p>
            <div className="pt-4 flex items-center justify-center">
              <button
                type="button"
                onClick={onGetTellerBud}
                className="px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] font-bold text-base rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
