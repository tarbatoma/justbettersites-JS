import React from 'react';
import ProjectTemplate from './ProjectTemplate';

// Import desktop images from the "dentist/desktop" folder
import d1 from '../assets/dentist/desktop/d1.png';
import d2 from '../assets/dentist/desktop/d2.png';
import d3 from '../assets/dentist/desktop/d3.png';
import d4 from '../assets/dentist/desktop/d4.png';
import d5 from '../assets/dentist/desktop/d5.png';
import d6 from '../assets/dentist/desktop/d6.png';
import d7 from '../assets/dentist/desktop/d7.png';
import d8 from '../assets/dentist/desktop/d8.png';
import d9 from '../assets/dentist/desktop/d9.png';
import d10 from '../assets/dentist/desktop/d10.png';
import d11 from '../assets/dentist/desktop/d11.png';
import d12 from '../assets/dentist/desktop/d12.png';
import d13 from '../assets/dentist/desktop/d13.png';
import d14 from '../assets/dentist/desktop/d14.png';

// Import mobile images from the "dentist/mobile" folder
import md1 from '../assets/dentist/mobil/md1.png';
import md2 from '../assets/dentist/mobil/md2.png';
import md3 from '../assets/dentist/mobil/md3.png';
import md4 from '../assets/dentist/mobil/md4.png';
import md5 from '../assets/dentist/mobil/md5.png';
import md6 from '../assets/dentist/mobil/md6.png';
import md7 from '../assets/dentist/mobil/md7.png';
import md8 from '../assets/dentist/mobil/md8.png';
import md9 from '../assets/dentist/mobil/md9.png';
import md10 from '../assets/dentist/mobil/md10.png';
import md11 from '../assets/dentist/mobil/md11.png';
import md12 from '../assets/dentist/mobil/md12.png';
import md13 from '../assets/dentist/mobil/md13.png';
import md14 from '../assets/dentist/mobil/md14.png';
import md15 from '../assets/dentist/mobil/md15.png';
import md16 from '../assets/dentist/mobil/md16.png';
import md17 from '../assets/dentist/mobil/md17.png';
import md18 from '../assets/dentist/mobil/md18.png';
import md19 from '../assets/dentist/mobil/md19.png';
import md20 from '../assets/dentist/mobil/md20.png';

const DentalProject = () => {
  // Build arrays of images for desktop and mobile
  const desktopImages = [
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14
  ];
  
  const mobileImages = [
    md1, md2, md3, md4, md5, md6, md7, md8, md9, md10,
    md11, md12, md13, md14, md15, md16, md17, md18, md19, md20
  ];

  // Data for key metric cards (unchanged)
  const metricsData = [
    { title: 'Client Satisfaction', value: '90%' },
    { title: 'Conversion Rate', value: '+75%' },
    { title: 'Time Saved', value: '15h/week' },
    { title: 'ROI', value: '280%' }
  ];

  // Data for the growth chart (unchanged)
  const growthData = [
    { month: 'Jan', before: 30, after: 35 },
    { month: 'Feb', before: 32, after: 40 },
    { month: 'Mar', before: 28, after: 45 },
    { month: 'Apr', before: 33, after: 52 },
    { month: 'May', before: 35, after: 58 },
    { month: 'Jun', before: 34, after: 63 }
  ];

  // Data for the satisfaction pie chart (unchanged)
  const satisfactionData = [
    { name: 'Very Satisfied', value: 75, color: '#99696a' },
    { name: 'Satisfied', value: 15, color: '#c99895' },
    { name: 'Neutral', value: 7, color: '#e1b5b3' },
    { name: 'Unsatisfied', value: 3, color: '#f1d5d4' }
  ];

  return (
    <ProjectTemplate
      projectLayout={true}   // Activează stilurile și logica de proiect
      title="SmileDental - Dental Clinic Website"
      subtitle="Modern digital experience for a dental clinic, showcasing services and online appointment scheduling"
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      technologies={[]}  // Nu afișăm detalii despre tehnologii
      clientName="Dental Clinics"  // Display industry (e.g., Dental Clinics)
      projectType="Web Design & Website"  // Indicates both web design and website development
      metricsData={metricsData}
      growthData={growthData}
      satisfactionData={satisfactionData}
    />
  );
};

export default DentalProject;
