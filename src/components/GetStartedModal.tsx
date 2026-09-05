import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_APP_DOWNLOAD_URL } from '../config/site';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function GetStartedModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D10]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#DDE7E7] p-6 sm:p-8 text-left animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#090D10] rounded-xl hover:bg-[#DFF4F3]/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#DFF4F3] text-[#008C95] border border-[#008C95]/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#008C95] tracking-wider uppercase">
              TellerBud
            </span>
            <h3 className="text-xl font-semibold text-[#090D10] leading-tight">
              Get TellerBud Service
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#182026] leading-relaxed mb-5 font-normal">
          TellerBud is expanding to bring mobile money convenience closer to you. Request secure pickup or delivery from confirmed local agents.
        </p>

        <div className="space-y-3 mb-6 bg-[#FCFCFB] p-4 rounded-xl border border-[#DDE7E7]">
          <div className="flex items-start gap-2.5 text-xs font-medium text-[#182026]">
            <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
            <span>Convenient Pickup & Delivery Options</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs font-medium text-[#182026]">
            <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
            <span>Agent Details Provided Upon Acceptance</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs font-medium text-[#182026]">
            <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
            <span>End-to-End Dual Confirmation Security</span>
          </div>
        </div>

        <a
          href={CUSTOMER_APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full py-3.5 px-4 text-sm font-semibold text-[#FCFCFB] bg-[#008C95] hover:bg-[#006B73] active:bg-[#005258] rounded-xl transition-all shadow-md cursor-pointer block text-center"
        >
          Download Customer App
        </a>
      </div>
    </div>
  );
}

