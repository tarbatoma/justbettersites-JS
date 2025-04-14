import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectTemplate from './ProjectTemplate';

const BeautySalonProject = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      if (lang === 'ro') {
        // Pentru limba română, folosim import.meta.glob pe toate fișierele care încep cu "b" (desktop)
        // și pe cele care respectă pattern-ul "beautymobil*ro.png" (mobile)
        const desktopModules = import.meta.glob('../assets/beautySalonPoze/ro/b*.png');
        const mobileModules = import.meta.glob('../assets/beautySalonPoze/ro/mobil/beautymobil*ro.png');

        const desktopResults = await Promise.all(
          Object.keys(desktopModules).map(async (key) => {
            const mod = await desktopModules[key]();
            return { key, src: mod.default };
          })
        );
        const mobileResults = await Promise.all(
          Object.keys(mobileModules).map(async (key) => {
            const mod = await mobileModules[key]();
            return { key, src: mod.default };
          })
        );
        // Sortează imaginile după numele fișierului, astfel încât ordinea să fie corectă
        desktopResults.sort((a, b) => a.key.localeCompare(b.key));
        mobileResults.sort((a, b) => a.key.localeCompare(b.key));

        setDesktopImages(desktopResults.map(item => item.src));
        setMobileImages(mobileResults.map(item => item.src));
      } else {
        // Pentru engleză, folosim import.meta.glob pe fișierele care încep cu "be" și "bengm"
        const desktopModules = import.meta.glob('../assets/beautySalonPoze/eng/be*.png');
        const mobileModules = import.meta.glob('../assets/beautySalonPoze/eng/mobile/bengm*.png');

        const desktopResults = await Promise.all(
          Object.keys(desktopModules).map(async (key) => {
            const mod = await desktopModules[key]();
            return { key, src: mod.default };
          })
        );
        const mobileResults = await Promise.all(
          Object.keys(mobileModules).map(async (key) => {
            const mod = await mobileModules[key]();
            return { key, src: mod.default };
          })
        );

        desktopResults.sort((a, b) => a.key.localeCompare(b.key));
        mobileResults.sort((a, b) => a.key.localeCompare(b.key));

        setDesktopImages(desktopResults.map(item => item.src));
        setMobileImages(mobileResults.map(item => item.src));
      }
      setLoading(false);
    }

    loadImages();
  }, [lang]);

  if (loading) {
    return <div>Loading images...</div>;
  }

  // Dummy metrics data (ajustează după necesitate)
  const metricsData = [
    { title: 'Client Satisfaction', value: '95%' },
    { title: 'Conversion Rate', value: '+80%' },
    { title: 'Time Saved', value: '20h/week' },
    { title: 'ROI', value: '300%' }
  ];

  // Dummy growth data for the chart
  const growthData = [
    { month: 'Jan', before: 25, after: 30 },
    { month: 'Feb', before: 28, after: 35 },
    { month: 'Mar', before: 30, after: 38 },
    { month: 'Apr', before: 32, after: 42 },
    { month: 'May', before: 34, after: 45 },
    { month: 'Jun', before: 33, after: 44 }
  ];

  // Dummy satisfaction data for the pie chart
  const satisfactionData = [
    { name: 'Very Satisfied', value: 80, color: '#99696a' },
    { name: 'Satisfied', value: 10, color: '#c99895' },
    { name: 'Neutral', value: 7, color: '#e1b5b3' },
    { name: 'Unsatisfied', value: 3, color: '#f1d5d4' }
  ];

  return (
    <ProjectTemplate
      projectLayout={true}   // Activează stilurile și logica de proiect
      title="MagicSalon - Beauty Salon Website"
      subtitle="An elegant digital experience for a beauty salon, showcasing services, portfolio, and an online appointment booking system."
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      technologies={[]}  // Nu afișăm detalii despre tehnologii
      clientName="Beauty Industry"
      projectType="Web Design & Website"
      metricsData={metricsData}
      growthData={growthData}
      satisfactionData={satisfactionData}
    />
  );
};

export default BeautySalonProject;
