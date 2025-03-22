import { motion } from 'framer-motion'

const FAQSection = ({ faqRef, faqInView, faqs, onMouseEnter, onMouseLeave }) => {
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

  return (
    <section ref={faqRef} className="py-24 bg-light" data-scroll-section>
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
  );
};

export default FAQSection;
