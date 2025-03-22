import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const technologies = [
  { name: 'Vite.js', icon: '/tech-icons/vite.png' },
  { name: 'React.js', icon: '/tech-icons/react.png' },
  { name: 'Vue.js', icon: '/tech-icons/vue.png' },
  { name: 'WordPress', icon: '/tech-icons/wordpress.png' },
  { name: 'PHP', icon: '/tech-icons/php.png' },
  { name: 'CodeIgniter', icon: '/tech-icons/codeigniter.png' },
  { name: 'Swift', icon: '/tech-icons/swift.png' },
  { name: '.NET', icon: '/tech-icons/dotnet.png' },
  { name: 'JavaScript', icon: '/tech-icons/javascript.png' },
  { name: 'HTML', icon: '/tech-icons/html.png' },
  { name: 'CSS', icon: '/tech-icons/css.png' },
  { name: 'Tailwind', icon: '/tech-icons/tailwind.png' },
  { name: 'SCSS', icon: '/tech-icons/scss.png' },
  { name: 'SQL', icon: '/tech-icons/sql.png' },
  { name: 'Python', icon: '/tech-icons/python.png' },
  { name: 'Virtualization on Linux', icon: '/tech-icons/linux.png' },
  { name: 'Server Controls', icon: '/tech-icons/server.png' },
];

const TechnologiesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-white overflow-hidden"
      data-scroll-section
    >
      {/* Blur Background */}
      <div className="absolute inset-0  bg-white/60 pointer-events-none z-0" />

      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use modern and powerful technologies to build scalable, future-ready solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
<motion.img
  src={tech.icon}
  alt={tech.name}
  className="w-16 h-16 object-contain"
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut'
  }}
/>


              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
