import { useState } from 'react';
import {
  ArrowRight,
  Eye,
  Truck,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Smartphone,
  Radio,
  FileCheck,
  BadgeCheck,
  Briefcase
} from 'lucide-react';
import { PageId } from '../types';

interface ForBusinessOwnersPageProps {
  onGetTellerBud: () => void;
  onNavigate: (page: PageId) => void;
}

// Temporary placeholder asset paths for For Business Owners page
const BUSINESS_HERO_IMG = '/assets/business-owners-hero.jpg';
const BUSINESS_PARTICIPATION_IMG = '/assets/business-participation.jpg';

// Safe high-resolution online fallbacks
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1920&q=85';
const FALLBACK_PARTICIPATION = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85';

export default function ForBusinessOwnersPage({ onNavigate }: ForBusinessOwnersPageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [participationImgError, setParticipationImgError] = useState(false);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. PAGE HERO (Full-width with background image)    */}
      {/* ================================================== */}
      <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#050F11] overflow-hidden flex items-center">
        {/* Background Photograph Container */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          {!heroImgError ? (
            <img
              src={BUSINESS_HERO_IMG}
              onError={() => setHeroImgError(true)}
              alt="TellerBud For Business Owners & Mobile Money Agents"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={FALLBACK_HERO}
              alt="TellerBud For Business Owners & Mobile Money Agents"
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
                FOR BUSINESS OWNERS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14]">
              Grow your mobile money service presence with TellerBud.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB]/90 leading-relaxed font-normal max-w-2xl">
              TellerBud helps participating business owners and Agents connect with eligible Customer requests while supporting convenient Pickup and Delivery services.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With TellerBud</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 border border-[#FCFCFB]/30 text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. BUSINESS OPPORTUNITY INTRODUCTION               */}
      {/* ================================================== */}
      <section className="w-full py-14 sm:py-20 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Support your community. Strengthen your service reach.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal max-w-2xl mx-auto">
              TellerBud is designed to help participating mobile money businesses support nearby Customers through structured service requests, clear acceptance and accountable completion.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. THREE BUSINESS BENEFITS                         */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              AGENT ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Designed for participating businesses.
            </h2>
          </div>

          {/* Connected Corporate Layout Container */}
          <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl shadow-2xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D9E4E4]">
              
              {/* Benefit 1 */}
              <div className="p-8 sm:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>GREATER VISIBILITY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Be available for eligible Customer requests
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Participating Agents can make their service availability known to TellerBud and receive requests that match relevant service requirements.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-8 sm:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <Truck className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>FLEXIBLE SERVICE SUPPORT</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Support Pickup and Delivery requests
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Businesses can support Customers visiting their confirmed location for Pickup or provide Delivery service at the Customer’s selected location where applicable.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-8 sm:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>ACCOUNTABLE COMPLETION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Maintain clear transaction confirmation
                </h3>
                <p className="text-base text-[#30383D] leading-relaxed font-normal">
                  Customer and Agent confirmations help create a structured and accountable completion process.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. HOW PARTICIPATION WORKS                         */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!participationImgError ? (
                  <img
                    src={BUSINESS_PARTICIPATION_IMG}
                    onError={() => setParticipationImgError(true)}
                    alt="Connected experience for participating agents"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_PARTICIPATION}
                    alt="Connected experience for participating agents"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-[#008C95]" />
                <span>PARTICIPATION WORKFLOW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                A connected experience for participating Agents.
              </h2>

              <p className="text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                TellerBud provides a clear operational flow designed to respect Agent autonomy and service coordination:
              </p>

              {/* 4 Points List */}
              <ul className="space-y-4 pt-1">
                <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Set service availability</strong> to receive relevant customer requests.</span>
                </li>
                <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Receive eligible requests</strong> based on service capability and region.</span>
                </li>
                <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Accept requests manually</strong> after reviewing transaction details.</span>
                </li>
                <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Confirm completion</strong> together with the Customer after fulfilment.</span>
                </li>
              </ul>

              <div className="pt-2 p-4 rounded-xl bg-[#F4F8F8] border border-[#D9E4E4] text-xs sm:text-sm text-[#30383D] font-normal">
                <em>Note: An eligible request is reviewed and manually accepted by the Agent. Agent identity and location details appear to the Customer only after acceptance.</em>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. AGENT MOBILE APP SECTION                        */}
      {/* ================================================== */}
      <section className="w-full bg-[#EAF6F6] border-y border-[#008C95]/20 py-16 sm:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block">
              AGENT TOOLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              The TellerBud Agent Mobile App
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
              The Agent Mobile App supports participating Agents with availability, eligible service requests, transaction fulfilment and completion confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Availability Management
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Agents can indicate when they are available to support requests.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Request Handling
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Agents can review and manually accept eligible Pickup or Delivery requests.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Completion Confirmation
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Agents confirm their side of the transaction after fulfilment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 6. WHO THIS IS FOR                                 */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              PARTICIPANT PROFILES
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Column 1 */}
            <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs space-y-5 hover:border-[#008C95]/40 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-[#090D10]">
                Mobile Money Agents
              </h3>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                For established Agents supporting deposits and withdrawals through configured providers.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs space-y-5 hover:border-[#008C95]/40 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-[#090D10]">
                Participating Business Locations
              </h3>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                For approved businesses capable of supporting TellerBud service requirements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 7. PARTNERSHIP CTA BAND                            */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              Interested in partnering with TellerBud?
            </h2>
            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Contact TellerBud to discuss participation, business opportunities and platform requirements.
            </p>
            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] font-bold text-base rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Contact TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
