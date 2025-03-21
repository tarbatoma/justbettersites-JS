import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Aurora from '../Effects/Aurora'
import { useEffect, useState } from "react";
import CountUp from '../Effects/CountUp';
import TechnologiesSection from '../components/TechnologiesSection';

const AboutPage = ({ onMouseEnter, onMouseLeave }) => {
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [isMobile, setIsMobile] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setKey(prevKey => prevKey + 1);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 760); // Schimbă la dimensiunea la care se activează meniul hamburger
    };

    checkScreenSize(); // Verifică la încărcare
    window.addEventListener("resize", checkScreenSize); // Actualizează la resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
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
  

  
  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design and development to client communication and support.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the competition.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: 'Reliability',
      description: 'We deliver on our promises, meeting deadlines and exceeding expectations to build long-lasting client relationships.'
    }
  ]
  
  return (
    <div className={isMobile ? "pt-20" : "pt-19"}>
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden" data-scroll-section>
  {/* Aurora ca fundal */}
  <Aurora
    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
    blend={0.5}
    amplitude={5.0}
    speed={0.5}
    className="absolute inset-0 w-full h-full z-0"
    style={{ top: "150px", zIndex: "-1" }} // Mută și pune sub conținut
  />

  {/* Conținutul principal */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        About <span className="text-gradient">JustBetterSites</span>
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        We're a team of passionate digital experts dedicated to creating exceptional web experiences that drive business growth.
      </motion.p>
    </div>
  </div>
</section>
      {/* Mission Section */}
      <section 
        ref={missionRef} 
        className="py-24 bg-light min-h-[400px]"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 
                className="text-4xl font-bold mb-6"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At JustBetterSites, our mission is to empower businesses with innovative digital solutions that drive growth, enhance user engagement, and deliver measurable results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that exceptional digital experiences are built on a foundation of deep understanding, technical excellence, and creative innovation.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experts works collaboratively with clients to transform their vision into reality, creating digital solutions that not only meet but exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Our team collaborating" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl">
                <p className="text-2xl font-bold">10+ Years</p>
                <p>of industry experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
     
      <TechnologiesSection onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />




      
      {/* Values Section */}
      <section 
        ref={valuesRef} 
        className="py-24 bg-light"
        data-scroll-section
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-4xl font-bold mb-4"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl hover-lift"
                variants={fadeInUpVariants}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-white" data-scroll-section>
  <div className="container mx-auto px-6">
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Projects Completed */}
      <div className="p-8" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className="text-5xl font-bold text-primary mb-2">
          <CountUp from={0} to={200} separator="," duration={2} className="count-up-text" />
        </p>
        <p className="text-xl text-gray-600">Projects Completed</p>
      </div>

      {/* Happy Clients */}
      <div className="p-8" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className="text-5xl font-bold text-primary mb-2">
          <CountUp from={0} to={50} separator="," duration={2} className="count-up-text" />
        </p>
        <p className="text-xl text-gray-600">Happy Clients</p>
      </div>

      {/* Team Members */}
      <div className="p-8" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className="text-5xl font-bold text-primary mb-2">
          <CountUp from={0} to={15} separator="," duration={2} className="count-up-text" />
        </p>
        <p className="text-xl text-gray-600">Team Members</p>
      </div>

      {/* Years of Experience */}
      <div className="p-8" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className="text-5xl font-bold text-primary mb-2">
          <CountUp from={0} to={10} separator="," duration={2} className="count-up-text" />
        </p>
        <p className="text-xl text-gray-600">Years of Experience</p>
      </div>
    </motion.div>
  </div>
</section>
      
      {/* CTA Section */}
      <section className="py-24 bg-light" data-scroll-section>
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
              Join Our Team
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings and apply today.
            </p>
            <motion.a 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              View Openings
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage