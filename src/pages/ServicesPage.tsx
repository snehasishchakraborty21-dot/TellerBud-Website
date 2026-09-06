import { useState } from 'react';
import {
  MapPin,
  Truck,
  Store,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowDownLeft,
  ArrowUpRight,
  UserCheck
} from 'lucide-react';
import { PageId } from '../types';

interface ServicesPageProps {
  onGetTellerBud: () => void;
  onNavigate: (page: PageId) => void;
}

// Temporary placeholder asset paths for Services page
const SERVICES_HERO_IMG = '/assets/services-hero.jpg';
const SERVICES_PICKUP_IMG = '/assets/services-pickup.jpg';
const SERVICES_DELIVERY_IMG = '/assets/services-delivery.jpg';
const SERVICES_WALKIN_IMG = '/assets/services-walk-in.jpg';

// Safe high-resolution online fallbacks
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=85';
const FALLBACK_PICKUP = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85';
const FALLBACK_DELIVERY = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85';
const FALLBACK_WALKIN = 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=85';

export default function ServicesPage({ onGetTellerBud, onNavigate }: ServicesPageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [pickupImgError, setPickupImgError] = useState(false);
  const [deliveryImgError, setDeliveryImgError] = useState(false);
  const [walkInImgError, setWalkInImgError] = useState(false);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. SERVICES HERO (Full-width with background image) */}
      {/* ================================================== */}
      <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#050F11] overflow-hidden flex items-center">
        {/* Background Photograph Container */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          {!heroImgError ? (
            <img
              src={SERVICES_HERO_IMG}
              onError={() => setHeroImgError(true)}
              alt="TellerBud Services - Mobile Money Support"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={FALLBACK_HERO}
              alt="TellerBud Services - Mobile Money Support"
              className="w-full h-full object-cover object-center"
            />
          )}
          {/* Moderate dark oceanic-green overlay for text readability while keeping photograph clearly visible */}
          <div className="absolute inset-0 bg-[#050F11]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F11]/90 via-[#050F11]/70 to-[#005F67]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl lg:max-w-[840px] space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008C95]/20 border border-[#008C95]/40 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                TELLERBUD SERVICES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14]">
              Flexible mobile money support, built around everyday needs.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB] leading-relaxed font-normal max-w-[800px]">
              TellerBud connects Customers with trusted Agents for secure cash deposits and withdrawals through Pickup and Delivery, while capturing both everyday walk-in and requested transactions in real-time giving business owners instant visibility across their operations.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onGetTellerBud}
                className="px-7 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('how-it-works')}
                className="px-7 py-3.5 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 border border-[#FCFCFB]/30 text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all cursor-pointer"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. SERVICES INTRODUCTION                           */}
      {/* ================================================== */}
      <section className="w-full py-14 sm:py-20 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Choose the service experience that works for you.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal max-w-2xl mx-auto">
              TellerBud provides three structured service modes—scheduled <strong>Pickup</strong>, direct <strong>Delivery</strong>, and in-person <strong>Walk-In Transactions</strong>—tailored to Customer convenience and Agent operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. PICKUP SERVICE SECTION                          */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#008C95]" />
                <span>SERVICE MODE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                Pickup Requests
              </h2>

              <p className="text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                Customers can request mobile money service and visit the confirmed Agent’s location after the Agent accepts.
              </p>

              {/* Highlights List */}
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Deposit or Withdrawal</strong> support</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Select a supported mobile money provider</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Choose Now or Schedule for Later</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Agent details appear only after acceptance</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="px-6 py-3 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Learn How Pickup Works</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!pickupImgError ? (
                  <img
                    src={SERVICES_PICKUP_IMG}
                    onError={() => setPickupImgError(true)}
                    alt="Pickup Requests - Customer visiting an agent location"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_PICKUP}
                    alt="Pickup Requests - Customer visiting an agent location"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. DELIVERY SERVICE SECTION                        */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Column (Desktop) */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!deliveryImgError ? (
                  <img
                    src={SERVICES_DELIVERY_IMG}
                    onError={() => setDeliveryImgError(true)}
                    alt="Delivery Requests - Agent arriving at customer location"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_DELIVERY}
                    alt="Delivery Requests - Agent arriving at customer location"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content Column (Desktop) */}
            <div className="lg:col-span-6 space-y-6 text-left order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                <Truck className="w-3.5 h-3.5 text-[#008C95]" />
                <span>DIRECT CONVENIENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                Delivery Requests
              </h2>

              <p className="text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                Customers can request a confirmed Agent to provide service at the Customer’s selected service location.
              </p>

              {/* Highlights List */}
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span><strong>Deposit or Withdrawal</strong> support</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Customer-selected service location</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Choose Now or Schedule for Later</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>No live map or exact Agent tracking</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="px-6 py-3 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Learn How Delivery Works</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. WALK-IN TRANSACTIONS SECTION (New Service Mode)  */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 border-b border-[#D9E4E4]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold">
                <Store className="w-3.5 h-3.5 text-[#008C95]" />
                <span>IN-PERSON SERVICE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                Walk-In Transactions
              </h2>

              <p className="text-base sm:text-[17px] leading-[1.65] text-[#30383D] font-normal">
                Walk-in Customers can visit a participating Agent or business location for normal mobile-money deposits and withdrawals. The Agent performs the transaction and TellerBud records the activity for operational visibility and reporting.
              </p>

              {/* Highlights List */}
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Supports normal walk-in deposits and withdrawals</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Transaction recorded instantly</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Agent activity linked to the transaction</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Business Owners gain real-time operational visibility</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#182026]">
                  <CheckCircle2 className="w-5 h-5 text-[#008C95] shrink-0 mt-0.5" />
                  <span>Supports reporting and reconciliation</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="px-6 py-3 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Learn About Walk-In Transactions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E4E4] bg-[#E5F5F5] shadow-lg h-[340px] sm:h-[400px] lg:h-[440px]">
                {!walkInImgError ? (
                  <img
                    src={SERVICES_WALKIN_IMG}
                    onError={() => setWalkInImgError(true)}
                    alt="Walk-In Transactions - In-person mobile money service at agent location"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={FALLBACK_WALKIN}
                    alt="Walk-In Transactions - In-person mobile money service at agent location"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/30 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. SERVICE SUPPORT BAND                            */}
      {/* ================================================== */}
      <section className="w-full bg-[#EAF6F6] border-y border-[#008C95]/20 py-16 sm:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              SERVICE ASSURANCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Support throughout every transaction mode.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Confirmed Agent Support
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                For Pickup and Delivery requests, Agent details appear once accepted. For Walk-In Transactions, services are carried out directly by confirmed Agents at participating locations.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Clear Charges
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Applicable service, reservation or delivery charges are shown upfront before confirming customer requests, maintaining transparent terms across all supported operations.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-[#FCFCFB] border border-[#008C95]/20 rounded-2xl p-7 sm:p-8 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F5F5] border border-[#008C95]/30 flex items-center justify-center text-[#008C95]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#090D10]">
                Secure Completion
              </h3>
              <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                Customer and Agent confirmations ensure accountability for requests, while walk-in operations are recorded instantly in TellerBud for oversight and reporting.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 7. SERVICE OPTIONS (Deposit & Withdrawal)          */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              TRANSACTION SUPPORT
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Supported Request Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Deposit Option */}
            <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs hover:border-[#008C95]/40 transition-all space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                <ArrowDownLeft className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-[#090D10]">
                Deposit Support
              </h3>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                Customers can deposit funds through supported mobile money providers—available across <strong>Pickup</strong>, <strong>Delivery</strong>, and direct <strong>Walk-In Transactions</strong>.
              </p>
            </div>

            {/* Withdrawal Option */}
            <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-8 sm:p-10 shadow-2xs hover:border-[#008C95]/40 transition-all space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                <ArrowUpRight className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-[#090D10]">
                Withdrawal Support
              </h3>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                Customers can withdraw cash through participating Agents across supported providers—available across <strong>Pickup</strong>, <strong>Delivery</strong>, and direct <strong>Walk-In Transactions</strong>.
              </p>
            </div>
          </div>

          {/* Operational Clarification Note */}
          <div className="mt-10 p-5 rounded-xl bg-[#F4F8F8] border border-[#D9E4E4] text-xs sm:text-sm text-[#30383D]/90 text-center font-normal">
            TellerBud coordinates service requests and records transaction activity between Customers and participating Agents across supported providers without holding or directly transferring customer wallet funds.
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 8. FINAL CTA BAND                                  */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              Mobile money convenience, ready when you need it.
            </h2>
            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Access TellerBud for Pickup, Delivery or Walk-In mobile-money services.
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

