import { motion } from 'framer-motion'

const ProcessSection = ({ processInView, processRef, onMouseEnter, onMouseLeave }) => {
  return (
    <section ref={processRef} className="py-24 bg-white" data-scroll-section>
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-24 md:space-y-0">
            {[
              { step: "01", title: "Discovery", delay: 0.1, text: "We start by understanding your business goals, target audience, and project requirements to ensure we deliver a solution that meets your needs." },
              { step: "02", title: "Strategy", delay: 0.2, text: "Our team develops a comprehensive strategy tailored to your specific needs and objectives, outlining the approach, technologies, and timeline." },
              { step: "03", title: "Design", delay: 0.3, text: "We create beautiful, intuitive designs that align with your brand and engage your users, focusing on user experience and visual appeal." },
              { step: "04", title: "Development", delay: 0.4, text: "Our developers build your solution using the latest technologies and best practices, ensuring high-quality, scalable, and maintainable code." },
              { step: "05", title: "Testing", delay: 0.5, text: "Rigorous testing ensures your product is bug-free and performs flawlessly across all devices and browsers, providing a seamless user experience." },
              { step: "06", title: "Launch & Support", delay: 0.6, text: "We handle the deployment process and provide ongoing support to ensure long-term success, helping you adapt and grow as your needs evolve." },
            ].map((item, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 relative">
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      className="md:text-right md:pr-12"
                      initial={{ opacity: 0, x: -50 }}
                      animate={processInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, ease: "easeOut", delay: item.delay }}
                    >
                      <div
                        className="bg-light p-8 rounded-2xl inline-block"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <span className="text-4xl font-bold text-primary">{item.step}</span>
                        <h3 className="text-2xl font-bold mt-4 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </motion.div>
                    <div className="md:pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:pr-12"></div>
                    <motion.div
                      className="md:pl-12"
                      initial={{ opacity: 0, x: 50 }}
                      animate={processInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, ease: "easeOut", delay: item.delay }}
                    >
                      <div
                        className="bg-light p-8 rounded-2xl inline-block"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <span className="text-4xl font-bold text-primary">{item.step}</span>
                        <h3 className="text-2xl font-bold mt-4 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </motion.div>
                  </>
                )}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="md:hidden h-12"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
