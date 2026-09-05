import { useState } from 'react';
import {
  MapPin,
  Truck,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  CheckCircle2,
  Clock,
  UserCheck,
} from 'lucide-react';
import { CUSTOMER_APP_DOWNLOAD_URL } from '../config/site';
import { PageId } from '../types';

interface HowItWorksPageProps {
  onGetTellerBud: () => void;
  onNavigate?: (page: PageId) => void;
}

// Hero & Process Authentic Photography Assets
const HERO_BG_IMG = '/assets/how-it-works-hero.jpg';
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1920&q=80';

const STEP_1_IMG = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80';
const STEP_2_IMG = 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80';
const STEP_3_IMG = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80';
const STEP_4_IMG = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80';

const PICKUP_MODE_IMG = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80';
const DELIVERY_MODE_IMG = 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80';

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const [heroImg, setHeroImg] = useState(HERO_BG_IMG);
  const [step1Img, setStep1Img] = useState(STEP_1_IMG);
  const [step2Img, setStep2Img] = useState(STEP_2_IMG);
  const [step3Img, setStep3Img] = useState(STEP_3_IMG);
  const [step4Img, setStep4Img] = useState(STEP_4_IMG);
  const [pickupImg, setPickupImg] = useState(PICKUP_MODE_IMG);
  const [deliveryImg, setDeliveryImg] = useState(DELIVERY_MODE_IMG);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. PAGE HERO                                        */}
      {/* ================================================== */}
      <section className="relative w-full bg-[#090D10] text-[#FCFCFB] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
        {/* Hero Background Image */}
        <img
          src={heroImg}
          onError={() => setHeroImg(FALLBACK_HERO)}
          alt="African mobile money interaction"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle Oceanic-Green Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D10]/90 via-[#005F67]/80 to-[#090D10]/60" />

        {/* Hero Content Layer */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5]/20 backdrop-blur-xs border border-[#E5F5F5]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#008C95]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                HOW TELLERBUD WORKS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FCFCFB] tracking-tight leading-[1.12] mb-6">
              A simpler way to access mobile money services.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB]/90 font-normal leading-relaxed mb-8 max-w-2xl">
              TellerBud connects Customer requests with eligible Agents for convenient Pickup or Delivery support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CUSTOMER_APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-base font-semibold rounded-full transition-all shadow-md shadow-[#008C95]/30 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 active:bg-[#FCFCFB]/30 text-[#FCFCFB] text-base font-semibold rounded-full border border-[#FCFCFB]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. PROCESS INTRODUCTION                             */}
      {/* ================================================== */}
      <section className="w-full bg-[#FCFCFB] py-14 sm:py-20 border-b border-[#DDE7E7]">
        <div className="w-full max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#008C95] mb-3 block">
            SIMPLE &amp; TRANSPARENT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
            From request to secure completion.
          </h2>
          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed max-w-2xl mx-auto font-normal">
            Customers choose the service they need, provide the request details and allow TellerBud to coordinate with an eligible Agent.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. FOUR-STEP PROCESS                                */}
      {/* ================================================== */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* STEP 1 — CHOOSE THE SERVICE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E7] shadow-md group">
            <img
              src={step1Img}
              onError={() => setStep1Img(STEP_1_IMG)}
              alt="Choose Pickup or Delivery"
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-[#090D10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#FCFCFB]/20 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#008C95]" />
              <span className="text-xs font-semibold text-[#FCFCFB]">Step 1 of 4</span>
            </div>
          </div>

          {/* Content Right */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F5F5] text-[#008C95] font-semibold text-xs tracking-wider uppercase mb-4 w-fit">
              STEP 1 — CHOOSE THE SERVICE
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              Choose Pickup or Delivery
            </h3>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed mb-6 font-normal">
              Select Pickup to visit the confirmed Agent’s location, or Delivery for the Agent to come to the selected service location.
            </p>

            <div className="space-y-3 border-t border-[#DDE7E7] pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                <p className="text-sm text-[#30383D] font-normal">
                  <strong className="text-[#090D10] font-semibold">Pickup Mode:</strong> Visit an Agent at a confirmed business location nearby.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                <p className="text-sm text-[#30383D] font-normal">
                  <strong className="text-[#090D10] font-semibold">Delivery Mode:</strong> Have a confirmed Agent visit your home, office or shop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2 — PROVIDE REQUEST DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Left (on desktop) / Image Top (on mobile) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F5F5] text-[#008C95] font-semibold text-xs tracking-wider uppercase mb-4 w-fit">
              STEP 2 — PROVIDE REQUEST DETAILS
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              Tell TellerBud what you need
            </h3>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed mb-6 font-normal">
              Choose Deposit or Withdrawal, select the mobile money provider, enter the amount and choose Now or Schedule for Later.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#DDE7E7] pt-6">
              <div className="bg-[#E5F5F5]/50 rounded-2xl p-4 border border-[#DDE7E7]">
                <Smartphone className="w-5 h-5 text-[#008C95] mb-2" />
                <h4 className="text-sm font-semibold text-[#090D10]">Mobile Money Provider</h4>
                <p className="text-xs text-[#30383D] mt-1 font-normal">Select your preferred local mobile money wallet service.</p>
              </div>
              <div className="bg-[#E5F5F5]/50 rounded-2xl p-4 border border-[#DDE7E7]">
                <Clock className="w-5 h-5 text-[#008C95] mb-2" />
                <h4 className="text-sm font-semibold text-[#090D10]">Now or Schedule</h4>
                <p className="text-xs text-[#30383D] mt-1 font-normal">Request immediate assistance or schedule a convenient time.</p>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden border border-[#DDE7E7] shadow-md group">
            <img
              src={step2Img}
              onError={() => setStep2Img(STEP_2_IMG)}
              alt="Provide request details on mobile phone"
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-[#090D10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#FCFCFB]/20 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#008C95]" />
              <span className="text-xs font-semibold text-[#FCFCFB]">Step 2 of 4</span>
            </div>
          </div>
        </div>

        {/* STEP 3 — AGENT ACCEPTANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E7] shadow-md group">
            <img
              src={step3Img}
              onError={() => setStep3Img(STEP_3_IMG)}
              alt="Eligible Agent accepts request"
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-[#090D10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#FCFCFB]/20 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#008C95]" />
              <span className="text-xs font-semibold text-[#FCFCFB]">Step 3 of 4</span>
            </div>
          </div>

          {/* Content Right */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F5F5] text-[#008C95] font-semibold text-xs tracking-wider uppercase mb-4 w-fit">
              STEP 3 — AGENT ACCEPTANCE
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              An eligible Agent accepts
            </h3>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed mb-6 font-normal">
              TellerBud coordinates the request using service requirements and availability. Agent details appear only after the Agent accepts.
            </p>

            <div className="p-4 bg-[#FCFCFB] border-l-4 border-[#008C95] rounded-r-2xl shadow-2xs">
              <p className="text-sm font-semibold text-[#090D10]">
                Privacy &amp; Security Note:
              </p>
              <p className="text-xs text-[#30383D] mt-1 leading-relaxed font-normal">
                Agent details appear only after the Agent accepts, keeping communication focused and secure.
              </p>
            </div>
          </div>
        </div>

        {/* STEP 4 — SECURE COMPLETION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Left (on desktop) / Image Top (on mobile) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F5F5] text-[#008C95] font-semibold text-xs tracking-wider uppercase mb-4 w-fit">
              STEP 4 — SECURE COMPLETION
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              Both sides confirm completion
            </h3>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed mb-6 font-normal">
              The Customer and Agent each confirm completion before the transaction receives its final Completed status.
            </p>

            <div className="p-4 bg-[#E5F5F5]/60 border border-[#008C95]/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-[#008C95]" />
                <span className="text-sm font-semibold text-[#090D10]">Dual Confirmation System</span>
              </div>
              <p className="text-xs text-[#30383D] leading-relaxed font-normal">
                Ensures full operational transparency. No transaction is marked finished without mutual confirmation.
              </p>
            </div>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden border border-[#DDE7E7] shadow-md group">
            <img
              src={step4Img}
              onError={() => setStep4Img(STEP_4_IMG)}
              alt="Both sides confirm transaction completion"
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-[#090D10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#FCFCFB]/20 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#008C95]" />
              <span className="text-xs font-semibold text-[#FCFCFB]">Step 4 of 4</span>
            </div>
          </div>
        </div>

      </section>

      {/* ================================================== */}
      {/* 4. PICKUP AND DELIVERY COMPARISON                   */}
      {/* ================================================== */}
      <section className="w-full bg-[#E5F5F5]/30 py-16 sm:py-24 border-y border-[#DDE7E7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#008C95] mb-2 block">
              SERVICE MODES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              Pickup vs. Delivery
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] font-normal">
              Choose the service mode that best fits your daily schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pickup Mode Card */}
            <div className="bg-[#FCFCFB] border border-[#DDE7E7] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={pickupImg}
                  onError={() => setPickupImg(PICKUP_MODE_IMG)}
                  alt="Pickup Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#090D10]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#008C95]" />
                  <span className="text-xs font-semibold text-[#FCFCFB]">Pickup</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10] mb-3">
                    Pickup Service
                  </h3>
                  <p className="text-sm sm:text-base text-[#30383D] leading-relaxed mb-6 font-normal">
                    You go to the confirmed Agent’s location after acceptance.
                  </p>
                </div>
                <div className="border-t border-[#DDE7E7] pt-4 flex items-center justify-between text-xs font-semibold text-[#008C95]">
                  <span>Visit Confirmed Kiosk or Shop</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Delivery Mode Card */}
            <div className="bg-[#FCFCFB] border border-[#DDE7E7] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={deliveryImg}
                  onError={() => setDeliveryImg(DELIVERY_MODE_IMG)}
                  alt="Delivery Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#090D10]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#008C95]" />
                  <span className="text-xs font-semibold text-[#FCFCFB]">Delivery</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10] mb-3">
                    Delivery Service
                  </h3>
                  <p className="text-sm sm:text-base text-[#30383D] leading-relaxed mb-6 font-normal">
                    The confirmed Agent comes to your selected service location.
                  </p>
                </div>
                <div className="border-t border-[#DDE7E7] pt-4 flex items-center justify-between text-xs font-semibold text-[#008C95]">
                  <span>Agent Comes to Your Location</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. COMPLETION TRUST BAND                            */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-24">
        <div className="w-full max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FCFCFB]/10 text-[#E5F5F5] mx-auto flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            Clear confirmation. Accountable completion.
          </h2>
          <p className="text-base sm:text-lg text-[#E5F5F5]/90 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
            A transaction is completed only after both the Customer and Agent have confirmed it.
          </p>
          <a
            href={CUSTOMER_APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FCFCFB] text-[#005F67] hover:bg-[#E5F5F5] active:bg-[#D9E4E4] text-base font-semibold rounded-full transition-all shadow-md cursor-pointer"
          >
            <span>Get TellerBud</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

