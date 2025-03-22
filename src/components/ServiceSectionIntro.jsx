import { motion } from 'framer-motion'
import React from 'react';

const SectionIntro = ({ onMouseEnter, onMouseLeave }) => {
  return (
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
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of services designed to help your business thrive in the digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionIntro
