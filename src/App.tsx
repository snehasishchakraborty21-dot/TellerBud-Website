import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';
import { PageId } from './types';

// Page Shell Components
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import ForBusinessOwnersPage from './pages/ForBusinessOwnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CUSTOMER_APP_DOWNLOAD_URL } from './config/site';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [modalOpen, setModalOpen] = useState(false);

  const handleGetTellerBud = () => {
    window.open(CUSTOMER_APP_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#FCFCFB] text-[#182026] flex flex-col font-sans selection:bg-[#E5F5F5] selection:text-[#008C95]">
      {/* 1. Shared Global Corporate Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onGetTellerBud={handleGetTellerBud}
      />

      {/* 2. Main Page Router / Shell Renderer */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'how-it-works' && (
          <HowItWorksPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'for-business-owners' && (
          <ForBusinessOwnersPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Shared Corporate Full-Width Footer */}
      <Footer
        activePage={activePage}
        onNavigate={handleNavigate}
        onGetTellerBud={handleGetTellerBud}
      />

      {/* 4. Shared Primary CTA Dialog Modal */}
      <GetStartedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
