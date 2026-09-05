import { ArrowRight, ShieldCheck, UserCheck, ArrowLeftRight, CheckCircle2, Lock, ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetTellerBud: () => void;
  onSeeHowItWorks: () => void;
}

export default function Hero({ onGetTellerBud, onSeeHowItWorks }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-[#FCFCFB] overflow-hidden py-16 sm:py-20 lg:py-28 min-h-[720px] lg:min-h-[820px] flex items-center border-b border-[#DDE7E7]/40"
    >
      {/* Subtle oceanic-green atmospheric ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[650px] h-[650px] rounded-full bg-[#008C95]/6 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#DFF4F3]/70 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#DFF4F3]/50 blur-3xl" />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: Art-Directed Editorial Hero Copy (~50% desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF4F3] border border-[#008C95]/20 mb-6 sm:mb-8 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#008C95] uppercase">
                MOBILE MONEY, MADE MORE CONVENIENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[68px] font-extrabold text-[#090D10] tracking-tight leading-[1.08] mb-6 max-w-[640px]">
              Mobile money convenience,{' '}
              <span className="text-[#008C95] relative inline-block">
                closer to you.
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#DFF4F3] -z-10 rounded-full" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#182026]/80 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
              TellerBud helps customers request secure mobile money pickup or delivery services from confirmed agents.
            </p>

            {/* Action Buttons & Reassurance */}
            <div className="flex flex-col space-y-5 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Primary Oceanic Green Button */}
                <button
                  onClick={onGetTellerBud}
                  className="px-8 py-4 bg-[#008C95] hover:bg-[#006B73] active:bg-[#005258] text-[#FCFCFB] text-base font-extrabold rounded-full shadow-md shadow-[#008C95]/20 hover:shadow-lg hover:shadow-[#008C95]/30 transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-[0.99]"
                >
                  <span>Get TellerBud</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Secondary Button */}
                <button
                  onClick={onSeeHowItWorks}
                  className="px-7 py-4 bg-[#FFFFFF] hover:bg-[#FCFCFB] text-[#090D10] hover:text-[#008C95] font-extrabold text-base border border-[#DDE7E7] hover:border-[#008C95]/40 rounded-full transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>See How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#008C95]" />
                </button>
              </div>

              {/* Reassurance Line */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#182026]/70 pt-1">
                <div className="w-5 h-5 rounded-full bg-[#DFF4F3] flex items-center justify-center text-[#008C95] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Simple requests. Confirmed agents. Secure completion.</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Layered Fine-Art Fintech Visual Composition (~50% desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            {/* Visual Container Frame */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px]">
              
              {/* Soft atmospheric backlight aura */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#008C95]/12 via-[#DFF4F3]/50 to-transparent rounded-[48px] blur-2xl opacity-80" />

              {/* Main Refined Floating Fintech Canvas Frame */}
              <div className="relative bg-[#FFFFFF] rounded-[36px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(9,13,16,0.08)] border border-[#DDE7E7] z-10 space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DDE7E7]/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#008C95] flex items-center justify-center text-[#FCFCFB] font-extrabold text-sm shadow-xs">
                      TB
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#090D10] block">
                        TellerBud
                      </span>
                      <span className="text-[11px] text-[#182026]/70">
                        Mobile Money Platform
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold text-[#008C95] bg-[#DFF4F3] px-3 py-1 rounded-full border border-[#008C95]/20">
                    Live System
                  </span>
                </div>

                {/* Service Mode Selector Visual */}
                <div className="bg-[#FCFCFB] p-4 sm:p-5 rounded-2xl border border-[#DDE7E7] space-y-3">
                  <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#008C95]">
                    Flexibility in Access
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Pickup Option */}
                    <div className="p-3 bg-[#DFF4F3] border border-[#008C95]/40 rounded-xl flex items-center gap-2.5 shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#008C95] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#FCFCFB]" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#090D10] block">Pickup</span>
                        <span className="text-[10px] text-[#008C95] font-semibold">At Agent</span>
                      </div>
                    </div>
                    {/* Delivery Option */}
                    <div className="p-3 bg-[#FFFFFF] border border-[#DDE7E7] rounded-xl flex items-center gap-2.5 opacity-70">
                      <div className="w-6 h-6 rounded-full bg-[#DDE7E7] flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#182026]/40" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#090D10] block">Delivery</span>
                        <span className="text-[10px] text-[#182026]/60 font-medium">To You</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confirmed Agent Badge Visual */}
                <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#DDE7E7] shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#DFF4F3] border border-[#008C95]/30 flex items-center justify-center text-[#008C95] shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#090D10]">Confirmed Local Agent</p>
                        <p className="text-[11px] font-semibold text-[#008C95]">Verified Teller Connected</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-[#DFF4F3] text-[#008C95] text-[10px] font-extrabold rounded-md uppercase">
                      Matched
                    </span>
                  </div>
                </div>

                {/* Security Seal Progress Indicator */}
                <div className="bg-[#090D10] text-[#FCFCFB] p-4 sm:p-5 rounded-2xl shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#008C95]" />
                      <span className="text-xs font-extrabold tracking-wide text-[#FCFCFB]">Dual Confirmation</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#008C95] bg-[#DFF4F3]/15 px-2.5 py-0.5 rounded border border-[#008C95]/30">
                      End-to-End
                    </span>
                  </div>
                  <div className="w-full bg-[#182026] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#008C95] h-full w-3/4 rounded-full" />
                  </div>
                </div>

              </div>

              {/* FLOATING EDITORIAL BADGE 1 (Top Right) */}
              <div className="absolute -top-5 -right-4 sm:-top-6 sm:-right-6 z-20 bg-[#FFFFFF] p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#DDE7E7] flex items-center gap-3.5">
                <div className="p-3 bg-[#DFF4F3] rounded-xl text-[#008C95] shrink-0">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#090D10]">Pickup or Delivery</div>
                  <div className="text-[11px] font-medium text-[#182026]/70">Flexible Service</div>
                </div>
              </div>

              {/* FLOATING EDITORIAL BADGE 2 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 z-20 bg-[#FFFFFF] px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#DDE7E7] flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#008C95] animate-pulse" />
                <span className="text-xs font-extrabold text-[#090D10]">Secure Completion</span>
                <ShieldCheck className="w-4 h-4 text-[#008C95] ml-0.5" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


