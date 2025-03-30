import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <div className="min-h-screen pt-28 px-4 md:px-12 lg:px-32 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 border-b pb-4">
          {t('privacy.title')}
        </h1>

        {!Array.isArray(sections) ? (
          <p className="text-red-500 text-center">⚠️ Politica de confidențialitate nu a fost încărcată corect.</p>
        ) : (
          sections.map((section, index) => (
            <div
              key={index}
              className="mb-8 p-6 rounded-2xl shadow-md bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 transition"
            >
              <h2 className="text-2xl font-semibold text-primary mb-3">{section.title}</h2>
              {Array.isArray(section.content)
                ? section.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-3 text-justify leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                : (
                    <p className="text-justify leading-relaxed">{section.content}</p>
                  )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
