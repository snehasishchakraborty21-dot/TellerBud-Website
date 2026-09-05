import { Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="w-full bg-[#FCFCFB] border-t border-[#DDE7E7] text-[#182026]">
      {/* Upper Footer Area */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1 — Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-xl"
            >
              <TellerBudLogo size="lg" />
            </a>

            <p className="text-[14px] sm:text-[15px] text-[#182026]/80 leading-relaxed max-w-sm font-normal pt-1">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* COLUMN 2 — Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] font-medium">
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

          {/* COLUMN 3 — Core Services (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              CORE SERVICES
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left"
                >
                  Pickup Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#008C95] transition-colors text-left"
                >
                  Delivery Requests
                </button>
              </li>
              <li>Confirmed Agent Support</li>
              <li>Secure Completion</li>
            </ul>
          </div>

          {/* COLUMN 4 — For Business Owners (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              BUSINESS OWNERS
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left"
                >
                  Agent Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left font-normal"
                >
                  Store Participation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-business-owners')}
                  className="hover:text-[#008C95] transition-colors text-left font-normal"
                >
                  Local Community Access
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 5 — Contact / Reach Us (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] sm:text-sm font-semibold tracking-wider text-[#008C95] uppercase">
              CONTACT & REACH US
            </h4>
            <ul className="space-y-3.5 text-[14px] sm:text-[15px] font-normal text-[#182026]/80">
              {SITE_CONFIG.contact.email && (
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">{SITE_CONFIG.contact.email}</span>
                </li>
              )}
              {SITE_CONFIG.contact.phone && (
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{SITE_CONFIG.contact.phone}</span>
                </li>
              )}
              {SITE_CONFIG.contact.location && (
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#DFF4F3] text-[#008C95] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{SITE_CONFIG.contact.location}</span>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-[#FCFCFB] border-t border-[#DDE7E7] py-6">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#182026]/70">
          <div>
            © {currentYear} TellerBud. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
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

      {/* Dedicated Developer Credit Bar */}
      <div className="w-full bg-[#090D10] border-t border-[#008C95]/40 py-5 sm:py-6 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-center">
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
