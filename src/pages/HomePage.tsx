import { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Clock,
  Globe2,
  Smartphone,
  Monitor,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';

interface HomePageProps {
  onGetTellerBud: () => void;
  onNavigate: (page: PageId) => void;
}

// Hero local image asset path & fallback
const HERO_BG_IMG = '/assets/home-hero.jpg';
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=85';

export default function HomePage({ onGetTellerBud, onNavigate }: HomePageProps) {
  const [heroError, setHeroError] = useState(false);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      
      {/* ================================================== */}
      {/* 1. FULL-WIDTH HERO (650–720px high)                 */}
      {/* ================================================== */}
      <section className="relative w-full min-h-[620px] sm:min-h-[660px] lg:min-h-[700px] h-auto lg:h-[700px] bg-[#050F11] overflow-hidden flex items-start">
        {/* Full-width authentic African commerce photograph background */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          {!heroError ? (
            <img
              src={HERO_BG_IMG}
              onError={() => setHeroError(true)}
              referrerPolicy="no-referrer"
              alt="African mobile money and local commerce"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={FALLBACK_HERO}
              referrerPolicy="no-referrer"
              alt="African mobile money and local commerce"
              className="w-full h-full object-cover object-center"
            />
          )}
          {/* Moderate dark overlay (rgba(5, 15, 17, 0.55)) for text readability while keeping photograph clearly visible */}
          <div className="absolute inset-0 bg-[#050F11]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F11]/70 via-[#050F11]/55 to-transparent" />
        </div>

        {/* Hero Content Container — Top-aligned (70–90 px below header on desktop) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-[82px] pb-24 sm:pb-28 lg:pb-32">
          {/* Headline Container: ~760–900 px wide on desktop */}
          <div className="w-full max-w-[920px] text-left">
            {/* Headline: single line on desktop (lg:whitespace-nowrap), clamp(48px, 4.8vw, 72px) */}
            <h1
              className="font-heading font-bold text-[#FCFCFB] tracking-tight leading-[1.12] mb-6 sm:mb-6.5 text-3xl sm:text-5xl lg:[font-size:clamp(48px,4.8vw,72px)] whitespace-normal lg:whitespace-nowrap"
            >
              <span>Mobile money </span>
              <span className="text-[#008C95]">closer to you.</span>
            </h1>

            {/* Supporting Bullet List — 22–28 px below headline, 26–32 px above CTA buttons */}
            <ul className="space-y-3 sm:space-y-3.5 mb-7 sm:mb-8 max-w-2xl lg:max-w-3xl">
              <li className="flex items-start gap-3 text-[15px] sm:text-base lg:text-[17px] text-[#FCFCFB] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                <span>TellerBud connects Customers to trusted Agents for secure cash pickup and delivery.</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] sm:text-base lg:text-[17px] text-[#FCFCFB] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                <span>TellerBud helps Agents with liquidity.</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] sm:text-base lg:text-[17px] text-[#FCFCFB] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                <span>TellerBud helps Business Owners with visibility across their operations.</span>
              </li>
            </ul>

            {/* Action Buttons — 28–32 px below paragraph */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onGetTellerBud}
                className="px-8 py-4 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-base font-semibold rounded-full transition-all shadow-md shadow-[#008C95]/30 cursor-pointer flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 text-[#FCFCFB] font-semibold text-base border border-[#FCFCFB]/30 rounded-full transition-all backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-5 h-5 text-[#008C95]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. OVERLAPPING ACTION PANEL — THE TELLERBUD PLATFORM */}
      {/* ================================================== */}
      <section className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 -mt-20 sm:-mt-24 mb-20">
        <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl shadow-xl overflow-hidden">
          
          {/* Integrated Corporate Header Ribbon */}
          <div className="bg-[#E5F5F5] px-6 py-3 border-b border-[#D9E4E4] flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008C95]" />
              THE TELLERBUD PLATFORM
            </span>
            <span className="text-xs text-[#30383D] font-normal hidden sm:inline">
              Three connected experiences supporting Customers, Agents and operations.
            </span>
          </div>

          {/* 3 Integrated Platform Experience Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9E4E4]">
            
            {/* COLUMN 1 — CUSTOMER MOBILE APP */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#E5F5F5]/40 transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors shadow-2xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#008C95] bg-[#E5F5F5] px-2.5 py-1 rounded-full">
                    For Customers
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#090D10] mb-2 tracking-tight">
                  Customer Mobile App
                </h3>
                <p className="text-sm sm:text-[15px] text-[#30383D] leading-relaxed mb-6 font-normal">
                  Customers can request secure cash Pickup or Delivery, track their requests, manage their wallet and view their transaction history.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer pt-2"
              >
                <span>Explore Customer Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* COLUMN 2 — AGENT MOBILE APP */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#E5F5F5]/40 transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors shadow-2xs">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#008C95] bg-[#E5F5F5] px-2.5 py-1 rounded-full">
                    For Agents
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#090D10] mb-2 tracking-tight">
                  Agent Mobile App
                </h3>
                <p className="text-sm sm:text-[15px] text-[#30383D] leading-relaxed mb-6 font-normal">
                  Agents can manage daily mobile-money transactions, serve walk-in Customers, manage liquidity and fulfil Pickup and Delivery requests and with every transaction recorded instantly for real-time business visibility.
                </p>
              </div>
              <button
                onClick={() => onNavigate('for-business-owners')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer pt-2"
              >
                <span>Explore Agent Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* COLUMN 3 — MANAGEMENT WEB APP */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#E5F5F5]/40 transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors shadow-2xs">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#008C95] bg-[#E5F5F5] px-2.5 py-1 rounded-full">
                    For Management
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#090D10] mb-2 tracking-tight">
                  Management Web App
                </h3>
                <p className="text-sm sm:text-[15px] text-[#30383D] leading-relaxed mb-6 font-normal">
                  Business Owners and authorised Admins get real-time visibility across their operations, including Agent activity, walk-in transactions, Pickup and Delivery requests, liquidity, transactions, configurations and operational reports.
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer pt-2"
              >
                <span>Explore Management Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. WHY TELLERBUD (Light Oceanic Green Section)      */}
      {/* ================================================== */}
      <section className="w-full bg-[#E5F5F5] pt-8 sm:pt-10 lg:pt-[52px] pb-16 sm:pb-20 lg:pb-24 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mx-auto text-center mb-11">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-2.5">
              PLATFORM ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#090D10] tracking-tight">
              Why TellerBud
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Benefit 1 */}
            <div className="bg-[#FCFCFB] p-8 rounded-2xl border border-[#D9E4E4] shadow-sm flex flex-col text-left space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center border border-[#008C95]/20 shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10] tracking-tight">
                Greater Convenience
              </h3>
              <p className="text-base text-[#30383D] leading-relaxed font-normal">
                Pickup and Delivery options support different Customer needs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#FCFCFB] p-8 rounded-2xl border border-[#D9E4E4] shadow-sm flex flex-col text-left space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center border border-[#008C95]/20 shrink-0">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10] tracking-tight">
                Confirmed Agent Support
              </h3>
              <p className="text-base text-[#30383D] leading-relaxed font-normal">
                Agent details appear only after an eligible Agent accepts.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#FCFCFB] p-8 rounded-2xl border border-[#D9E4E4] shadow-sm flex flex-col text-left space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center border border-[#008C95]/20 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10] tracking-tight">
                Secure Completion
              </h3>
              <p className="text-base text-[#30383D] leading-relaxed font-normal">
                Customer and Agent confirmations support accountable completion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 5. AFRICA-FOCUSED BRAND BAND (Dark Oceanic Green)  */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-20 sm:py-24 relative overflow-hidden">
        {/* Subtle background ambient graphic */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008C95]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5F5F5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#FCFCFB]/10 text-[#FCFCFB] border border-[#FCFCFB]/20 mb-2">
              <Globe2 className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#FCFCFB] tracking-tight leading-tight">
              Built around Africa’s mobile-first communities.
            </h2>

            <p className="text-lg sm:text-xl text-[#FCFCFB]/90 leading-relaxed font-normal">
              TellerBud is designed around the role mobile money plays in everyday life, local commerce and community access.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] text-base font-semibold rounded-full transition-all shadow-md cursor-pointer inline-flex items-center gap-2 active:scale-[0.99]"
              >
                <span>About TellerBud</span>
                <ArrowRight className="w-5 h-5 text-[#005F67]" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
