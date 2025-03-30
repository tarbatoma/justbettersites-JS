import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (type) => {
    localStorage.setItem('cookieConsent', type); // 'accepted' or 'rejected'
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base gap-4 sm:gap-6">
      <p className="text-center text-gray-800 dark:text-gray-100 max-w-3xl">
        {t('cookieBanner.text')}{' '}
        <Link to="/cookie-policy" className="underline text-primary font-medium">
          {t('cookieBanner.policyLink')}
        </Link>
        .
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => handleConsent('rejected')}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
        >
          {t('cookieBanner.reject')}
        </button>
        <button
          onClick={() => handleConsent('accepted')}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          {t('cookieBanner.accept')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
