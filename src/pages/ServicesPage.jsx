import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Threads from '../Effects/Threads'
import { useEffect } from 'react';
const ServicesPage = ({ onMouseEnter, onMouseLeave }) => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true })
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // Dezactivează păstrarea scroll-ului între pagini
    }
    window.scrollTo(0, 0);
  }, []);
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
      title: 'Web Development',
      description: 'We create responsive, high-performance websites that deliver exceptional user experiences and drive business growth.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Progressive Web Apps (PWAs)',
        'Content Management Systems',
        'API development and integration',
        'Performance optimization'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'
    },
    {
      title: 'Mobile App Development',
      description: 'We build native and cross-platform mobile applications that engage users and deliver seamless experiences across devices.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'App store optimization',
        'Mobile UI/UX design',
        'App maintenance and support'
      ],
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging user interfaces and experiences that enhance user satisfaction and business performance.',
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design',
        'Interaction design',
        'Usability testing',
        'Design systems'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80'
    },
    {
      title: 'E-commerce Solutions',
      description: 'We develop custom online stores with seamless checkout experiences and robust backend systems to drive sales and growth.',
      features: [
        'Custom e-commerce development',
        'Shopping cart and checkout optimization',
        'Payment gateway integration',
        'Inventory management',
        'Order fulfillment systems',
        'Customer relationship management'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  ]
  
  const faqs = [
    {
      question: 'What is your development process?',
      answer: 'Our development process follows a structured approach that includes discovery, planning, design, development, testing, and deployment. We work closely with our clients throughout the process to ensure their needs are met and expectations are exceeded.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on the scope and complexity of the project. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. We provide detailed timelines during the planning phase of each project.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer ongoing support and maintenance packages to ensure your digital products continue to perform optimally. Our support services include regular updates, security patches, performance monitoring, and technical assistance.'
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer transparent pricing based on the scope and requirements of each project. Depending on the nature of the work, we may use fixed-price contracts or time and materials billing. We provide detailed proposals that outline all costs before beginning any work.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in a wide range of technologies including React, Vue.js, Angular, Node.js, Python, PHP, Swift, Kotlin, and more. Our team stays up-to-date with the latest advancements to ensure we\'re using the most appropriate technologies for each project.'
    },
    {
      question: 'How do you ensure the quality of your work?',
      answer: 'Quality assurance is integrated throughout our development process. We conduct thorough testing at each stage, including unit testing, integration testing, and user acceptance testing. We also follow industry best practices and coding standards to ensure high-quality deliverables.'
    }
  ]
  
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-60 bg-white overflow-hidden" data-scroll-section>

  {/* Fundal Threads */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <Threads amplitude={5.0} distance={0} enableMouseInteraction={true} />
  </div>

  {/* Conținutul principal */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Our <span className="text-gradient">Services</span>
      </motion.h1>
      <motion.p
        className="text-xl text-black-200 mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Comprehensive digital solutions tailored to your business needs. From web development to mobile apps and e-commerce, we've got you covered.
      </motion.p>
    </div>
  </div>
</section>
      
      {/* Services Section */}
      <section 
        ref={servicesRef} 
        className="py-24 bg-light"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 opacity-0 translate-y-10 animate-fadeIn transition-all duration-700 ease-out"
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of services designed to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-24"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                variants={fadeInUpVariants}
                custom={index}
              >
                {index % 2 === 0 ? (
                  <>
                    <div 
                      className="rounded-2xl overflow-hidden"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 
                        className="text-3xl font-bold mb-4"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 
                        className="text-3xl font-bold mb-4"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div 
                      className="rounded-2xl overflow-hidden"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section 
        ref={processRef} 
        className="py-24 bg-white"
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
            className="relative"
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 md:space-y-0">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div 
                  className="md:text-right md:pr-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">01</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Discovery</h3>
                    <p className="text-gray-600">
                      We start by understanding your business goals, target audience, and project requirements to ensure we deliver a solution that meets your needs.
                    </p>
                  </div>
                </motion.div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <div className="md:pl-12"></div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:pr-12"></div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <motion.div 
                  className="md:pl-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">02</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Strategy</h3>
                    <p className="text-gray-600">
                      Our team develops a comprehensive strategy tailored to your specific needs and objectives, outlining the approach, technologies, and timeline.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div 
                  className="md:text-right md:pr-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">03</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Design</h3>
                    <p className="text-gray-600">
                      We create beautiful, intuitive designs that align with your brand and engage your users, focusing on user experience and visual appeal.
                    </p>
                  </div>
                </motion.div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <div className="md:pl-12"></div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:pr-12"></div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <motion.div 
                  className="md:pl-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">04</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Development</h3>
                    <p className="text-gray-600">
                      Our developers build your solution using the latest technologies and best practices, ensuring high-quality, scalable, and maintainable code.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Step 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div 
                  className="md:text-right md:pr-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">05</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Testing</h3>
                    <p className="text-gray-600">
                      Rigorous testing ensures your product is bug-free and performs flawlessly across all devices and browsers, providing a seamless user experience.
                    </p>
                  </div>
                </motion.div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <div className="md:pl-12"></div>
              </div>
              
              {/* Step 6 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:pr-12"></div>
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
                <motion.div 
                  className="md:pl-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <div 
                    className="bg-light p-8 rounded-2xl inline-block"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <span className="text-4xl font-bold text-primary">06</span>
                    <h3 className="text-2xl font-bold mt-4 mb-3">Launch & Support</h3>
                    <p className="text-gray-600">
                      We handle the deployment process and provide ongoing support to ensure long-term success, helping you adapt and grow as your needs evolve.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        ref={faqRef} 
        className="py-24 bg-light"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
                variants={fadeInUpVariants}
                custom={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Contact us today to discuss your project and discover how we can help you achieve your digital goals.
            </p>
            <motion.a 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage