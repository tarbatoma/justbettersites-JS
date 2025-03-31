import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
// Importă efectele personalizate pentru text și fundal
import BlurText from '../Effects/BlurText'
import Balatro from '../Effects/Balatro'

// Imagine locală
import den1 from '../assets/dental/den1.png'

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Proiectele din portofoliu
  const portfolioItems = [
    {
      category: 'web',
      title: 'Dental Client',
      description: 'Website for a dental client showcasing a custom online store and tailored design.',
      image: den1,
      tech: ['ReactJs', 'Javascript', 'Tailwind'],
      slug: 'dental-client'
    },
    {
      category: 'web',
      title: 'Dental Client',
      description: 'Website for a dental client showcasing a custom online store and tailored design.',
      image: den1,
      tech: ['ReactJs', 'Javascript', 'Tailwind'],
      slug: 'dental-client'
    }
  ]

  const categories = ['all', 'web', 'mobile', 'design', 'ai']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Secțiunea de erou */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-600 to-blue-500 opacity-90"
          style={{ scale }}
        >
          <Balatro isRotate={false} mouseInteraction={false} pixelFilter={1200} />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text="Our Digital Masterpieces"
              delay={150}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            />
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Exploring the intersection of technology and creativity through our latest innovations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Secțiunea de filtre */}
      <motion.div 
        className="sticky top-0 bg-gray-50 z-20 py-6 shadow-sm"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors font-semibold ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid-ul cu proiectele */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {portfolioItems
            .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
            .map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Container pentru imagine și overlay */}
                <div className="relative group overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-1 bg-white/20 text-white rounded-full text-xs sm:text-sm backdrop-blur-md shadow-md"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 drop-shadow">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 font-light drop-shadow">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Butonul "View Case Study" */}
                <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white">
                  <motion.button 
                    className="text-purple-600 font-semibold hover:underline flex items-center gap-2 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      if(item.slug === 'dental-client'){
                        window.location = '/projects/dental-client'
                      } else {
                        window.location = `/projects/${item.slug}`
                      }
                    }}
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Secțiunea CTA */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BlurText
            text="Start Your Digital Journey"
            delay={150}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
          />
          <motion.p 
            className="text-base sm:text-lg text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your ideas into exceptional digital experiences?
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.a>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Balatro isRotate={true} mouseInteraction={false} pixelFilter={800} />
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
