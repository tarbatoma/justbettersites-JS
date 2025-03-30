import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = ({ onMouseEnter, onMouseLeave }) => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation();

  return (
    <motion.footer 
      className="bg-light py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      data-scroll-section
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-bold mb-6 text-primary"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              JustBetterSites
            </h3>
            <p className="text-gray-600 mb-6">
            {t('footer.slogan')}
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.25 3L10.75 10.25L4 21H6.5L11.5 13.75L16.75 21H20L13.25 12.25L20 3H17.5L12.5 9.25L7.5 3H4.25Z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.41.41.61.23 1.05.51 1.51.97.46.46.74.9.97 1.51.17.45.35 1.24.41 2.41.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.41a4.562 4.562 0 01-.97 1.51 4.562 4.562 0 01-1.51.97c-.45.17-1.24.35-2.41.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.41-.41a4.562 4.562 0 01-1.51-.97 4.562 4.562 0 01-.97-1.51c-.17-.45-.35-1.24-.41-2.41C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.056-1.17.24-1.96.41-2.41a4.562 4.562 0 01.97-1.51 4.562 4.562 0 011.51-.97c.45-.17 1.24-.35 2.41-.41C8.616 2.212 9 2.2 12 2.2zm0 1.6c-3.157 0-3.52.012-4.76.07-1.02.05-1.574.218-1.94.36-.49.18-.84.4-1.22.78-.38.38-.6.73-.78 1.22-.142.366-.31.92-.36 1.94-.058 1.24-.07 1.603-.07 4.76s.012 3.52.07 4.76c.05 1.02.218 1.574.36 1.94.18.49.4.84.78 1.22.38.38.73.6 1.22.78.366.142.92.31 1.94.36 1.24.058 1.603.07 4.76.07s3.52-.012 4.76-.07c1.02-.05 1.574-.218 1.94-.36.49-.18.84-.4 1.22-.78.38-.38.6-.73.78-1.22.142-.366.31-.92.36-1.94.058-1.24.07-1.603.07-4.76s-.012-3.52-.07-4.76c-.05-1.02-.218-1.574-.36-1.94-.18-.49-.4-.84-.78-1.22a2.938 2.938 0 00-1.22-.78c-.366-.142-.92-.31-1.94-.36-1.24-.058-1.603-.07-4.76-.07zm0 4.2a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.127 22 17 22 12z" />
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3A4.5 4.5 0 0021 7.5c0 .25-.02.49-.05.73a7.5 7.5 0 01-4.38-2.01v7.51c0 3.46-2.79 6.25-6.25 6.25S4.07 17.19 4.07 13.75s2.79-6.25 6.25-6.25h.18v2.31a3.94 3.94 0 00-.43-.03c-1.99 0-3.62 1.63-3.62 3.62s1.63 3.62 3.62 3.62 3.62-1.63 3.62-3.62V3H16.5z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-start space-y-4 mt-6">
  <button
    onClick={() => window.open('https://reclamatiisal.anpc.ro/', '_blank')}
    className="hover:opacity-80 transition-opacity"
  >
    <img
      src="/anpc1.png"
      alt="ANPC Logo 1"
      className="w-24 md:w-28 rounded-lg shadow"
    />
  </button>
  <button
    onClick={() => window.open('https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage', '_blank')}
    className="hover:opacity-80 transition-opacity"
  >
    <img
      src="/anpc2.png"
      alt="ANPC Logo 2"
      className="w-24 md:w-28 rounded-lg shadow"
    />
  </button>
</div>

          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 
              className="text-lg font-semibold mb-6"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
            {t('footer.services')}            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                {t('footer.webDev')}       
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                {t('footer.mobileApps')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                {t('footer.ecommerce')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {t('footer.uiux')}
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 
              className="text-lg font-semibold mb-6"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
{t('footer.company')}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
{t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
{t('footer.ourTeam')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
{t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
{t('footer.contact')}
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 
              className="text-lg font-semibold mb-6"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
{t('footer.contactUs')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-600">
                {t('footer.location')}
                                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a 
                  href="mailto:info@justbettersites.com" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  office@justbettersites.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  +40 (720) 726 619
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} JustBetterSites.  {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="/privacypolicy" 
              className="text-sm text-gray-600 hover:text-primary transition-colors"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
             {t('footer.privacy')}
            </a>
            <a 
              href="/termsandconditions" 
              className="text-sm text-gray-600 hover:text-primary transition-colors"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
{t('footer.terms')}
            </a>
            <a 
              href="/cookiepolicy" 
              className="text-sm text-gray-600 hover:text-primary transition-colors"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
{t('footer.cookies')}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer