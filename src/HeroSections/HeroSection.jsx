// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = ({ title, subtitle, onMouseEnter, onMouseLeave }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-title',
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.hero-cta',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
        );
      }, heroRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8"
      data-scroll-section
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-light opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80')] bg-cover bg-center" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="hero-title text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-primary leading-tight"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {title}
          </motion.h1>
          <motion.p
            className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 leading-relaxed"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
