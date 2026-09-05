import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import TellerBudLogo from './TellerBudLogo';
import { CUSTOMER_APP_DOWNLOAD_URL } from '../config/site';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onGetTellerBud: () => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'services', label: 'Services' },
  { id: 'for-business-owners', label: 'For Business Owners' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ activePage, onNavigate, onGetTellerBud }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* Slim oceanic-green top accent bar */}
      <div className="w-full h-1.5 bg-[#008C95]" />

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFCFB]/95 backdrop-blur-md border-b border-[#DDE7E7] py-3 lg:py-4 min-h-[96px] lg:min-h-[108px] flex items-center'
            : 'bg-[#FCFCFB] border-b border-[#DDE7E7]/70 py-4 lg:py-5 min-h-[108px] lg:min-h-[116px] flex items-center'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
            
            {/* Left side: Official TellerBud Branding */}
            <div className="flex items-center shrink-0 max-w-[370px]">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-2xl p-0.5 -ml-0.5 transition-all"
              >
                <TellerBudLogo size="md" />
              </a>
            </div>

            {/* Center: Desktop Navigation Bar */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 xl:px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#008C95] bg-[#DFF4F3] font-semibold shadow-2xs'
                        : 'text-[#182026] hover:text-[#008C95] hover:bg-[#DFF4F3]/40'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right side: Get TellerBud Primary CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href={CUSTOMER_APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-sm shadow-[#008C95]/20 hover:shadow-md hover:shadow-[#008C95]/30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2 active:scale-[0.98] inline-flex items-center justify-center"
              >
                Get TellerBud
              </a>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={CUSTOMER_APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-[#FCFCFB] bg-[#008C95] hover:bg-[#005F67] rounded-full shadow-xs transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Get TellerBud
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#090D10] hover:bg-[#DFF4F3]/60 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DDE7E7] bg-[#FCFCFB]/98 backdrop-blur-lg px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5 mb-5">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-left text-base rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#008C95] bg-[#DFF4F3] font-semibold'
                      : 'text-[#182026] hover:text-[#008C95] hover:bg-[#FCFCFB] font-medium'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#DDE7E7]">
            <a
              href={CUSTOMER_APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-[#FCFCFB] bg-[#008C95] hover:bg-[#005F67] rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <span>Get TellerBud</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



