import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Radio,
  MonitorCheck,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onGetTellerBud?: () => void;
  onNavigate: (page: PageId) => void;
}

// Temporary placeholder asset paths for About page
const ABOUT_HERO_IMG = '/assets/about-hero.jpg';
const ABOUT_STORY_IMG = '/assets/about-story.jpg';
const ABOUT_COMMUNITY_IMG = '/assets/about-community.jpg';

// Safe high-resolution online fallbacks
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=85';
const FALLBACK_STORY = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=85';
const FALLBACK_COMMUNITY = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85';

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [storyImgError, setStoryImgError] = useState(false);
  const [communityImgError, setCommunityImgError] = useState(false);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. ABOUT PAGE HERO                                 */}
      {/* ================================================== */}
      <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#050F11] overflow-hidden flex items-center">
        {/* Background Photograph Container */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          {!heroImgError ? (
            <img
              src={ABOUT_HERO_IMG}
              onError={() => setHeroImgError(true)}
              alt="About TellerBud - Mobile Money Platform"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={FALLBACK_HERO}
              alt="About TellerBud - Mobile Money Platform"
              className="w-full h-full object-cover object-center"
            />
          )}
          {/* Moderate dark oceanic-green overlay for text readability while keeping photograph clearly visible */}
          <div className="absolute inset-0 bg-[#050F11]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F11]/90 via-[#050F11]/75 to-[#005F67]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008C95]/20 border border-[#008C95]/40 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                ABOUT TELLERBUD
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14]">
              Building mobile money convenience around people and communities.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB]/90 leading-relaxed font-normal max-w-2xl">
              TellerBud is a technology-enabled platform designed to support more accessible and convenient mobile money services through Customer, Agent and operational experiences.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 border border-[#FCFCFB]/30 text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all cursor-pointer"
              >
                Contact TellerBud
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. OUR PURPOSE                                     */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block">
              OUR PURPOSE
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Bringing essential mobile money services closer to everyday life.
            </h2>
            <div className="space-y-4 pt-2 text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
              <p>
                TellerBud aims to reduce the inconvenience of finding suitable mobile money service support by coordinating Pickup and Delivery requests with eligible Agents.
              </p>
              <p>
                The platform is designed around the role mobile money plays in daily routines, local commerce and community access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. THE TELLERBUD STORY                             */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!storyImgError ? (
                  <img
                    src={ABOUT_STORY_IMG}
                    onError={() => setStoryImgError(true)}
                    alt="TellerBud platform bringing customers, agents and management together"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_STORY}
                    alt="TellerBud platform bringing customers, agents and management together"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                <Layers className="w-3.5 h-3.5 text-[#008C95]" />
                <span>PLATFORM ARCHITECTURE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                A platform designed around real service needs.
              </h2>

              <div className="space-y-4 text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                <p>
                  TellerBud brings Customers, participating Agents and authorised operational teams into one connected platform.
                </p>
                <p>
                  Customers can request service based on their needs and preferred location. Agents can manage availability and manually accept eligible requests. Management teams can oversee platform activity and configurations.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCFCFB] border border-[#D9E4E4] text-xs font-medium text-[#182026]">
                  <CheckCircle2 className="w-4 h-4 text-[#008C95]" />
                  <span>Customer Requests</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCFCFB] border border-[#D9E4E4] text-xs font-medium text-[#182026]">
                  <CheckCircle2 className="w-4 h-4 text-[#008C95]" />
                  <span>Agent Acceptance</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCFCFB] border border-[#D9E4E4] text-xs font-medium text-[#182026]">
                  <CheckCircle2 className="w-4 h-4 text-[#008C95]" />
                  <span>Operational Oversight</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. CORE PRINCIPLES                                 */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              GUIDING VALUES
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              What guides TellerBud
            </h2>
          </div>

          {/* Refined 3-Column Corporate Layout with subtle separators */}
          <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl shadow-2xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D9E4E4]">
              
              {/* Principle 1 */}
              <div className="p-8 sm:p-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Convenience
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Design services around the Customer’s preferred mode, location and timing.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="p-8 sm:p-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Accountability
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Use clear request statuses and Customer-Agent confirmation to support transparent completion.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="p-8 sm:p-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Accessibility
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Support mobile money access through connected local Agents and participating business locations.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 5. CONNECTED PLATFORM                              */}
      {/* ================================================== */}
      <section className="w-full bg-[#EAF6F6] border-y border-[#008C95]/20 py-16 sm:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block">
              ONE CONNECTED PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Supporting Customers, Agents and operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience 1 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Customer Mobile App
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Supports Pickup and Delivery requests, request progress, wallet visibility and transaction activity.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Agent Mobile App
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Supports availability, eligible request handling, fulfilment and completion confirmation.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <MonitorCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Management Web App
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Supports authorised operational oversight, Agent activity, transactions, configurations and reporting.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 6. AFRICA-FOCUSED SECTION                          */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!communityImgError ? (
                  <img
                    src={ABOUT_COMMUNITY_IMG}
                    onError={() => setCommunityImgError(true)}
                    alt="African mobile-first communities and local commerce"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_COMMUNITY}
                    alt="African mobile-first communities and local commerce"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-2">
              <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block">
                COMMUNITY FOCUS
              </span>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                Designed with Africa’s mobile-first communities in mind.
              </h2>

              <div className="space-y-4 text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                <p>
                  TellerBud recognises the importance of mobile money in local commerce, daily transactions and community access.
                </p>
                <p>
                  The platform is designed to support convenient service coordination while respecting the practical needs of Customers, Agents and participating businesses.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. FINAL CTA BAND                                  */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              Discover the TellerBud platform.
            </h2>
            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Explore the services, business opportunities and connected experiences behind TellerBud.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] font-bold text-base rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-transparent hover:bg-[#FCFCFB]/10 border border-[#FCFCFB]/40 text-[#FCFCFB] font-semibold text-base rounded-full transition-all cursor-pointer"
              >
                Contact TellerBud
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
