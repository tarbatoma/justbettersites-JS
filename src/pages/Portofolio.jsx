import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";
import BlurText from "../Effects/BlurText";
import { Link } from "react-router-dom";

// Local image for the DentalProject card (using dental image)
import den1 from "../assets/dentist/desktop/d1.png";
// Local image for the BeautySalonProject card (using the first desktop image)
import be1 from "../assets/beautySalonPoze/eng/be1.png";

import dmenu1 from "../assets/meniu/desktop/dmenu1.png";

// Component for animated background particles – values calculated once
const ParticlesBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5 + 0.5,
      randomX: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      randomY: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      randomOpacity: [0.2, 0.6, 0.2],
      duration: Math.random() * 20 + 20,
      size: Math.random() * 30 + 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          initial={{
            x: p.initialX,
            y: p.initialY,
            scale: p.scale,
          }}
          animate={{
            x: p.randomX,
            y: p.randomY,
            opacity: p.randomOpacity,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

// Hero section animation component
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
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
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
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
};

// Testimonial Card Component
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

// Animated Stat Component
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
        className="text-4xl sm:text-5xl font-bold text-slate-800"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {number}
      </motion.span>
      <p className="text-slate-600 font-medium mt-2">{label}</p>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Image with Overlay */}
      <motion.div
        className="relative overflow-hidden aspect-video"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ willChange: "transform" }}
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
          style={{ willChange: "opacity" }}
        />
      </motion.div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#c79997] transition-colors"
          animate={{ color: isHovered ? "#c79997" : "#1f2937" }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 bg-[#f5e9e8] text-[#a78783] rounded-full text-xs font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#e1b5b3", color: "white" }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
        <Link
          to={`/projects/${item.slug}`}
          className="inline-flex items-center justify-between px-4 py-2 bg-[#e1b5b3] text-white rounded-lg font-medium text-sm hover:bg-[#c79997] transition-colors group mt-auto"
        >
          <span>View Project</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="transition-all duration-300"
          >
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.span>
        </Link>
      </div>

      {/* Category Tag */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#a78783] shadow-sm">
        {item.category.toUpperCase()}
      </div>
    </motion.div>
  );
};

// Main PortfolioPage Component
const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero section transformations
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Portfolio Items array – now with two project cards:
  // DentalProject and BeautySalonProject.
  // For DentalProject, tech is provided as before.
  // For BeautySalonProject, we now include the technologies used
  const portfolioItems = [
    {
      category: "web",
      title: "DentalProject",
      description:
        "Modern website for a dental clinic showcasing services, team, and online booking features.",
      image: den1,
      tech: ["React", "TailwindCSS", "Framer Motion"],
      slug: "dental-client",
    },
    {
      category: "web",
      title: "BeautySalonProject",
      description:
        "Elegant website for a beauty salon showcasing services, portfolio, and an online appointment booking system.",
      image: be1,  // Uses the first desktop beauty salon image
      tech: ["React", "TailwindCSS", "Framer Motion", "Node.js", "Booking System"],
      slug: "beauty-salon",
    },

    {
      category: "web",
      title: "RestaurantMenuProject",
      description:
        "An interactive online menu for restaurants featuring dynamic layouts and seamless ordering.",
      image: dmenu1,
      tech: ["React", "TailwindCSS", "Framer Motion", "API Integration"],
      slug: "restaurant-menu",
    },
  ];

  const categories = ["all", "web", "mobile", "design", "ai"];
  const filteredProjects = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-[#faf7f7] relative overflow-hidden">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#e1b5b3] via-[#d9a7a4] to-[#c79997]"
            style={{ scale: heroScale, opacity: heroOpacity }}
          />
          <HeroAnimation />
          <ParticlesBackground />
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
              <svg
                className="w-6 h-6"
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
            </button>
          </motion.div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="relative py-16 bg-gradient-to-r from-[#c79997] to-[#e1b5b3]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStat number="100+" label="Projects Completed" delay={0.1} />
              <AnimatedStat number="50+" label="Happy Clients" delay={0.2} />
              <AnimatedStat number="5+" label="Years Experience" delay={0.3} />
              <AnimatedStat number="15+" label="Industry Awards" delay={0.4} />
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section ref={portfolioRef} id="portfolio" className="py-16 md:py-24">
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
                Explore our carefully crafted digital solutions across various industries and technologies
              </p>
            </motion.div>
          </div>

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
                {filteredProjects.map((item, index) => (
                  <ProjectCard key={index} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-4 px-4 py-2 bg-[#e1b5b3] text-white rounded-lg hover:bg-[#c79997] transition-colors"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
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
              {[
                {
                  quote:
                    "Working with them was a delight. The end product exceeded our expectations!",
                  author: "John Doe",
                  company: "ABC Corp",
                },
                {
                  quote:
                    "Their attention to detail and creative input made all the difference.",
                  author: "Jane Smith",
                  company: "XYZ Ltd",
                },
                {
                  quote:
                    "We saw a 50% increase in user engagement after launching the new platform.",
                  author: "Mark Johnson",
                  company: "Startup Inc",
                },
              ].map((testi, i) => (
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

        {/* FINAL CTA SECTION */}
        <section className="relative py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e1b5b3] to-[#c79997]" />
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
              Discover how our team can transform your ideas into engaging digital experiences that drive success.
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

              <motion.a
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Browse More Projects</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
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
