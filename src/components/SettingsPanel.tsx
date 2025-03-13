import { useState, useEffect } from 'react';
import { Settings, Moon, Sun, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SettingsPanelProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
  onLanguageChange: (language: 'sv' | 'en') => void;
  currentTheme: 'light' | 'dark';
  currentLanguage: 'sv' | 'en';
  theme: 'light' | 'dark';
}

const SettingsPanel = ({ 
  onThemeChange, 
  onLanguageChange, 
  currentTheme, 
  currentLanguage, 
  theme 
}: SettingsPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('#settings-panel') && !target.closest('#settings-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Settings Button */}
      <motion.button
        id="settings-button"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg focus:outline-none ${
          theme === 'dark'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Settings"
      >
        <Settings className="h-6 w-6" />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="settings-panel"
            className="fixed bottom-20 right-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border dark:border-gray-700"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {currentLanguage === 'sv' ? 'Inställningar' : 'Settings'}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {currentLanguage === 'sv' ? 'Tema' : 'Theme'}
              </p>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => onThemeChange('light')}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentTheme === 'light'
                      ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  <Sun className="h-4 w-4 mr-1" />
                  {currentLanguage === 'sv' ? 'Ljust' : 'Light'}
                </button>
                <button
                  onClick={() => onThemeChange('dark')}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentTheme === 'dark'
                      ? 'bg-gray-800 text-blue-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  <Moon className="h-4 w-4 mr-1" />
                  {currentLanguage === 'sv' ? 'Mörkt' : 'Dark'}
                </button>
              </div>
            </div>

            {/* Language Toggle */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {currentLanguage === 'sv' ? 'Språk' : 'Language'}
              </p>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => onLanguageChange('sv')}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentLanguage === 'sv'
                      ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  <span className="mr-1">🇸🇪</span>
                  Svenska
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentLanguage === 'en'
                      ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  <span className="mr-1">🇬🇧</span>
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsPanel; 