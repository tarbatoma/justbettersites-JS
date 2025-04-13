import React from 'react';
import ProjectTemplate from './ProjectTemplate';

// Import desktop images from the "eng" folder
import be1 from '../assets/beautySalonPoze/eng/be1.png';
import be2 from '../assets/beautySalonPoze/eng/be2.png';
import be3 from '../assets/beautySalonPoze/eng/be3.png';
import be4 from '../assets/beautySalonPoze/eng/be4.png';
import be5 from '../assets/beautySalonPoze/eng/be5.png';
import be6 from '../assets/beautySalonPoze/eng/be6.png';
import be7 from '../assets/beautySalonPoze/eng/be7.png';
import be8 from '../assets/beautySalonPoze/eng/be8.png';
import be9 from '../assets/beautySalonPoze/eng/be9.png';
import be10 from '../assets/beautySalonPoze/eng/be10.png';
import be11 from '../assets/beautySalonPoze/eng/be11.png';
import be12 from '../assets/beautySalonPoze/eng/be12.png';
import be13 from '../assets/beautySalonPoze/eng/be13.png';
import be14 from '../assets/beautySalonPoze/eng/be14.png';

// Import mobile images from the "eng/mobile" folder
import bengm1 from '../assets/beautySalonPoze/eng/mobile/bengm1.png';
import bengm2 from '../assets/beautySalonPoze/eng/mobile/bengm2.png';
import bengm3 from '../assets/beautySalonPoze/eng/mobile/bengm3.png';
import bengm4 from '../assets/beautySalonPoze/eng/mobile/bengm4.png';
import bengm5 from '../assets/beautySalonPoze/eng/mobile/bengm5.png';
import bengm6 from '../assets/beautySalonPoze/eng/mobile/bengm6.png';
import bengm7 from '../assets/beautySalonPoze/eng/mobile/bengm7.png';
import bengm8 from '../assets/beautySalonPoze/eng/mobile/bengm8.png';
import bengm9 from '../assets/beautySalonPoze/eng/mobile/bengm9.png';
import bengm10 from '../assets/beautySalonPoze/eng/mobile/bengm10.png';
import bengm11 from '../assets/beautySalonPoze/eng/mobile/bengm11.png';
import bengm12 from '../assets/beautySalonPoze/eng/mobile/bengm12.png';
import bengm13 from '../assets/beautySalonPoze/eng/mobile/bengm13.png';
import bengm14 from '../assets/beautySalonPoze/eng/mobile/bengm14.png';
import bengm15 from '../assets/beautySalonPoze/eng/mobile/bengm15.png';
import bengm16 from '../assets/beautySalonPoze/eng/mobile/bengm16.png';
import bengm17 from '../assets/beautySalonPoze/eng/mobile/bengm17.png';
import bengm18 from '../assets/beautySalonPoze/eng/mobile/bengm18.png';
import bengm19 from '../assets/beautySalonPoze/eng/mobile/bengm19.png';
import bengm20 from '../assets/beautySalonPoze/eng/mobile/bengm20.png';
import bengm21 from '../assets/beautySalonPoze/eng/mobile/bengm21.png';

const BeautySalonProject = () => {
  // Build arrays of images
  const desktopImages = [
    be1, be2, be3, be4, be5, be6, be7, be8, be9, be10, be11, be12, be13, be14
  ];

  const mobileImages = [
    bengm1, bengm2, bengm3, bengm4, bengm5, bengm6, bengm7, bengm8, bengm9, bengm10,
    bengm11, bengm12, bengm13, bengm14, bengm15, bengm16, bengm17, bengm18, bengm19, bengm20, bengm21
  ];

  // Dummy metrics data (adjust as needed)
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
      title="MagicSalon - Beauty Salon Website"
      subtitle="An elegant digital experience for a beauty salon, showcasing services, portfolio, and an online appointment booking system."
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      technologies={[]}  // Leave empty as we don't want to show technology details
      clientName="Beauty Industry"  // Shows the industry rather than the client name
      projectType="Web Design & Website"  // Indicates both web design and website development
      metricsData={metricsData}
      growthData={growthData}
      satisfactionData={satisfactionData}
    />
  );
};

export default BeautySalonProject;
