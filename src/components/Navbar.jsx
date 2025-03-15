// Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ReactDOM from 'react-dom'
import logo from '../assets/logo.png'; // Asigură-te că noul logo este în assets

const Navbar = ({ onMouseEnter, onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Grupare Logo + Nume Site */}
          <Link to="/" className="flex items-center space-x-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-primary">JustBetterSites</span>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav className="hidden md:flex space-x-8" initial="hidden" animate="visible" variants={navVariants}>
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link to={link.path} className={`text-xl font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-800'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1.5 z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <motion.span className="w-6 h-0.5 bg-black block" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-0.5 bg-black block" animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-0.5 bg-black block" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} transition={{ duration: 0.3 }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Renderizat prin Portal */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 bg-white z-[10000] flex flex-col items-center justify-center" initial="closed" animate="open" exit="closed">
              <button className="absolute top-4 right-4 text-3xl font-bold" onClick={() => setIsOpen(false)} aria-label="Close menu">&times;</button>
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
                    <Link to={link.path} className={`text-2xl font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-800'}`} onClick={() => setIsOpen(false)}>
                      {link.name}
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
