import { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import {
  X,
  Smartphone,
  Store,
  ArrowRight,
  ArrowLeft,
  Download,
  CheckCircle2,
  Apple,
  QrCode as QrIcon,
  Check,
  AlertCircle,
  Loader2,
  Search,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import QRCode from 'qrcode';
import { PageId } from '../types';
import {
  CUSTOMER_APK_PATH,
  getCustomerApkUrl,
  IOS_APP_STORE_URL,
  ZAMBIAN_CITIES,
  MOBILE_MONEY_PROVIDERS,
  BUSINESS_SIGNUP_API_ENDPOINT,
  DEV_SIMULATE_BACKEND_SUCCESS
} from '../config/site';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

type DeviceType = 'android' | 'ios' | 'desktop';
type ModalView = 'selection' | 'customer' | 'business';

interface FormErrors {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  cities?: string;
  cityAddresses?: Record<string, string>;
  numberOfAgents?: string;
  providers?: string;
}

export default function GetStartedModal({ isOpen, onClose }: ModalProps) {
  const [view, setView] = useState<ModalView>('selection');
  const [detectedDevice, setDetectedDevice] = useState<DeviceType>('desktop');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [, setDownloadStarted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Business Owner Sign Up Form State
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  // City-specific addresses: map from city name to its address
  const [cityAddresses, setCityAddresses] = useState<Record<string, string>>({});
  const [numberOfAgents, setNumberOfAgents] = useState<string>('1');
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // City Search & Multi-Select Dropdown State
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  // Validation & Submission States
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper to detect device accurately
  const getDevice = (): DeviceType => {
    if (typeof window === 'undefined') return 'desktop';
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';

    // iOS detection (iPhone, iPad, iPod, or iPadOS with desktop Safari UA)
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) return 'ios';

    // Android device detection
    const isAndroid = /Android/i.test(ua);
    if (isAndroid) return 'android';

    return 'desktop';
  };

  // Trigger file download programmatically
  const triggerApkDownload = useCallback(() => {
    if (typeof window === 'undefined') return;
    const link = document.createElement('a');
    link.href = CUSTOMER_APK_PATH;
    link.setAttribute('download', 'TellerBud-Customer.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStarted(true);
  }, []);

  // Generate QR Code from full public HTTPS URL
  useEffect(() => {
    if (!isOpen) return;

    const fullPublicApkUrl = getCustomerApkUrl();
    QRCode.toDataURL(fullPublicApkUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: '#090D10',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    })
      .then((url: string) => {
        setQrCodeDataUrl(url);
      })
      .catch((err: unknown) => {
        console.error('Failed to generate QR code:', err);
      });
  }, [isOpen]);

  // Handle modal lifecycle & body scroll lock
  useEffect(() => {
    if (isOpen) {
      setView('selection');
      setDownloadStarted(false);
      setSubmitError(null);
      setIsSubmitted(false);
      setIsSubmitting(false);

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      // Clear form state ONLY after modal is closed
      const timer = setTimeout(() => {
        setFullName('');
        setBusinessName('');
        setEmail('');
        setPhone('');
        setSelectedCities([]);
        setCityAddresses({});
        setNumberOfAgents('1');
        setSelectedProviders([]);
        setMessage('');
        setFormErrors({});
        setSubmitError(null);
        setIsSubmitted(false);
        setIsSubmitting(false);
        setIsCityDropdownOpen(false);
        setCitySearchQuery('');
        setView('selection');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isCityDropdownOpen) {
          setIsCityDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isCityDropdownOpen]);

  // Handle click outside city dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(e.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
    };

    if (isCityDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCityDropdownOpen]);

  // Handle selecting "Customer"
  const handleSelectCustomer = () => {
    const device = getDevice();
    setDetectedDevice(device);
    setView('customer');

    if (device === 'android') {
      triggerApkDownload();
    }
  };

  // Handle selecting "Business Owner" -> Open sign-up form inside modal
  const handleSelectBusinessOwner = () => {
    setSubmitError(null);
    setFormErrors({});
    setView('business');
  };

  // Safe city removal to avoid accidental data loss
  const handleRemoveCitySafely = (city: string): boolean => {
    const currentAddress = (cityAddresses[city] || '').trim();
    if (currentAddress.length > 0) {
      const confirmRemove = window.confirm(
        `Remove "${city}"? The address entered for ${city} will also be removed.`
      );
      if (!confirmRemove) {
        return false;
      }
    }

    // Remove city
    setSelectedCities((prev) => {
      const next = prev.filter((c) => c !== city);
      if (next.length === 0) {
        setFormErrors((curr) => ({
          ...curr,
          cities: 'Please select at least one operating city.'
        }));
      }
      return next;
    });

    // Remove city address
    setCityAddresses((prev) => {
      const next = { ...prev };
      delete next[city];
      return next;
    });

    // Clear validation error for this city if any
    if (formErrors.cityAddresses?.[city]) {
      setFormErrors((prev) => {
        const nextCityErrors = { ...prev.cityAddresses };
        delete nextCityErrors[city];
        return {
          ...prev,
          cityAddresses: Object.keys(nextCityErrors).length > 0 ? nextCityErrors : undefined
        };
      });
    }

    return true;
  };

  // Toggle city in multi-select
  const toggleCity = (city: string) => {
    if (selectedCities.includes(city)) {
      handleRemoveCitySafely(city);
    } else {
      setSelectedCities((prev) => [...prev, city]);
      if (formErrors.cities) {
        setFormErrors((curr) => ({ ...curr, cities: undefined }));
      }
    }
  };

  // Remove city chip
  const removeCity = (cityToRemove: string) => {
    handleRemoveCitySafely(cityToRemove);
  };

  // Add custom unlisted city
  const addCustomCity = () => {
    const trimmed = citySearchQuery.trim();
    if (!trimmed) return;
    if (!selectedCities.includes(trimmed)) {
      setSelectedCities((prev) => [...prev, trimmed]);
      if (formErrors.cities) {
        setFormErrors((curr) => ({ ...curr, cities: undefined }));
      }
    }
    setCitySearchQuery('');
  };

  // Filter cities by search term
  const filteredCities = ZAMBIAN_CITIES.filter((city) =>
    city.toLowerCase().includes(citySearchQuery.toLowerCase().trim())
  );

  const isExactMatch = ZAMBIAN_CITIES.some(
    (c) => c.toLowerCase() === citySearchQuery.trim().toLowerCase()
  );

  // Number of Agents increment / decrement controls
  const handleDecrementAgents = () => {
    const current = parseInt(numberOfAgents, 10);
    if (!isNaN(current) && current > 1) {
      const nextVal = String(current - 1);
      setNumberOfAgents(nextVal);
      if (formErrors.numberOfAgents) {
        setFormErrors((prev) => ({ ...prev, numberOfAgents: undefined }));
      }
    }
  };

  const handleIncrementAgents = () => {
    const current = parseInt(numberOfAgents, 10);
    const nextVal = String(isNaN(current) ? 1 : current + 1);
    setNumberOfAgents(nextVal);
    if (formErrors.numberOfAgents) {
      setFormErrors((prev) => ({ ...prev, numberOfAgents: undefined }));
    }
  };

  const handleAgentsInputChange = (val: string) => {
    // Only whole positive digits
    const cleaned = val.replace(/[^0-9]/g, '');
    setNumberOfAgents(cleaned);
    if (formErrors.numberOfAgents && cleaned && parseInt(cleaned, 10) >= 1) {
      setFormErrors((prev) => ({ ...prev, numberOfAgents: undefined }));
    }
  };

  // Toggle mobile money provider multi-select
  const toggleProvider = (provider: string) => {
    setSelectedProviders((prev) => {
      const next = prev.includes(provider)
        ? prev.filter((p) => p !== provider)
        : [...prev, provider];
      if (next.length > 0 && formErrors.providers) {
        setFormErrors((curr) => ({ ...curr, providers: undefined }));
      }
      return next;
    });
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!businessName.trim()) {
      errors.businessName = 'Business Name is required.';
    }

    if (!email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!phone.trim()) {
      errors.phone = 'Phone Number is required.';
    }

    if (selectedCities.length === 0) {
      errors.cities = 'Please select at least one operating city.';
    }

    const agentsCount = parseInt(numberOfAgents, 10);
    if (!numberOfAgents.trim() || isNaN(agentsCount) || agentsCount < 1) {
      errors.numberOfAgents = 'Please enter a valid number of Agents (minimum 1).';
    }

    // Require one complete address for EVERY selected city
    const cityAddressErrors: Record<string, string> = {};
    for (const city of selectedCities) {
      const addr = (cityAddresses[city] || '').trim();
      if (!addr) {
        cityAddressErrors[city] = `Please enter the business address for ${city}.`;
      }
    }
    if (Object.keys(cityAddressErrors).length > 0) {
      errors.cityAddresses = cityAddressErrors;
    }

    if (selectedProviders.length === 0) {
      errors.providers = 'Please select at least one Mobile Money Provider.';
    }

    setFormErrors(errors);
    const hasTopErrors = Object.keys(errors).filter((k) => k !== 'cityAddresses').length > 0;
    const hasCityErrors = Object.keys(cityAddressErrors).length > 0;
    return !hasTopErrors && !hasCityErrors;
  };

  // Handle Business Owner Sign Up submission
  const handleSubmitBusinessForm = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let submissionSuccess = false;

      // Cleanly structure locations mapping each city to its address
      const locationsPayload = selectedCities.map((city) => ({
        city,
        address: (cityAddresses[city] || '').trim()
      }));

      const submissionPayload = {
        fullName: fullName.trim(),
        businessName: businessName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        numberOfAgents: parseInt(numberOfAgents, 10),
        locations: locationsPayload,
        operatingCities: selectedCities,
        providers: selectedProviders,
        message: message.trim(),
        submittedAt: new Date().toISOString()
      };

      // Backend submission rule:
      // If a backend endpoint is configured, submit to it.
      // If DEV_SIMULATE_BACKEND_SUCCESS is explicitly enabled for testing, simulate success.
      // Otherwise, adhere strictly to the rule: do not fake a successful submission without a configured backend.
      if (DEV_SIMULATE_BACKEND_SUCCESS) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        submissionSuccess = true;
      } else if (BUSINESS_SIGNUP_API_ENDPOINT) {
        const response = await fetch(BUSINESS_SIGNUP_API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload)
        });

        if (!response.ok) {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
        submissionSuccess = true;
      } else {
        // Development fallback in code (not visible client-facing text):
        // No backend endpoint configured yet. Do not fake a successful submission.
        console.info(
          '[TellerBud Integration] Business Owner sign up submission payload ready:',
          submissionPayload,
          '\nConfigure BUSINESS_SIGNUP_API_ENDPOINT in src/config/site.ts to integrate your live backend endpoint.'
        );
        // Throw error to trigger failed submission state without faking success
        throw new Error('BACKEND_NOT_CONFIGURED');
      }

      if (submissionSuccess) {
        setIsSubmitted(true);
        setSubmitError(null);
      }
    } catch (err: unknown) {
      console.error('[TellerBud] Business Owner submission failed:', err);
      // Keep user's entered form values intact and show standard error message
      setSubmitError('We couldn’t submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090D10]/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tellerbud-modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full ${
          view === 'business' ? 'max-w-2xl' : 'max-w-lg'
        } max-h-[92vh] flex flex-col bg-[#FCFCFB] text-[#182026] rounded-3xl shadow-[0_25px_60px_-15px_rgba(9,13,16,0.3)] border border-[#DDE7E7] text-left animate-in zoom-in-95 duration-200 overflow-hidden`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 text-[#182026]/50 hover:text-[#090D10] rounded-full hover:bg-[#DFF4F3]/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-9 flex-1">
          {/* ========================================================= */}
          {/* VIEW 1: ROLE SELECTION (CUSTOMER vs BUSINESS OWNER)       */}
          {/* ========================================================= */}
          {view === 'selection' && (
            <div>
              {/* Header */}
              <div className="mb-6 sm:mb-8 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF4F3] border border-[#008C95]/20 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#008C95]" />
                  <span className="text-[11px] font-bold tracking-wider text-[#008C95] uppercase">
                    TELLERBUD ACCESS
                  </span>
                </div>
                <h2
                  id="tellerbud-modal-title"
                  className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight leading-tight"
                >
                  Get TellerBud
                </h2>
                <p className="text-sm sm:text-base text-[#182026]/75 mt-1.5 font-normal leading-relaxed">
                  Choose how you would like to use TellerBud.
                </p>
              </div>

              {/* Two Large Options */}
              <div className="space-y-4">
                {/* 1. CUSTOMER OPTION */}
                <button
                  onClick={handleSelectCustomer}
                  className="w-full p-5 sm:p-6 bg-[#FFFFFF] hover:bg-[#DFF4F3]/25 border border-[#DDE7E7] hover:border-[#008C95]/60 rounded-2xl shadow-2xs hover:shadow-md transition-all text-left flex items-start gap-4 sm:gap-5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#DFF4F3] group-hover:bg-[#008C95] text-[#008C95] group-hover:text-[#FCFCFB] border border-[#008C95]/30 flex items-center justify-center shrink-0 transition-colors">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-lg font-bold text-[#090D10] group-hover:text-[#008C95] transition-colors">
                        Customer
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#008C95] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#182026]/75 mt-1 leading-relaxed font-normal">
                      Download the TellerBud Customer Mobile App to request convenient Pickup or Delivery services.
                    </p>
                  </div>
                </button>

                {/* 2. BUSINESS OWNER OPTION */}
                <button
                  onClick={handleSelectBusinessOwner}
                  className="w-full p-5 sm:p-6 bg-[#FFFFFF] hover:bg-[#DFF4F3]/25 border border-[#DDE7E7] hover:border-[#008C95]/60 rounded-2xl shadow-2xs hover:shadow-md transition-all text-left flex items-start gap-4 sm:gap-5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#DFF4F3] group-hover:bg-[#008C95] text-[#008C95] group-hover:text-[#FCFCFB] border border-[#008C95]/30 flex items-center justify-center shrink-0 transition-colors">
                    <Store className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-lg font-bold text-[#090D10] group-hover:text-[#008C95] transition-colors">
                        Business Owner
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#008C95] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#182026]/75 mt-1 leading-relaxed font-normal">
                      Learn how TellerBud supports participating mobile money businesses and Agents.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 2: CUSTOMER DEVICE EXPERIENCES                       */}
          {/* ========================================================= */}
          {view === 'customer' && (
            <div>
              {/* Back Button */}
              <button
                onClick={() => setView('selection')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008C95] hover:text-[#006B73] mb-5 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-md px-1 py-0.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to options</span>
              </button>

              {/* A. ANDROID MOBILE DEVICE */}
              {detectedDevice === 'android' && (
                <div className="text-center py-4 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#DFF4F3] text-[#008C95] border border-[#008C95]/30 flex items-center justify-center mx-auto shadow-xs">
                    <Download className="w-8 h-8 animate-bounce" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#090D10]">
                      Your TellerBud download is starting.
                    </h3>
                    <p className="text-sm text-[#182026]/80 mt-2 max-w-sm mx-auto leading-relaxed">
                      The Customer Mobile App APK is downloading to your Android device. Check your notification bar or downloads folder.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={triggerApkDownload}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      <span>Download again</span>
                      <Download className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-[#182026]/60 mt-2">
                      Use this fallback link in case your browser blocks automatic downloads.
                    </p>
                  </div>
                </div>
              )}

              {/* B. DESKTOP / LAPTOP DEVICE */}
              {detectedDevice === 'desktop' && (
                <div className="text-center space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#090D10] tracking-tight">
                      Download TellerBud on your Android phone
                    </h3>
                    <p className="text-xs sm:text-sm text-[#182026]/80 max-w-md mx-auto leading-relaxed">
                      Scan this QR Code with your phone to download the TellerBud Customer App.
                    </p>
                  </div>

                  {/* QR Code Container (sharp, high contrast, ~200-240px, centered) */}
                  <div className="flex flex-col items-center justify-center py-2">
                    <div className="p-3 bg-[#FFFFFF] rounded-2xl border border-[#DDE7E7] shadow-sm flex items-center justify-center">
                      {qrCodeDataUrl ? (
                        <img
                          src={qrCodeDataUrl}
                          alt="Scan QR code to download TellerBud Customer APK"
                          className="w-[210px] h-[210px] object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-[210px] h-[210px] flex items-center justify-center text-[#008C95] bg-[#DFF4F3]/30 rounded-lg">
                          <QrIcon className="w-12 h-12 animate-pulse" />
                        </div>
                      )}
                    </div>

                    <div className="mt-5 sm:mt-6 mb-2 text-center">
                      <a
                        href={CUSTOMER_APK_PATH}
                        download="TellerBud-Customer.apk"
                        className="group min-h-[44px] inline-flex items-center justify-center gap-2 text-[16px] sm:text-[17px] font-semibold text-[#008C95] hover:text-[#006B73] active:text-[#00484E] underline decoration-[#008C95]/50 hover:decoration-[#006B73] underline-offset-4 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2 rounded-lg px-3 py-2 cursor-pointer"
                      >
                        <span>Download APK directly</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* C. IOS / IPHONE / IPAD DEVICE */}
              {detectedDevice === 'ios' && (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#DFF4F3] text-[#008C95] border border-[#008C95]/30 flex items-center justify-center mx-auto shadow-xs">
                    <Apple className="w-8 h-8 text-[#090D10]" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#090D10] tracking-tight">
                      TellerBud for iOS
                    </h3>
                    <p className="text-sm text-[#182026]/80 leading-relaxed font-normal">
                      The iOS download option will be available here once the official iPhone version is published.
                    </p>
                  </div>

                  {IOS_APP_STORE_URL && (
                    <div className="pt-2">
                      <a
                        href={IOS_APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#090D10] hover:bg-[#182026] text-[#FCFCFB] text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                      >
                        <span>View on App Store</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 3: BUSINESS OWNER SIGN UP FORM & STATES              */}
          {/* ========================================================= */}
          {view === 'business' && (
            <div>
              {/* Back to Options Link */}
              {!isSubmitted && (
                <button
                  type="button"
                  onClick={() => {
                    setSubmitError(null);
                    setFormErrors({});
                    setIsCityDropdownOpen(false);
                    setView('selection');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008C95] hover:text-[#006B73] mb-4 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-md px-1 py-0.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to options</span>
                </button>
              )}

              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#DFF4F3] text-[#008C95] border border-[#008C95]/30 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#090D10] tracking-tight">
                      Request Received
                    </h3>
                    <p className="text-base sm:text-lg text-[#182026] leading-relaxed font-normal">
                      Your request has been submitted. Our team will contact you within 48 hours.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="min-h-[44px] px-8 py-3.5 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-base font-semibold rounded-full shadow-md shadow-[#008C95]/20 hover:shadow-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                /* BUSINESS OWNER SIGN UP FORM */
                <div>
                  {/* Form Heading & Supporting Text */}
                  <div className="mb-6 pr-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF4F3] border border-[#008C95]/20 mb-2.5">
                      <Store className="w-3.5 h-3.5 text-[#008C95]" />
                      <span className="text-[11px] font-bold tracking-wider text-[#008C95] uppercase">
                        BUSINESS ENROLMENT
                      </span>
                    </div>
                    <h2
                      id="tellerbud-modal-title"
                      className="text-2xl sm:text-3xl font-bold text-[#090D10] tracking-tight leading-tight"
                    >
                      Business Owner Sign Up
                    </h2>
                    <p className="text-sm sm:text-base text-[#182026]/75 mt-1.5 font-normal leading-relaxed">
                      Tell us about your business and your interest in joining the TellerBud platform.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <div
                      role="alert"
                      className="mb-6 p-4 rounded-2xl bg-red-50/90 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-in fade-in duration-150"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex-1 font-medium">
                        {submitError}
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmitBusinessForm} noValidate className="space-y-5">
                    {/* ROW 1: Full Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold text-[#090D10] uppercase tracking-wider mb-1.5"
                        >
                          Full Name <span className="text-[#008C95]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (formErrors.fullName) {
                              setFormErrors((prev) => ({ ...prev, fullName: undefined }));
                            }
                          }}
                          placeholder="e.g. Chileshe Mwape"
                          className={`w-full min-h-[44px] px-4 py-2.5 bg-[#FFFFFF] rounded-xl border ${
                            formErrors.fullName
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                              : 'border-[#DDE7E7] focus:border-[#008C95] focus:ring-[#008C95]/20'
                          } text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.fullName && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-xs font-bold text-[#090D10] uppercase tracking-wider mb-1.5"
                        >
                          Business Name <span className="text-[#008C95]">*</span>
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          value={businessName}
                          onChange={(e) => {
                            setBusinessName(e.target.value);
                            if (formErrors.businessName) {
                              setFormErrors((prev) => ({ ...prev, businessName: undefined }));
                            }
                          }}
                          placeholder="e.g. Mwape Telecoms & Mobile Money"
                          className={`w-full min-h-[44px] px-4 py-2.5 bg-[#FFFFFF] rounded-xl border ${
                            formErrors.businessName
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                              : 'border-[#DDE7E7] focus:border-[#008C95] focus:ring-[#008C95]/20'
                          } text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.businessName && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.businessName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ROW 2: Email Address & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold text-[#090D10] uppercase tracking-wider mb-1.5"
                        >
                          Email Address <span className="text-[#008C95]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (formErrors.email) {
                              setFormErrors((prev) => ({ ...prev, email: undefined }));
                            }
                          }}
                          placeholder="name@business.com"
                          className={`w-full min-h-[44px] px-4 py-2.5 bg-[#FFFFFF] rounded-xl border ${
                            formErrors.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                              : 'border-[#DDE7E7] focus:border-[#008C95] focus:ring-[#008C95]/20'
                          } text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold text-[#090D10] uppercase tracking-wider mb-1.5"
                        >
                          Phone Number <span className="text-[#008C95]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (formErrors.phone) {
                              setFormErrors((prev) => ({ ...prev, phone: undefined }));
                            }
                          }}
                          placeholder="+260 97 123 4567"
                          className={`w-full min-h-[44px] px-4 py-2.5 bg-[#FFFFFF] rounded-xl border ${
                            formErrors.phone
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                              : 'border-[#DDE7E7] focus:border-[#008C95] focus:ring-[#008C95]/20'
                          } text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.phone && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ROW 3: Operating City / Cities & Number of Agents */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Operating City / Cities (Multi-select searchable dropdown with chips) */}
                      <div ref={cityDropdownRef} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <label
                            id="cities-label"
                            className="block text-xs font-bold text-[#090D10] uppercase tracking-wider"
                          >
                            Operating City / Cities <span className="text-[#008C95]">*</span>
                          </label>
                        </div>

                        {/* Interactive Trigger Button */}
                        <div
                          role="combobox"
                          aria-expanded={isCityDropdownOpen}
                          aria-haspopup="listbox"
                          aria-labelledby="cities-label"
                          tabIndex={0}
                          onClick={() => setIsCityDropdownOpen((prev) => !prev)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setIsCityDropdownOpen((prev) => !prev);
                            }
                          }}
                          className={`min-h-[44px] w-full px-3 py-2 bg-[#FFFFFF] rounded-xl border cursor-pointer flex flex-wrap items-center gap-1.5 transition-all ${
                            formErrors.cities
                              ? 'border-red-500 focus:ring-red-200'
                              : isCityDropdownOpen
                              ? 'border-[#008C95] ring-2 ring-[#008C95]/20'
                              : 'border-[#DDE7E7] hover:border-[#008C95]/50'
                          } focus:outline-none focus:ring-2 focus:ring-[#008C95]/20`}
                        >
                          {selectedCities.length === 0 ? (
                            <span className="text-sm text-[#182026]/40 px-1 py-0.5 select-none">
                              Select operating cities...
                            </span>
                          ) : (
                            selectedCities.map((city) => (
                              <span
                                key={city}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#DFF4F3] border border-[#008C95]/30 text-xs font-medium text-[#005F67]"
                              >
                                <span>{city}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeCity(city);
                                  }}
                                  className="p-0.5 hover:bg-[#008C95]/20 text-[#005F67] hover:text-[#00383D] rounded-full transition-colors cursor-pointer focus:outline-none"
                                  aria-label={`Remove ${city}`}
                                >
                                  <X className="w-3 h-3 stroke-[2.5]" />
                                </button>
                              </span>
                            ))
                          )}
                          <div className="ml-auto pl-1 self-center text-[#182026]/40">
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isCityDropdownOpen ? 'rotate-180 text-[#008C95]' : ''
                              }`}
                            />
                          </div>
                        </div>

                        {/* Dropdown Menu */}
                        {isCityDropdownOpen && (
                          <div className="absolute left-0 right-0 z-30 mt-1.5 bg-[#FFFFFF] border border-[#DDE7E7] rounded-2xl shadow-xl p-2.5 space-y-2 animate-in fade-in zoom-in-95 duration-150">
                            {/* Search Box */}
                            <div className="relative">
                              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#182026]/40" />
                              <input
                                type="text"
                                value={citySearchQuery}
                                onChange={(e) => setCitySearchQuery(e.target.value)}
                                placeholder="Search Zambian cities..."
                                autoFocus
                                className="w-full pl-9 pr-3 py-2 bg-[#FCFCFB] border border-[#DDE7E7] rounded-xl text-xs sm:text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:border-[#008C95] focus:ring-1 focus:ring-[#008C95]"
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    if (filteredCities.length > 0) {
                                      toggleCity(filteredCities[0]);
                                    } else if (citySearchQuery.trim()) {
                                      addCustomCity();
                                    }
                                  }
                                }}
                              />
                            </div>

                            {/* City Checkbox List */}
                            <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                              {filteredCities.map((city) => {
                                const isChecked = selectedCities.includes(city);
                                return (
                                  <label
                                    key={city}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm cursor-pointer transition-colors ${
                                      isChecked
                                        ? 'bg-[#DFF4F3]/80 text-[#005F67] font-semibold'
                                        : 'hover:bg-[#FCFCFB] text-[#182026]'
                                    }`}
                                  >
                                    <span>{city}</span>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleCity(city)}
                                      className="w-4 h-4 rounded border-[#DDE7E7] text-[#008C95] focus:ring-[#008C95] cursor-pointer accent-[#008C95]"
                                    />
                                  </label>
                                );
                              })}

                              {filteredCities.length === 0 && (
                                <div className="py-2 px-3 text-center space-y-2">
                                  <p className="text-xs text-[#182026]/60">
                                    No default city found matching &ldquo;{citySearchQuery}&rdquo;.
                                  </p>
                                  {citySearchQuery.trim() && !isExactMatch && (
                                    <button
                                      type="button"
                                      onClick={addCustomCity}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#008C95] hover:bg-[#005F67] text-[#FCFCFB] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                                    >
                                      <Plus className="w-3.5 h-3.5" />
                                      <span>Add &ldquo;{citySearchQuery.trim()}&rdquo;</span>
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {formErrors.cities && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.cities}
                          </p>
                        )}
                      </div>

                      {/* Number of Agents (Increment/decrement numeric controls) */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label
                            htmlFor="numberOfAgents"
                            className="block text-xs font-bold text-[#090D10] uppercase tracking-wider"
                          >
                            Number of Agents <span className="text-[#008C95]">*</span>
                          </label>
                        </div>

                        <div className="flex items-center gap-2">
                          <div
                            className={`flex items-center w-full bg-[#FFFFFF] rounded-xl border ${
                              formErrors.numberOfAgents
                                ? 'border-red-500 ring-1 ring-red-200'
                                : 'border-[#DDE7E7] focus-within:border-[#008C95] focus-within:ring-2 focus-within:ring-[#008C95]/20'
                            } overflow-hidden transition-all`}
                          >
                            {/* Decrement Button */}
                            <button
                              type="button"
                              onClick={handleDecrementAgents}
                              disabled={parseInt(numberOfAgents, 10) <= 1}
                              aria-label="Decrease number of agents"
                              className="w-11 min-h-[44px] flex items-center justify-center text-[#182026]/70 hover:text-[#008C95] hover:bg-[#DFF4F3]/50 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer border-r border-[#DDE7E7]"
                            >
                              <Minus className="w-4 h-4" />
                            </button>

                            {/* Numeric Input */}
                            <input
                              id="numberOfAgents"
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              value={numberOfAgents}
                              onChange={(e) => handleAgentsInputChange(e.target.value)}
                              placeholder="e.g. 5"
                              className="flex-1 min-h-[44px] text-center font-semibold text-sm text-[#090D10] bg-transparent focus:outline-none px-2"
                            />

                            {/* Increment Button */}
                            <button
                              type="button"
                              onClick={handleIncrementAgents}
                              aria-label="Increase number of agents"
                              className="w-11 min-h-[44px] flex items-center justify-center text-[#182026]/70 hover:text-[#008C95] hover:bg-[#DFF4F3]/50 transition-colors cursor-pointer border-l border-[#DDE7E7]"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {formErrors.numberOfAgents && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {formErrors.numberOfAgents}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* NEXT SECTION: Business Locations (Dynamic City-Specific Address Fields) */}
                    <div className="pt-2">
                      <div className="mb-2.5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold text-[#090D10] uppercase tracking-wider">
                            Business Locations <span className="text-[#008C95]">*</span>
                          </label>
                          {selectedCities.length > 0 && (
                            <span className="text-[11px] text-[#008C95] font-semibold bg-[#DFF4F3] px-2 py-0.5 rounded-full">
                              {selectedCities.length} {selectedCities.length === 1 ? 'City' : 'Cities'} Selected
                            </span>
                          )}
                        </div>
                      </div>

                      {/* City-Specific Address Fields */}
                      {selectedCities.length === 0 ? (
                        <div className="p-4 rounded-xl bg-[#FCFCFB] border border-dashed border-[#DDE7E7] text-center text-xs text-[#182026]/60">
                          Please select one or more operating cities above to provide business addresses.
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {selectedCities.map((city) => (
                            <div
                              key={city}
                              className="pt-3.5 first:pt-1 border-t first:border-t-0 border-[#DDE7E7]/80 space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <label
                                  htmlFor={`address-${city}`}
                                  className="block text-xs font-bold text-[#090D10] uppercase tracking-wider"
                                >
                                  Business Address — {city} <span className="text-[#008C95]">*</span>
                                </label>
                                <span className="text-[11px] font-semibold text-[#005F67] bg-[#DFF4F3] px-2 py-0.5 rounded-md">
                                  {city}
                                </span>
                              </div>
                              <textarea
                                id={`address-${city}`}
                                rows={2}
                                value={cityAddresses[city] || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setCityAddresses((prev) => ({ ...prev, [city]: val }));
                                  if (formErrors.cityAddresses?.[city]) {
                                    setFormErrors((prev) => {
                                      const nextCityErrors = { ...prev.cityAddresses };
                                      delete nextCityErrors[city];
                                      return {
                                        ...prev,
                                        cityAddresses: Object.keys(nextCityErrors).length > 0 ? nextCityErrors : undefined
                                      };
                                    });
                                  }
                                }}
                                placeholder={`Plot / Building, Street / Road, Area, ${city}`}
                                className={`w-full px-4 py-2.5 bg-[#FFFFFF] rounded-xl border ${
                                  formErrors.cityAddresses?.[city]
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                    : 'border-[#DDE7E7] focus:border-[#008C95] focus:ring-[#008C95]/20'
                                } text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 transition-all resize-y`}
                              />
                              {formErrors.cityAddresses?.[city] && (
                                <p className="text-xs text-red-600 font-medium">
                                  {formErrors.cityAddresses[city]}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* NEXT: Mobile Money Provider(s) (Full Width) */}
                    <div>
                      <div className="mb-2">
                        <label className="block text-xs font-bold text-[#090D10] uppercase tracking-wider">
                          Mobile Money Provider(s) <span className="text-[#008C95]">*</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                        {MOBILE_MONEY_PROVIDERS.map((provider) => {
                          const isSelected = selectedProviders.includes(provider);
                          return (
                            <button
                              key={provider}
                              type="button"
                              onClick={() => toggleProvider(provider)}
                              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#DFF4F3] border-[#008C95] text-[#005F67] font-semibold shadow-2xs'
                                  : 'bg-[#FFFFFF] border-[#DDE7E7] text-[#182026]/80 hover:border-[#008C95]/40 hover:bg-[#FCFCFB]'
                              } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]`}
                            >
                              <span>{provider}</span>
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                                  isSelected
                                    ? 'bg-[#008C95] border-[#008C95] text-white'
                                    : 'border-[#DDE7E7] bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {formErrors.providers && (
                        <p className="text-xs text-red-600 mt-1.5 font-medium">
                          {formErrors.providers}
                        </p>
                      )}
                    </div>

                    {/* NEXT: Message / Additional Information (Optional, Full Width) */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold text-[#090D10] uppercase tracking-wider mb-1.5"
                      >
                        Message / Additional Information <span className="text-[11px] font-normal text-[#182026]/60 lowercase">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Provide any additional details about your store, operating hours or locations..."
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] rounded-xl border border-[#DDE7E7] text-sm text-[#090D10] placeholder-[#182026]/40 focus:outline-none focus:ring-2 focus:ring-[#008C95]/20 focus:border-[#008C95] transition-all resize-y"
                      />
                    </div>

                    {/* NEXT: Submit Request Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 bg-[#008C95] hover:bg-[#005F67] active:bg-[#00484E] text-[#FCFCFB] text-base font-semibold rounded-full transition-all shadow-md shadow-[#008C95]/20 hover:shadow-lg hover:shadow-[#008C95]/30 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] focus-visible:ring-offset-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
