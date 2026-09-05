export type PageId = 'home' | 'how-it-works' | 'services' | 'for-business-owners' | 'about' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
  active?: boolean;
}

export interface TrustHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

