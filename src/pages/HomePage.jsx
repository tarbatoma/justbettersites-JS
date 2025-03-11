import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const HomePage = ({ onMouseEnter, onMouseLeave }) => {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [clientsRef, clientsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
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
      title: 'Web Development',
      description: 'We build responsive, high-performance websites that deliver exceptional user experiences.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: 'E-commerce',
      description: 'Custom online stores with seamless checkout experiences and robust backend systems.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user satisfaction and business performance.'
    }
  ]
  
  const clients = [
    'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla', 'Netflix'
  ]
  
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a comprehensive strategy tailored to your specific needs and objectives.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create beautiful, intuitive designs that align with your brand and engage your users.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers build your solution using the latest technologies and best practices.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your product is bug-free and performs flawlessly across all devices.'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'We handle the deployment process and provide ongoing support to ensure long-term success.'
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
              We Create <span className="text-gradient">Digital Experiences</span> That Matter
            </motion.h1>
            <motion.p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
              JustBetterSites transforms your ideas into exceptional digital solutions that drive business growth and user engagement.
            </motion.p>
            <motion.div className="hero-cta flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Explore Our Services
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
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
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
      
      {/* Featured Work Section */}
      <section className="py-24 bg-light" data-scroll-section>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, threshold: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" 
                  alt="E-commerce Project" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Modern E-commerce Platform</h3>
                  <p className="text-white/80">A complete online shopping experience with seamless checkout and inventory management.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, threshold: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Mobile App" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Fitness Tracking App</h3>
                  <p className="text-white/80">A comprehensive mobile application for tracking workouts, nutrition, and health metrics.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.a 
              href="/services" 
              className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, threshold: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section 
        ref={clientsRef} 
        className="py-24 bg-white"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with some of the world's most innovative companies.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clients.map((client, index) => (
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
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section 
        ref={processRef} 
        className="py-24 bg-light"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional digital solutions.
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
                className="bg-white p-8 rounded-2xl hover-lift"
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Let's work together to create exceptional digital experiences that drive business growth and user engagement.
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