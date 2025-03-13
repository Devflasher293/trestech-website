import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SettingsPanel from './components/SettingsPanel';
import { AnimatePresence, motion } from 'framer-motion';

// Import translations
import translations from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(localStorage.getItem('cookieConsent') === 'true');
  
  // Theme and language state
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') as 'light' | 'dark' || 'light'
  );
  const [language, setLanguage] = useState<'sv' | 'en'>(
    localStorage.getItem('language') as 'sv' | 'en' || 'sv'
  );

  // Get translations based on current language
  const t = translations[language];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Handle theme change
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  // Handle language change
  const handleLanguageChange = (newLanguage: 'sv' | 'en') => {
    setLanguage(newLanguage);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'}`}>
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? theme === 'dark' 
              ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800' 
              : 'bg-white/90 backdrop-blur-md shadow-lg'
            : theme === 'dark'
              ? 'bg-gray-900 border-b border-gray-800' 
              : 'bg-white shadow-md'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <div className="relative overflow-hidden rounded-md p-1">
                    <img 
                      src="/TrestechPCLOGO.png" 
                      alt="Trestech Logo" 
                      className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <span className={`ml-2 text-xl font-semibold relative ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Trestech
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <NavItem to="/" label={t.nav.home} closeMobileMenu={closeMobileMenu} theme={theme} />
                <NavItem to="/about" label={t.nav.about} closeMobileMenu={closeMobileMenu} theme={theme} />
                <NavItem to="/services" label={t.nav.services} closeMobileMenu={closeMobileMenu} theme={theme} />
                <NavItem to="/contact" label={t.nav.contact} closeMobileMenu={closeMobileMenu} theme={theme} />
                <NavItem to="/faq" label={t.nav.faq} closeMobileMenu={closeMobileMenu} theme={theme} />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-colors duration-300 focus:outline-none ${
                    theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  aria-label={isMenuOpen ? t.aria.closeMenu : t.aria.openMenu}
                  aria-expanded={isMenuOpen}
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 top-3' : 'top-2'
                    }`}></span>
                    <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : 'top-3'
                    }`}></span>
                    <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 top-3' : 'top-4'
                    }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavItem to="/" label={t.nav.home} closeMobileMenu={closeMobileMenu} theme={theme} />
              <MobileNavItem to="/about" label={t.nav.about} closeMobileMenu={closeMobileMenu} theme={theme} />
              <MobileNavItem to="/services" label={t.nav.services} closeMobileMenu={closeMobileMenu} theme={theme} />
              <MobileNavItem to="/contact" label={t.nav.contact} closeMobileMenu={closeMobileMenu} theme={theme} />
              <MobileNavItem to="/faq" label={t.nav.faq} closeMobileMenu={closeMobileMenu} theme={theme} />
            </div>
          </div>
        </nav>

        <main id="main-content" className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} py-8`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <img 
                    src="/TrestechlogoORIGINAL.png" 
                    alt="Trestech Original Logo" 
                    className="h-10 w-auto mr-2" 
                  />
                </div>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="numeric">070-071 17 69</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    tres3.tech@gmail.com
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Albacksvägen 8 Lgh 1002, 595 50 Mjölby
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t.footer.services}</h3>
                <ul className="space-y-2">
                  <li>{t.services.consultant}</li>
                  <li>{t.services.server}</li>
                  <li>{t.services.computerBuilding}</li>
                  <li>{t.services.computerSetup}</li>
                  <li>{t.services.handyman}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t.footer.openingHours}</h3>
                <ul className="space-y-2">
                  <li>{t.footer.weekdays}: <span className="numeric">08:00</span> - <span className="numeric">17:00</span></li>
                  <li>{t.footer.weekends}: {t.footer.closed}</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Trestech. {t.footer.rights}</p>
            </div>
          </div>
        </footer>

        {!cookieConsent && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">
                {t.cookies.message}
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    localStorage.setItem('cookieConsent', 'true');
                    setCookieConsent(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  {t.cookies.accept}
                </button>
                <a 
                  href="/privacy-policy" 
                  className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition-colors"
                >
                  {t.cookies.readMore}
                </a>
              </div>
            </div>
          </div>
        )}

        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-600 p-2 z-50"
        >
          {t.aria.skipToContent}
        </a>

        {/* Settings Panel */}
        <SettingsPanel 
          onThemeChange={handleThemeChange}
          onLanguageChange={handleLanguageChange}
          currentTheme={theme}
          currentLanguage={language}
        />
      </div>
    </Router>
  );
}

// Desktop Navigation Item Component
interface NavItemProps {
  to: string;
  label: string;
  closeMobileMenu: () => void;
  theme: 'light' | 'dark';
}

const NavItem = ({ to, label, closeMobileMenu, theme }: NavItemProps) => {
  return (
    <div className="relative group px-1 py-2">
      <NavLink
        to={to}
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out z-10 ${
            isActive 
              ? 'text-white' 
              : theme === 'dark'
                ? 'text-gray-300 hover:text-blue-400'
                : 'text-gray-700 hover:text-blue-600'
          }`
        }
      >
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </NavLink>
      <div 
        className={({ isActive }: { isActive: boolean }) => 
          `absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 ease-in-out -z-0 ${
            isActive 
              ? 'opacity-100' 
              : 'opacity-0 group-hover:opacity-10'
          }`
        }
      ></div>
    </div>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ to, label, closeMobileMenu, theme }: NavItemProps) => {
  return (
    <div className="relative overflow-hidden">
      <NavLink
        to={to}
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
            isActive 
              ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500' 
              : theme === 'dark'
                ? 'text-gray-300 hover:text-blue-400'
                : 'text-gray-700 hover:text-blue-600'
          }`
        }
      >
        {label}
      </NavLink>
    </div>
  );
};

export default App;