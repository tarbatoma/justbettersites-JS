import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import BlurText from '../Effects/BlurText'
import { Link } from 'react-router-dom'

// Imagine locală (exemplu)
import den1 from '../assets/dental/den1.png'

// Componenta pentru particule animate în fundal
const ParticlesBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
          }}
        />
      ))}
    </div>
  );
};

// Componenta pentru animația în secțiunea Hero
const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#e1b5b3]/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-[#c79997]/40 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
};

// Componenta pentru card de testimonial
const TestimonialCard = ({ quote, author, company, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <svg
        className="w-8 h-8 text-[#e1b5b3] mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </motion.div>
  );
};

// Componenta pentru număr animat (statistici)
const AnimatedStat = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.span
        className="text-4xl sm:text-5xl font-bold text-[#c79997]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        {number}
      </motion.span>
      <p className="text-white font-medium mt-2">{label}</p>
    </motion.div>
  );
};

// Componenta optimizată pentru cardurile de proiect
const ProjectCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Imaginea cu overlay */}
      <motion.div
        className="relative overflow-hidden aspect-video"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#a78783]/90 via-[#a78783]/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Conținutul cardului */}
      <div className="p-5 flex flex-col flex-grow">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#c79997] transition-colors"
          animate={{ color: isHovered ? '#c79997' : '#1f2937' }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.tech.map((tech, i) => (
            <motion.span
              key={i}
              className="px-2 py-1 bg-[#f5e9e8] text-[#a78783] rounded-full text-xs font-medium"
              whileHover={{ scale: 1.05, backgroundColor: '#e1b5b3', color: 'white' }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <Link
          to={`/projects/${item.slug}`}
          className="inline-flex items-center justify-between px-4 py-2 bg-[#e1b5b3] text-white rounded-lg font-medium text-sm hover:bg-[#c79997] transition-colors group mt-auto"
        >
          <span>View Case Study</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="transition-all duration-300"
          >
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.span>
        </Link>
      </div>

      {/* Etichetă categorie */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#a78783] shadow-sm">
        {item.category.toUpperCase()}
      </div>
    </motion.div>
  );
};

// Componenta pentru ecranul de loading
const LoadingScreen = ({ isLoaded }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#e1b5b3]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1, pointerEvents: isLoaded ? 'none' : 'auto' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative"
      >
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50 10 C 50 10, 10 30, 10 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 90 50 C 90 30, 50 10, 50 10 Z"
            stroke="white"
            strokeWidth="5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <motion.div
          className="mt-6 text-white font-bold text-xl text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Welcome to Our Portfolio
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Exemplu de testimoniale
const testimonialsData = [
  {
    quote: 'Working with them was a delight. The end product exceeded our expectations!',
    author: 'John Doe',
    company: 'ABC Corp',
  },
  {
    quote: 'Their attention to detail and creative input made all the difference.',
    author: 'Jane Smith',
    company: 'XYZ Ltd',
  },
  {
    quote: 'We saw a 50% increase in user engagement after launching the new platform.',
    author: 'Mark Johnson',
    company: 'Startup Inc',
  },
];

// Componenta principală
const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  const heroRef = useRef(null);
  const portfolioRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Transformări optimizate cu valori limitate
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Proiectele din portofoliu - adăugate mai multe proiecte pentru exemplificare
  const portfolioItems = [
    {
      category: 'web',
      title: 'Dental Client Website',
      description:
        'Modern website for a dental clinic showcasing services, team, and online booking features.',
      image: den1,
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      slug: 'dental-client',
    },
    {
      category: 'mobile',
      title: 'Health Tracking App',
      description:
        'Mobile application for tracking health metrics with personalized insights and recommendations.',
      image: den1, // doar exemplu
      tech: ['React Native', 'TypeScript', 'Firebase'],
      slug: 'health-app',
    },
    {
      category: 'design',
      title: 'Brand Identity System',
      description:
        'Complete brand identity system including logo, color palette, typography, and usage guidelines.',
      image: den1, // doar exemplu
      tech: ['Branding', 'Logo Design', 'Style Guide'],
      slug: 'brand-identity',
    },
    {
      category: 'ai',
      title: 'Customer Service Bot',
      description:
        'AI-powered chatbot for automated customer support with natural language processing capabilities.',
      image: den1, // doar exemplu
      tech: ['Machine Learning', 'NLP', 'Python'],
      slug: 'ai-chatbot',
    },
    {
      category: 'web',
      title: 'E-commerce Platform',
      description:
        'Full-featured online store with product catalog, shopping cart, and secure checkout process.',
      image: den1, // doar exemplu
      tech: ['Next.js', 'Stripe', 'MongoDB'],
      slug: 'ecommerce-platform',
    },
    {
      category: 'design',
      title: 'UI/UX Design System',
      description:
        'Comprehensive design system with reusable components and interaction patterns for web applications.',
      image: den1, // doar exemplu
      tech: ['Figma', 'Design Systems', 'Prototyping'],
      slug: 'design-system',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design', 'ai'];

  // Filtrarea proiectelor după categorie
  const filteredProjects = portfolioItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Simulăm încărcarea paginii
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />

      <div className="min-h-screen bg-[#faf7f7] relative overflow-hidden">
        {/* Secțiunea de erou */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#e1b5b3] via-[#d9a7a4] to-[#c79997]"
            style={{ scale: heroScale, opacity: heroOpacity }}
          />

          {/* Elemente de fundal abstracte */}
          <HeroAnimation />
          <ParticlesBackground />

          {/* Overlay pentru textură */}
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIEECk5MN6UiwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABNklEQVRo3u3aMUoDQRTG8f+uIUW0EQtbD+ABLLyBR/AAQbyAYGlhY+kFPICFpY2dRfBjEyFhCZmsM8XO+8FrJ7Mz7zfDTBIlSZIkbUQHXAFPwAcwA96BCTACupbN6v6O4JHFPK7bMJu4I1fAt4n821esDYfZxNDqDuq2NJoUZpBUyHw1TMqQGLSYIXE2oZDwPrEPvC4Yk9JnTGxq1Rae/wQc/2NIRIkYZo4+yBgSdRMXGUMa3ZHfhsbGhkaCkO7v5dZbfBpqGBoJQqI+3SaGRoKQaJnfVZJDI0FIbDvzHCVrGhrrDomzZHI1p+tNX8GvAqfALTDNVMY0U9k3wAlwsGrxbvnfJEmSJLVQxPeI3IcmxPeIzDdsjO+R9PdIxGdIzHdszLff9PdIxGdIzPdszLdvkiRJkjZjBtDk/inUVm76AAAAAElFTkSuQmCC')] opacity-10" />

          {/* Forme geometrice flotante */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute rounded-full bg-white/10 backdrop-blur-md"
              style={{ width: 150, height: 150, left: '10%', top: '20%' }}
              animate={{
                y: [0, 30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute rounded-full border-2 border-white/30"
              style={{ width: 100, height: 100, right: '15%', bottom: '30%' }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, -180, -360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute rounded-lg bg-white/10 backdrop-blur-md"
              style={{ width: 80, height: 80, left: '20%', bottom: '20%' }}
              animate={{
                x: [0, 30, 0],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6 rounded-full px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
            >
              Crafting Digital Excellence
            </motion.div>

            <BlurText
              text="Digital Masterpieces"
              delay={150}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            />

            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where creativity meets innovation to transform your digital presence
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={scrollToPortfolio}
                className="inline-flex items-center px-6 py-3 bg-white text-[#c79997] rounded-full shadow-md hover:bg-[#f5e9e8] transition-colors w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.button>

              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

{/* Scroll indicator */}
<motion.div
  className="absolute bottom-8 w-full flex justify-center"
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  <button
    onClick={scrollToPortfolio}
    className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
  >
    <span className="mb-2 text-sm font-medium">Scroll to Explore</span>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
</motion.div>
        </section>

        {/* Statistici highlight */}
        <section className="relative py-16 bg-gradient-to-r from-[#c79997] to-[#e1b5b3]">
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIEECk5MN6UiwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABNklEQVRo3u3aMUoDQRTG8f+uIUW0EQtbD+ABLLyBR/AAQbyAYGlhY+kFPICFpY2dRfBjEyFhCZmsM8XO+8FrJ7Mz7zfDTBIlSZIkbUQHXAFPwAcwA96BCTACupbN6v6O4JHFPK7bMJu4I1fAt4n821esDYfZxNDqDuq2NJoUZpBUyHw1TMqQGLSYIXE2oZDwPrEPvC4Yk9JnTGxq1Rae/wQc/2NIRIkYZo4+yBgSdRMXGUMa3ZHfhsbGhkaCkO7v5dZbfBpqGBoJQqI+3SaGRoKQaJnfVZJDI0FIbDvzHCVrGhrrDomzZHI1p+tNX8GvAqfALTDNVMY0U9k3wAlwsGrxbvnfJEmSJLVQxPeI3IcmxPeIzDdsjO+R9PdIxGdIzHdszLff9PdIxGdIzPdszLdvkiRJkjZjBtDk/inUVm76AAAAAElFTkSuQmCC')] opacity-10" />

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStat number="100+" label="Projects Completed" delay={0.1} />
              <AnimatedStat number="50+" label="Happy Clients" delay={0.2} />
              <AnimatedStat number="5+" label="Years Experience" delay={0.3} />
              <AnimatedStat number="15+" label="Industry Awards" delay={0.4} />
            </div>
          </div>
        </section>

        {/* Secțiunea de portofoliu */}
        <section ref={portfolioRef} id="portfolio" className="py-16 md:py-24">
          {/* Titlu secțiune */}
          <div className="container mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-[#c79997] uppercase tracking-wider text-sm font-semibold">
                Our Latest Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mt-2 mb-3">
                Inspiring Projects
              </h2>
              <div className="w-20 h-1 bg-[#e1b5b3] mx-auto mb-6"></div>
              <p className="text-center text-gray-600 max-w-2xl mx-auto">
                Explore our carefully crafted digital solutions across various industries and
                technologies
              </p>
            </motion.div>
          </div>

          {/* Secțiunea de filtre */}
          <div className="container mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-all font-medium ${
                    selectedCategory === category
                      ? 'bg-[#e1b5b3] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-[#f5e9e8]'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Grid-ul cu proiectele */}
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {isLoaded &&
                  filteredProjects.map((item, index) => (
                    <ProjectCard key={index} item={item} index={index} />
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Mesaj dacă nu sunt proiecte */}
            {isLoaded && filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 px-4 py-2 bg-[#e1b5b3] text-white rounded-lg hover:bg-[#c79997] transition-colors"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Secțiunea de testimoniale */}
        <section className="py-16 bg-[#faf7f7]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                What Our Clients Say
              </h2>
              <div className="w-20 h-1 bg-[#e1b5b3] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We value our clients’ feedback and strive to exceed their expectations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialsData.map((testi, i) => (
                <TestimonialCard
                  key={i}
                  quote={testi.quote}
                  author={testi.author}
                  company={testi.company}
                  delay={0.1 * i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Secțiunea CTA finală */}
        <section className="relative py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e1b5b3] to-[#c79997]" />

          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIEECk5MN6UiwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABNklEQVRo3u3aMUoDQRTG8f+uIUW0EQtbD+ABLLyBR/AAQbyAYGlhY+kFPICFpY2dRfBjEyFhCZmsM8XO+8FrJ7Mz7zfDTBIlSZIkbUQHXAFPwAcwA96BCTACupbN6v6O4JHFPK7bMJu4I1fAt4n821esDYfZxNDqDuq2NJoUZpBUyHw1TMqQGLSYIXE2oZDwPrEPvC4Yk9JnTGxq1Rae/wQc/2NIRIkYZo4+yBgSdRMXGUMa3ZHfhsbGhkaCkO7v5dZbfBpqGBoJQqI+3SaGRoKQaJnfVZJDI0FIbDvzHCVrGhrrDomzZHI1p+tNX8GvAqfALTDNVMY0U9k3wAlwsGrxbvnfJEmSJLVQxPeI3IcmxPeIzDdsjO+R9PdIxGdIzHdszLff9PdIxGdIzPdszLdvkiRJkjZjBtDk/inUVm76AAAAAElFTkSuQmCC')] opacity-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <BlurText
              text="Ready to Elevate Your Brand?"
              delay={150}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
            />

            <motion.p
              className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover how our team can transform your ideas into engaging digital experiences that
              drive success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#c79997] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Browse More Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
