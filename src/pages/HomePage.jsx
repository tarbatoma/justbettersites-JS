import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import Carousel from '../components/Carousel'
import Balatro from '../Effects/Balatro'
import BlurText from '../Effects/BlurText'
import MarketingWebDesign from '../components/MarketingWebDesign'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomePage = ({ onMouseEnter, onMouseLeave }) => {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(true)
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const getResponsiveWidth = () => {
    const w = window.innerWidth;
    if (w <= 500) return 320;
    if (w <= 600) return 360;
    if (w <= 768) return 400;
    if (w <= 964) return 500;
    if (w <= 1024) return 700;
    return 900;
  };
  
  const [carouselWidth, setCarouselWidth] = useState(getResponsiveWidth());
  
  useEffect(() => {
    const handleResize = () => setCarouselWidth(getResponsiveWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 824)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.hero-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        gsap.fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
        gsap.fromTo('.hero-cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' })
      }, heroRef)
      return () => ctx.revert()
    }
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const services = [
    {
      icon: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      title: t('homepage.services.customWebsites.title'),
      description: t('homepage.services.customWebsites.description')
    },
    {
      icon: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
      title: t('homepage.services.webApps.title'),
      description: t('homepage.services.webApps.description')
    },
    {
      icon: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>,
      title: t('homepage.services.shops.title'),
      description: t('homepage.services.shops.description')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>,
      title: t('homepage.services.archiving.title'),
      description: t('homepage.services.archiving.description')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-window-fullscreen" viewBox="0 0 16 16"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/></svg>,
      title: t('homepage.services.landingPages.title'),
      description: t('homepage.services.landingPages.description')
    },
    {
      icon: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
      title: t('homepage.services.mobileApps.title'),
      description: t('homepage.services.mobileApps.description')
    }
  ]

  const solutions = [
    t('solutions.automation'),
    t('solutions.ai')
  ]

  const processSteps = [
    {
      number: '01',
      title: t('homepage.process.discovery.title'),
      description: t('homepage.process.discovery.description')
    },
    {
      number: '02',
      title: t('homepage.process.strategy.title'),
      description: t('homepage.process.strategy.description')
    },
    {
      number: '03',
      title: t('homepage.process.design.title'),
      description: t('homepage.process.design.description')
    },
    {
      number: '04',
      title: t('homepage.process.development.title'),
      description: t('homepage.process.development.description')
    },
    {
      number: '05',
      title: t('homepage.process.testing.title'),
      description: t('homepage.process.testing.description')
    },
    {
      number: '06',
      title: t('homepage.process.launch.title'),
      description: t('homepage.process.launch.description')
    }
  ]
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" data-scroll-section>
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: y1, opacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-light opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2064&q=80')] bg-cover bg-center opacity-10"></div>
        </motion.div>
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text={t('homepage.hero.title')}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-6 text-black"
            />
            <motion.p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {t('homepage.hero.subtitle')}
            </motion.p>
            <motion.div className="hero-cta flex flex-col sm:flex-row justify-center gap-4">
              <a href="/services" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('homepage.hero.cta.services')}
              </a>
              <a href="/contact" className="px-8 py-4 bg-white text-primary border border-primary rounded-full font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('homepage.hero.cta.contact')}
              </a>
            </motion.div>
          </div>
        </div>
  
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <a href="#services" className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>
  
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
            <BlurText
              text={t('homepage.servicesIntro.title')}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-4 text-primary"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('homepage.servicesIntro.description')}</p>
          </motion.div>
  
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainerVariants} initial="hidden" animate={servicesInView ? "visible" : "hidden"}>
            {services.map((service, index) => (
              <motion.div key={index} className="bg-light p-8 rounded-2xl hover-lift flex flex-col justify-between" variants={fadeInUpVariants} custom={index} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <div>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="text-right mt-6">
                  <Link to="/services" className="text-primary font-semibold hover:underline">
                    {t('homepage.servicesIntro.viewMore') || 'View more ...'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  
      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} animate={solutionsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
            <BlurText
              text={t('homepage.solutionsIntro.title')}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-4 text-primary"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('homepage.solutionsIntro.description')}</p>
          </motion.div>
  
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8" variants={staggerContainerVariants} initial="hidden" animate={solutionsInView ? "visible" : "hidden"}>
            <motion.div className="flex flex-col items-center text-center border border-primary rounded-2xl p-6 hover:scale-105 hover:bg-primary/5 transition-transform cursor-pointer group" onClick={() => window.location.href = '/services'} variants={fadeInUpVariants} custom={0}>
              <img src="/ba.png" alt="Business Automation" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary">{t('homepage.solutions.automation')}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t('homepage.solutions.clickAutomation')}</p>
            </motion.div>
  
            <motion.div className="flex flex-col items-center text-center border border-primary rounded-2xl p-6 hover:scale-105 hover:bg-primary/5 transition-transform cursor-pointer group" onClick={() => window.location.href = '/services'} variants={fadeInUpVariants} custom={1}>
              <img src="/ai.png" alt="AI Solutions" className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary">{t('homepage.solutions.ai')}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t('homepage.solutions.clickAi')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
  
      <MarketingWebDesign onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  {/* Reviews Section */}
<section className="py-24 bg-gray-100 flex items-center justify-center" data-scroll-section>
  <div className="container mx-auto px-12 max-w-[1400px]">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <BlurText
        text={t('homepage.reviews.title')}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold mb-4 text-primary"
      />
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {t('homepage.reviews.description')}
      </p>
    </motion.div>
    <div className="w-full flex justify-center">
    <Carousel
  baseWidth={carouselWidth}// 👈 responsive
  autoplay={true}
  autoplayDelay={3000}
  pauseOnHover={true}
  loop={true}
  round={false}
/>

    </div>
  </div>
</section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-24 bg-light overflow-hidden" data-scroll-section>
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Balatro isRotate={false} mouseInteraction={false} pixelFilter={700} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
            <BlurText text={t('homepage.processIntro.title')} delay={150} animateBy="words" direction="top" className="text-4xl font-bold mb-4 text-white" />
            <p className="text-xl text-white max-w-3xl mx-auto">{t('homepage.processIntro.description')}</p>
          </motion.div>
  
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainerVariants} initial="hidden" animate={processInView ? "visible" : "hidden"}>
            {processSteps.map((step, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-2xl hover-lift relative z-10" variants={fadeInUpVariants} custom={index} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <motion.div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <BlurText text={t('homepage.cta.title')} delay={150} animateBy="words" direction="top" className="text-4xl md:text-5xl font-bold mb-6 text-white" />
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">{t('homepage.cta.description')}</p>
            <motion.a href="/contact" className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('homepage.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
  
}

export default HomePage
