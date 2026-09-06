import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import TellerBudLogo from './TellerBudLogo';
import { PageId } from '../types';
import { SITE_CONFIG } from '../config/site';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onGetTellerBud: () => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-none bg-[#FCFCFB] border-t border-[#DDE7E7] text-[#182026]">
      {/* Upper Footer Area — Full Width with 48–56px top padding and 40–48px bottom padding */}
      <div className="w-full max-w-none px-5 sm:px-10 md:px-12 lg:px-20 xl:px-24 pt-12 lg:pt-14 pb-10 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8">
          
          {/* COLUMN 1 — Brand (lg:col-span-3 — sits closer to the left side) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-xl"
              aria-label="TellerBud Home"
            >
              <TellerBudLogo size="lg" />
            </a>

            <p className="text-[14px] sm:text-[15px] text-[#182026]/80 leading-relaxed max-w-sm font-normal pt-0.5">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* COLUMN 2 — Quick Links (lg:col-span-2 — evenly distributed) */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3.5">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-[14px] sm:text-[15px] font-medium">
              {[
                { id: 'home', label: 'Home' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageId)}
                    className="text-[#182026]/80 hover:text-[#008C95] transition-colors cursor-pointer text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — Core Services (lg:col-span-2 — evenly distributed) */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3.5">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              CORE SERVICES
            </h4>
            <ul className="space-y-2.5 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Pickup Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Delivery Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Real-Time Transaction Capture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Agent-to-Agent Liquidity Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Confirmed Agent Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Secure Completion
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — For Business Owners (lg:col-span-2 — evenly distributed) */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-3.5">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              BUSINESS OWNERS
            </h4>
            <ul className="space-y-2.5 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left cursor-pointer"
                >
                  Agent Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left font-normal cursor-pointer"
                >
                  Store Participation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left font-normal cursor-pointer"
                >
                  Local Community Access
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 5 — Contact Us (lg:col-span-3 — widened so email & phone stay on 1 single line) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 space-y-3.5 lg:pl-3 xl:pl-5">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@tellerbud.com"
                  className="whitespace-nowrap hover:text-[#008C95] transition-colors font-normal"
                >
                  info@tellerbud.com
                </a>
              </li>

              {/* Phone / WhatsApp */}
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0" title="Phone / WhatsApp">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <a
                    href="tel:+16163349100"
                    className="whitespace-nowrap hover:text-[#008C95] transition-colors font-normal"
                    title="Call +1 616 334 9100"
                  >
                    +1 616 334 9100
                  </a>
                  <a
                    href="https://wa.me/16163349100"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                    className="inline-flex items-center justify-center p-1 rounded-md bg-[#DFF4F3] hover:bg-[#008C95] text-[#008C95] hover:text-[#FCFCFB] transition-colors shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="whitespace-nowrap">Lusaka, Zambia</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar (Copyright, Powered by Cinitec & Legal Row) — Full Width */}
      <div className="w-full max-w-none bg-[#FCFCFB] border-t border-[#DDE7E7] py-4 sm:py-4.5">
        <div className="w-full max-w-none px-5 sm:px-10 md:px-12 lg:px-20 xl:px-24 grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-xs font-semibold text-[#182026]/70">
          {/* Left: Copyright */}
          <div className="text-center md:text-left order-1">
            © {currentYear} TellerBud. All rights reserved.
          </div>

          {/* Center: Powered by Cinitec & Group Affiliation */}
          <div className="text-center order-2 flex flex-col items-center justify-center my-1 md:my-0">
            <span className="font-bold text-[#090D10] text-[14px] sm:text-[15px] tracking-normal block leading-tight">
              Powered by Cinitec
            </span>
            <span className="italic font-normal text-[#30383D] text-[12px] sm:text-[13px] tracking-normal block mt-1.5 leading-snug">
              A Member of The Cinerea Investments Group
            </span>
          </div>

          {/* Right: Legal links */}
          <div className="flex items-center justify-center md:justify-end space-x-6 order-3">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#008C95] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#DDE7E7]">•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#008C95] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Dedicated Developer Credit Bar — Preserved Exactly as Approved */}
      <div className="w-full max-w-none bg-[#090D10] border-t border-[#008C95]/40 py-5 sm:py-5.5 relative overflow-hidden">
        <div className="w-full max-w-none px-5 sm:px-10 md:px-12 lg:px-20 xl:px-24 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
            <span className="hidden sm:inline-block w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#008C95]/60 to-[#008C95] shadow-[0_0_6px_rgba(0,140,149,0.8)]" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
              <span className="text-[13px] sm:text-[14px] font-medium text-[#FCFCFB]/90 tracking-wide">
                Designed &amp; Developed by
              </span>
              <span className="asco-glow-text text-[15px] sm:text-[16px] font-bold uppercase tracking-widest">
                ASCO GLOBAL SOLUTIONS
              </span>
            </div>
            <span className="hidden sm:inline-block w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-[#008C95]/60 to-[#008C95] shadow-[0_0_6px_rgba(0,140,149,0.8)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
