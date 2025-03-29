import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import BlurText from '../Effects/BlurText';
import { useTranslation } from 'react-i18next';

const MarketingWebDesign = ({ onMouseEnter, onMouseLeave }) => {
  const { t } = useTranslation();
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
      title: t('homepage.marketing.digitalMarketing.title'),
      description: t('homepage.marketing.digitalMarketing.description'),
      slug: "digital-marketing"
    },
    {
      icon: "🎨",
      title: t('homepage.marketing.creativeBranding.title'),
      description: t('homepage.marketing.creativeBranding.description'),
      slug: "creative-branding"
    },
    {
      icon: "🖥️",
      title: t('homepage.marketing.webDesign.title'),
      description: t('homepage.marketing.webDesign.description'),
      slug: "web-design"
    },
    {
      icon: "📱",
      title: t('homepage.marketing.socialMedia.title'),
      description: t('homepage.marketing.socialMedia.description'),
      slug: "social-media-management"
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
            text={t('homepage.marketing.title')}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold mb-4 text-primary"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('homepage.marketing.description')}
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
              className="bg-white p-8 rounded-2xl shadow-md hover-lift flex flex-col justify-between"
              variants={fadeInUpVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="text-right mt-4">
                <Link 
                  to={`/services`} 
                  className="text-primary font-semibold hover:underline"
                >
                  {t('homepage.servicesIntro.viewMore') || 'View more ...'}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingWebDesign;