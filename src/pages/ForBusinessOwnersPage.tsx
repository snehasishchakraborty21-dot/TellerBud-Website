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
  Briefcase,
  Activity,
  Users,
  ArrowLeftRight,
  FileSpreadsheet,
  LayoutDashboard,
  TrendingUp,
  Clock,
  ArrowDownLeft,
  ArrowUpRight,
  Layers,
  Wallet
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
          <div className="max-w-[820px] text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008C95]/20 border border-[#008C95]/40 backdrop-blur-xs mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                FOR BUSINESS OWNERS
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14] mb-6 sm:mb-[26px]">
              Grow and manage your mobile money business with TellerBud
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-[#FCFCFB] leading-relaxed font-normal max-w-[740px] mb-7 sm:mb-8">
              TellerBud helps Business Owners and Agents serve more Customers, manage day-to-day mobile-money transactions and fulfil Pickup and Delivery requests while giving owners real-time visibility across their operations.
            </p>

            <div className="flex flex-wrap items-center gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Benefit 1 */}
              <div className="p-6 sm:p-8 lg:p-7 xl:p-8 space-y-4 sm:space-y-5 border-b md:border-b lg:border-b-0 md:border-r border-[#D9E4E4] flex flex-col justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold w-fit">
                  <Eye className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>GREATER VISIBILITY</span>
                </div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#090D10] tracking-tight leading-snug">
                  Be available for eligible Customer requests
                </h3>
                <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  Participating Agents can make their service availability known to TellerBud and receive requests that match relevant service requirements.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 sm:p-8 lg:p-7 xl:p-8 space-y-4 sm:space-y-5 border-b md:border-b lg:border-b-0 lg:border-r border-[#D9E4E4] flex flex-col justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold w-fit">
                  <Truck className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>FLEXIBLE SERVICE SUPPORT</span>
                </div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#090D10] tracking-tight leading-snug">
                  Support Pickup and Delivery requests
                </h3>
                <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  Businesses can support Customers visiting their confirmed location for Pickup or provide Delivery service at the Customer’s selected location where applicable.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 sm:p-8 lg:p-7 xl:p-8 space-y-4 sm:space-y-5 border-b md:border-b-0 md:border-r border-[#D9E4E4] flex flex-col justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold w-fit">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>ACCOUNTABLE COMPLETION</span>
                </div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#090D10] tracking-tight leading-snug">
                  Maintain clear transaction confirmation
                </h3>
                <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  Customer and Agent confirmations help create a structured and accountable completion process.
                </p>
              </div>

              {/* Benefit 4 (New) */}
              <div className="p-6 sm:p-8 lg:p-7 xl:p-8 space-y-4 sm:space-y-5 flex flex-col justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold w-fit">
                  <Activity className="w-3.5 h-3.5 text-[#008C95]" />
                  <span>REAL-TIME VISIBILITY</span>
                </div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#090D10] tracking-tight leading-snug">
                  Track transactions as they happen
                </h3>
                <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  Business Owners can view normal mobile-money transactions in real time, giving them clear visibility into Agent activity, daily operations and service performance across their business.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. BUSINESS VISIBILITY & WALK-IN OPERATIONS        */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#F7FAFA]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-3">
              BUSINESS VISIBILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight mb-4">
              See how TellerBud supports daily mobile-money operations.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
              TellerBud helps Business Owners monitor walk-in mobile-money activity, Agent operations and transaction performance in real time. From cash deposits and withdrawals to Agent activity and liquidity movement, every key action can be captured for better operational visibility.
            </p>
          </div>

          {/* 2-Column Main Layout: Left = Walk-in Flow, Right = Operations Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
            
            {/* LEFT COLUMN: Walk-in Transaction Flow (5 Steps) */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-6 sm:p-8 shadow-2xs flex-1 flex flex-col justify-between">
                
                {/* Column Header */}
                <div className="pb-5 border-b border-[#E1ECEC] mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold mb-2">
                    <Activity className="w-3.5 h-3.5 text-[#008C95]" />
                    <span>OPERATIONAL WORKFLOW</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10] tracking-tight">
                    Walk-in mobile-money transaction flow
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525D64] mt-1 font-normal">
                    5 structured steps connecting in-store service to the management system
                  </p>
                </div>

                {/* 5 Steps with Connecting Line */}
                <div className="space-y-6 relative">
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="absolute left-5 top-10 bottom-[-24px] w-[2px] bg-[#D9E4E4]" />
                    <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#005F67] flex items-center justify-center shrink-0 font-bold text-sm shadow-xs relative z-10">
                      <Users className="w-5 h-5 text-[#008C95]" />
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <span className="text-[11px] font-bold text-[#008C95] tracking-wider uppercase block">STEP 01</span>
                      <h4 className="text-base font-semibold text-[#090D10] leading-snug">
                        Customer Walks In
                      </h4>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-normal">
                        Customer visits a TellerBud-connected Agent or business location for mobile-money service.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="absolute left-5 top-10 bottom-[-24px] w-[2px] bg-[#D9E4E4]" />
                    <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#005F67] flex items-center justify-center shrink-0 font-bold text-sm shadow-xs relative z-10">
                      <ArrowLeftRight className="w-5 h-5 text-[#008C95]" />
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <span className="text-[11px] font-bold text-[#008C95] tracking-wider uppercase block">STEP 02</span>
                      <h4 className="text-base font-semibold text-[#090D10] leading-snug">
                        Agent Performs Transaction
                      </h4>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-normal">
                        Agent handles the deposit or withdrawal request using the supported mobile-money provider.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="absolute left-5 top-10 bottom-[-24px] w-[2px] bg-[#D9E4E4]" />
                    <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#005F67] flex items-center justify-center shrink-0 font-bold text-sm shadow-xs relative z-10">
                      <FileSpreadsheet className="w-5 h-5 text-[#008C95]" />
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <span className="text-[11px] font-bold text-[#008C95] tracking-wider uppercase block">STEP 03</span>
                      <h4 className="text-base font-semibold text-[#090D10] leading-snug">
                        Transaction Is Recorded
                      </h4>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-normal">
                        The transaction is logged instantly in the TellerBud system with amount, provider, Agent, time and location.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="absolute left-5 top-10 bottom-[-24px] w-[2px] bg-[#D9E4E4]" />
                    <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#005F67] flex items-center justify-center shrink-0 font-bold text-sm shadow-xs relative z-10">
                      <LayoutDashboard className="w-5 h-5 text-[#008C95]" />
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <span className="text-[11px] font-bold text-[#008C95] tracking-wider uppercase block">STEP 04</span>
                      <h4 className="text-base font-semibold text-[#090D10] leading-snug">
                        Business Owner Gets Visibility
                      </h4>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-normal">
                        The Business Owner or authorised Admin can view the transaction in the management dashboard in real time.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 text-[#005F67] flex items-center justify-center shrink-0 font-bold text-sm shadow-xs relative z-10">
                      <TrendingUp className="w-5 h-5 text-[#008C95]" />
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <span className="text-[11px] font-bold text-[#008C95] tracking-wider uppercase block">STEP 05</span>
                      <h4 className="text-base font-semibold text-[#090D10] leading-snug">
                        Operations Stay Traceable
                      </h4>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-normal">
                        Recorded transactions contribute to reporting, reconciliation, oversight and performance monitoring.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Operations Dashboard Preview */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl p-6 sm:p-8 shadow-2xs flex-1 flex flex-col space-y-6">
                
                {/* Dashboard Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E1ECEC]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#005F67] text-[#FCFCFB] shadow-xs">
                      <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10] tracking-tight">
                          Operations Dashboard
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E5F5F5] text-[#005F67] border border-[#008C95]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008C95] animate-pulse" />
                          Real-time visibility
                        </span>
                      </div>
                      <p className="text-xs text-[#525D64] mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#008C95]" />
                        <span>Last updated a few seconds ago</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-semibold text-[#525D64] uppercase tracking-wider block">Scope</span>
                    <span className="text-xs font-semibold text-[#005F67] bg-[#E5F5F5] px-2.5 py-1 rounded-md inline-block">Today • Active Branches</span>
                  </div>
                </div>

                {/* KPI Metrics Grid (6 metrics) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  
                  {/* KPI 1 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Total Transactions Today
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight">128</span>
                      <span className="text-[11px] font-semibold text-[#008C95]">+14%</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] block mt-0.5">Across all agents</span>
                  </div>

                  {/* KPI 2 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Walk-in Transactions
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-[#005F67] tracking-tight">84</span>
                      <span className="text-[11px] font-semibold text-[#005F67]">65.6%</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] block mt-0.5">Deposits & withdrawals</span>
                  </div>

                  {/* KPI 3 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Pickup / Delivery Requests
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight">22</span>
                      <span className="text-[11px] font-semibold text-[#008C95]">Active</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] block mt-0.5">18 fulfilled • 4 in transit</span>
                  </div>

                  {/* KPI 4 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Active Agents
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight">16</span>
                      <span className="text-[11px] font-semibold text-emerald-600">Online</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] block mt-0.5">6 business locations</span>
                  </div>

                  {/* KPI 5 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Pending Confirmations
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight">5</span>
                      <span className="text-[11px] font-semibold text-amber-600">Queue</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] block mt-0.5">Awaiting completion</span>
                  </div>

                  {/* KPI 6 */}
                  <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-3.5 sm:p-4">
                    <span className="text-xs font-medium text-[#525D64] block mb-1">
                      Available Liquidity Status
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-tight">Stable</span>
                    </div>
                    <span className="text-[11px] text-[#525D64] flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Floats balanced
                    </span>
                  </div>

                </div>

                {/* 2 Modular Preview Widgets (Recent Transactions & Agent Activity) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-1">
                  
                  {/* Widget 1: Recent Transactions (sm:col-span-7) */}
                  <div className="sm:col-span-7 bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#090D10] uppercase tracking-wider flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#008C95]" />
                        <span>Recent Transactions</span>
                      </h4>
                      <span className="text-[11px] font-medium text-[#008C95]">Real-time feed</span>
                    </div>

                    <div className="space-y-2">
                      {/* Tx 1 */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1 rounded bg-emerald-100 text-emerald-700">
                            <ArrowDownLeft className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-[#090D10]">Deposit</span>
                            <span className="text-[#525D64] text-[11px] block">Airtel</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#005F67]">ZMW 500</span>
                          <span className="text-[11px] text-[#525D64] block">09:40 AM</span>
                        </div>
                      </div>

                      {/* Tx 2 */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1 rounded bg-amber-100 text-amber-700">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-[#090D10]">Withdrawal</span>
                            <span className="text-[#525D64] text-[11px] block">MTN</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#090D10]">ZMW 300</span>
                          <span className="text-[11px] text-[#525D64] block">10:15 AM</span>
                        </div>
                      </div>

                      {/* Tx 3 */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1 rounded bg-emerald-100 text-emerald-700">
                            <ArrowDownLeft className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-[#090D10]">Deposit</span>
                            <span className="text-[#525D64] text-[11px] block">Zanaco</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#005F67]">ZMW 1,200</span>
                          <span className="text-[11px] text-[#525D64] block">10:42 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Widget 2: Agent Activity Overview (sm:col-span-5) */}
                  <div className="sm:col-span-5 bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#090D10] uppercase tracking-wider flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#008C95]" />
                        <span>Agent Activity Overview</span>
                      </h4>
                      <span className="text-[11px] font-medium text-emerald-600">3 Online</span>
                    </div>

                    <div className="space-y-2">
                      {/* Agent 1 */}
                      <div className="p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-[#090D10]">Emmanuel Banda</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        </div>
                        <span className="text-[11px] text-[#525D64]">Town Centre Branch</span>
                      </div>

                      {/* Agent 2 */}
                      <div className="p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-[#090D10]">Mutale Bwalya</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#005F67] bg-[#E5F5F5] px-1.5 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                            Serving Walk-in Customer
                          </span>
                        </div>
                        <span className="text-[11px] text-[#525D64]">Market Hub Store</span>
                      </div>

                      {/* Agent 3 */}
                      <div className="p-2 rounded-lg bg-[#FCFCFB] border border-[#E1ECEC] text-xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-[#090D10]">Chileshe Mwamba</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Available
                          </span>
                        </div>
                        <span className="text-[11px] text-[#525D64]">Station Kiosk</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Widget 3: Transaction Mix / Summary */}
                <div className="bg-[#F7FAFA] border border-[#E1ECEC] rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#090D10] uppercase tracking-wider">
                      Transaction Mix / Summary
                    </span>
                    <span className="text-[11px] text-[#525D64]">100% recorded electronically</span>
                  </div>

                  {/* Multi-segment Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-[#D9E4E4] overflow-hidden flex">
                    <div className="h-full bg-[#005F67]" style={{ width: '58%' }} title="Deposits (58%)" />
                    <div className="h-full bg-[#008C95]" style={{ width: '26%' }} title="Withdrawals (26%)" />
                    <div className="h-full bg-[#30383D]" style={{ width: '11%' }} title="Pickup Requests (11%)" />
                    <div className="h-full bg-[#8A98A0]" style={{ width: '5%' }} title="Delivery Requests (5%)" />
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#005F67]" />
                      <span className="text-[#30383D]">Deposits (58%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#008C95]" />
                      <span className="text-[#30383D]">Withdrawals (26%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#30383D]" />
                      <span className="text-[#30383D]">Pickup Requests (11%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8A98A0]" />
                      <span className="text-[#30383D]">Delivery Requests (5%)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* SUPPORTING HORIZONTAL HIGHLIGHT BAND / CALLOUT CARD */}
          <div className="bg-[#005F67] text-[#FCFCFB] rounded-2xl p-8 sm:p-10 lg:p-12 shadow-md relative overflow-hidden">
            {/* Ambient Graphic Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#008C95]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E5F5F5]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFCFB]/15 border border-[#FCFCFB]/20 text-[#FCFCFB] text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>TOTAL OPERATIONAL VISIBILITY</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#FCFCFB] tracking-tight leading-tight">
                  Real-time visibility for every part of the business
                </h3>
                
                <p className="text-base sm:text-lg text-[#FCFCFB]/90 leading-relaxed font-normal">
                  TellerBud gives Business Owners visibility not only into customer service requests, but also into normal Agent operations, transaction activity, liquidity flow and day-to-day performance across their locations.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#00474D]/60 border border-[#FCFCFB]/15 rounded-xl p-5 sm:p-6 backdrop-blur-xs">
                <h4 className="text-xs font-bold text-[#E5F5F5] uppercase tracking-wider mb-3">
                  CORE VISIBILITY CAPABILITIES
                </h4>
                <ul className="space-y-2.5 text-sm text-[#FCFCFB]/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] bg-[#FCFCFB] rounded-full shrink-0 mt-0.5" />
                    <span>Monitor walk-in deposits and withdrawals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] bg-[#FCFCFB] rounded-full shrink-0 mt-0.5" />
                    <span>View Agent activity across locations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] bg-[#FCFCFB] rounded-full shrink-0 mt-0.5" />
                    <span>Track transaction trends and operational performance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] bg-[#FCFCFB] rounded-full shrink-0 mt-0.5" />
                    <span>Improve oversight with recorded, traceable activity</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 5. HOW PARTICIPATION WORKS                         */}
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
