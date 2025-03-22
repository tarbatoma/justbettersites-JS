import { useInView } from 'react-intersection-observer';
import HeroSection from '../HeroSections/HeroSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import LazySection from '../Settings/LazySection';
import React, { useEffect, useState, Suspense } from 'react';

const ServicesSection = React.lazy(() => import('../components/ServicesSection'));

const ServicesPage = () => {
  const [visibleSections, setVisibleSections] = useState(3);
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const baseServices = [
    {
      title: 'Web Development',
      description: 'We create responsive, high-performance websites that deliver exceptional user experiences and drive business growth.',
      features: [
        'Fully customized websites tailored to your business needs',
        'Modern, responsive design for phones, tablets, and desktops',
        'Presentation websites for businesses of all types',
        'Google Maps, WhatsApp, social media integration',
        'Blog, testimonials, portfolio sections',
        'User-friendly admin panel (CMS)',
        'Fast loading and performance optimization',
        'SEO basics included',
        'Secure, spam-protected structure',
        'Custom branding with your identity',
        'Booking, payment, newsletter integrations'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70'
    },
    {
      title: 'Mobile App Development',
      description: 'We build native and cross-platform mobile applications that engage users and deliver seamless experiences across devices.',
      features: [
        'Apps for iOS and Android',
        'Intuitive, beautiful user interfaces',
        'Push notifications and in-app messaging',
        'User account and login features',
        'Booking, ordering and chat systems',
        'Real-time sync with your backend',
        'App Store & Google Play support',
        'Maintenance and updates',
        'Offline mode & performance boost',
        'User analytics and reports'
      ],
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1000&q=70'
    },
    {
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging user interfaces and experiences that enhance user satisfaction and business performance.',
      features: [
        'User research & interviews',
        'Wireframes & interactive prototypes',
        'Clean, modern visual design',
        'Interaction design (micro-animations)',
        'Usability testing & feedback',
        'Design systems and consistency'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=70'
    },
    {
      title: 'E-commerce Solutions',
      description: 'We develop custom online stores with seamless checkout experiences and robust backend systems to drive sales and growth.',
      features: [
        'Custom e-commerce development',
        'Optimized cart and checkout',
        'Payment gateway integration',
        'Inventory & order management',
        'Customer dashboards',
        'CRM and automated emails'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=70'
    }
  ];

  // Repeat the services to simulate 12 unique sections
  const servicesList = Array(12).fill(null).map((_, i) => [baseServices[i % 4]]);

  const faqs = [
    {
      question: 'What is your development process?',
      answer: 'Our process includes discovery, planning, design, development, testing, and deployment. We collaborate closely with clients every step of the way.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'A simple website takes 4-6 weeks; complex apps may take 3-6 months. You’ll get a timeline at project start.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer update packages, maintenance, and performance monitoring to keep your product running smoothly.'
    },
    {
      question: 'How do you price projects?',
      answer: 'We provide transparent, tailored pricing. Fixed-price or time & materials depending on your needs.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'React, Vue.js, Node.js, Python, PHP, Kotlin, Swift, and more – we choose what fits your project best.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'Testing at every stage: unit, integration, UAT. Plus code reviews and adherence to industry standards.'
    }
  ];

  return (
    <div className="pt-28">
     <HeroSection
  title="Our Services"
  subtitle="Comprehensive digital solutions tailored to your business needs. From web development to mobile apps and e-commerce, we've got you covered."

/>


      {servicesList.map((serviceArr, index) => (
  <LazySection key={index}>
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesSection
        service={serviceArr[0]}
        showTitle={index === 0} // doar prima secțiune are titlul mare
      />
    </Suspense>
  </LazySection>
))}




      <ProcessSection processRef={processRef} processInView={processInView} />
      <FAQSection faqRef={faqRef} faqInView={faqInView} faqs={faqs} />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
