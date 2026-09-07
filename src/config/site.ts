export const CUSTOMER_APK_PATH = '/downloads/TellerBud-Customer.apk';

// Resolve the full public HTTPS download URL dynamically from current domain or custom configuration
export const getCustomerApkUrl = (): string => {
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin;
    return `${origin}${CUSTOMER_APK_PATH}`;
  }
  return `https://tellerbud.com${CUSTOMER_APK_PATH}`;
};

export const CUSTOMER_APK_URL = typeof window !== 'undefined' && window.location
  ? `${window.location.origin}${CUSTOMER_APK_PATH}`
  : `https://tellerbud.com${CUSTOMER_APK_PATH}`;

// Configurable iOS App Store URL (empty until official App Store listing is published)
export const IOS_APP_STORE_URL = '';

// Configurable Login URL (empty until official login portal / web app is configured)
export const LOGIN_URL: string = '';

// Shared configurable social media URLs (empty until official profiles are supplied)
export const FACEBOOK_URL: string = '';
export const INSTAGRAM_URL: string = '';
export const TWITTER_URL: string = '';

// Shared official TellerBud logo asset path
export const TELLERBUD_LOGO_URL = '/assets/TellerBud%20App%20Logo%20-%20Mix.png';

// Configurable Zambian cities for Business Owner sign-up
export const ZAMBIAN_CITIES = [
  'Lusaka',
  'Kitwe',
  'Ndola',
  'Livingstone',
  'Kabwe',
  'Chipata',
  'Solwezi',
  'Chingola',
  'Mufulira',
  'Luanshya',
  'Kasama',
  'Mongu',
] as const;

export const MOBILE_MONEY_PROVIDERS = [
  'Airtel',
  'MTN',
  'Zamtel',
  'FNB',
  'Zanaco',
  'INDO',
] as const;

// Configurable Business Owner sign up submission API endpoint
export const BUSINESS_SIGNUP_API_ENDPOINT = '';

// Development fallback simulation flag (false by default so no fake success is shown)
export const DEV_SIMULATE_BACKEND_SUCCESS = false;

// Maintained for backward-compatibility
export const CUSTOMER_APP_DOWNLOAD_URL = CUSTOMER_APK_PATH;

export const SITE_CONFIG = {
  name: 'TellerBud',
  tagline: '',
  customerAppDownloadUrl: CUSTOMER_APK_URL,
  customerApkPath: CUSTOMER_APK_PATH,
  iosAppStoreUrl: IOS_APP_STORE_URL,
  loginUrl: LOGIN_URL,
  description:
    'TellerBud is designed to make mobile money services more accessible and convenient through secure Pickup and Delivery support.',
  contact: {
    email: 'info@tellerbud.com',
    location: 'Lusaka, Zambia',
    phone: '+1 616 334 9100',
    phoneRaw: '+16163349100',
    whatsappUrl: 'https://wa.me/16163349100',
  },
  social: {
    facebook: FACEBOOK_URL,
    instagram: INSTAGRAM_URL,
    twitter: TWITTER_URL,
  },
};
