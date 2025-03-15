import { useEffect, useRef,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import Carousel from '../components/Carousel'
import Balatro from '../Effects/Balatro'

const HomePage = ({ onMouseEnter, onMouseLeave }) => {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(true);
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // Dezactivează păstrarea scroll-ului între pagini
    }
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024); // Se afișează doar pe desktop (>1024px)
    };

    checkScreenSize(); // Verifică dimensiunea la încărcare
    window.addEventListener('resize', checkScreenSize); // Verifică și la resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-title',
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        gsap.fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
        )
        gsap.fromTo(
          '.hero-cta',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
        )
      }, heroRef)
      
      return () => ctx.revert()
    }
  }, [])


  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
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
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Custom Websites',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Web Applications',
      description: 'Robust and scalable web apps tailored to your business needs, enhancing user engagement and efficiency.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: 'Online Shop',
      description: 'We create seamless e-commerce platforms that deliver engaging shopping experiences and smooth transactions.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      title: 'Business Automation',
      description: 'Smart automation solutions designed to optimize processes and enhance operational efficiency.'
    },
    {
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
      ),
      title: 'Digital Archiving',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-window-fullscreen" viewBox="0 0 16 16">
  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
</svg>
      ),
      title: 'Landing Pages',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>
      ),
      title: 'AI Solutions',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-grid-3x2-gap-fill" viewBox="0 0 16 16">
        <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
      </svg>
      ),
      title: 'Web Design',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Marketing',
      description: 'We design and develop responsive websites that showcase your brand and engage your audience.'
    },
  ]
  
  const solutions = [
    'Digital Archiving',
    'Websites',
    'Landing Pages',
    'Web Apps',
    'Mobile Apps',
    'Online Shop',
    'Business Automation',
    'AI Solutions'
  ]
  
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business goals, target audience, and technical requirements.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our experts craft a customized strategy that integrates modern technologies and automation.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create intuitive designs that reflect your brand identity and enhance user experiences.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our team builds robust websites and web applications, incorporating AI solutions where beneficial.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Comprehensive testing ensures optimal performance and a seamless user experience across all platforms.'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure continued success.'
    }
  ]
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-scroll-section
      >
        
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: y1, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white to-light opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80')] bg-cover bg-center opacity-10"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Welcome to JustBetterSites!
            </motion.h1>
            <motion.p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            🚀 We transform your ideas into digital reality!
            We create Digital Archiving, Websites, Landing Pages, Web Apps, Mobile Apps, Online Shops, Business Automation, AI Solutions, Web Design, Marketing, and much more. From concept to implementation, we provide complete digital solutions for your business success. 🚀
            </motion.p>
            <motion.div className="hero-cta flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/services" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Discover Our Services
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-primary border border-primary rounded-full font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a 
            href="#services" 
            className="text-gray-500 hover:text-primary transition-colors"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </section>
  
      {/* Services Section */}
      <section 
        id="services" 
        ref={servicesRef} 
        className="py-24 bg-white"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At JustBetterSites, we offer tailored digital solutions that combine creativity with cutting-edge technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-light p-8 rounded-2xl hover-lift"
                variants={fadeInUpVariants}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section 
        ref={solutionsRef} 
        className="py-24 bg-white"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions for digital archiving, websites, landing pages, web apps, mobile apps, online shops, business automation, and AI solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={solutionsInView ? "visible" : "hidden"}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center py-6"
                variants={fadeInUpVariants}
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <span 
                  className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {solution}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
     <section ref={processRef} className="relative py-24 bg-light overflow-hidden" data-scroll-section>
  {/* Balatro ca fundal */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <Balatro isRotate={false} mouseInteraction={false} pixelFilter={700} />
  </div>

  {/* Conținutul principal */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={processInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold mb-4 text-white" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  Our Process
</h2>
<p className="text-xl text-white max-w-3xl mx-auto">
  A structured approach to creating digital solutions that combine innovation and efficiency.
</p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={processInView ? "visible" : "hidden"}
    >
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-2xl hover-lift relative z-10"
          variants={fadeInUpVariants}
          custom={index}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span className="text-5xl font-bold text-primary/20">{step.number}</span>
          <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <div style={{ height: '600px', position: 'relative' }}>
        
      <section className="py-24 bg-gray-100 flex items-center justify-center" data-scroll-section>
        <div className="container mx-auto px-12 max-w-[1400px]">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl font-bold mb-4" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              Reviews From Our Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on our latest projects and the quality of our digital solutions.
            </p>
          </motion.div>
          <div className="w-full flex justify-center">
            <Carousel 
              baseWidth={900} 
              autoplay={true} 
              autoplayDelay={3000} 
              pauseOnHover={true} 
              loop={true} 
              round={false} 
            />
          </div>
        </div>
      </section>
</div>
      {/* CTA Section */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Ready to Elevate Your Digital Strategy?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Partner with JustBetterSites to develop innovative websites, intelligent web applications, and automation solutions that drive business success.
            </p>
            <motion.a 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
