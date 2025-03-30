import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';

const MobileContactBar = () => {
  const { t } = useTranslation();
  const [showBar, setShowBar] = useState(false);
  const lastScrollY = useRef(0);

  const phoneNumber = '+40720726619';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll down → afișează bara
        setShowBar(true);
      } else {
        // Scroll up → ascunde bara
        setShowBar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between transition-all duration-500 ease-in-out
      ${showBar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
      bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl`}
    >
      {/* Telefon */}
      <a href={`tel:${phoneNumber}`} className="flex-shrink-0">
        <button className="bg-primary text-white p-3 rounded-full shadow-md hover:scale-105 transition">
          <Phone size={20} />
        </button>
      </a>

      {/* Buton Central */}
      <a href="/contact" className="flex-1 px-4">
        <button className="w-full bg-primary text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition text-sm">
          {t('mobileBar.talk')}
        </button>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
      >
        <button className="bg-green-500 text-white p-3 rounded-full shadow-md hover:scale-105 transition">
          <MessageCircle size={20} />
        </button>
      </a>
    </div>
  );
};

export default MobileContactBar;
