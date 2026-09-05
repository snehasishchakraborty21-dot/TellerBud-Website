import { useState } from 'react';
import {
  ShieldCheck,
  MapPin,
  Truck,
  Globe2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const FALLBACK_ABOUT_IMG = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80';

export default function HowItWorks() {
  const [imgSrc, setImgSrc] = useState('/assets/about-community.jpg');

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#FCFCFB] py-20 sm:py-28 lg:py-32 border-b border-[#DDE7E7]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF4F3] border border-[#008C95]/20 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#008C95]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#008C95] uppercase">
              ABOUT TELLERBUD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-extrabold text-[#090D10] tracking-tight leading-[1.10] mb-6">
            Bringing mobile money convenience closer to African communities.
          </h2>

          <p className="text-lg sm:text-xl lg:text-[22px] text-[#182026]/80 font-normal leading-relaxed max-w-3xl">
            TellerBud is a technology-enabled platform designed to make mobile money services more accessible and convenient by connecting Customers with confirmed Agents for Pickup and Delivery requests.
          </p>
        </div>

        {/* Corporate Narrative Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch mb-20 lg:mb-28">
          
          {/* Left Column: Art-Directed Editorial Image Frame (~45% desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-[32px] overflow-hidden border border-[#DDE7E7] bg-[#FFFFFF] shadow-md group h-full min-h-[420px] sm:min-h-[500px]">
              <img
                src={imgSrc}
                onError={() => setImgSrc(FALLBACK_ABOUT_IMG)}
                alt="African community member interacting naturally in a mobile money context"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D10]/85 via-[#090D10]/20 to-transparent" />
              
              {/* Integrated Editorial Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md p-5 rounded-2xl border border-[#DDE7E7] shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#008C95] text-[#FCFCFB] flex items-center justify-center shrink-0 font-extrabold text-sm shadow-2xs">
                    TB
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#090D10] tracking-tight">
                      Community-Centered Platform
                    </h4>
                    <p className="text-xs text-[#182026]/70 mt-0.5">
                      Connecting local people & verified agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Copy & Editorial Benefit List (~55% desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#008C95] uppercase block mb-3">
                OUR PURPOSE
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#090D10] tracking-tight leading-tight mb-5">
                Convenience built around people.
              </h3>
              <p className="text-base sm:text-lg text-[#182026]/85 leading-relaxed font-normal">
                TellerBud aims to reduce the inconvenience of locating suitable mobile money service points by supporting Pickup and Delivery requests through confirmed Agents. By bridging the physical gap between customers and service points, the platform enables seamless mobile financial access suited to daily routines.
              </p>
            </div>

            {/* Subtle Horizontal Divider */}
            <div className="w-full h-px bg-[#DDE7E7]" />

            {/* Three Benefit Highlights (Un-boxed, high-end editorial list layout) */}
            <div className="space-y-6">
              
              {/* Highlight 1 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="p-3 rounded-2xl bg-[#DFF4F3] border border-[#008C95]/20 text-[#008C95] shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#090D10] tracking-tight">
                    Greater Convenience
                  </h4>
                  <p className="text-sm sm:text-base text-[#182026]/80 mt-1 leading-relaxed">
                    Customers can request mobile money services based on their preferred location and service mode.
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="p-3 rounded-2xl bg-[#DFF4F3] border border-[#008C95]/20 text-[#008C95] shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#090D10] tracking-tight">
                    Improved Accessibility
                  </h4>
                  <p className="text-sm sm:text-base text-[#182026]/80 mt-1 leading-relaxed">
                    Pickup and Delivery options can help bring services closer to the people who need them.
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="p-3 rounded-2xl bg-[#DFF4F3] border border-[#008C95]/20 text-[#008C95] shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#008C95] group-hover:text-[#FCFCFB] transition-colors">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#090D10] tracking-tight">
                    Trusted Completion
                  </h4>
                  <p className="text-sm sm:text-base text-[#182026]/80 mt-1 leading-relaxed">
                    Customer and Agent confirmations help create a clear and accountable completion process.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Africa-Focused Statement Panel (Redesigned into a sleek brand statement banner) */}
        <div className="relative bg-gradient-to-br from-[#DFF4F3]/70 via-[#FCFCFB] to-[#DFF4F3]/40 border border-[#008C95]/20 rounded-[32px] p-8 sm:p-12 lg:p-16 text-left sm:text-center overflow-hidden shadow-2xs">
          {/* Subtle background decorative shapes */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#008C95]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#DFF4F3] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#FFFFFF] border border-[#008C95]/20 text-[#008C95] shadow-2xs mb-2">
              <Globe2 className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#090D10] tracking-tight">
              Built for Africa’s mobile-first communities.
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-[#182026]/85 leading-relaxed font-normal">
              TellerBud is designed around the importance of mobile money in everyday life, local commerce and community access.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

