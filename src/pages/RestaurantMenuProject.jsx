// src/pages/RestaurantMenuProject.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectTemplate from './ProjectTemplate';

const RestaurantMenuProject = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        // Dacă folderul se numește efectiv "mobil" și fișierele sunt dmenu1.png, mm1.png etc.
        const desktopModules = import.meta.glob('../assets/meniu/desktop/dmenu*.png');
        const mobileModules = import.meta.glob('../assets/meniu/mobil/mm*.png');

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

        // Sortează alfabetic și numeric fișierele
        desktopResults.sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true }));
        mobileResults.sort((a, b) => a.key.localeCompare(b.key, 'en', { numeric: true }));

        setDesktopImages(desktopResults.map((item) => item.src));
        setMobileImages(mobileResults.map((item) => item.src));
      } catch (err) {
        console.error("Eroare la încărcarea imaginilor pentru RestaurantMenuProject:", err);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [lang]);

  if (loading) {
    return <div>Loading images...</div>;
  }

  // Date exemplu pentru metrici, grafice etc.
  const metricsData = [
    { title: 'User Engagement', value: '85%' },
    { title: 'Ordering Rate', value: '+70%' },
    { title: 'Time on Site', value: '5 min avg' },
    { title: 'Customer Feedback', value: '4.5/5' }
  ];

  const growthData = [
    { month: 'Jan', before: 20, after: 30 },
    { month: 'Feb', before: 25, after: 35 },
    { month: 'Mar', before: 28, after: 40 },
    { month: 'Apr', before: 30, after: 45 },
    { month: 'May', before: 35, after: 50 },
    { month: 'Jun', before: 33, after: 48 }
  ];

  const satisfactionData = [
    { name: 'Very Satisfied', value: 75, color: '#34d399' },
    { name: 'Satisfied', value: 15, color: '#60a5fa' },
    { name: 'Neutral', value: 7, color: '#fbbf24' },
    { name: 'Unsatisfied', value: 3, color: '#f87171' }
  ];

  // Titlu și subtitlu specifice pentru proiectul de meniu online
  const title = "Foodie's Delight - Restaurant Menu App";
  const subtitle = "Experience a dynamic and interactive online menu designed to boost orders and enhance customer satisfaction.";

  return (
    <ProjectTemplate
      projectLayout={true}
      title={title}
      subtitle={subtitle}
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      technologies={[]}
      clientName="Restaurant Industry"
      projectType="Digital Menu & Ordering System"
      metricsData={metricsData}
      growthData={growthData}
      satisfactionData={satisfactionData}
    />
  );
};

export default RestaurantMenuProject;
