import { useEffect, useRef,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import Carousel from '../components/Carousel'
import Balatro from '../Effects/Balatro'
import BlurText from '../Effects/BlurText'
import MarketingWebDesign from '../components/MarketingWebDesign'
import { Link } from "react-router-dom";

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
      setIsDesktop(window.innerWidth > 824); // Se afișează doar pe desktop (>1024px)
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


  // Ajustează intervalele pentru un efect mai vizibil
  

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Custom Websites',
      description: 'Get a stunning, responsive website tailored to your brand. We build fast, user-friendly, and mobile-optimized sites that captivate visitors and drive engagement.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Web Applications',
      description: 'Transform your business with custom web apps. We develop powerful, secure, and scalable applications for automation, data management, and seamless user interactions.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: 'Online Shops',
      description: 'Launch a high-performing online store with easy product management, secure payments, and a smooth shopping experience designed to increase conversions.'
    },
    {
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
      ),
      title: 'Digital Archiving',
      description: 'Organize and secure your documents with digital archiving. Easily store, retrieve, and manage important files while ensuring data protection and accessibility.'
    },
    {
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-window-fullscreen" viewBox="0 0 16 16">
  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
</svg>
      ),
      title: 'Landing Pages',
      description: 'Make a strong first impression with high-converting landing pages. Designed for speed, clarity, and action—perfect for promotions, campaigns, or product launches.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Reach your audience anytime, anywhere. We create user-friendly iOS and Android apps with intuitive design, seamless navigation, and powerful functionality.'
    },
  ]
  
  const solutions = [
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
          <BlurText
  text="Welcome to JustBetterSites!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => console.log('Animation completed!')}
  className="text-4xl md:text-5xl font-bold mb-6 text-black"
/>

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
<motion.div 
  className="text-center mb-16"
  initial={{ opacity: 0, y: 40 }}
  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <BlurText
    text="Our Development Services"
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={() => console.log('Animation completed!')}
    className="text-4xl font-bold mb-4 text-primary"
  />
</motion.div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer custom websites, web applications, and online shops, and more, ensuring modern, responsive, and high-performing digital experiences.            </p>
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
      className="bg-light p-8 rounded-2xl hover-lift flex flex-col justify-between"
      variants={fadeInUpVariants}
      custom={index}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <div className="mb-6">{service.icon}</div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
      <div className="text-right mt-6">
        <Link 
          to={`/services`} 
          className="text-primary font-semibold hover:underline"
        >
          View more ...
        </Link>
      </div>
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
      <BlurText
        text="Our Business Solutions"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={() => console.log('Animation completed!')}
        className="text-4xl font-bold mb-4 text-primary"
      />

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We provide business automation including documents and AI-driven solutions to streamline operations, enhance efficiency, and optimize customer interactions.
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center items-center"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={solutionsInView ? "visible" : "hidden"}
    >
      {/* Business Automation */}
      <motion.div
        className="flex flex-col items-center text-center border border-primary rounded-2xl p-6 transition-transform transform hover:scale-105 hover:bg-primary/5 cursor-pointer group"
        onClick={() => window.location.href = "/services"}
        variants={fadeInUpVariants}
        custom={0}
      >
        <img 
          src="/ba.png" 
          alt="Business Automation" 
          className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" 
        />
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">Business Automation</h3>
        <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-700">Click to discover how we automate your workflow</p>
      </motion.div>

      {/* AI Solutions */}
      <motion.div
        className="flex flex-col items-center text-center border border-primary rounded-2xl p-6 transition-transform transform hover:scale-105 hover:bg-primary/5 cursor-pointer group"
        onClick={() => window.location.href = "/services"}
        variants={fadeInUpVariants}
        custom={1}
      >
        <img 
          src="/ai.png" 
          alt="AI Solutions" 
          className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" 
        />
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">AI Solutions</h3>
        <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-700">Click to see how AI can power your business</p>
      </motion.div>
    </motion.div>
  </div>
</section>


      <MarketingWebDesign onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
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
<BlurText
  text="Our Process"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => console.log('Animation completed!')}
  className="text-4xl font-bold mb-4 text-white"
/>

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
<BlurText
  text="Reviews From Our Customers"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => console.log('Animation completed!')}
  className="text-4xl font-bold mb-4 text-primary"
/>

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
<BlurText
  text="Ready to Elevate Your Digital Strategy?"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => console.log('Animation completed!')}
  className="text-4xl md:text-5xl font-bold mb-6 text-white"
/>

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
