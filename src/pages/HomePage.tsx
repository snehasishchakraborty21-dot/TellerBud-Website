import { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Truck,
  Building2,
  ShieldCheck,
  UserCheck,
  Clock,
  Globe2,
  CheckCircle2,
  Smartphone,
  Monitor,
} from 'lucide-react';
import { PageId } from '../types';
import { CUSTOMER_APP_DOWNLOAD_URL } from '../config/site';

interface HomePageProps {
  onGetTellerBud: () => void;
  onNavigate: (page: PageId) => void;
}

// Hero & Core Services local image asset paths
const HERO_BG_IMG = '/assets/home-hero.jpg';
const PICKUP_IMG = '/assets/home-pickup.jpg';
const DELIVERY_IMG = '/assets/home-delivery.jpg';
const BUSINESS_IMG = '/assets/home-business.jpg';

// Safe high-resolution online fallbacks
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=85';
const FALLBACK_PICKUP = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85';
const FALLBACK_DELIVERY = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85';
const FALLBACK_BUSINESS = 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85';

export default function HomePage({ onGetTellerBud, onNavigate }: HomePageProps) {
  const [heroError, setHeroError] = useState(false);
  const [pickupError, setPickupError] = useState(false);
  const [deliveryError, setDeliveryError] = useState(false);
  const [businessError, setBusinessError] = useState(false);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      
      {/* ================================================== */}
      {/* 1. FULL-WIDTH HERO (650–720px high)                 */}
      {/* ================================================== */}
      <section className="relative w-full h-[650px] sm:h-[680px] lg:h-[720px] bg-[#050F11] overflow-hidden flex items-center">
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

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-12">
          <div className="max-w-2xl text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5]/15 border border-[#008C95]/40 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008C95]" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                MOBILE MONEY CONVENIENCE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#FCFCFB] tracking-tight leading-[1.12] mb-6">
              Mobile money convenience,{' '}
              <span className="text-[#008C95]">closer to you.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#FCFCFB]/90 font-normal leading-relaxed mb-8 max-w-xl">
              TellerBud helps Customers access secure Pickup and Delivery support through confirmed Agents.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CUSTOMER_APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-base font-semibold rounded-full transition-all shadow-md shadow-[#008C95]/30 cursor-pointer flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </a>

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
                <p className="text-sm text-[#30383D] leading-relaxed mb-6 font-normal">
                  Customers can request Pickup or Delivery services, follow request progress, manage their wallet and review transaction activity.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer"
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
                <p className="text-sm text-[#30383D] leading-relaxed mb-6 font-normal">
                  Agents can manage availability, receive eligible service requests, support Customers and confirm transaction completion.
                </p>
              </div>
              <button
                onClick={() => onNavigate('for-business-owners')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer"
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
                <p className="text-sm text-[#30383D] leading-relaxed mb-6 font-normal">
                  Authorised teams can oversee platform operations, Agent activity, transactions, configurations and operational reporting.
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group-hover:translate-x-1 transition-all cursor-pointer"
              >
                <span>Explore Management Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. CORE SERVICES (3 Alternating Sections)          */}
      {/* ================================================== */}
      <section className="w-full py-12 sm:py-20 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          {/* Section Heading Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              OUR SERVICE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#090D10] tracking-tight leading-tight">
              Designed for convenient, reliable mobile money access.
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            
            {/* SECTION 1 — PICKUP (Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>CONVENIENT PICKUP</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                  Pickup Requests
                </h3>
                <p className="text-base sm:text-[17px] leading-[1.6] text-[#30383D] font-normal">
                  Customers can request mobile money service and visit the confirmed Agent’s location after acceptance.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-7 py-3.5 bg-[#008C95] hover:bg-[#005F67] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Learn About Pickup</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[420px]">
                  {!pickupError ? (
                    <img
                      src={PICKUP_IMG}
                      onError={() => setPickupError(true)}
                      referrerPolicy="no-referrer"
                      alt="Pickup Requests at confirmed agent store"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={FALLBACK_PICKUP}
                      referrerPolicy="no-referrer"
                      alt="Pickup Requests at confirmed agent store"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* SECTION 2 — DELIVERY (Image Left) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <Truck className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>DIRECT DELIVERY</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                  Delivery Requests
                </h3>
                <p className="text-base sm:text-[17px] leading-[1.6] text-[#30383D] font-normal">
                  Customers can request a confirmed Agent to come to their selected service location.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-7 py-3.5 bg-[#008C95] hover:bg-[#005F67] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Learn About Delivery</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[420px]">
                  {!deliveryError ? (
                    <img
                      src={DELIVERY_IMG}
                      onError={() => setDeliveryError(true)}
                      referrerPolicy="no-referrer"
                      alt="Agent delivery to customer location"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={FALLBACK_DELIVERY}
                      referrerPolicy="no-referrer"
                      alt="Agent delivery to customer location"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* SECTION 3 — BUSINESS OWNERS (Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>COMMUNITY COMMERCE</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                  Opportunities for Business Owners
                </h3>
                <p className="text-base sm:text-[17px] leading-[1.6] text-[#30383D] font-normal">
                  TellerBud supports business participation, service coordination and greater access to nearby Customers.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('for-business-owners')}
                    className="px-7 py-3.5 bg-[#008C95] hover:bg-[#005F67] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Business Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[420px]">
                  {!businessError ? (
                    <img
                      src={BUSINESS_IMG}
                      onError={() => setBusinessError(true)}
                      referrerPolicy="no-referrer"
                      alt="Opportunities for business owners and agents"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={FALLBACK_BUSINESS}
                      referrerPolicy="no-referrer"
                      alt="Opportunities for business owners and agents"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. WHY TELLERBUD (Light Oceanic Green Section)      */}
      {/* ================================================== */}
      <section className="w-full bg-[#E5F5F5] py-20 sm:py-28 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
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
