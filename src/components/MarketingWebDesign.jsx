import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlurText from '../Effects/BlurText';

const MarketingWebDesign = ({ onMouseEnter, onMouseLeave }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  const services = [
    {
      icon: "📢",
      title: "Digital Marketing",
      description: "Boost your online presence with data-driven campaigns, SEO, and content strategies.",
    },
    {
      icon: "🎨",
      title: "Creative Branding",
      description: "Craft a unique brand identity with stunning visuals, logos, and digital assets.",
    },
    {
      icon: "🖥️",
      title: "Web Design",
      description: "Modern, user-friendly web designs that enhance customer engagement and conversions.",
    },
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Optimize your brand's social media with targeted strategies and community engagement.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-100" data-scroll-section>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <BlurText
            text="Marketing & Web Design"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => console.log('Animation completed!')}
            className="text-4xl font-bold mb-4 text-primary"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your brand with strategic marketing solutions and visually stunning web designs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover-lift text-center"
              variants={fadeInUpVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingWebDesign;
