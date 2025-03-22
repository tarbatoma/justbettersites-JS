// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = ({ title, subtitle, onMouseEnter, onMouseLeave }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.hero-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
        gsap.fromTo('.hero-cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.6 });
      }, heroRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      data-scroll-section
    >
      <motion.div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-light opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80')] bg-cover bg-center" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="hero-title text-5xl md:text-6xl font-bold mb-6 text-primary"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {title}
          </motion.h1>
          <motion.p
            className="hero-subtitle text-xl text-gray-600 mb-10"
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
