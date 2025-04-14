import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const ProjectTemplate = ({
  title,
  subtitle,
  desktopImages,
  mobileImages,
  technologies = [],
  clientName,
  projectType,
  metricsData = [],
  growthData = [],
  satisfactionData = [],
  projectLayout = false  // prop care activează stiluri și logica de proiect
}) => {
  // Oricare ar fi pagina, facem scroll la top la montare
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dacă projectLayout nu este activ, returnăm un layout foarte simplu (ex. homepage)
  if (!projectLayout) {
    return (
      <div className="default-layout p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    );
  }

  // ---- Logica specifică paginilor de proiect ----

  // Selectare Desktop vs. Mobile
  const [viewMode, setViewMode] = useState('desktop');
  const images = viewMode === 'desktop' ? desktopImages : mobileImages;
  const heroImage = images[0]; // Prima imagine, folosită drept "hero"

  // Detectăm dacă ecranul este mic (pentru a afișa un carusel orizontal) sau nu
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Logica pentru afișarea imaginilor din galerie
  const [visibleImages, setVisibleImages] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    // Excludem prima imagine (hero)
    setVisibleImages(images.slice(1));
  }, [viewMode, images]);

  const loadMoreImages = useCallback(() => {
    const startIdx = visibleImages.length + 1; // +1 deoarece prima imagine e hero
    const endIdx = startIdx + 3;
    const newImages = images.slice(startIdx, endIdx);
    setVisibleImages(prev => [...prev, ...newImages]);
    setPage(prev => prev + 1);
  }, [visibleImages.length, images]);

  // Lightbox logic
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (index) => {
    setLightboxImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // dezactivează scroll-ul în spate
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // reactivează scroll-ul
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    const total = visibleImages.length;
    const newIndex = (lightboxImage + direction + total) % total;
    setLightboxImage(newIndex);
  };

  // Împărțim titlul pe baza separatorului " - " dacă există
  const titleParts = title.includes(' - ') ? title.split(' - ') : [title];

  // Drag scroll logic (pentru vizualizare orizontală pe ecrane mici)
  const galleryRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Swipe logic pentru lightbox (pentru mobil)
  const [touchStartX, setTouchStartX] = useState(null);
  const SWIPE_THRESHOLD = 50;

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX;
    if (diff > SWIPE_THRESHOLD) {
      // Swipe right
      navigateLightbox(-1);
      setTouchStartX(null);
    } else if (diff < -SWIPE_THRESHOLD) {
      // Swipe left
      navigateLightbox(1);
      setTouchStartX(null);
    }
  };
  const handleTouchEnd = () => setTouchStartX(null);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#fef0f0]">
      {/* HERO SECTION */}
      <div className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fef0f0] via-[#fbe4e4] to-[#f9d9d9] pointer-events-none" />
        <motion.div
          className="container mx-auto px-4 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Coloană text */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0"
              variants={itemVariants}
            >
              <h1 className="text-[#a78783] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
                {titleParts.map((part, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    {part}
                  </div>
                ))}
              </h1>
              <p className="text-[#a78783]/70 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                {subtitle}
              </p>
              {technologies.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-1 text-[#a78783] text-xs sm:text-sm rounded-full ${
                        i % 2 === 0 ? 'bg-white border border-gray-200' : 'bg-[#fbe9e9]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-2 gap-8 mb-8 max-w-md mx-auto md:mx-0 mt-6">
                <div className="text-center md:text-left">
                  <p className="text-[#a78783]/70 text-xs sm:text-sm mb-2">Industry</p>
                  <p className="text-[#a78783] font-semibold text-xs sm:text-sm md:text-base">
                    {clientName}
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#a78783]/70 text-xs sm:text-sm mb-2">Project Type</p>
                  <p className="text-[#a78783] font-semibold text-xs sm:text-sm md:text-base">
                    {projectType}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Coloană imagine (Hero) */}
            <motion.div
              className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0 flex justify-center"
              variants={itemVariants}
            >
              {heroImage && (
                <img
                  src={heroImage}
                  alt={title}
                  className="w-auto h-auto max-w-full"
                  style={{ maxWidth: '90%', maxHeight: '350px' }}
                  loading="eager"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* GALLERY SECTION */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#a78783] mb-4">Project Gallery</h2>
          <p className="text-center text-[#a78783]/70 text-sm sm:text-base md:text-lg mb-8">
            Explore the screenshots from the completed project
          </p>

          {/* Selector Desktop / Mobile (rămâne la fel ca în codul vechi) */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full overflow-hidden shadow-md">
              <button
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-[#e1b5b3] text-white'
                    : 'bg-white text-[#a78783] border border-[#e1b5b3]'
                }`}
                style={{ borderRadius: '9999px 0 0 9999px' }}
              >
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Desktop View
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-[#e1b5b3] text-white'
                    : 'bg-white text-[#a78783] border border-[#e1b5b3]'
                }`}
                style={{ borderRadius: '0 9999px 9999px 0', borderLeft: 'none' }}
              >
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Mobile View
              </button>
            </div>
          </div>

          {/* Afișare imagini în grilă (pentru ecrane mari) sau scroll orizontal (ecrane mici) */}
          {isSmallScreen ? (
            <div
              ref={galleryRef}
              className="overflow-x-auto pb-6 -mx-4 px-4 cursor-grab"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex space-x-4" style={{ minWidth: 'min-content' }}>
                {images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Lightbox modal */}
          {lightboxOpen && (
            <div
              className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Buton X (închidere) */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Săgeată stânga (dacă nu e prima imagine) */}
              {lightboxImage > 0 && (
                <button
                  className="absolute left-6 text-white p-2 rounded-full bg-black/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox(-1);
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Săgeată dreapta (dacă nu e ultima imagine) */}
              {lightboxImage < visibleImages.length - 1 && (
                <button
                  className="absolute right-6 text-white p-2 rounded-full bg-black/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox(1);
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Container pentru imagine */}
              <div
                className="max-w-6xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={visibleImages[lightboxImage]}
                  alt="Project image detail"
                  className="max-w-full max-h-[80vh] object-contain bg-white rounded-lg p-2"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/70 py-2 text-xs sm:text-sm font-medium">
                  {lightboxImage + 1} / {visibleImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT PROJECT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#a78783] mb-8">About Project</h2>
          <p className="text-lg text-center text-[#a78783]/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            We created for {clientName} a modern and attractive digital experience that reflects the
            quality of their services. The website facilitates client interaction and provides an
            intuitive interface optimized for both desktop and mobile devices.
          </p>
          {metricsData.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metricsData.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#e1b5b3]">{metric.value}</div>
                  <div className="text-sm mt-2 text-[#a78783]/70">{metric.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CHARTS SECTION */}
      {(growthData.length > 0 || satisfactionData.length > 0) && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#a78783] mb-4">Data and Results</h2>
            <p className="text-center text-[#a78783]/70 mb-12 max-w-3xl mx-auto">
              Our solution has brought significant improvements to the website's performance.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {growthData.length > 0 && (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center text-[#a78783]">Traffic Growth</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="before"
                        name="Before"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="after"
                        name="After"
                        stroke="#e1b5b3"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              {satisfactionData.length > 0 && (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center text-[#a78783]">Client Satisfaction</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={satisfactionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {satisfactionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="py-16 bg-[#a78783]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to work on your project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into an extraordinary digital experience!
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block text-[#a78783]"
          >
            Talk to us
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
