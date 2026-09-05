import { ArrowLeftRight, UserCheck, ShieldCheck, LucideIcon } from 'lucide-react';
import { TrustHighlight } from '../types';

const HIGHLIGHTS: (TrustHighlight & { icon: LucideIcon })[] = [
  {
    id: 'pickup-delivery',
    title: 'Pickup or Delivery',
    description: 'Choose how you want to receive service.',
    iconName: 'ArrowLeftRight',
    icon: ArrowLeftRight,
  },
  {
    id: 'confirmed-agents',
    title: 'Confirmed Agents',
    description: 'Agent details appear after acceptance.',
    iconName: 'UserCheck',
    icon: UserCheck,
  },
  {
    id: 'secure-completion',
    title: 'Secure Completion',
    description: 'Both Customer and Agent confirm completion.',
    iconName: 'ShieldCheck',
    icon: ShieldCheck,
  },
];

export default function TrustHighlights() {
  return (
    <section className="w-full bg-[#FCFCFB] border-b border-[#DDE7E7] py-8 sm:py-10 lg:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="bg-[#DFF4F3]/30 border border-[#008C95]/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#DDE7E7] items-center">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 sm:gap-5 ${
                    index === 0 ? 'md:pr-8 lg:pr-10' : index === 1 ? 'md:px-8 lg:px-10' : 'md:pl-8 lg:pl-10'
                  }`}
                >
                  <div className="p-3 bg-[#FFFFFF] border border-[#008C95]/20 rounded-2xl shrink-0 text-[#008C95] shadow-2xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#090D10] tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#182026]/80 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


