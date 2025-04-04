import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import { useRef } from 'react'

const Navbar = ({ onMouseEnter, onMouseLeave }) => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 1024)
  const location = useLocation()
  const dropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
  
    const handleScroll = () => {
      if (showDropdown) setShowDropdown(false)
    }
  
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showDropdown])
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobileMenu(window.innerWidth < 1024)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'contact', path: '/contact' }
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-primary">JustBetterSites</span>
          </Link>

          <div className="flex items-center space-x-10">
            {/* Language Dropdown - Desktop (only if not mobile) */}
            {!isMobileMenu && !isOpen && (
              <div className="relative hidden lg:block ref={dropdownRef}">
                <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                  <img
                    src={i18n.language === 'ro' ? '/ro.png' : '/eng.png'}
                    alt="flag"
                    className="w-5 h-5 mr-2 rounded-sm"
                  />
                  {i18n.language.toUpperCase()} ▼
                </button>
                {showDropdown && (
                  <div className="absolute mt-2 w-28 bg-white border border-gray-300 rounded shadow-md z-50">
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en')
                        setShowDropdown(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img src="/eng.png" alt="EN" className="w-5 h-5" /> EN
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ro')
                        setShowDropdown(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img src="/ro.png" alt="RO" className="w-5 h-5" /> RO
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Desktop Navigation */}
            {!isMobileMenu && (
              <motion.nav className="hidden lg:flex space-x-8" initial="hidden" animate="visible" variants={navVariants}>
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`text-xl font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-800'}`}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      {t(link.name)}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            )}

            {/* Mobile Menu Button */}
            {isMobileMenu && (
              <button className="flex flex-col space-y-1.5 z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <motion.span className="w-6 h-0.5 bg-black block" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} transition={{ duration: 0.3 }} />
                <motion.span className="w-6 h-0.5 bg-black block" animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.3 }} />
                <motion.span className="w-6 h-0.5 bg-black block" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} transition={{ duration: 0.3 }} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-[10000] flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button className="absolute top-4 right-4 text-3xl font-bold" onClick={() => setIsOpen(false)} aria-label="Close menu">&times;</button>

              {/* Language Dropdown - Mobile */}
              <div className="relative mb-6 ref={dropdownRef}">
                <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center text-lg font-medium text-gray-700 hover:text-primary">
                  <img
                    src={i18n.language === 'ro' ? '/ro.png' : '/eng.png'}
                    alt="flag"
                    className="w-5 h-5 mr-2 rounded-sm"
                  />
                  {i18n.language.toUpperCase()} ▼
                </button>
                {showDropdown && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-white border border-gray-300 rounded shadow-md z-50">
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en')
                        setShowDropdown(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img src="/eng.png" alt="EN" className="w-5 h-5" /> EN
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ro')
                        setShowDropdown(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img src="/ro.png" alt="RO" className="w-5 h-5" /> RO
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-800'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(link.name)}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default Navbar
