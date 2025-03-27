import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlurText from '../Effects/BlurText'
import Balatro from '../Effects/Balatro'

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  const portfolioItems = [
    {
      category: 'web',
      title: 'E-commerce Platform',
      description: 'Custom online store with AI recommendations',
      image: '/projects/ecommerce.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      slug: 'ecommerce-platform'
    },
    {
      category: 'mobile',
      title: 'Fitness Mobile App',
      description: 'Cross-platform workout tracking application',
      image: '/projects/fitness-app.jpg',
      tech: ['React Native', 'Firebase'],
      slug: 'fitness-app'
    },
    {
      category: 'ai',
      title: 'AI Chat Interface',
      description: 'Natural language processing chatbot',
      image: '/projects/ai-chat.jpg',
      tech: ['Python', 'TensorFlow', 'React'],
      slug: 'ai-chat'
    },
    {
      category: 'design',
      title: 'UX Dashboard',
      description: 'Analytics dashboard with real-time data',
      image: '/projects/dashboard.jpg',
      tech: ['Figma', 'Sketch', 'Illustrator'],
      slug: 'ux-dashboard'
    },
    {
      category: 'web',
      title: 'Corporate Portal',
      description: 'Enterprise resource planning system',
      image: '/projects/erp.jpg',
      tech: ['Angular', '.NET', 'SQL'],
      slug: 'corporate-portal'
    },
    {
      category: 'mobile',
      title: 'Travel Planner',
      description: 'Trip organization mobile application',
      image: '/projects/travel-app.jpg',
      tech: ['Flutter', 'Firebase', 'Google Maps API'],
      slug: 'travel-planner'
    }
  ]

  const categories = ['all', 'web', 'mobile', 'design', 'ai']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-95"
          style={{ scale }}
        >
          <Balatro isRotate={false} mouseInteraction={false} pixelFilter={1200} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurText
              text="Our Digital Masterpieces"
              delay={150}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            />
            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Exploring the intersection of technology and creativity through our latest innovations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <motion.div 
        className="sticky top-0 bg-gray-50 z-20 py-8 shadow-sm"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-colors ${
                  selectedCategory === category 
                  ? 'bg-primary text-white shadow-lg' 
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

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="relative group h-80">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 font-light">{item.description}</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                  <motion.button 
                    className="text-primary font-semibold hover:underline flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    onClick={() => window.location = `/projects/${item.slug}`}
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

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-blue-600 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <BlurText
            text="Start Your Digital Journey"
            delay={150}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          />
          <motion.p 
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your ideas into exceptional digital experiences?
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
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