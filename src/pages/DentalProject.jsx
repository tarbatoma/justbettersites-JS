import React from 'react';
import ProjectTemplate from './ProjectTemplate';

// Import images – adjust the paths according to your structure
import den1 from '../assets/dental/den1.png';
import den2 from '../assets/dental/den2.png';
import den3 from '../assets/dental/den3.png';
import den4 from '../assets/dental/den4.png';

/**
 * DentalProject - Final implementation with navbar
 */
const DentalProject = () => {
  // Build arrays of images for desktop and mobile
  const desktopImages = [
    den1, // The first image is the hero image
    den2, den3, den4, // Gallery images
    den1, den2, den3, den4, // Repeated to have more images
    den1, den2, den3, den4,
    den1, den2, den3, den4
  ];
  
  // Images for mobile (for demo, using different images)
  const mobileImages = [
    den3, // The first image (hero) for mobile view
    den4, den1, den2, // Gallery images
    den3, den4, den1, den2,
    den3, den4, den1, den2,
    den3, den4, den1, den2
  ];

  // Data for key metric cards
  const metricsData = [
    {
      title: 'Client Satisfaction',
      value: '90%'
    },
    {
      title: 'Conversion Rate',
      value: '+75%'
    },
    {
      title: 'Time Saved',
      value: '15h/week'
    },
    {
      title: 'ROI',
      value: '280%'
    }
  ];

  // Data for the growth chart
  const growthData = [
    { month: 'Jan', before: 30, after: 35 },
    { month: 'Feb', before: 32, after: 40 },
    { month: 'Mar', before: 28, after: 45 },
    { month: 'Apr', before: 33, after: 52 },
    { month: 'May', before: 35, after: 58 },
    { month: 'Jun', before: 34, after: 63 }
  ];

  // Data for the satisfaction pie chart
  const satisfactionData = [
    { name: 'Very Satisfied', value: 75, color: '#99696a' },
    { name: 'Satisfied', value: 15, color: '#c99895' },
    { name: 'Neutral', value: 7, color: '#e1b5b3' },
    { name: 'Unsatisfied', value: 3, color: '#f1d5d4' }
  ];

  return (
    <ProjectTemplate
      title="SmileDental - Dental Clinic Website"
      subtitle="Modern digital experience for a dental clinic, showcasing services and online appointment scheduling"
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      technologies={[]}  // Removed list of technologies
      clientName="Dental Clinics"  // Display industry (e.g., Dental Clinics)
      projectType="Web Design & Website"  // Indicates both web design and website development
      metricsData={metricsData}
      growthData={growthData}
      satisfactionData={satisfactionData}
    />
  );
};

export default DentalProject;
