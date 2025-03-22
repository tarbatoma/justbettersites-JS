import { motion } from 'framer-motion'

const CTASection = ({ onMouseEnter, onMouseLeave }) => {
  return (
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
  )
}

export default CTASection
