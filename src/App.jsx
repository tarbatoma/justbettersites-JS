import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Cursor from './components/Cursor'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const [cursorVariant, setCursorVariant] = useState('default')
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState(null)
  const location = useLocation()
  
  useEffect(() => {
    // Initialize locomotive scroll for smooth scrolling
    let scroll = null
    
    try {
      scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      })
      
      setLocomotiveScrollInstance(scroll)
    } catch (error) {
      console.error("Error initializing Locomotive Scroll:", error)
    }

    // Clean up
    return () => {
      if (scroll) {
        try {
          scroll.destroy()
        } catch (error) {
          console.error("Error destroying Locomotive Scroll:", error)
        }
      }
    }
  }, [])
  
  // Update locomotive scroll when route changes
  useEffect(() => {
    if (locomotiveScrollInstance) {
      // Small timeout to ensure DOM is updated
      setTimeout(() => {
        try {
          // Check if update method exists before calling it
          if (typeof locomotiveScrollInstance.update === 'function') {
            locomotiveScrollInstance.update()
          }
        } catch (error) {
          console.error("Error updating Locomotive Scroll:", error)
        }
      }, 300)
    }
  }, [location, locomotiveScrollInstance])

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')
  
  return (
    <div className="bg-white text-black" data-scroll-container>
      <Cursor cursorVariant={cursorVariant} />
      <Navbar onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
          <Route path="/about" element={<AboutPage onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
          <Route path="/services" element={<ServicesPage onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
          <Route path="/contact" element={<ContactPage onMouseEnter={textEnter} onMouseLeave={textLeave} />} />
        </Routes>
      </AnimatePresence>
      <Footer onMouseEnter={textEnter} onMouseLeave={textLeave} />
    </div>
  )
}

export default App