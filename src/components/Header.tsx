import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import TellerBudLogo from './TellerBudLogo';
import { LOGIN_URL } from '../config/site';

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

  const handleLoginClick = () => {
    if (LOGIN_URL && LOGIN_URL.trim() !== '') {
      window.location.href = LOGIN_URL;
    } else {
      // Kept ready for the next login-flow implementation rather than linking to an unrelated page
      console.info('[TellerBud] Login clicked. LOGIN_URL is ready for configuration in src/config/site.ts.');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-none shadow-xs">
      {/* Slim oceanic-green top accent bar */}
      <div className="w-full h-1 bg-[#008C95]" />

      <div
        className={`w-full max-w-none transition-all duration-300 flex items-center ${
          isScrolled
            ? 'bg-[#FCFCFB]/95 backdrop-blur-md border-b border-[#DDE7E7] py-2 lg:py-2.5 min-h-[66px] sm:min-h-[76px] lg:min-h-[86px]'
            : 'bg-[#FCFCFB] border-b border-[#DDE7E7]/70 py-2.5 lg:py-3 min-h-[70px] sm:min-h-[80px] lg:min-h-[90px]'
        }`}
      >
        {/* Full-width inner content container: 100% width with responsive horizontal padding */}
        <div className="w-full max-w-none px-5 sm:px-6 md:px-8 lg:px-14 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between gap-4 lg:gap-6 xl:gap-8 w-full">
            
            {/* Left side: Official TellerBud Branding (sit closer to left side) */}
            <div className="flex items-center shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-2xl p-0.5 -ml-0.5 transition-all flex items-center"
                aria-label="TellerBud Home"
              >
                <TellerBudLogo size="md" />
              </a>
            </div>

            {/* Center: Desktop Navigation Bar with clean uncompressed distribution */}
            <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2.5 2xl:space-x-3.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 xl:px-4 2xl:px-4.5 py-2 text-sm xl:text-[15px] font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
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

            {/* Right side: [ Login ]   [ Get TellerBud ] (sit closer to right side) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-3.5 shrink-0">
              <button
                type="button"
                onClick={handleLoginClick}
                className="px-5 xl:px-6 py-2.5 bg-[#FCFCFB] hover:bg-[#DFF4F3] text-[#090D10] text-sm font-semibold rounded-full border border-[#008C95] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2 active:scale-[0.98] inline-flex items-center justify-center whitespace-nowrap min-h-[42px]"
              >
                Login
              </button>

              <button
                type="button"
                onClick={onGetTellerBud}
                className="px-6 xl:px-7 py-2.5 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-sm font-semibold rounded-full transition-all shadow-sm shadow-[#008C95]/20 hover:shadow-md hover:shadow-[#008C95]/30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2 active:scale-[0.98] inline-flex items-center justify-center whitespace-nowrap min-h-[42px]"
              >
                Get TellerBud
              </button>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleLoginClick}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#090D10] bg-[#FCFCFB] hover:bg-[#DFF4F3] border border-[#008C95] rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Login
              </button>

              <button
                type="button"
                onClick={onGetTellerBud}
                className="px-4 py-2 text-xs font-semibold text-[#FCFCFB] bg-[#008C95] hover:bg-[#005F67] rounded-full shadow-xs transition-colors cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
              >
                Get TellerBud
              </button>

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

          <div className="pt-4 border-t border-[#DDE7E7] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLoginClick();
              }}
              className="w-full flex items-center justify-center min-h-[44px] px-5 py-3 text-base font-semibold text-[#090D10] bg-[#FCFCFB] hover:bg-[#DFF4F3] border border-[#008C95] rounded-xl transition-colors cursor-pointer"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onGetTellerBud();
              }}
              className="w-full flex items-center justify-center gap-2 min-h-[44px] px-5 py-3.5 text-base font-semibold text-[#FCFCFB] bg-[#008C95] hover:bg-[#005F67] rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <span>Get TellerBud</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}



